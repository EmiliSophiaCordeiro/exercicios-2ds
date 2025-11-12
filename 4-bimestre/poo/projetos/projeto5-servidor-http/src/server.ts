import http from "http"

const port = 3001
const name = "John"
const age = 34

const server = http.createServer((req, res) => {
  res.end(`Servidor rodando para ${name}, idade ${age}!`)
})

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

export default server
