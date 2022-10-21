import { ChangeEvent, useState, useEffect, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';
import * as C from './styles';

type Props = {
    onSearch: Dispatch<string>;
    search: string;
}

export const Search = ({ onSearch, search }: Props) => {          
    const [widthInput, setWidthInput] = useState<string>('0');    

    let location: string = useLocation().pathname;

    useEffect(() => {
        onSearch('');
    }, [location]);
    
    const handleInputFocus = () => {
        setWidthInput('300');
    }
    const handleInputBlur = () => {
        if(!search) {
            setWidthInput('0');
        }        
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);        
    }

    return (
        <C.SearchArea widthInput={widthInput}>
            <img src="/assets/logo.png" alt="" />            
            <input 
                type="text" 
                placeholder="O que você procura?" 
                value={search}
                onFocus={handleInputFocus}                
                onBlur={handleInputBlur}
                onChange={handleInputChange}                
            />            
        </C.SearchArea>
    );
}