# 🚀 Exercícios JavaScript: Estruturas Avançadas, Funções, Arrays e Objetos

Este repositório contém **9 exercícios** divididos em 3 seções temáticas, desenvolvidos em **JavaScript** puro, com foco em:

- Estruturas de Controle Avançadas
- Funções e Recursão
- Manipulação de Arrays e Objetos

Ideal para praticar lógica, estruturas modernas e conceitos funcionais.

---

## 🧩 Seção 1: Estruturas de Controle Avançadas

### 1. `ehDataValida(dia, mes, ano)`
Verifica se uma data é real considerando:
- Dias válidos de cada mês
- Ano bissexto para fevereiro

### 2. Jogo de Adivinhação
Gera um número aleatório entre 1 e 100 e desafia o usuário a adivinhar com dicas:
- “Mais alto” ou “Mais baixo”
- Conta o número de tentativas

> Implementado com `readline` para compatibilidade com Node.js.

### 3. Palavras Únicas
Recebe uma string (ex: `"olá olá mundo mundo"`) e retorna apenas as palavras que aparecem uma vez, usando `for` e `if/else`.

---

## 🧠 Seção 2: Funções e Recursão

### 4. `fatorial(n)`
Calcula o fatorial de forma **recursiva**:
- Lança erro para `n < 0`
- Retorna `1` para `n === 0`

### 5. `debounce(fn, delay)`
Cria uma função que executa `fn` somente se não for chamada novamente dentro do intervalo de tempo definido.

### 6. `memoize(fn)`
Retorna uma versão da função `fn` com **cache** de chamadas anteriores, melhorando performance para argumentos repetidos.

---

## 🧱 Seção 3: Arrays e Objetos Complexos

### 7. Produtos: Mapeamento e Ordenação
Recebe um array de produtos `[{ nome, preco }]` e retorna um novo array com **apenas os nomes ordenados por preço crescente**.

### 8. Agrupamento por Cliente
Recebe um array `[{ cliente, total }]` e gera um **objeto agrupado por cliente**, somando seus totais.

### 9. Conversão entre Formatos
Duas funções:
- `paresParaObjeto(pares)`: transforma array de pares `[ [chave, valor] ]` em objeto.
- `objetoParaPares(obj)`: transforma objeto em array de pares.

---

## ⚙️ Como Rodar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
