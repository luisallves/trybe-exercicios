import './App.css';
import Compromissos from './Components/Compromissos';
import './Components/Task';
import Task from './Components/Task';

const App = () =>{
  return(
    <>
      {Task('Luis')}
      <Compromissos/>
    </>
  )
}

export default App;
