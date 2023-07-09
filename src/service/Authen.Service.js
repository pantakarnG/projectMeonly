import { InstanceFormBody /*, InstanceFormData*/ } from '../helper/Axios';

export async function authen(data) {
  try {
    const response = await InstanceFormBody.get(`apis/login`, data);
    return await response.data;
  } catch (error) {
    console.log('error', error);
  }
}
