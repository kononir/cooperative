import axios from "axios";

const qs = require("querystring");

const config = {
  headers: {
    "Content-type": "application/json"
  }
};

export default new (class ApiService {
  async sendEmail(mailParams, attachments) {
    return await axios.post(
      "http://localhost:8080/api/notifications/send",
      mailParams, attachments
    );
  }

  async getMailAddresses() {
    return await axios.get(
      "http://localhost:8080/api/communication",
      config
    );
  }
})();
