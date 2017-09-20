import axios from 'axios'
import { generateUrl } from './Api.configuration'

const url = generateUrl('transaction')

export default {
  createTransaction: (transactionDetails) => {
    return axios.request({
      url,
      method: 'post',
      data: transactionDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchTransactions: () => {
    return axios.request({
      url,
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
