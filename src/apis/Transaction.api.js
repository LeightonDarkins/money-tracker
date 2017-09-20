import axios from 'axios'
const uri = `${process.env.MONEY_TRACKER_SERVER_HOST}:${process.env.MONEY_TRACKER_SERVER_PORT}`

export default {
  createTransaction: (transactionDetails) => {
    return axios.request({
      url: `${uri}/transaction`,
      method: 'post',
      data: transactionDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchTransactions: () => {
    return axios.request({
      url: `${uri}/transaction`,
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
