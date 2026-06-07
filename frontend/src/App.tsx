import { Routes,Route } from 'react-router-dom';
import PaginaPessoa from './paginas/paginaPessoa'
import PaginaProcuraCachorroDePessoa from './paginas/paginasProcuraCachorroDePessoa'

function App(){
return(
  <Routes>
    <Route path='/' element={< PaginaPessoa/>}/>
    <Route path='/procuraCachorro' element={< PaginaProcuraCachorroDePessoa/>}/>
  </Routes>
)
}

export default App;