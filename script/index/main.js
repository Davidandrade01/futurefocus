

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
      });
      myModal.show();
    }, 3000); // 3000 milissegundos = 3 segundos
  });