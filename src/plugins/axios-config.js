import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    const globalParams = {
      apikey: import.meta.env.VITE_OMDB_KEY, // Misalnya untuk otentikasi
    };

    config.params = {
      ...config.params,
      ...globalParams,
    };

    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   response => {
//     catchSupportId(response)

//     return response
//   },
//   error => {
//     return Promise.reject(responseValidate(error))
//   },
// )


export { axios }
