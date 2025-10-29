// script.js
// Funcionalidad pequeña: cambiar tema (simula el botón "Cambiar Tema")
// Puedes ampliarlo para guardar la preferencia en localStorage si quieres.
 
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('themeToggle');
   
    function isDark() {
      return document.body.classList.contains('dark-theme');
    }
   
    function setDark(dark) {
      if (dark) document.body.classList.add('dark-theme');
      else document.body.classList.remove('dark-theme');
      toggle.textContent = dark ? 'Tema Claro' : 'Cambiar Tema';
    }
   
    // Alternar al hacer click
    toggle.addEventListener('click', function () {
      setDark(!isDark());
    });
   
    // (Opcional) Restaurar preferencia previa
    try {
      const saved = localStorage.getItem('midominio_theme');
      if (saved === 'dark') setDark(true);
      else setDark(false);
    } catch (e) { /* ignorar si localStorage falla */ }
   
    // Guardar preferencia cuando cambia
    const observer = new MutationObserver(() => {
      try {
        localStorage.setItem('midominio_theme', isDark() ? 'dark' : 'light');
      } catch(e) {}
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  });
   