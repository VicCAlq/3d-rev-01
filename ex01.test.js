import * as vi from "vitest"
import * as ex01 from './ex-01-variaveis-nomes.js'

vi.describe("Exercício 01", () => {

  const varNames = [
    "funcaoImportante", "ClientesDoSalao", "proximaEtapa", "dataEHorario",
    "videoAula", "arquivoPrincipal", "ComodosDaCasa", "quatroRodas",
    "cincoPowerRangers", "puroAco", "cemReaisEmBarrasDeOuro", "paginaInicial",
    "cincoPatinhosForamPassear", "UmBesouro", "RoupasJuninas", "calculosMatematicos",
    "camaMesaEBanho", "precoDoProduto", "codigoFonte", "CaboFrio",
  ]

  const varTypes = [
    "boolean", "function", "boolean", "boolean",
    "boolean", "boolean", "function", "boolean",
    "boolean", "boolean", "boolean", "boolean",
    "boolean", "function", "function", "boolean",
    "boolean", "boolean", "boolean", "function",
  ]

  varNames.map(function(name, i) {
    vi.it(`Ex01 - Válida - Questão ${i+1}`, () => {
      vi.expect( ex01[name]).toBeTypeOf(varTypes[i]),
      `Variável não encontrada`
    })
    vi.it(`Ex01 - Correta - Questão ${i+1}`, () => {
      vi.expect( ex01[name]).toBeTypeOf(varTypes[i]),
      `Nome incorreto`
    })
  })

})

