# Minérios 💎

Minérios são o **combustível do TotalAdventure**.

Eles alimentam a forja, movem a economia,
definem o risco da mineração
e representam o verdadeiro progresso do jogador.

Você não minera blocos.
Você minera **o que pode cair deles**.

---

## 🧠 O que é um minério

Um minério é um item obtido durante a mineração que possui:

- raridade
- peso
- valor econômico
- uso em forja
- impacto direto na progressão

Minérios:
- não aparecem diretamente no mundo
- são sorteados durante o dano ao bloco
- caem no chão quando obtidos

---

## 🎲 Sistema de sorteio (Roll)

Os minérios não são sorteados apenas ao quebrar o bloco.

Durante a mineração:
- o sistema tenta sortear minérios **enquanto o bloco perde vida**
- o sorteio acontece até um limite configurado

Configuração atual:

> **RollUntilHealth: 50%**

Isso significa:
- o sistema tenta sortear minérios até o bloco atingir **50% da vida**
- após esse ponto, nenhum novo minério pode ser obtido daquele bloco
- quebrar mais rápido reduz o número de tentativas

📌 Minerar mais rápido ≠ mais minérios  
Eficiência precisa ser equilibrada com oportunidade.

---

## 🍀 Chance e raridade

Cada minério possui uma chance base de aparecer.

- chances menores = minérios mais raros
- sorte da picareta influencia os resultados
- múltiplos hits geram múltiplas tentativas de roll

Raridade define:
- peso do minério
- valor de venda
- impacto na forja
- relevância econômica

---

## 🚨 Alertas de minérios lendários

Minérios extremamente raros podem disparar alertas globais.

Configuração atual:

- apenas minérios com chance **igual ou maior que 1/425**
- geram alerta no servidor ao serem obtidos

Isso cria:
- impacto social
- sensação de evento
- reconhecimento do risco assumido

Nem todo lendário é anunciado.
Só os realmente raros.

---

## 🧱 Minérios dependem do bloco

Minérios **não são universais**.

Cada minério:
- só pode aparecer em blocos específicos
- respeita regras de spawn rígidas
- não pode surgir fora do contexto correto

Isso força:
- exploração variada
- conhecimento do mundo
- escolha consciente de rotas

---

## 📊 Minérios registrados

### 🪨 Comuns

| Minério | Chance | Drops máx. | Blocos |
|------|--------|------------|--------|
| Fragmento de Pedra | 1/3 | 4 | Carvão, Ferro |
| Fragmento de Cobre | 1/4 | 3 | Carvão, Ferro, Cobre |
| Fragmento de Ferro | 1/5 | 2 | Ferro, Cobre |

---

### 💠 Raros

| Minério | Chance | Drops máx. | Blocos |
|------|--------|------------|--------|
| Núcleo de Ferro | 1/10 | 3 | Cobre, Ferro Profundo |
| Fragmento de Ouro | 1/14 | 2 | Cobre Profundo, Prismarine |
| Cristal de Quartzo Bruto | 1/16 | 2 | Prismarine, Ametista |
| Liga Metálica Bruta | 1/18 | 2 | Cobre, Prismarine |
| Núcleo de Redstone | 1/20 | 3 | Ferro Profundo, Sculk |
| Essência Geológica | 1/22 | 2 | Carvão Profundo, Cobre |

---

### 🔮 Épicos

| Minério | Chance | Drops máx. | Blocos |
|------|--------|------------|--------|
| Cristal Ametista Refinado | 1/55 | 2 | Ametista, Prismarine |
| Núcleo Energético | 1/65 | 1 | Obsidian, Prismarine |
| Essência Sombria | 1/85 | 1 | Sculk, Ferro Profundo |
| Núcleo Abissal | 1/80 | 1 | Sculk |
| Fragmento Prismático | 1/85 | 2 | Prismarine |

---

### 🌟 Lendários

| Minério | Chance | Drops máx. | Blocos |
|------|--------|------------|--------|
| Fragmento Ancestral | 1/425 | 1 | Ancient Debris |
| Essência do Mundo | 1/550 | 1 | Ancient Debris, Sculk |
| Fragmento do Vazio | 1/475 | 1 | Obsidian, Ancient Debris |

---

## 💰 Valor e destino dos minérios

Minérios podem ser:
- vendidos diretamente por moedas
- usados na forja
- combinados para gerar peso

Nem todo minério precisa virar item.
Às vezes, vender é a escolha inteligente.

---

## 🧠 Filosofia dos minérios

No TotalAdventure:
- minérios são oportunidade
- raridade cria tensão
- chance cria histórias
- conhecimento cria vantagem

Quem entende **onde minerar**
e **quando parar**
progride mais rápido do que quem só insiste.

---

## ➡️ Próximos passos

Agora que você entende os minérios, avance para:

➡️ **[Forja](../forging/overview.md)**  
➡️ **[Economia](../economy/overview.md)**  

Minérios são o início.
A decisão do que fazer com eles define tudo.
