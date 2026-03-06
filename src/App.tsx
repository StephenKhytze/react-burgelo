import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      {/* <nav>...</nav> Navigation links */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        {/* Optional: Add a catch-all route for 404 pages */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;