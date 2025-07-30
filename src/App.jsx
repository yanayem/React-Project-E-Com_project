import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { useEffect} from 'react';
import TopBar from './component/TopBar';
//import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Intro from './component/Intro';
//import Login from './component/login';
//import Form from './component/form';



function App() {
 // const [showSignup, setShowsignup] = useState(false);

  useEffect(() => {
    document.title = 'Food Delivery';
  }, []);

  return (
    <div className="container">
      <TopBar/>
      <Navbar/>
      <Intro/>
    </div>
 
  );
}

  export default App