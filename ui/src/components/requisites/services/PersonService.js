import api from '../../../api/api'

export default {
    fetch() {
        return api().get('person');
    }
}