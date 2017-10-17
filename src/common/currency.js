module.exports = {
  numberAsCurrency: (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })

    number /= 100

    return isNaN(number) ? formatter.format(0) : formatter.format(number)
  }
}
