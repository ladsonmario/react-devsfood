import { PageContainer } from './components/MainComponents';
import { Menu } from './components/partials/Menu';
import { Body } from './components/partials/Body';
import { Cart } from './components/partials/Cart';
import { Routes } from './routes/routes';
import ReactTooltip from 'react-tooltip';

function App() {
  return (
    <PageContainer>
      <Menu />
      <Body>
        <Routes />
      </Body>
      <Cart />
      <ReactTooltip id="tip-top" place="top" effect="solid" />
      <ReactTooltip id="tip-right" place="right" effect="solid" />
    </PageContainer>
  );
}

export default App;