<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>NPCs e Comércio | TotalAdventure</title>

  <link rel="stylesheet" href="../assets/css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
</head>

<body>

<!-- HERO -->
<div class="hero">
  <div class="hero-content">
    <div class="hero-title">NPCs & COMÉRCIO</div>
    <div class="hero-subtitle">
      Onde esforço ganha valor
    </div>
    <div class="hero-meta">
      Escolha • Confiança • Risco
    </div>
  </div>
</div>

<div class="layout">

<!-- SIDEBAR -->
<aside class="sidebar">
  <h3>Relações</h3>
  <ul>
    <li><a href="#papel">🧠 Papel</a></li>
    <li><a href="#tipos">🛒 Tipos</a></li>
    <li><a href="#sell">🟡 Venda</a></li>
    <li><a href="#pickaxe">⛏️ Picaretas</a></li>
    <li><a href="#exec">📜 Execução</a></li>
    <li><a href="#identidade">🏷️ Identidade</a></li>
    <li><a href="#regional">🧭 Regional</a></li>
    <li><a href="#decisoes">⚠️ Decisões</a></li>
    <li><a href="#filosofia">🧠 Filosofia</a></li>
  </ul>
</aside>

<main>

<h2>🧑‍🌾 NPCs e Comércio</h2>

<p>
NPCs são o ponto de contato entre o jogador e a economia.
</p>

<p>
Eles compram,<br>
vendem,<br>
executam contratos<br>
e definem <strong>quanto seu esforço realmente vale</strong>.
</p>

<p>
Escolher o NPC certo importa tanto quanto conseguir o item.
</p>

<div class="ritual-divider">🧠</div>

<h2 id="papel">🧠 O papel dos NPCs</h2>

<p>NPCs existem para:</p>

<ul>
  <li>transformar itens em dinheiro</li>
  <li>guiar progressão (picaretas)</li>
  <li>aplicar reputação</li>
  <li>criar identidade regional</li>
  <li>oferecer decisões econômicas reais</li>
</ul>

<div class="lore-quote">
Eles não são genéricos.<br>
Cada NPC tem propósito.
</div>

<div class="ritual-divider">🛒</div>

<h2 id="tipos">🛒 Tipos de NPCs</h2>

<p>Existem três tipos principais de NPCs econômicos.</p>

<div class="ritual-divider">🟡</div>

<h2 id="sell">🟡 NPCs de Venda (SELL)</h2>

<p>NPCs do tipo <strong>SELL</strong> compram itens do jogador.</p>

<p>
Eles utilizam <strong>shops</strong>, que definem o que é aceito.
</p>

<h3>📦 Tipos de shop</h3>

<ul>
  <li><strong>sell_ores</strong>
    <ul>
      <li>compra apenas minérios</li>
    </ul>
  </li>
  <li><strong>sell_gear</strong>
    <ul>
      <li>compra armas e armaduras</li>
    </ul>
  </li>
  <li><strong>sell_all</strong>
    <ul>
      <li>compra minérios + equipamentos</li>
    </ul>
  </li>
</ul>

<p>
Se o item não pertence ao shop,<br>
ele não será comprado.
</p>

<div class="ritual-divider">💰</div>

<h3>💰 Preço e modificadores</h3>

<p>NPCs SELL podem possuir:</p>

<ul>
  <li><strong>modifier</strong>
    <ul>
      <li>multiplica o valor final</li>
      <li>ex: <code>1.35</code> → +35% no pagamento</li>
    </ul>
  </li>
</ul>

<p>NPCs mais isolados ou perigosos:</p>

<ul>
  <li>pagam melhor</li>
  <li>exigem deslocamento</li>
  <li>aumentam o risco</li>
</ul>

<div class="lore-quote">
Lucro sempre cobra pedágio.
</div>

<div class="ritual-divider">⭐</div>

<h3>⭐ Reputação</h3>

<p>Alguns NPCs usam reputação:</p>

<ul>
  <li>vender itens gera reputação</li>
  <li>reputação aumenta o valor recebido</li>
  <li>bônus percentual progressivo</li>
  <li>limite máximo de bônus</li>
</ul>

<p>Outros NPCs:</p>

<ul>
  <li>ignoram reputação</li>
  <li>pagam bem desde o início</li>
  <li>não recompensam fidelidade</li>
</ul>

<div class="lore-quote">
Confiança local é um ativo.
</div>

<div class="ritual-divider">⛏️</div>

<h2 id="pickaxe">⛏️ NPCs de Picareta (BUY_PICKAXE)</h2>

<p>
NPCs do tipo <strong>BUY_PICKAXE</strong> vendem
<strong>uma picareta específica</strong>.
</p>

<p>Características:</p>

<ul>
  <li>preço fixo</li>
  <li>não negociável</li>
  <li>compra única</li>
  <li>representa salto de progressão</li>
</ul>

<p>Picaretas:</p>

<ul>
  <li>não podem ser forjadas</li>
  <li>não podem ser trocadas</li>
  <li>definem até onde o jogador pode minerar</li>
</ul>

<div class="lore-quote">
Esses NPCs são <strong>marcos econômicos</strong>,<br>
não vendedores comuns.
</div>

<div class="ritual-divider">📜</div>

<h2 id="exec">📜 NPCs de Execução (EXEC_COMMAND)</h2>

<p>
NPCs do tipo <strong>EXEC_COMMAND</strong>
executam comandos do servidor.
</p>

<p>Eles podem:</p>

<ul>
  <li>custar dinheiro</li>
  <li>ser uso único ou múltiplo</li>
  <li>conceder permissões</li>
  <li>desbloquear sistemas</li>
</ul>

<p>Exemplos de uso:</p>

<ul>
  <li>licenças</li>
  <li>contratos</li>
  <li>acesso a mecânicas futuras</li>
  <li>progressão indireta</li>
</ul>

<div class="lore-quote">
Dinheiro também compra <strong>possibilidade</strong>.
</div>

<div class="ritual-divider">🏷️</div>

<h2 id="identidade">🏷️ Identidade dos NPCs</h2>

<p>Cada NPC possui:</p>

<ul>
  <li>nome próprio</li>
  <li>título ou subtítulo</li>
  <li>ícone visual</li>
  <li>comportamento econômico específico</li>
</ul>

<p>Isso cria:</p>

<ul>
  <li>personalidade</li>
  <li>reconhecimento</li>
  <li>decisão consciente de venda</li>
</ul>

<div class="lore-quote">
Você não vende “para o sistema”.<br>
Você vende <strong>para alguém</strong>.
</div>

<div class="ritual-divider">🧭</div>

<h2 id="regional">🧭 NPCs e economia regional</h2>

<p>NPCs estão ligados a regiões.</p>

<p>Isso significa:</p>

<ul>
  <li>preços diferentes por vila</li>
  <li>reputação separada</li>
  <li>rotas de comércio</li>
  <li>especialização local</li>
</ul>

<div class="lore-quote">
Às vezes, o melhor negócio:<br>
não é o mais próximo,<br>
não é o mais seguro,<br>
é o mais distante.
</div>

<div class="ritual-divider">⚠️</div>

<h2 id="decisoes">⚠️ Decisões importantes</h2>

<p>Antes de vender, pense:</p>

<ul>
  <li>esse NPC aceita reputação?</li>
  <li>vale a pena ir mais longe?</li>
  <li>preciso do dinheiro agora?</li>
  <li>essa vila paga melhor?</li>
  <li>esse item vale mais forjado?</li>
</ul>

<div class="lore-quote">
Vender é uma escolha estratégica,<br>
não reflexo automático.
</div>

<div class="ritual-divider">🧠</div>

<h2 id="filosofia">🧠 Filosofia dos NPCs</h2>

<p>No TotalAdventure:</p>

<ul>
  <li>NPCs definem valor</li>
  <li>economia é local</li>
  <li>risco aumenta lucro</li>
  <li>confiança é construída</li>
  <li>atalhos cobram preço</li>
</ul>

<div class="lore-quote">
Quem entende os NPCs<br>
para de jogar no piloto automático.
</div>

<div class="ritual-divider">➡️</div>

<h2>➡️ Próximos passos</h2>

<p>Para fechar o sistema econômico:</p>

<p>
➡️ <a href="reputation.md">Reputação</a>
</p>

<p>
NPCs movem dinheiro.<br>
Reputação decide <strong>quanto ele vale</strong>.
</p>

</main>
</div>

</body>
</html>
