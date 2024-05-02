import express from "express"
import connectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectaNaDatabase();

conexao.on("error", (error)=>{
    console.error("Erro de conexão: ", error)
})

conexao.once("open", ()=>{
    console.log("Conexão feita com sucesso")
})

const app = express();
routes(app)

export default app;