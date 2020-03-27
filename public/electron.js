const { app, BrowserWindow, Tray, Menu } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');
const { menubar } = require('menubar');
const index = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`

let mainWindow;


const mb = menubar({
  index,
  icon: './icon.png',
  preloadWindow: true
});


function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

mb.on('ready', () => {
  console.log('test')
});
// app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
