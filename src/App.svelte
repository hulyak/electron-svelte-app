<script>
	let customMessage = "hello from the renderer process"
	let count = 0;
	
	window.api.onCount((data) => count = data);
	
	const sendMessage = () => {
		window.api.sendMessage(customMessage)
		customMessage = ""
	}
	
	const getUsage = async () => {
		const data = await window.api.sendPromise("hello this is a message")
		console.log(data)
	}
</script>

<main>
	<h1>Count: {count}</h1>
	<input type="text" bind:value={customMessage}>
	<button on:click={sendMessage}>Send Message</button>
	<button on:click={getUsage}>Get Usage</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>