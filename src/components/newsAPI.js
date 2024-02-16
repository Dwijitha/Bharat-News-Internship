import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPublishedArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data.map((article) => ({
      title: article.title,
      description: article.body,
      url: `https://jsonplaceholder.typicode.com/posts/${article.id}`,
      urlToImage: `https://picsum.photos/id/${article.id}/300/200`,
    }));
  } catch (error) {
    console.error("Error fetching published articles:", error);
    throw error;
  }
};

export const getBookmarkedArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data.map((article) => ({
      title: article.title,
      description: article.body,
      url: `https://jsonplaceholder.typicode.com/posts/${article.id}`,
      urlToImage: `https://picsum.photos/id/${article.id}/300/200`,
    }));
  } catch (error) {
    console.error("Error fetching published articles:", error);
    throw error;
  }
};
