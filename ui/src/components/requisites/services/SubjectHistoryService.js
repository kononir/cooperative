import api from '../../../api/api'

export default {
    fetch() {
        return api().get('subjecthistory');
    },

    fetchById(id) {
        return api().get(`subjecthistory/${id}`);
    },

    save(history) {
        return api().post('subjecthistory', history);
    }
}