function relogio() {
  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      timeZone: 'GMT'
    })
  };

  document.onclick = (event) => {
    const element = event.target;

    if (element.classList.contains('iniciar')) {
      relogio.classList.remove('parado');
      clearInterval(timer);
      timer = setInterval(function(){
        segundos++;
        relogio.innerText = getTimeFromSeconds(segundos);
      }, 1000);
    };

    if (element.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('parado');
    };

    if (element.classList.contains('resetar')) {
      relogio.classList.remove('parado');
      clearInterval(timer);
      segundos = 0;
      relogio.innerText = '00:00:00';
    };
  };
};

relogio();
