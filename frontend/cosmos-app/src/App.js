import logo from './logo.svg';
import './App.css';
import OrderManagement from './Components/order-management.tsx';
import { BrowserRouter, Router, Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Navigation />
        </nav>

        <Routes>
          {/* Define routes here */}
          <Route path="/order-management" element={<OrderManagement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/order-management">Order Management</Link>
      </li>
    </ul>
  );
}
export default App;