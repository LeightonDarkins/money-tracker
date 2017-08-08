import axios from 'axios'
import constants from '../../globals/constants.js'

const Requestor = {
  get: (endpoint) => {
    return axios.get(`${constants.SERVER_URI}/${endpoint}`)
    .then((data) =>{
      return data.data
    })
    .catch((error) => {
      console.error(`Requestor: ${error}`)
    })
  }
}

export default Requestor
