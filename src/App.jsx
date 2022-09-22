import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import Visto en clase
import ItemListContainer from './contenedores/ItemListContainer';

//Lazy se crea cuando se necesita 
const OtherComponent = React.lazy(() => import('./componentes/navbar'));




function App() {
  return (
    <>
      <OtherComponent/>
      <ItemListContainer/> 
    </>
  );
}

export default App;
