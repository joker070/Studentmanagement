// const API_URL = 'replaceApiUrl';

// Temporarly disabling the replaceApiUrl feature and giving static url,
// as cors and header details need to be manually updated in API gateway for each endpoint.

const API_URL = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';

export const serverHost = `${API_URL}/`;

export const apiConfig = {
  login: {
    name: 'login',
    endPointUrl: `${serverHost}`,
    method: 'GET'
  }
};
