import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cursos from './paiges/Cursos';
import Alunos from './paiges/Alunos';
import Diciplina from './paiges/Diciplina';
import Nome from './paiges/Nome';
import Duracao from './paiges/Duracao';
import Modadlidade from './paiges/Modadlidade';




  function App() {
    
    return (

      <div>

  <BrowserRouter>
  <Menu/>

  <Container>
    <Routes>
      <Route path="/cursos" element={<Cursos/>}/>
      <Route path="/alunos" element={<Alunos/>}/>
      <Route path="/diciplina" element={<Diciplina/>}/>
      <Route path="/nome" element={<Nome/>}/>
      <Route path="/duracao" element={<Duracao/>}/>
      <Route path="/modadlidade" element={<Modadlidade/>}/>

           
      
   

    </Routes>
    </Container>
  </BrowserRouter>




      </div>

    );
  }

  export default App;
