import axios from 'axios';

export const API_KEY = "0nFnr37BtVuzoPastSaHfvY3v5MiN06s";

const httpClient = axios.create({
	baseURL: "https://api.climacell.co/v3/weather/forecast/",
	withCredentials: true
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let status = (error.response && error.response.statusCode) || 0;
    const errorMessage =  error.response.data && error.response.data.message ? error.response.data.message : "Couldn't get error message!";
    
    if (status === 400) {
      console.log("Error ins sending request!\nCheck the correctness of the request URL.");
    } else if (status === 401 || status === 403) {
      console.log(errorMessage);
    } else if (status === 500) {
      console.log("Server error\n");
      console.log(errorMessage);
    }
    return Promise.reject(error);
  }
)

axios.interceptors.request.use((config) => {
  return config
});

export const httpGet = (params) => httpClient.request({
	method: 'get',
	...params
});