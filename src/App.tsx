import { PageContainer } from './components/MainComponents';
import { Menu } from './components/partials/Menu';
import { Body } from './components/partials/Body';
import { Cart } from './components/partials/Cart';
import { Routes } from './routes/routes';

function App() {
  return (
    <PageContainer>
      <Menu />
      <Body>
        <Routes />
      </Body>
      <Cart />
    </PageContainer>
  );
}

export default App;