# Jogo de Caça-Níqueis

Este projeto é um simples jogo de caça-níqueis implementado em JavaScript. Ele possui uma jogabilidade interativa, onde os usuários podem depositar dinheiro, fazer apostas em diferentes linhas e girar os rolos para ganhar com base nos símbolos correspondentes.

## Funcionalidades
- **Sistema de Depósito**: Jogadores podem depositar dinheiro para jogar.
- **Mecanismo de Aposta**: Jogadores podem apostar em 1 a 3 linhas.
- **Giros Aleatórios**: Simula os rolos de um caça-níqueis com símbolos de probabilidades variadas.
- **Cálculo de Ganhos**: Recompensa os jogadores com base nos símbolos correspondentes e nos valores das apostas.
- **Jogabilidade Interativa no Console**: Executado em um ambiente Node.js com o pacote `prompt-sync` para entrada do usuário.

## Requisitos
- [Node.js](https://nodejs.org/) instalado no seu sistema.
- Pacote `prompt-sync` para entrada de dados do usuário.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/Lucascfsb/Slot-Machine-JS
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd jogo-caca-niqueis
   ```
3. Instale as dependências:
   ```bash
   npm install prompt-sync
   ```

## Como Jogar
1. Execute o jogo:
   ```bash
   node project.js
   ```
2. Siga as instruções:
   - Deposite dinheiro.
   - Escolha o número de linhas para apostar.
   - Defina o valor da aposta por linha.
   - Gire os rolos e veja os resultados.
3. Se o seu saldo chegar a zero, você pode fazer um novo depósito para continuar jogando.

## Como Funciona
1. **Depositar Dinheiro**: Comece depositando um valor.
2. **Fazer Apostas**: Escolha quantas linhas apostar (1-3) e defina o valor da aposta por linha.
3. **Girar os Rolos**: Os símbolos são gerados aleatoriamente, e os ganhos são calculados com base nos símbolos correspondentes nas linhas selecionadas.
4. **Tabela de Pagamento**:
   - `A`: 5x sua aposta
   - `B`: 4x sua aposta
   - `C`: 3x sua aposta
   - `D`: 2x sua aposta

## Exemplo de Jogabilidade
```text
Digite o valor que deseja depositar: 100
Seu saldo atual é R$100
Digite o número de linhas que deseja apostar (1-3): 3
Digite o valor da aposta por linha: 10

A | B | C
B | B | B
D | A | A

Você ganhou R$20
Seu saldo atual é R$90
Deseja jogar novamente? (s/n): s
```

## Contribuições
Contribuições são bem-vindas! Se tiver sugestões ou melhorias, abra uma issue ou envie um pull request.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Divirta-se jogando!
