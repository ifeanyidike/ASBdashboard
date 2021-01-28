import './App.css';
import { GlobalStyle } from './styles/globalStyles'
import Header from "./components/Header"
import BreadCrumb from "./components/BreadCrumb"
import CardPanel from "./components/CardPanel"
import Sidebar from "./components/Sidebar"
import Table from './components/Table'
import { BodyDisplay } from './styles/BodyStyles';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <BreadCrumb />
      <CardPanel />

      <BodyDisplay>
        <Sidebar />
        <Table />
      </BodyDisplay>
    </div>
  );
}

export default App;
