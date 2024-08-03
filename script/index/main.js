

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
          url = './blog.html'; 
          break;
        case 'Consultores':
          url = '/consultores'; 
          break;
        case 'Contatos':
          url = '/contatos'; 
          break;
        case 'Clientes':
          url = '/clientes'; 
          break;
        case 'Livro de reclamação':
          url = '/livro-de-reclamacao'; 
          break;
        case 'Serviços Financeiros':
          url = '/servicos-financeiros'; 
          break;
        case 'Sobre nós':
          url = '/sobre-nos'; 
          break;
        default:
          url = null;
      }

      if (url) {
        window.location.href = url;
      }
    });
  });
