import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'basic 123456'
}

export const fetchApiData = async (input: string) => {
  const data = {
     "user_input": input
  }
  const response = await axios.post(`https://api.plusgptcloud.com/v0/cowriter`, data, {headers:headers});
  return response.data;
};