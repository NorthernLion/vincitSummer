import axios from 'axios'
const baseUrl = 'http://localhost:8001/species'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }
