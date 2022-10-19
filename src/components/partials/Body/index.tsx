import * as C from './styles';

type Props = {
    children: JSX.Element;
}
export const Body = ({ children }: Props) => {
    return (
        <C.BodyArea>{children}</C.BodyArea>
    );
}