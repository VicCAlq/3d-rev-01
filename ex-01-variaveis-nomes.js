/*
Assunto 01 - Nomeação de variáveis

Variáveis em JavaScript podem ser de três tipos:
1. Variáveis que podem ter seu valor modificado. São criadas com o comando "let"
2. Variáveis que o valor não muda depois de criadas, também chamadas de 
   "constantes". São criadas com o comando "const"
3. Variáveis que podem ter seu valor modificado mas tem escopo global. São 
   criadas com o comando "var"

Por questões de boas práticas, utilizamos apenas "let" e "const" para criar variáveis.
Variáveis criadas com "var" são muitas vezes fonte de bugs, por isso evitaremos.

As regras para nomeação de variáveis são:
01. São permitidos apenas os caracteres e símbolos abaixo:
    - Letras maiúsculas e minúsculas
    - Números
    - Os símbolos $ e _ (cifrão e sublinhado)
02. Nomes de variáveis não podem começar com um número
03. Nomes de variáveis e funções devem começar com letra minúscula
04. JavaScript, como a maior parte das linguagens de programação, diferencia
    letras maiúsculas de minúsculas, então as variáveis:
    - let Nome
    - let nome
    - let NOME
    São diferentes entre si.
05. Se o nome da variável for um nome composto, o nome deve ser 
    escrito da seguinte forma:
    - Todas as palavras devem ser escritas juntas
    - A primeira palavra começa com letra minúscula
    - Todas as outras palavras começam com letra maiúscula 
    - Estas regras valem também para palavras com uma única letra.
    - O nome desta forma de nomeação é "camelCase" (capitalização de camêlo)
    - Exemplos: meuCadastro, notaMáxima, mingauEBidu, queijoEGoiabada
06. Nomes de classes (itens definidos com a palavra-chave "class") DEVEM 
    começar com letra maiúscula:
    - Exemplos: class MinhaClasse, class AlunoDoNave
    - O nome desta forma de nomeação é "PascalCase" (capitalização de Pascal)
    - Pascal é o nome de uma linguagem de programação que usa 
      essa forma de nomeação
07. Nomes compostos não podem ser separados por hífen (sinal de menos)
08. Nomes totalmente em maiúscula são usados apenas em contextos especiais, 
    como para representar um número como Pi: "const PI = 3.141592" 
    ou "const E = 2.71"
09. Palavras que já são parte da sintaxe do JavaScript não podem ser utilizados 
    como nomes de variáveis, exemplo: "let else" <- Errado, else já é uma 
    palavra da sintaxe "if { } else { }"
10. O sublinhado (_) é usado apenas em situações especiais:
    - Para parâmetros em funções que devem ser ignorados, ou
    - No início do nome de uma variável para indicar que ela é "oculta"
11. Cifrão ($) é usado apenas em situações especiais:
    - No começo do nome de uma variável quando utilizamos algumas
      bibliotecas específicas como JQuery

------------------------------------------------------------------------------

Questões 01 a 10: Corrija os nomes das variáveis abaixo de modo que passem
                  a obedecer as regras de nomeação de variáveis em JavaScript:

Detalhes:
1. Você DEVE mantêr a palavra "export"
2. As palavras "let", "const" e "class" NÃO devem ser removidas ou modificadas
3. Você deve modificar APENAS o nome da variável
4. O valor da variável (o que vem depois do =) DEVE ser mantido do jeito que está
5. Assuma que nenhuma das variáveis abaixo deve ser oculta

MÍNIMO DE RESPOSTAS NECESSÁRIAS: 8
*/

/* Questão 01 */
export let funcaoImportante = true

/* Questão 02 */
export class ClientesDoSalao {}

/* Questão 03 */
export let proximaEtapa = true

/* Questão 04 */
export const dataEHorario = true

/* Questão 05 */
export const videoAula = true

/* Questão 06 */
export let arquivoPrincipal = true

/* Questão 07 */
export class ComodosDaCasa {}

/* Questão 08 */
export let quatroRodas = true

/* Questão 09 */
export let cincoPowerRangers = true

/* Questão 10 */
export let puroAço = true

/* Questão 11 */
export const cemReaisEmBarrasDeOuro = true

/* Questão 12 */
export const paginaInicial = true

/* Questão 13 */
export let cincoPatinhosForamPassear = true

/* Questão 14 */
export class UmBesouro {}

/* Questão 15 */
export class RoupasJuninas {}

/* Questão 16 */
export let calculosMatematicos = true

/* Questão 17 */
export const camaMesaEBanho = true

/* Questão 18 */
export let precoDoProduto = true

/* Questão 19 */
export const codigoFonte = true

/* Questão 20 */
export class CaboFrio {}

