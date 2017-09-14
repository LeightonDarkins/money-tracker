import axios from 'axios'

export default {
  createAccount: (accountDetails) => {
    return axios.request({
      url: '/account',
      method: 'post',
      data: accountDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchAccounts: () => {
    return axios.request({
      url: '/account',
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
