import { useEffect, useState } from 'react';
import { useAPI } from '../../helpers/api';
import { CategoriesType, ProductsType } from '../../types/types';
import * as C from './styles';
import { Search } from '../../components/partials/Search';
import { GategoryItem } from '../../components/CategoryItem';
import { ProductItem } from '../../components/ProductItem';
import ReactTooltip from 'react-tooltip';

export const Home = () => {
    type JsonCategories = {
        error: string;
        result: CategoriesType[];
    }

    type JsonProducts = {
        error: string;
        result: {
            total: number;
            page: number;
            pages: number;
            data: ProductsType[];
        }
    }
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [categoryActive, setCategoryActive] = useState<number>(0);
    const [products, setProducts] = useState<ProductsType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(0);
    const [opacity, setOpacity] = useState<number>(1);

    useEffect(() => {
        ( async () => {
            const json: JsonCategories = await useAPI.getCategories();            
            if(json.error === '') {
                setCategories(json.result);
                ReactTooltip.rebuild();
            } else {
                alert('Ocorreu algum erro, tente novamente mais tarde!');
            }            
        })();
    }, []);

    useEffect(() => {        
        getProducts();
    }, [categoryActive, activePage]);

    const handleCategoryClick = (id: number) => {
        setCategoryActive(id);
    }

    const getProducts = async () => {
        setOpacity(0.3);
        const json: JsonProducts = await useAPI.getProducts();
        if(json.error === '') {
            setProducts(json.result.data);
            setTotalPages(json.result.pages);
            setActivePage(json.result.page);
        }
        setOpacity(1);
    }

    return(
        <C.HomeArea>
            <Search />
            {categories.length > 0 &&
                <div className="categories">                    
                    <span>Selecione uma Categoria</span>
                    <div className="list">
                        <GategoryItem data={{ id: 0, name: 'Todas as Categorias', image: '/assets/food-and-restaurant.png' }} title="Todas as Categorias" active={categoryActive} onclick={() => handleCategoryClick(0)} />                                                
                        {categories.map((item, index) => (
                            <GategoryItem key={index} data={item} title={item.name} active={categoryActive} onclick={() => handleCategoryClick(item.id)} />
                        ))}
                    </div>
                </div>                
            }         
            {products.length > 0 &&
                <div className="products" style={{ opacity }}>
                    <div className="list">
                        {products.map((item, index) => (
                            <ProductItem key={index} data={item} />
                        ))}
                    </div>
                </div>
            }
            {totalPages > 0  &&
                <div className="pagination">
                    {Array(totalPages).fill(0).map((item, index) => (
                        <div className={(index + 1) === activePage ? 'page--item active' : 'page--item'} key={index} onClick={() => setActivePage(index + 1)}>{index + 1}</div>
                    ))}
                </div>
            }
        </C.HomeArea>
    );
}