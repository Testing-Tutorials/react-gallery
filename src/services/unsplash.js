import axios from "axios";
import REACT_APP_UNSPLASH_TOKEN from "../../react-token";

export default async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: REACT_APP_UNSPLASH_TOKEN,
      query: term,
    },
  });

  return response.data.results;
};
