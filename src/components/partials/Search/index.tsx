import { ChangeEvent, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as C from './styles';

export const Search = () => {      
    const [inputContent, setInputContent] = useState<string>('');
    const [widthInput, setWidthInput] = useState<string>('0');    

    let location: string = useLocation().pathname;

    useEffect(() => {
        setInputContent('');
    }, [location]);
    
    const handleInputFocus = () => {
        setWidthInput('300');
    }
    const handleInputBlur = () => {
        if(!inputContent) {
            setWidthInput('0');
        }        
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputContent(e.target.value);
    }

    return (
        <C.SearchArea widthInput={widthInput}>
            <img src="/assets/logo.png" alt="" />            
            <input 
                type="text" 
                placeholder="O que você procura?" 
                onFocus={handleInputFocus}                
                onBlur={handleInputBlur}
                onChange={handleInputChange}
            />            
        </C.SearchArea>
    );
}