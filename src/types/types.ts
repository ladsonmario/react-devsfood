export type CategoriesType = {
    id: number;
    name: string;
    image: string;
}

export type ProductsType = {
    id: number;
    id_cat: number;
    name: string;
    image: string;
    price: number;
    ingredients: string;
    qt?: number;
}