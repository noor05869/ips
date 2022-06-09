import { BrowserRouter } from 'react-router-dom';
import MainComponent from './Component/MainComponent';
import axios from 'axios'

function App() {



  axios.defaults.headers =
  {
    'x-auth-token': localStorage.getItem('x-auth-token')
  }
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
