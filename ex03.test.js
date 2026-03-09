import * as vi from "vitest"
import * as ex03 from './ex-03-variaveis-escopo.js'

vi.describe("Exercício 03", () => {

  const varNames = [
    "resposta01", "resposta02", "resposta03", "resposta04",
    "resposta05", "resposta06", "resposta07", "resposta08",
    "resposta09", "resposta10",
  ]

  const varValues = [
    true, false, false, true, true,
    false, false, false, false, true,
  ]

  varNames.map(function(name, i) {
    vi.it(`ex03 - Válida - Questão ${i+1}`, () => {
      vi.expect( ex03[name]).toBeTypeOf("boolean"),
      `Nome da variável incorreto`
    })
    vi.it(`ex03 - Correta - Questão ${i+1}`, () => {
      vi.expect( ex03[name] === varValues[i]),
      `Valor errado. O valor esperado era ${varValues[i]}, mas o enviado foi ${ex03[name]}`
    })
  })

})

