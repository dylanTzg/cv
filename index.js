document.addEventListener("DOMContentLoaded", function () {
    const emailLink = document.getElementById("email-link");
    const email = "dylantizguine@gmail.com";
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  
    // Fonction pour gérer l'animation de défilement
    function fadeInOnScroll() {
      const fadeInElements = document.querySelectorAll(".fadeIn");
      const windowHeight = window.innerHeight;
  
      fadeInElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add("visible");
        }
      });
    }
  
    // Ajoutez la classe "fadeIn" à chaque section pour les animations de défilement
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("fadeIn");
    });
  
    // Gère l'animation de défilement lors du chargement de la page et lors du défilement
    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);

    // Ajoutez l'événement 'click' au bouton de téléchargement du PDF
   // index.js

document.getElementById("download-pdf").addEventListener("click", function () {
    var element = document.body;
    var opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'Dylan_Tizguine_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // Ajouter la classe 'no-print' au bouton
    var downloadButton = document.getElementById("download-pdf");
    downloadButton.classList.add("no-print");
  
    // Convertir et sauvegarder le PDF
    html2pdf().set(opt).from(element).save().then(function () {
      // Supprimer la classe 'no-print' du bouton une fois la conversion terminée
      downloadButton.classList.remove("no-print");
    });
  });
  
});

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    loader.parentNode.removeChild(loader);
  });
  function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll(".fadeIn");
    const windowHeight = window.innerHeight;
  
    fadeInElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }
  
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fadeIn");
  });
  
  fadeInOnScroll();
  window.addEventListener("scroll", fadeInOnScroll);
    
