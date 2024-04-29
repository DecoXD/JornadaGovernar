export function initializeRegressiveCount(duracao: number) {
  let tempoRestante: number = duracao;

  const intervalId = setInterval(() => {
      const dias = Math.floor(tempoRestante / (24 * 60 * 60));
      const horas = Math.floor((tempoRestante % (24 * 60 * 60)) / (60 * 60));
      const minutos = Math.floor((tempoRestante % (60 * 60)) / 60);
      const segundos = Math.floor(tempoRestante % 60);

      console.log(`${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos restantes`);

      tempoRestante--;

      if (tempoRestante < 0) {
          clearInterval(intervalId);
          console.log('O tempo acabou!');
      }
  }, 1000);
}