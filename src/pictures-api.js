import axios from "axios";

const API_KEY = '-eeP60pRJtyWL-avvXlFPtyJI_PcjpBMkVJxu64PLQ8';
const BASE_URL = 'https://api.unsplash.com';

export const getPictures = async (query, page = 1, per_page = 12) => {
    const responce = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
            query,
            page,
            per_page,
            client_id: API_KEY,
        },
    });
    return responce.data.results;
};