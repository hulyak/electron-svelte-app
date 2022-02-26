const { contextBridge, ipcRenderer } = require("electron");
const { cpus, totalmem } = require("os");

const API = {
  // cpus: cpus(),
  // getMemory: () => totalmem(),
  sendMessage: (msg) => ipcRenderer.send("message", msg),

  onCount: (callback) =>
    ipcRenderer.on("count", (event, args) => callback(event, args)),

  //
  sendPromise: (msg) => ipcRenderer.invoke("promise", msg),
};

contextBridge.exposeInMainWorld("api", API);
