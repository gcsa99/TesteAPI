import { afterEach, beforeEach, describe, jest } from "@jest/globals";
import app from "../../app.js";
import request from "supertest";
let server;
beforeEach(() => {
  const port = 3001;
  server = app.listen(port);
});
afterEach(() => {
  server.close();
});

describe("GET em Editoras", () => {
  it("Dve retornar uma lista de Editoras", async () => {
    const resposta = await request(app)
      .get("/editoras")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/) //usa regex para verificar se o content-type é json
      .expect(200);
    expect(resposta.body[0].email).toEqual("e@e.com");
  });
});
let idResposta;
describe("POST em Editoras", () => {
  it("Deve criar uma nova Editora", async () => {
    const resposta = await request(app)
      .post("/editoras")
      .send({
        nome: "Editora Teste",
        email: "email@teste.com",
        cidade: "Cidade Teste",
      })
      .expect(201);
    idResposta = resposta.body.content.id;
  });
  it("Não deve adicionar quando o body está vazio", async () => {
    await request(app).post("/editoras").send({}).expect(400);
  });
});

describe("GET em Editoras/id", () => {
  it("Retornar o recurso criado", async () => {
    await request(app).get(`/editoras/${idResposta}`).expect(200);
  });
});

describe("PUT em Editoras", () => {
  it.each([
    //testa cada um dos objetos
    ["nome", { nome: "Editora Alterada" }],
    ["email", { email: "emailAlterado@teste.com" }],
    ["cidade", { cidade: "Cidade Alterada" }],
  ])("Deve alterar o campo %s", async (chave, param) => {
    //usa o %s para substituir pela chave da tabela
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, "request"); // cria um espião que permite verificar informações mais detalhadas sobre a chamada
    await requisicao
      .request(app)
      .put(`/editoras/${idResposta}`)
      .send(param)
      .expect(204);
    expect(spy).toHaveBeenCalled();
  });
});

describe("DELETE em Editoras", () => {
  it("Deletar o recurso criado", async () => {
    await request(app).delete(`/editoras/${idResposta}`).expect(200);
  });
});
