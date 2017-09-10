import axios from 'axios'

export default {
  createAccount: (accountDetails) => {
    return axios.request({
      url: '/account',
      method: 'post',
      responseType: 'json'
    }).then(response => response.data)
  }
}
