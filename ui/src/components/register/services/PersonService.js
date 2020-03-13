import api from '../services/api'

export default {

    fetchPersons() {
        return api().get('/person')
    },

    addPerson(body) {
        return api().post('/person', body)
    }

}
