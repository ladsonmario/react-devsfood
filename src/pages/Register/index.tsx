import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { InitialUserStateType, setInfoUser } from '../../redux/reducers/userReducer';
import * as C from './styles';
import { useAPI } from '../../helpers/api';

export const Register = () => {
    type JsonRegisterType = {
        error: string;
        result: { 
            token: string; 
            user: {
                name: string;
                last_login: string;
                id: number;
                email: string;
            }
        }
    }

    const user: InitialUserStateType = useAppSelector(state => state.user);
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName( e.target.value );
    }
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail( e.target.value );
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword( e.target.value );
    }
    const handlePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm( e.target.value );
    }

    const handleRegister = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisabled(true);

        if(name && email && password && passwordConfirm) {
            if(password === passwordConfirm) {
                const json: JsonRegisterType = await useAPI.register(name, email, password);
    
                if(json.error) {
                    alert(json.error);
                } else {
                    dispatch( setInfoUser({ 
                        name: json.result.user.name,
                        token: json.result.token
                    }) );
                    window.location.href = '/';
                }
            } else {
                alert('As senhas precisam ser iguais!');            
            }
        } else {
            alert('Preencha todos os dados!');
        }
        setDisabled(false);         
    }
        
    return(
        <C.RegisterArea>
            <div className="login--container">
                <div className="title--area">
                    <div className="title--name">Criar uma Conta</div>
                    <div className="title--bar"></div>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="input--area">
                        <label htmlFor="login--email">Nome</label>
                        <input id="login--email" type="text" value={name} onChange={handleName} disabled={disabled} />
                    </div>
                    <div className="input--area">
                        <label htmlFor="login--email">E-mail</label>
                        <input id="login--email" type="email" value={email} onChange={handleEmail} disabled={disabled} />
                    </div>
                    <div className="input--area">
                        <label htmlFor="password--login">Senha</label>
                        <input id="password--login" type="password" value={password} onChange={handlePassword} disabled={disabled} />
                    </div>
                    <div className="input--area">
                        <label htmlFor="password--login">Confirmar Senha</label>
                        <input id="password--login" type="password" value={passwordConfirm} onChange={handlePasswordConfirm} disabled={disabled} />
                    </div>
                    <button>Criar Conta</button>
                </form>                 
            </div>
        </C.RegisterArea>
    );
}