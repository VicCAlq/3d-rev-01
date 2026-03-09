import * as vi from "vitest"
import * as ex02 from './ex-02-variaveis-tipos.js'

vi.describe("Exercício 02", () => {

  const varNames = [
    "musicaFavorita", "objetoQualquer", "valorIndefinido",
    "tartarugasVoamVerdadeOuNao", "noveDivididoPorTres",
    "papagaiosFalamVerdadeOuNao", "umaFuncao", "cemDivididoPorCinco",
    "nomeDaSuaEscola", "quinzeMaisCinco", "valorFalso",
    "dezMaisQuatro", "nomeDoSeuEstado", "artistaFavorito",
    "seteVezesSete", "umMaiorQueDoisVerdadeOuNao", "comidaFavorita",
    "oCeuEhAzulVerdadeOuNao", "objetoNulo", "valorVerdadeiro",
  ]

  const varTypes = [
    "string", "object", "undefined", "boolean", "number",
    "boolean", "function", "number", "string", "number",
    "boolean", "number", "string", "string", "number",
    "boolean", "string", "boolean", "object", "boolean"
  ]

  varNames.map(function(name, i) {
    vi.it(`Ex02 - Válida - Questão ${i+1}`, () => { 
      vi.expect( ex02[name]).toBeTypeOf(varTypes[i]),
      `Nome da variável incorreto`
    })
    vi.it(`Ex02 - Correta - Questão ${i+1}`, () => {
      vi.expect( typeof(ex02[name]) === varTypes[i]),
      `Valor errado. O valor esperado era ${varTypes[i]}, mas o enviado foi ${ex02[name]}`
    })
  })

})

