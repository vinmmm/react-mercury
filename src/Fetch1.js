import 'whatwg-fetch';

let Fetch1 = {
  fetchAirports() {
    return fetch('https://aircheapapi.pro-react.com/airports')
    .then((response) => response.json());
  }

};

export default Fetch1;
