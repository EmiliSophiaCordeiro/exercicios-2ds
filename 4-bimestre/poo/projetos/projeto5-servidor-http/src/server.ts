
import { createServer } from "http"

const port = process.env.PORT || 3000
const nome = "Maria Lauriene"
const idade = 22  


const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`Servidor rodando para ${nome}, idade ${idade}!`);
})

server.listen(port, () => {
  console.log(`Servidor funcionando em http://localhost:${port}`);
})

server.close(() => {
  console.log("Servidor encerrado.")
})

export default server
