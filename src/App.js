import { Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Todo/>}></Route>
        <Route path={'/home'} element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
