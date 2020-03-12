import api from '../../../api/api';

export default {
    fetchLast() {
        return api().get('supervisor/last')
    },

    save(supervisor) {
        return api().post('supervisor', supervisor)
    },

    update(supervisor) {
        return api().put('supervisor', supervisor)
    }
}