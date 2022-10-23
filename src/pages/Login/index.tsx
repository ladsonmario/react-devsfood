import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useAPI } from '../../helpers/api';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setInfoUser, InitialUserStateType } from '../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import * as C from './styles';

export const Login = () => {  
    type JsonLoginType = {
        error: string;
        result: {
            token: string;
        };
    }

    const dispatch = useDispatch();
    const user: InitialUserStateType = useAppSelector(state => state.user);
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail( e.target.value );
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword( e.target.value );
    }

    const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisabled(true);

        if(email && password) {
            const json: JsonLoginType = await useAPI.login(email, password);
            
            if(json.error) {
                alert(json.error);
            } else {
                dispatch( setInfoUser({ token: json.result.token }) );
                window.location.href = '/';
            }            
        } else {
            alert('Preencha todos os campos!');
        }

        setDisabled(false);
    }

    return(
        <C.LoginArea>
            <div className="login--container">
                <div className="title--area">
                    <div className="title--name">Login</div>
                    <div className="title--bar"></div>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input--area">
                        <label htmlFor="login--email">E-mail</label>
                        <input id="login--email" type="text" value={email} onChange={handleEmail} disabled={disabled} />
                    </div>
                    <div className="input--area">
                        <label htmlFor="password--login">Password</label>
                        <input id="password--login" type="password" value={password} onChange={handlePassword} disabled={disabled} />
                    </div>
                    <button>Fazer Login</button>
                </form>  
                <div className="register--area">
                <Link to="/register">Criar nova conta</Link>
                </div>                
            </div>
        </C.LoginArea>
    );
}