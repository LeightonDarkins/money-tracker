import axios from 'axios'

export default {
  createCategory: (categoryDetails) => {
    return axios.request({
      url: '/category',
      method: 'post',
      data: categoryDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchCategories: () => {
    return axios.request({
      url: '/category',
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
