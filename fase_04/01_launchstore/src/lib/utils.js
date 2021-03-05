module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);
    const hour = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);

    return {
      day,
      month,
      year,
      hour,
      minutes,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    };
  },

  formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency', //1.000,00
      currency: 'BRL' //R$
    }).format(price / 100);
  }
}