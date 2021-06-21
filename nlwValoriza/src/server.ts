import express, { response } from "express";

const app = express();

// definindo a 1 rota
app.get("/test", (request, response) => {
  response.send("Olá Nlw");
});

app.post("/test-post", (request, response) => {
  response.send("Olá NLW método POST");
})


// http://localhost:3000
app.listen(3000, () => console.log("Server is running!"));