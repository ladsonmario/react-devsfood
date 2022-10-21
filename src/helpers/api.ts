const BASE: string = 'https://api.b7web.com.br/devsfood/api';

type FieldsType = {
    search: string;
    page: number;
    category: number;
}

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
    }
};