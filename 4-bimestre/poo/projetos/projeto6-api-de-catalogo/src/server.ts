import express from "express"
import helmet from "helmet"
import router from "./routes"

const server = express()

server.use(helmet())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static("public"))

server.use("/", router)

const PORT = 3000

const app = server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`)
});



export default server
