import isEmpty from 'lodash/isEmpty';

/*
 * 'isHeaderValidationEnabled' parameter given in each of the functions below is an temporaray parameter
 * which will add user details in header to the APIs were the header validation is implemented.
 * This can be removed later once the header validation is implemented across all the APIs we have in our app.
 * Otherwise the custom header will break the APIs which do not have header validation implemented.
 */

export const postRequest = (url, payload) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

export const getRequest = (url, queryParams) => {
  if (!isEmpty(queryParams)) {
    const queryString = Object.keys(queryParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');
    url = `${url}?${queryString}`;
  }
  return fetch(url, {
    method: 'GET'
  });
};

export const deleteRequest = (url) =>
  fetch(url, {
    method: 'DELETE'
  });

export const putRequest = (url, payload) =>
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });
