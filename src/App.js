import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";



function App() {
  return (

    <>
      <Router>
        <Routes />

      <GlobalStyles />

      </Router>
     
      
     
       

    
    
    </>
  );
}

export default App;


 