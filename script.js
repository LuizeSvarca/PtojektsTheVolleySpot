
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
  contentDiv.innerHTML = `<h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2>`;
  // Add content loading logic here
}
