import axios from 'axios'
import { generateUrl } from './Api.configuration'

const url = generateUrl('category')

export default {
  createCategory: (categoryDetails) => {
    return axios.request({
      url,
      method: 'post',
      data: categoryDetails,
      responseType: 'json'
    }).then(response => response.data)
  },
  fetchCategories: () => {
    return axios.request({
      url,
      method: 'get',
      responseType: 'json'
    }).then(response => response.data)
  }
}
