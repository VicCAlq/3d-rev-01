import * as vi from "vitest"
import * as ex04 from './ex-04-operadores-aritimeticos.js'

vi.describe("Exercício 04", () => {

  /*
  trintaENove = 44 - 10 + 5
  centoESessentaEUm = (13 ** 2) - 8
  trintaECinco = 7 * 5
  centoEVinteESeis = (22 * 6) - (24 / 4)
  oitentaEQuatro = (200 / 4) + 34
  sessentaEQuatro = 2 ** (2 * 3)
  vinteETres = 18 + (33 % 7)
  dezenove = 38 / 2
  centoETrinta = (41 * 3) + (21 / 3)
  quinze = 30 / 3 + 5
  quarentaETres = 86 / (12 % 5)
  trinta = 6 * 5
  sessentaETres = (125 / 5) + 38
  vinteEDois = 11 * 2
  quarentaEOito = (2 ** 3) * 6
  trintaETres = 66 / 2
  quarentaECinco = (3 ** 2) * 5
  oitentaENove = (9 * 10) - (5 / 5)
  quarentaESeis = 23 * (7 % 5)
  centoEOitentaEQuatro = 23 * (2 * 4)
  */

  const varNames = [
    "trintaENove", "centoESessentaEUm", "trintaECinco", "centoEVinteESeis",
    "oitentaEQuatro", "sessentaEQuatro", "vinteETres", "dezenove",
    "centoETrinta", "quinze", "quarentaETres", "trinta",
    "sessentaETres", "vinteEDois", "quarentaEOito", "trintaETres",
    "quarentaECinco", "oitentaENove", "quarentaESeis", "centoEOitentaEQuatro",
  ]

  const varValues = [
    39, 161, 35, 126, 84, 64, 23, 19, 130, 15,
    43, 30, 63, 22, 48, 33, 45, 89, 46, 184
  ]

  varNames.map(function(name, i) {
    vi.it(`ex04 - Válida - Questão ${i+1}`, () => { 
      vi.expect( ex04[name]).toBeTypeOf("number"), "Nome da variável incorreto"
    })
    vi.it(`ex04 - Correta - Questão ${i+1}`, () => {
      vi.expect( ex04[name] === varValues[i]), 
      `Valor errado. O valor esperado era ${varValues[i]}, mas o enviado foi ${ex04[name]}`
    })
  })

})

