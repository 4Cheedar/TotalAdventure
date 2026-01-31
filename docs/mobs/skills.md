# Skills de Mobs ✨

Skills transformam mobs em **ameaças ativas**.

Elas quebram padrões,
punem repetição
e forçam o jogador a reagir,
não apenas calcular dano.

Se um mob tem skill,
ele não luta sozinho.
Ele executa um plano.

---

## 🧠 O que são skills

Skills são **habilidades configuráveis**
que mobs podem usar durante o combate.

Elas podem:
- causar dano
- aplicar efeitos
- alterar comportamento
- executar comandos
- reagir a eventos específicos

Uma skill não é bônus.
É **decisão automática do inimigo**.

---

## ⚙️ Como skills funcionam

Cada skill define:

- **quando** é ativada (trigger)
- **como** é executada (type)
- **com que frequência** (cooldown)
- **com qual chance** (chance)
- **em quem** (target)
- **com quais parâmetros** (parameters)

Isso permite criar:
- mobs previsíveis
- mobs caóticos
- mobs punitivos
- mobs estratégicos

---

## ⏱️ Triggers (gatilhos)

Triggers definem **o momento da ativação**.

Triggers comuns:
- **ON_SPAWN** → ao nascer
- **ON_ATTACK** → ao atacar
- **ON_DAMAGE** → ao receber dano
- **ON_DEATH** → ao morrer
- **ON_TICK** → verificação periódica

O combate não é linear.
Eventos importam.

---

## 🧩 Tipos de skill

O tipo define **o que a skill faz**.

### 🧪 potion
- aplica efeitos de poção
- buffs ou debuffs
- controle indireto

---

### 💥 damage
- causa dano direto
- ignora ou respeita defesa
- pode escalar com level

---

### 📜 command
- executa comandos
- permite integração com outros sistemas
- cria efeitos globais

---

### 🤖 behavior
- lógica personalizada
- movimentos especiais
- saltos, investidas, padrões únicos

Behavior é onde surgem
os mobs realmente perigosos.

---

## 🎯 Chance e cooldown

Skills podem ter:

- **chance de ativação**
  - fixa ou baseada em expressões
- **cooldown**
  - impede spam
  - cria janelas de oportunidade

Exemplo conceitual:
- skill forte
- chance baixa
- cooldown alto

O jogador aprende a **esperar o erro do mob**.

---

## 📈 Skills que escalam

Muitas skills usam o **level do mob**.

Isso permite:
- mesma skill em vários estágios
- progressão natural de dificuldade
- reaproveitamento inteligente

Uma skill simples no level 5
vira ameaça real no level 30.

---

## 🎯 Alvos (target)

Skills podem escolher alvos diferentes:

- o próprio mob
- jogador mais próximo
- todos em um raio
- quem causou o último dano

Target errado = skill inútil.  
Target certo = caos.

---

## 🧠 Skills passivas e ativas

### 🔁 Passivas
- sempre ativas
- efeitos contínuos
- auras, resistências, reflexos

Punem aproximação descuidada.

---

### ⚡ Ativas
- ativadas por trigger
- têm cooldown
- geram picos de perigo

Criam momentos de tensão.

---

## ⚠️ O que isso significa para o jogador

- observar animações importa
- repetir padrão é perigoso
- distância nem sempre é segura
- agressividade pode ser punida
- recuar faz parte da luta

Se um mob “do nada” te matou,
provavelmente ele **não fez isso do nada**.

---

## 🧠 Filosofia das skills

No TotalAdventure:
- mobs reagem
- combate é dinâmico
- dificuldade é legível
- erro ensina

Skills existem para quebrar o piloto automático.

Quem aprende a ler mobs,
para de morrer para eles.
