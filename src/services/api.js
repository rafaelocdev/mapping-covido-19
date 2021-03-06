const baseURL = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
};

function getCountry(country) {
  return fetch(`${baseURL}/${country}`, headers).then((response) =>
    response.json(),
  );
}

export default getCountry;
