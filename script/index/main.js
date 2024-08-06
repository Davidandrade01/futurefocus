

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
      });
      myModal.show();
    }, 3000); // 3000 milissegundos = 3 segundos
  });



  
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', function() {
      const value = this.value;
      let url;

      switch (value) {
        case 'blog':
          url = '../../blog.html'; 
          break;
        case 'Consultores':
          url = '../../consultores.html'; 
          break;
        case 'Contatos':
          url = '../../contacto.html'; 
          break;
        case 'Clientes':
          url = '../../index.html'; 
          break;
        case 'Livro de reclamação':
          url = 'https://bespoke.deco.proteste.pt/2023/marketplace?key=UgTbQ7vTi7Wa5cruw7WSbuDBdVo&gad_source=1&gclid=Cj0KCQjw8MG1BhCoARIsAHxSiQnRUCA1qF5TFpdliV7RsIvW6QjskGGhHZazioypvV-Lna9miLSFED8aAo89EALw_wcB&site_name=Marketplace&utm_campaign=PTREGSE9P&utm_medium=cpc&utm_source=google' ; 
          break;
        case 'Serviços Financeiros':
          url = '../../servicos.html'; 
          break;
        case 'Sobre nós':
          url = '../../servicos.html'; 
          break;
        default:
          url = null;
      }

      if (url) {
        window.location.href = url;
      }
    });
  });
