import api from '../../../api/api';

export default {
    fetchLast() {
        return api().get('registration/last')
    },

    push(registration) {
        return api().post('registration', registration);
    }
}