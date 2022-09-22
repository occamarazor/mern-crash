import api from 'configs/api/api';
import { REGISTER_URL } from 'features/authentication/register/registerConstants';

const registerSubmitApi = (credentials) => api.post(REGISTER_URL, credentials);

export default registerSubmitApi;
