import logo from './logo.svg';

import CoursesPageComponent from './pages/courses-page/courses-page-component';


import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <CoursesPageComponent />
      <Login/>
    </div>
  );
}

export default App;
