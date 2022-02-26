const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");

app.whenReady().then(main);

function main() {
  const window = new BrowserWindow({
    width: 800,
    height: 700,
    show: false, // don't load the window
    autoHideMenuBar: true,
    // resizable: false,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
    },
  });

  window.loadFile(join(__dirname, "../public/index.html"));
  window.on("ready-to-show", window.show);

  let count = 0;

  setInterval(() => {
    window.webContents.send("count", count++);
  }, 1000);
}

// renderer message
ipcMain.on("message", (event, args) => console.log(args));

//handle - invoke from renderer
ipcMain.handle("promise", async (event, args) => {
  console.log(args);
  return process.getCPUUsage();
});
