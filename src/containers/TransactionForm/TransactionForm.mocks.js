import moment from 'moment'

module.exports = {
  accounts: [
    {
      id: 'account-1',
      name: 'Account One'
    },
    {
      id: 'account-2',
      name: 'Account Two'
    }
  ],

  categories: [
    {
      id: 'category-1',
      name: 'Category One'
    },
    {
      id: 'category-2',
      name: 'Category Two'
    }
  ],

  formattedToday: moment().format('DD/MM/YYYY'),

  date: moment('31-01-2001', 'DD-MM-YYYY')
}
