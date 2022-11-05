import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
	return axios.get(baseUrl)
}

const create = (newObject) => {
	return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then((response) => response)
}

export default {
	getAll,
	create,
	deletePerson,
}
