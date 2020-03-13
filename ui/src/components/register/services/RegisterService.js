import api from '../services/api'

export default {
  fetchOwners() {
    return api().get('owners')
  },

  fetchOwnerCommunications(personID) {
    return api().get(`communication/person/${personID}`)
  }

}
