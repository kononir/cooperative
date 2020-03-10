import api from '../../../api/api'

export default {
    pushOrganization(organization) {
        return api().post('organization', organization)
    },

    fetchLast() {
        return api().get('organization/last');
    }
}