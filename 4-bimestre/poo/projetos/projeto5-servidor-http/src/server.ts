import http from "http"
import dotenv from "dotenv"

dotenv.config()

const PORT = 3000
const NAME = process.env.NAME || "Desenvolvedor"
const AGE = process.env.AGE || "0"

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
  res.end(`Servidor rodando para ${NAME}, idade ${AGE}!`)
})

server.listen(PORT, () => {
  console.log("Servidor funcionando em http://localhost:3000")
})

if (process.env.NODE_ENV === "test") {
  server.close(() => {
    console.log("Servidor encerrado.")
  })
}

export default server
