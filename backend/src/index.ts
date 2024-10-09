import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";


const wss = new WebSocketServer({port: 8080})

const gameManager = new GameManager();


wss.on("connection", function connection(ws){

    console.log("okay")
    gameManager.addUser(ws)
    console.log("okay okay")
    ws.on('disconnect', () => gameManager.removeUser(ws))

    
})