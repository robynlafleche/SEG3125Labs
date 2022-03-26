import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Navbar';


function App() {
  return (
    <div className='App'>
      <Index defaultActiveKey="/home"/>
    </div>
  );
}

export default App;
