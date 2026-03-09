/*
Assunto 04 - Operadores Aritméticos

Para entendermos operadores, precisamos primeiro entender os "tipos"
de operadores:

1. "Operador": São os símbolos que realizam uma operação (no caso de operadores
               aritméticos) ou uma comparação (no caso de operadores lógicos).
               Os símbolos + - * / % e ** são os principais operadores aritméticos,
               enquanto que os símbolos == === != !== > < >= <= são Operadores
               lógicos. O sinal de = (sem repetição) também é um operador, chamado
               de operador de atribuição (ele armazena um valor em uma variável).
2. "Operando": É o valor no qual um "operador" atua. Pode ser dos tipos:
    - "Unário": Quando se trada de apenas um valor (exemplo: -2 aplica o operador de 
               "subtração" ao operando "2") 
    - "Binário": Quando o operando possui dois valores (exemplo: 4 * 8 aplica o operador
                 de "multiplicação" aos operandos "4" e "8")

E quais são nossos operadores?
1. Adição (+): Retorna o resultado da adição entre dois números
2. Subtração (-): Pode tanto subtrair um número de outro, quanto converter um número 
                  positivo para negativo (-2) quanto um número negativo para positivo (-(-2))
3. Multiplicação (*): Retorna o resultado da multiplicação dois números
4. Divisão (/): Retorna o resultado da divisão dois números
5. Módulo ou Restante (%): Retorna o restante do resultado da divisão entre dois 
                           números (exemplo: 5 % 2 retorna 1)
6. Exponenciação (**): Retorna o resultado da operação de elevar o primeiro número
                       a potência do segundo (2 ** 3 retorna 8)

----------------------------------------------------------------------------------

Nas questões abaixo, substitua os "??" pela operação aritimética
necessária para que o resultado da equação seja igual ao número
nomeado na variável.

MÍNIMO DE RESPOSTAS NECESSÁRIAS: 8
*/

/* Questão 01 */
export const trintaENove = 44 - 10 + 5

/* Questão 02 */
export const centoESessentaEUm = (13 ?? 2) ?? 8

/* Questão 03 */
export const trintaECinco = 7 ?? 5

/* Questão 04 */
export const centoEVinteESeis = (22 ?? 6) ?? (24 ?? 4)

/* Questão 05 */
export const oitentaEQuatro = (200 ?? 4) ?? 34

/* Questão 06 */
export const sessentaEQuatro = 2 ?? (2 ?? 3)

/* Questão 07 */
export const vinteETres = 18 ?? (33 ?? 7)

/* Questão 08 */
export const dezenove = 38 ?? 2

/* Questão 09 */
export const centoETrinta = (41 ?? 3) ?? (21 ?? 3)

/* Questão 10 */
export const quinze = 30 ?? 3 ?? 5

/* Questão 11 */
export const quarentaETres = 86 ?? (12 ?? 5)

/* Questão 12 */
export const trinta = 6 ?? 5

/* Questão 13 */
export const sessentaETres = (125 ?? 5) ?? 38

/* Questão 14 */
export const vinteEDois = 11 ?? 2

/* Questão 15 */
export const quarentaEOito = (2 ?? 3) ?? 6

/* Questão 16 */
export const trintaETres = 66 ?? 2

/* Questão 17 */
export const quarentaECinco = (3 ?? 2) ?? 5

/* Questão 18 */
export const oitentaENove = (9 ?? 10) ?? (5 ?? 5)

/* Questão 19 */
export const quarentaESeis = 23 ?? (7 ?? 5)

/* Questão 20 */
export const centoEOitentaEQuatro = 23 ?? (2 ?? 4)
