import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchArticlesWithTopic = async (topic, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: topic,
      page: page,
      client_id: 'kX5ElCGlYF6yASvtERfxoQYSJBseoFbxAc8QqzvE-Ms',
    },
  });
  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };

};
