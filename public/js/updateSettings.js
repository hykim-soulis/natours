import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSetting = async (data, type) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/users/${type === 'data' ? 'updateMe' : 'updateMyPassword'}`,
      data: data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
