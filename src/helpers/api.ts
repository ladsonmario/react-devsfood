const BASE: string = 'https://api.b7web.com.br/devsfood/api';

export const useAPI = {
    getCategories: async () => {
        const json = await fetch(`${BASE}/categories`);
        return json.json();
    },
    getProducts: async (search: string, page: number, category: number) => {
        let fields: string[] = [];

        if(search !== '') {
            fields.push(`search=${search}`);
        }
        if(page !== 0) {
            fields.push(`page=${page}`);
        }
        if(category !== 0) {
            fields.push(`category=${category}`);
        }        

        const json = await fetch(`${BASE}/products?${fields.join('&')}`);
        return json.json();
    },
    login: async (email: string, password: string) => {
        const json = await fetch(`${BASE}/login`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({email, password})
        });
        return json.json();
    },
    register: async (name: string, email: string, password: string) => {
        const json = await fetch(`${BASE}/user`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({name, email, password})
        });
        return json.json();
    }
};