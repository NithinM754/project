import './App.css';
import { MenuProvider } from './menu 1';
import Menu from './menu'
import Navbar from './nav';
// import { MenuContext } from './menu 1';
// import { useContext } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    // content="width=device-width, initial-scale=1.0";
    <>
    <BrowserRouter className='col-md-4'>
    <Routes>
     <Route path =''  element={ <Navbar/> } />
    </Routes>
    </BrowserRouter>
      <MenuProvider>
      <Menu/>
      </MenuProvider>
    {/* <Navbar/> */}
      </>
  );
}

export default App;
