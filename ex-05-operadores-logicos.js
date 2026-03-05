/*
Assunto 05 - Operadores Lógicos

Para realizarmos verificações lógicas em JavaScript, utilizamos os "operadores lógicos".
Antes de vermos quais são, eelembre abaixo as definições de "operador" e "operando":

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

No caso dos operadores lógicos, estes realizam comparações entre os operandos e retornam
um resultado no formato de um valor booleano: 
- true para quando a comparação retorna um resultado verdadeiro
- false para quando a comparação retorna um resultado falso

Exemplos:

Igualdade simples:   1 == "1"(true)
Igualdade estrita:   1 === "1"(false)
Diferença simples:   1 != "1"(false)
Diferença estrita:   1 !== "1"(true)

Maior que:           2 > 1(true)
Maior ou igual a:    1 >= 1(true)
Menor que:           3 < 2(false)
Menor ou igual a:    5 <= 9(true)

Negação:             !true === false (não verdade é o mesmo que falso)
                     !false === true (não falso é o mesmo que verdade)
É possível negar uma negação:
                     !!false === false (não não falso é o mesmo que falso)
                     !!true === true (não não verdadeiro é o mesmo que verdadeiro)

Verdadeiro OU Verdadeiro:   true || true (true)
Verdadeiro OU Falso:        true || false (true)
Falso OU Falso:             false || false  (false)
Verdadeiro E Verdadeiro:    true && true (true)
Verdadeiro E Falso:         true && false (false)
Falso E Falso:              false && false (false)

--------------------------------------------------------------------------

Modifique os "??" abaixo com os operadores lógicos adequados
de modo que a resposta final seja SEMPRE true

MÍNIMO DE RESPOSTAS NECESSÁRIAS: 4
*/

/* Questão 01 */
export const resposta01 = 14 / 2 ?? 3

/* Questão 02 */
export const resposta02 = "Abacate" ?? "Abacate"

/* Questão 03 */
export const resposta03 = 123 ?? "123"

/* Questão 04 */
export const resposta04 = 70 ?? 80

/* Questão 05 */
export const resposta05 = null ?? null

/* Questão 06 */
export const resposta06 = 456 ?? undefined

/* Questão 07 */
export const resposta07 = false ?? true ?? true

/* Questão 08 */
export const resposta08 = 20 ?? 20

/* Questão 09 */
export const resposta09 = "fido" ?? "snoopy"

/* Questão 10 */
export const resposta10 = false ?? true
