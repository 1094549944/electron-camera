/**
 * 模块管理
 * COMMONJS
 * ESM
 * 本项目使用COMMONJS
 */

const {BrowserWindow,app}= require('electron')
const path = require('path')



const createWindow=()=>{
    const mainWindow = new BrowserWindow({
        width:800, // 屏幕的款
        height:600, // 屏幕的高
        alwaysOnTop:true, // 一直置顶
        // x:200, // 默认窗口的位置
        // y:100,
        frame:true, //不显示electron 的tabbar 即隐藏标题栏
        transparent:true// 控制窗口为透明
    })
    mainWindow.setAspectRatio(1) // 控制拖放比例，保证窗口不变形
    // 加载一个网站
    mainWindow.loadURL('http://localhost:5174/')

  //  mainWindow.loadFile(path.resolve(__dirname,'index.html'))
    // 打开调试工具
   // mainWindow.webContents.openDevTools()
}


app.whenReady().then(()=>{
    console.log(process.platform)
    createWindow()
})
app.on('window-all-closed',()=>{
    // 判断使用环境
    /**
     * aix
     * darwin:苹果
     * freebsd:
     * linux：linux 系统
     * openbsd:
     * sunos:
     * win32：windows系统
     *  */ 
    if (process.platform !== "darwin") {
        app.quit()
      }
})
app.on('activate',()=>{
    createWindow()
})

