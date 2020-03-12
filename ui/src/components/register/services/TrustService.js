import api from '../services/api'

export default {

    fetchTrusts() {
        return api().get('/vicarious/authority')
    }

}