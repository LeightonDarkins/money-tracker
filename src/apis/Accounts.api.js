import axios from 'axios'

export default {
  fetchAccounts: () => {
    return axios.request({
      url: '/accounts',
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
