class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: this._token,
      },
    }).then((res) => res.json());
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        Authorization: this._token,
      },
    }).then((res) => res.json());
  }
}

const api = new Api(
  "https://around-api.es.tripleten-services.com/v1",
  "23063b23-56ac-4b08-80f3-d33202acf81b"
);
export { api };
