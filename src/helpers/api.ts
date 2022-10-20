const BASE: string = 'https://api.b7web.com.br/devsfood/api';

export const useAPI = {
    getCategories: async () => {
        const json = await fetch(`${BASE}/categories`);
        return json.json();
    },
    getProducts: async () => {
        const json = await fetch(`${BASE}/products`);
        return json.json();
    }
};