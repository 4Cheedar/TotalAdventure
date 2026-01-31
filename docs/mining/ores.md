<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Minérios | Combustível da Progressão • TotalAdventure</title>

  <link rel="stylesheet" href="../assets/css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
</head>

<body>

<!-- HERO -->
<div class="hero">
  <div class="hero-content">
    <div class="hero-title">MINÉRIOS</div>
    <div class="hero-subtitle">
      O combustível do mundo
    </div>
    <div class="hero-meta">
      Raridade • Peso • Decisão
    </div>
  </div>
</div>

<div class="layout">

<!-- SIDEBAR -->
<aside class="sidebar">
  <h3>Minérios</h3>
  <ul>
    <li><a href="#conceito">🧠 Conceito</a></li>
    <li><a href="#roll">🎲 Sorteio</a></li>
    <li><a href="#chance">🍀 Chance</a></li>
    <li><a href="#alertas">🚨 Alertas</a></li>
    <li><a href="#blocos">🧱 Blocos</a></li>
    <li><a href="#tabelas">📊 Listagem</a></li>
    <li><a href="#valor">💰 Valor</a></li>
    <li><a href="#filosofia">🧠 Filosofia</a></li>
  </ul>
</aside>

<main>

<h2>💎 Minérios</h2>

<p>
Minérios são o <strong>combustível do TotalAdventure</strong>.
</p>

<p>
Eles alimentam a forja, movem a economia,<br>
definem o risco da mineração<br>
e representam o verdadeiro progresso do jogador.
</p>

<div class="lore-quote">
Você não minera blocos.<br>
Você minera <strong>o que pode cair deles</strong>.
</div>

<div class="ritual-divider">🧠</div>

<h2 id="conceito">🧠 O que é um minério</h2>

<p>Um minério é um item obtido durante a mineração que possui:</p>

<ul>
  <li>raridade</li>
  <li>peso</li>
  <li>valor econômico</li>
  <li>uso em forja</li>
  <li>impacto direto na progressão</li>
</ul>

<p>Minérios:</p>

<ul>
  <li>não aparecem diretamente no mundo</li>
  <li>são sorteados durante o dano ao bloco</li>
  <li>caem no chão quando obtidos</li>
</ul>

<div class="ritual-divider">🎲</div>

<h2 id="roll">🎲 Sistema de sorteio (Roll)</h2>

<p>
Os minérios não são sorteados apenas ao quebrar o bloco.
</p>

<p>Durante a mineração:</p>

<ul>
  <li>o sistema tenta sortear minérios <strong>enquanto o bloco perde vida</strong></li>
  <li>o sorteio acontece até um limite configurado</li>
</ul>

<div class="gold-box">
<strong>Configuração atual:</strong><br>
RollUntilHealth: <strong>50%</strong>
</div>

<p>Isso significa:</p>

<ul>
  <li>o sistema tenta sortear minérios até o bloco atingir <strong>50% da vida</strong></li>
  <li>após esse ponto, nenhum novo minério pode ser obtido</li>
  <li>quebrar mais rápido reduz o número de tentativas</li>
</ul>

<div class="lore-quote">
Minerar mais rápido ≠ mais minérios<br>
Eficiência exige leitura.
</div>

<div class="ritual-divider">🍀</div>

<h2 id="chance">🍀 Chance e raridade</h2>

<p>
Cada minério possui uma chance base de aparecer.
</p>

<ul>
  <li>chances menores → minérios mais raros</li>
  <li>sorte da picareta influencia os resultados</li>
  <li>múltiplos hits geram múltiplas tentativas</li>
</ul>

<p>Raridade define:</p>

<ul>
  <li>peso do minério</li>
  <li>valor de venda</li>
  <li>impacto na forja</li>
  <li>relevância econômica</li>
</ul>

<div class="ritual-divider">🚨</div>

<h2 id="alertas">🚨 Alertas de minérios lendários</h2>

<p>
Minérios extremamente raros podem disparar alertas globais.
</p>

<div class="danger-box">
Apenas minérios com chance <strong>≤ 1/425</strong><br>
geram alerta no servidor.
</div>

<p>Isso cria:</p>

<ul>
  <li>impacto social</li>
  <li>sensação de evento</li>
  <li>reconhecimento do risco assumido</li>
</ul>

<div class="lore-quote">
Nem todo lendário é anunciado.<br>
Só os realmente raros.
</div>

<div class="ritual-divider">🧱</div>

<h2 id="blocos">🧱 Minérios dependem do bloco</h2>

<p>
Minérios <strong>não são universais</strong>.
</p>

<p>Cada minério:</p>

<ul>
  <li>só pode aparecer em blocos específicos</li>
  <li>respeita regras rígidas de spawn</li>
  <li>não surge fora do contexto correto</li>
</ul>

<p>Isso força:</p>

<ul>
  <li>exploração variada</li>
  <li>conhecimento do mundo</li>
  <li>decisão consciente de rotas</li>
</ul>

<div class="ritual-divider">📊</div>

<h2 id="tabelas">📊 Minérios registrados</h2>

<h3>🪨 Comuns</h3>
<table>
  <tr><th>Minério</th><th>Chance</th><th>Drops máx.</th><th>Blocos</th></tr>
  <tr><td>Fragmento de Pedra</td><td>1/3</td><td>4</td><td>Carvão, Ferro</td></tr>
  <tr><td>Fragmento de Cobre</td><td>1/4</td><td>3</td><td>Carvão, Ferro, Cobre</td></tr>
  <tr><td>Fragmento de Ferro</td><td>1/5</td><td>2</td><td>Ferro, Cobre</td></tr>
</table>

<h3>💠 Raros</h3>
<table>
  <tr><th>Minério</th><th>Chance</th><th>Drops máx.</th><th>Blocos</th></tr>
  <tr><td>Núcleo de Ferro</td><td>1/10</td><td>3</td><td>Cobre, Ferro Profundo</td></tr>
  <tr><td>Fragmento de Ouro</td><td>1/14</td><td>2</td><td>Cobre Profundo, Prismarine</td></tr>
  <tr><td>Cristal de Quartzo Bruto</td><td>1/16</td><td>2</td><td>Prismarine, Ametista</td></tr>
  <tr><td>Liga Metálica Bruta</td><td>1/18</td><td>2</td><td>Cobre, Prismarine</td></tr>
  <tr><td>Núcleo de Redstone</td><td>1/20</td><td>3</td><td>Ferro Profundo, Sculk</td></tr>
  <tr><td>Essência Geológica</td><td>1/22</td><td>2</td><td>Carvão Profundo, Cobre</td></tr>
</table>

<h3>🔮 Épicos</h3>
<table>
  <tr><th>Minério</th><th>Chance</th><th>Drops máx.</th><th>Blocos</th></tr>
  <tr><td>Cristal Ametista Refinado</td><td>1/55</td><td>2</td><td>Ametista, Prismarine</td></tr>
  <tr><td>Núcleo Energético</td><td>1/65</td><td>1</td><td>Obsidian, Prismarine</td></tr>
  <tr><td>Essência Sombria</td><td>1/85</td><td>1</td><td>Sculk, Ferro Profundo</td></tr>
  <tr><td>Núcleo Abissal</td><td>1/80</td><td>1</td><td>Sculk</td></tr>
  <tr><td>Fragmento Prismático</td><td>1/85</td><td>2</td><td>Prismarine</td></tr>
</table>

<h3>🌟 Lendários</h3>
<table>
  <tr><th>Minério</th><th>Chance</th><th>Drops máx.</th><th>Blocos</th></tr>
  <tr><td>Fragmento Ancestral</td><td>1/425</td><td>1</td><td>Ancient Debris</td></tr>
  <tr><td>Essência do Mundo</td><td>1/550</td><td>1</td><td>Ancient Debris, Sculk</td></tr>
  <tr><td>Fragmento do Vazio</td><td>1/475</td><td>1</td><td>Obsidian, Ancient Debris</td></tr>
</table>

<div class="ritual-divider">💰</div>

<h2 id="valor">💰 Valor e destino dos minérios</h2>

<ul>
  <li>podem ser vendidos diretamente</li>
  <li>podem ser usados na forja</li>
  <li>podem ser combinados para gerar peso</li>
</ul>

<div class="lore-quote">
Nem todo minério precisa virar item.<br>
Às vezes, vender é sabedoria.
</div>

<div class="ritual-divider">🧠</div>

<h2 id="filosofia">🧠 Filosofia dos minérios</h2>

<ul>
  <li>minérios são oportunidade</li>
  <li>raridade cria tensão</li>
  <li>chance cria histórias</li>
  <li>conhecimento cria vantagem</li>
</ul>

<div class="lore-quote">
Quem sabe <strong>onde minerar</strong><br>
e <strong>quando parar</strong><br>
avança mais rápido do que quem só insiste.
</div>

<div class="ritual-divider">➡️</div>

<h2>➡️ Próximos passos</h2>

<ul>
  <li>➡️ <a href="../forging/overview.html">Forja</a></li>
  <li>➡️ <a href="../economy/overview.html">Economia</a></li>
</ul>

<div class="lore-quote">
Minérios são o início.<br>
O que você faz com eles decide tudo.
</div>

</main>
</div>

</body>
</html>
