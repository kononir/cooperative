import api from '../services/api'

export default {
  fetchProperties() {
    return api().get('property')
  },
  addProperty(property) {
    return api().post('property', property)
  },
  // getPropertyOwner(ownerID) {
  //
  // }
}
