
document.addEventListener('DOMContentLoaded', function() {
  const navButtons = document.querySelectorAll('.nav-button');
  
  navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('href').substring(1);
      loadContent(section);
    });
  });
});

function loadContent(section) {
  const contentDiv = document.getElementById('content');
  const imageMap = {
    'sakuma': 'attached_assets/sakumlapa.png',
    'parmums': 'attached_assets/par mums.png',
    'piedavajums': 'attached_assets/piedāvājums.png',
    'galerija': 'attached_assets/Galerija.png',
    'kontakti': 'attached_assets/kontakti.png',
    'sudzibas': 'attached_assets/Sūdzība.png',
    'autorizacija': 'attached_assets/autorizācija.png'
  };

  if (imageMap[section]) {
    contentDiv.innerHTML = `<img src="${imageMap[section]}" alt="${section}" style="max-width: 100%; height: auto;">`;
  }
}
