import { useEffect, useState } from 'react';
import { useAPI } from '../../helpers/api';
import { CategoriesType, ProductsType } from '../../types/types';
import * as C from './styles';
import { Search } from '../../components/partials/Search';
import { GategoryItem } from '../../components/CategoryItem';
import { ProductItem } from '../../components/ProductItem';
import { Modal } from '../../components/partials/Modal';
import { ModalProduct } from '../../components/ModalProduct';
import ReactTooltip from 'react-tooltip';

let searchTimer: number = 0;

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
    
    const [homeSearch, setHomeSearch] = useState<string>('');
    const [activeSearch, setActiveSearch] = useState<string>('');
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [categoryActive, setCategoryActive] = useState<number>(0);
    const [products, setProducts] = useState<ProductsType[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [activePage, setActivePage] = useState<number>(1);
    const [opacity, setOpacity] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);
    const [modalStatus, setModalStatus] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ProductsType>();

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
        window.clearTimeout(searchTimer);
        setOpacity(0.3);
        searchTimer = window.setTimeout(() => {
            setActiveSearch(homeSearch);
            setOpacity(1);
        }, 2000);         
    }, [homeSearch]);

    useEffect(() => {         
        getProducts();         
    }, [categoryActive, activePage, activeSearch]);

    const handleCategoryClick = (id: number) => {
        setCategoryActive(id);
    }      

    const getProducts = async () => {  
        setLoading(true);
        setOpacity(0.3);
        const json: JsonProducts = await useAPI.getProducts(activeSearch, activePage, categoryActive);
        if(json.error === '') {
            setProducts(json.result.data);
            setTotalPages(json.result.pages);
            setActivePage(json.result.page);
        }
        setOpacity(1);
        setLoading(false);
    }  
    
    const handleProductClick = (data: ProductsType) => {          
        setModalData(data);
        setModalStatus(true);        
    }

    return(
        <C.HomeArea>
            <Search  search={homeSearch} onSearch={setHomeSearch} />
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
                            <ProductItem key={index} data={item} onClick={() => handleProductClick(item)} />
                        ))}
                    </div>
                </div>
            }
            {products.length === 0 && !loading &&
                <div className="no--product">Não encontramos nenhum produto para essa buscar ='(</div>
            }
            {totalPages > 0  &&
                <div className="pagination">
                    {Array(totalPages).fill(0).map((item, index) => (
                        <div className={(index + 1) === activePage ? 'page--item active' : 'page--item'} key={index} onClick={() => setActivePage(index + 1)}>{index + 1}</div>
                    ))}
                </div>
            }
            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData as ProductsType} setStatus={setModalStatus} />
            </Modal>             
        </C.HomeArea>
    );
}