import axios from 'axios'
const uri = `${process.env.MONEY_TRACKER_SERVER_HOST}:${process.env.MONEY_TRACKER_SERVER_PORT}`

export default {
  createCategory: (categoryDetails) => {
    return axios.request({
      url: `${uri}/category`,
      method: 'post',
      data: categoryDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchCategories: () => {
    return axios.request({
      url: `${uri}/category`,
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
