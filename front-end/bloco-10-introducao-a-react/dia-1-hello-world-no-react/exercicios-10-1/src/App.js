import './App.css';
import Compromissos from './Components/Compromissos';
import './Components/Task';
import Task from './Components/Task';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const App = () =>{
  return(
    <>
      <Header/>
      {Task('Luis')}
      <Compromissos/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App;
