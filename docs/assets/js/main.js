(function () {
  const config = window.TA_CONFIG || {};
  const blueMapUrl = (config.blueMapUrl || "").trim();
  const embedRoots = document.querySelectorAll("[data-bluemap-embed]");
  const mapLinks = document.querySelectorAll("[data-bluemap-link]");

  if (!embedRoots.length && !mapLinks.length) {
    return;
  }

  if (!blueMapUrl) {
    mapLinks.forEach((link) => {
      link.textContent = "Defina a URL do BlueMap para habilitar este link";
      link.removeAttribute("target");
      link.removeAttribute("rel");
      link.setAttribute("aria-disabled", "true");
      link.classList.add("is-disabled");
    });
    return;
  }

  embedRoots.forEach((embedRoot) => {
    const iframe = document.createElement("iframe");
    iframe.src = blueMapUrl;
    iframe.title = "Mapa interativo do servidor";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    iframe.className = "bluemap-frame";

    embedRoot.innerHTML = "";
    embedRoot.appendChild(iframe);
  });

  mapLinks.forEach((link) => {
    link.href = blueMapUrl;
  });
})();
