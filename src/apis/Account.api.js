import axios from 'axios'
import { generateUrl } from './Api.configuration'

const url = generateUrl('account')

export default {
  createAccount: (accountDetails) => {
    return axios.request({
      url,
      method: 'post',
      data: accountDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchAccounts: () => {
    return axios.request({
      url,
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
