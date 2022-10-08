import './App.css';
import Home from './pages/home';
import Index from './pages/index'
import Template from './pages/template'
import Vote from './pages/template/vote/index'
// 路由使用
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/index" element={<Index />}></Route>
        <Route path="/template" element={<Template />}></Route>
        <Route path="/template/vote/index" element={<Vote />}></Route>
      </Routes>
    </Router>
        
  );
}

export default App;
