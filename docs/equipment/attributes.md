<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Atributos | TotalAdventure</title>

  <link rel="stylesheet" href="../assets/css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
</head>

<body>

<!-- HERO -->
<div class="hero">
  <div class="hero-content">
    <div class="hero-title">ATRIBUTOS</div>
    <div class="hero-subtitle">
      Identidade nasce no risco
    </div>
    <div class="hero-meta">
      Aleatoriedade • Escalonamento • Escolha
    </div>
  </div>
</div>

<div class="layout">

<!-- SIDEBAR -->
<aside class="sidebar">
  <h3>Atributos</h3>
  <ul>
    <li><a href="#como-funcionam">🧠 Funcionamento</a></li>
    <li><a href="#tiers">🪜 Tiers</a></li>
    <li><a href="#base">🟦 BASE</a></li>
    <li><a href="#rare">🟨 RARE</a></li>
    <li><a href="#epic">🟥 EPIC</a></li>
    <li><a href="#mecanicas">⚙️ Mecânicas</a></li>
  </ul>
</aside>

<main>

<h2>🧬 Atributos</h2>

<p>
Atributos são o que transformam um item em algo único.
</p>

<p>
Eles são aplicados <strong>apenas no caldeirão</strong><br>
e definem como um equipamento se comporta em combate,
exploração e sobrevivência.
</p>

<div class="lore-quote">
Nenhum atributo é garantido.<br>
Nenhuma combinação é repetível.
</div>

<div class="ritual-divider">🧠</div>

<h2 id="como-funcionam">🧠 Como os atributos funcionam</h2>

<p>Cada atributo possui:</p>

<ul>
  <li>um <strong>tier</strong> (BASE, RARE ou EPIC)</li>
  <li>um <strong>tipo de item</strong> onde pode aparecer</li>
  <li>um valor mínimo e máximo</li>
  <li>a possibilidade de <strong>escalar com raridade</strong></li>
</ul>

<p>Os atributos são:</p>

<ul>
  <li>sorteados aleatoriamente</li>
  <li>limitados pelo template do item</li>
  <li>aplicados apenas se o caldeirão tiver sucesso</li>
</ul>

<div class="ritual-divider">🪜</div>

<h2 id="tiers">🪜 Tiers de atributos</h2>

<p>
Os atributos são organizados em três estágios claros de impacto.
</p>

<h3>🟦 BASE — Fundamentais</h3>

<p>
Sempre relevantes.<br>
Formam a base do item.
</p>

<h3>🟨 RARE — Definem o estilo</h3>

<p>
Não são obrigatórios, mas mudam como você joga.
</p>

<h3>🟥 EPIC — Mecânicas</h3>

<p>
Criam efeitos reais de combate, risco e controle.
</p>

<div class="lore-quote">
Quanto mais alto o tier do atributo,<br>
mais impacto ele tem no jogo.
</div>

<div class="ritual-divider">🟦</div>

<h2 id="base">🟦 BASE — Atributos Fundamentais</h2>

<h3>⚔️ DAMAGE (Armas)</h3>

<ul>
  <li>Adiciona dano fixo ao ataque</li>
  <li>Não escala com raridade</li>
  <li>Define o poder bruto da arma</li>
</ul>

<p>
Usado como base para todos os cálculos ofensivos.
</p>

<hr>

<h3>🛡️ DEFENSE (Armaduras)</h3>

<ul>
  <li>Defesa fixa do item</li>
  <li>Base para sistemas futuros</li>
  <li>Não reduz dano diretamente no momento</li>
</ul>

<p>
Representa resistência estrutural.
</p>

<hr>

<h3>🪖 ARMOR (Armaduras)</h3>

<ul>
  <li>Valor fixo de armadura</li>
  <li>Atua como base para mitigação</li>
  <li>Não escala com raridade</li>
</ul>

<div class="lore-quote">
Armadura não é invencibilidade.<br>
É amortecimento.
</div>

<div class="ritual-divider">🟨</div>

<h2 id="rare">🟨 RARE — Atributos de Estilo</h2>

<p>
Esses atributos começam a <strong>moldar o tipo de build</strong>.
</p>

<h3>❤️ MAX_HEALTH (Armaduras)</h3>

<ul>
  <li>Aumenta a vida máxima</li>
  <li>Escala com raridade</li>
  <li>Ideal para builds resistentes</li>
</ul>

<p>
Mais vida = mais margem para erro.
</p>

<hr>

<h3>🏃 MOVEMENT_SPEED (Armaduras)</h3>

<ul>
  <li>Aumenta a velocidade de movimento</li>
  <li>Valor percentual</li>
  <li>Escala com raridade</li>
</ul>

<p>
Mobilidade é sobrevivência.
</p>

<hr>

<h3>⚡ ATTACK_SPEED (Armas)</h3>

<ul>
  <li>Aumenta a velocidade de ataque</li>
  <li>Valor percentual</li>
  <li>Escala com raridade</li>
</ul>

<p>
Ataques mais rápidos aumentam DPS,<br>
mas exigem controle.
</p>

<hr>

<h3>🦘 JUMP_BOOST (Armaduras)</h3>

<ul>
  <li>Concede níveis extras de pulo</li>
  <li>Valor fixo</li>
  <li>Não escala</li>
</ul>

<p>
Útil para mobilidade vertical e evasão.
</p>

<div class="ritual-divider">🟥</div>

<h2 id="epic">🟥 EPIC — Mecânicas de Alto Impacto</h2>

<p>
Esses atributos <strong>mudam o combate</strong>.
</p>

<h3>🛡️ DAMAGE_REDUCTION (Armaduras)</h3>

<ul>
  <li>Redução percentual do dano recebido</li>
  <li>Não escala</li>
  <li>Sempre deixa um mínimo de dano passar</li>
</ul>

<div class="lore-quote">
Nunca há imunidade total.
</div>

<hr>

<h3>🩸 LIFE_STEAL (Armas)</h3>

<ul>
  <li>Converte parte do dano causado em vida</li>
  <li>Percentual fixo</li>
  <li>Não escala</li>
</ul>

<p>
Agressividade como defesa.
</p>

<hr>

<h3>🌀 DODGE_CHANCE (Armaduras)</h3>

<ul>
  <li>Chance de esquivar completamente de ataques</li>
  <li>Escala com raridade</li>
  <li>Não é garantido</li>
</ul>

<p>
Evitar dano é melhor que absorver.
</p>

<hr>

<h3>🩸 BLEED_CHANCE (Armas)</h3>

<ul>
  <li>Chance de aplicar sangramento</li>
  <li>Pode acumular stacks</li>
  <li>Escala com raridade</li>
</ul>

<p>
Sangramento causa dano ao longo do tempo<br>
e pressiona o inimigo.
</p>

<hr>

<h3>⚡ STUN_CHANCE (Armas)</h3>

<ul>
  <li>Chance de atordoar o alvo</li>
  <li>Escala com raridade</li>
  <li>Possui cooldown interno</li>
</ul>

<p>
Controle é poder.
</p>

<hr>

<h3>🦔 THORNS (Armaduras)</h3>

<ul>
  <li>Reflete parte do dano recebido</li>
  <li>Multiplica o valor global de thorns</li>
  <li>Escala com raridade</li>
</ul>

<p>
Atacar você tem custo.
</p>

<hr>

<h3>🪓 ARMOR_PENETRATION (Armas)</h3>

<ul>
  <li>Ignora parte da mitigação defensiva do alvo</li>
  <li>Escala com raridade</li>
  <li>Extremamente forte contra alvos resistentes</li>
</ul>

<p>
Defesa não é absoluta.
</p>

<hr>

<h3>🎯 CRIT_CHANCE (Armas)</h3>

<ul>
  <li>Chance percentual de causar ataques críticos</li>
  <li>Escala com raridade</li>
  <li>Sinergiza com CRIT_DAMAGE</li>
</ul>

<p>
Crítico é oportunidade.
</p>

<hr>

<h3>💥 CRIT_DAMAGE (Armas)</h3>

<ul>
  <li>Dano adicional aplicado em críticos</li>
  <li>Escala com raridade</li>
  <li>Multiplica picos de dano</li>
</ul>

<div class="lore-quote">
Crítico sem dano é desperdício.
</div>

<div class="ritual-divider">⚙️</div>

<h2 id="mecanicas">⚙️ Mecânicas globais importantes</h2>

<h3>🩸 Sangramento (BLEED)</h3>

<ul>
  <li>Máximo de stacks acumuláveis</li>
  <li>Duração fixa por aplicação</li>
  <li>Dano aplicado por stack por segundo</li>
</ul>

</main>
</div>

</body>
</html>
