import { describe, expect, jest } from "@jest/globals";
import Editora from "../../models/editora.js";

describe("Testando modelo Editora", () => {
  const editora = {
    nome: "Editora Teste",
    cidade: "Cidade Teste",
    email: "teste@teste.com",
  };

  it("Deve criar um objeto Editora", () => {
    const novaEditora = new Editora(editora);
    expect(novaEditora).toEqual(expect.objectContaining(editora));
  });

  it.skip("Deve salvar Editora no BD", () => {
    const novaEditora = new Editora(editora);
    novaEditora.salvar().then((editoraSalva) => {
      expect(editoraSalva).toEqual(expect.objectContaining(editora));
    });
  });

  it.skip("Deve salvar no BD", async () => {
    const novaEditora = new Editora(editora);
    const editoraSalva = await novaEditora.salvar();
    const retornado = await Editora.pegarPeloId(editoraSalva.id);
    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
  it("Deve simular uma chamada ao BD", async () => {
    const novaEditora = new Editora(editora);
    novaEditora.salvar = jest.fn().mockReturnValue({
      id: 4,
      nome: "Editora Teste",
      cidade: "Cidade Teste",
      email: "teste@teste.com",
      created_at: "2022-07-01 19:49:06",
      updated_at: "2022-07-01 19:49:06",
    });
    const retorno = novaEditora.salvar();
    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...editora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
