import axios from 'axios'
const uri = `https://${process.env.MONEY_TRACKER_SERVER_HOST}:${process.env.MONEY_TRACKER_SERVER_PORT}`

export default {
  createAccount: (accountDetails) => {
    return axios.request({
      url: `${uri}/account`,
      method: 'post',
      data: accountDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchAccounts: () => {
    return axios.request({
      url: `${uri}/account`,
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
