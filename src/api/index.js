import ky from "ky";

const baseUrl = process.env.REACT_APP_API_BASE;
const apiKey = process.env.REACT_APP_API_KEY;
const baseParams = { api_key: apiKey, language: "en-US" };

const api = {
  index(path = "/movie/popular", params = {}) {
    const searchParams = {
      ...{ api_key: apiKey, language: "en-US" },
      ...params,
    };

    return ky
      .get(`${baseUrl}${path}`, {
        searchParams,
      })
      .json();
  },
  show(id, path = "") {
    return ky
      .get(`${baseUrl}/movie/${id}${path}`, {
        searchParams: baseParams,
      })
      .json();
  },
};

export default api;
