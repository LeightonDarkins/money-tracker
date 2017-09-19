import axios from 'axios'

export default {
  createTransaction: (transactionDetails) => {
    return axios.request({
      url: '/transaction',
      method: 'post',
      data: transactionDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchTransactions: () => {
    return axios.request({
      url: '/transaction',
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
