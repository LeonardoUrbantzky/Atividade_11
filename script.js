document.getElementById('Claro').addEventListener('click', function() {
    document.documentElement.style.setProperty('--cor-primaria', 'lightskyblue');
    document.documentElement.style.setProperty('--cor-secundaria', 'gray');

  });

  document.getElementById('Escuro').addEventListener('click', function() {
    document.documentElement.style.setProperty('--cor-primaria', '#282c34');
    document.documentElement.style.setProperty('--cor-secundaria', '#c7d2fe');

  });