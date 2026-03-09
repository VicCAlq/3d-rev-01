import * as vi from "vitest"
import * as ex05 from './ex-05-operadores-logicos.js'

vi.describe("Exercício 05", () => {

  const varNames = [
    "resposta01", "resposta02", "resposta03", "resposta04",
    "resposta05", "resposta06", "resposta07", "resposta08",
    "resposta09", "resposta10",
  ]

  varNames.map(function(name, i) {
    vi.it(`ex05 - Válida - Questão ${i+1}`, () => { 
      vi.expect( ex05[name]).toBeTypeOf("boolean"), "Nome da variável incorreto"
    })
    vi.it(`ex05 - Correta - Questão ${i+1}`, () => {
      vi.expect(ex05[name]).toBe(true), 
      `Valor errado. O valor esperado era ${true}, mas o enviado foi ${ex05[name]}`
    })
  })

})


