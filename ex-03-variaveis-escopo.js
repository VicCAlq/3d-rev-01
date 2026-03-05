/*
Assunto 03 - Escopo de variáveis

Quaisquer valores nomeados que forem criados em um programa JavaScript existem em um 
determinado "escopo". Escopo é o termo que utulizamos para determinar a região 
do código onde um valor existe.

Exemplos de valores nomeados são: variáveis, funções, objetos, classes, etc. Qualquer 
coisa no código para o qual você dê um nome a sua escolha.

Coisas como "if", "else", "switch", "return" não são valores, são palavras da sintaxe
do JavaScript, e não coisas nomeadas por você.

Escopos são criados utilizando "chaves": { }
A chave de abertura "{" inicia o escopo
A chave de fechamento "}" encerra o escopo

Se um valor for criada dentro de um escopo, ele existe apenas até a chave 
de fechamento do escopo ao qual ele pertence. Exemplo:
{
  let bode = "Adalberto" <- "bode" é  criado aqui
} <- "bode" deixou de existir aqui 

Tentar utilizar um valor fora de escopo resulta em erro:
{
  let bode = "Adalberto" <- "bode" é  criado aqui
  console.log(bode) <- Isso funciona normal
} <- "bode" deixou de existir aqui 
console.log(bode) <- Isso vai dar erro

Escopos podem ter escopos internos. Não há um limite para isso.
Escopos internos podem acessar qualquer valor dos escopos externos a si.
Escopos externos NÃO podem acessar valores de escopos internos.
"Sempre podemos olhar de dentro pra fora, mas nunca de fora pra dentro".
Exemplo:
{
  const frutaFavorita = "Abacaxi"
  {
    const comidaFavorita = "Torta de limão"
    {
      const bebidaFavorita = "Suco de abacaxi"
      console.log(frutaFavorita) <- Funciona
      console.log(comidaFavorita) <- Funciona
      console.log(bebidaFavorita) <- Funciona
    }
    console.log(frutaFavorita) <- Funciona
    console.log(comidaFavorita) <- Funciona
    console.log(bebidaFavorita) <- Erro
  }
  console.log(frutaFavorita) <- Funciona
  console.log(comidaFavorita) <- Erro
  console.log(bebidaFavorita) <- Erro
}
console.log(frutaFavorita) <- Erro (frutaFavorita foi criada dentro de um escopo)
console.log(comidaFavorita) <- Erro
console.log(bebidaFavorita) <- Erro

Outra particularidade é que como um valor existe apenas dentro de seu 
próprio escopo, isso significa que em um escopo fora de onde o valor é acessível,
você pode utilizar o mesmo nome para um valor totalmente diferente:

{
  let helicoptero = "AAAAAHHHH"
}
{
  let helicoptero = "toc toc toc toc toc toc toc"
}

--------------------------------------------------------------------------------

Observe o código abaixo contendo diversas variáveis ditrubuídas 
entre diversos escopos para responder as questões no final:
*/

let l = console.log

{
  let jonathan = ""; l(jonathan)
  {
    let erina = ""; l(erina)
    let anasui = ""; l(anasui)
  }
  let smokey = ""; l(smokey)
}
{
  let bruno = ""; l(bruno)
  {
    let speedwagon = ""; l(speedwagon)
    {
      let hermes = ""; l(hermes)
      {
        let jolyne = ""; l(jolyne)
      }
    }
    let cesar = ""; l(cesar)
    {
      let bluford = ""; l(bluford)
      {
        let zeppeli = ""; l(zeppeli)
      }
      let mista = ""; l(mista)
      {
        let lisaLisa = ""; l(lisaLisa)
        {
          let giorno = ""; l(giorno)
        }
      }
      let emporio = ""; l(emporio)
    }
    let joseph = ""; l(joseph)
  }
  let wham = ""; l(wham)
  {
    let kars = ""; l(kars)
    {
      let polnareff = ""; l(polnareff)
      {
        let diegoBrando = ""; l(diegoBrando)
      }
    }
    let narancia = ""; l(narancia)
  }
  let iggy = ""; l(iggy)
}
{
  let jotaro = ""; l(jotaro)
  {
    let koichi = ""; l(koichi)
    {
      let josuke = ""; l(josuke)
    }
    let kira = ""; l(kira)
    {
      let kakyoin = ""; l(kakyoin)
    }
  }
  let avdol = ""; l(avdol)
}

/*
Agora responda as questões abaixo modificando o valor "undefined" para
"true" (sem as áspas) se a resposta for verdadeira, e 
"false" (também sem áspas) se a resposta for falsa. 

Dica: Ignore o que vem depois do "=". Apenas coloquei para
o código não ficar indicando que as variáveis não foram
utilizadas.

MÍNIMO DE RESPOSTAS NECESSÁRIAS: 4
*/

/* Questão 01: avdol enxerga jotaro?*/
export const resposta01 = undefined

/* Questão 02: kira enxerga kakyoin?*/
export const resposta02 = undefined

/* Questão 03: wham enxerga polnareff?*/
export const resposta03 = undefined

/* Questão 04: emporio enxerga bruno?*/
export const resposta04 = undefined

/* Questão 05: jolyne enxerga bruno?*/
export const resposta05 = undefined

/* Questão 06: speedwagon enxerga koichi?*/
export const resposta06 = undefined

/* Questão 07: kars enxerga joseph?*/
export const resposta07 = undefined

/* Questão 08: hermes enxerga smokey?*/
export const resposta08 = undefined

/* Questão 09: lisaLisa enxerga giorno?*/
export const resposta09 = undefined

/* Questão 10: giorno enxerga mista?*/
export const resposta10 = undefined
