# NPCs e Comércio 🧑‍🌾

NPCs são o ponto de contato entre o jogador e a economia.

Eles compram,
vendem,
executam contratos
e definem **quanto seu esforço realmente vale**.

Escolher o NPC certo importa tanto quanto conseguir o item.

---

## 🧠 O papel dos NPCs

NPCs existem para:
- transformar itens em dinheiro
- guiar progressão (picaretas)
- aplicar reputação
- criar identidade regional
- oferecer decisões econômicas reais

Eles não são genéricos.
Cada NPC tem propósito.

---

## 🛒 Tipos de NPCs

Existem três tipos principais de NPCs econômicos.

---

## 🟡 NPCs de Venda (SELL)

NPCs do tipo **SELL** compram itens do jogador.

Eles utilizam **shops**, que definem o que é aceito.

### 📦 Tipos de shop

- **sell_ores**
  - compra apenas minérios
- **sell_gear**
  - compra armas e armaduras
- **sell_all**
  - compra minérios + equipamentos

Se o item não pertence ao shop,
ele não será comprado.

---

### 💰 Preço e modificadores

NPCs SELL podem possuir:

- **modifier**
  - multiplica o valor final
  - ex: `1.35` → +35% no pagamento

NPCs mais isolados ou perigosos:
- pagam melhor
- exigem deslocamento
- aumentam o risco

Lucro sempre cobra pedágio.

---

### ⭐ Reputação

Alguns NPCs usam reputação:

- vender itens gera reputação
- reputação aumenta o valor recebido
- bônus percentual progressivo
- limite máximo de bônus

Outros NPCs:
- ignoram reputação
- pagam bem desde o início
- não recompensam fidelidade

Confiança local é um ativo.

---

## ⛏️ NPCs de Picareta (BUY_PICKAXE)

NPCs do tipo **BUY_PICKAXE** vendem **uma picareta específica**.

Características:
- preço fixo
- não negociável
- compra única
- representa salto de progressão

Picaretas:
- não podem ser forjadas
- não podem ser trocadas
- definem até onde o jogador pode minerar

Esses NPCs são **marcos econômicos**,
não vendedores comuns.

---

## 📜 NPCs de Execução (EXEC_COMMAND)

NPCs do tipo **EXEC_COMMAND** executam comandos do servidor.

Eles podem:
- custar dinheiro
- ser uso único ou múltiplo
- conceder permissões
- desbloquear sistemas

Exemplos de uso:
- licenças
- contratos
- acesso a mecânicas futuras
- progressão indireta

Dinheiro também compra **possibilidade**.

---

## 🏷️ Identidade dos NPCs

Cada NPC possui:
- nome próprio
- título ou subtítulo
- ícone visual
- comportamento econômico específico

Isso cria:
- personalidade
- reconhecimento
- decisão consciente de venda

Você não vende “para o sistema”.
Você vende **para alguém**.

---

## 🧭 NPCs e economia regional

NPCs estão ligados a regiões.

Isso significa:
- preços diferentes por vila
- reputação separada
- rotas de comércio
- especialização local

Às vezes, o melhor negócio:
- não é o mais próximo
- não é o mais seguro
- é o mais distante

---

## ⚠️ Decisões importantes

Antes de vender, pense:

- esse NPC aceita reputação?
- vale a pena ir mais longe?
- preciso do dinheiro agora?
- essa vila paga melhor?
- esse item vale mais forjado?

Vender é uma escolha estratégica,
não reflexo automático.

---

## 🧠 Filosofia dos NPCs

No TotalAdventure:
- NPCs definem valor
- economia é local
- risco aumenta lucro
- confiança é construída
- atalhos cobram preço

Quem entende os NPCs
para de jogar no piloto automático.

---

## ➡️ Próximos passos

Para fechar o sistema econômico:

➡️ **[Reputação](reputation.md)**  

NPCs movem dinheiro.
Reputação decide **quanto ele vale**.
