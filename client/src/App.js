import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Categories from "./components/Categories";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">

      <Router>

        <Categories/>

        <Routes>
          <Route path="/" element={ <Main/> }  />
          <Route path="/AdminLogin" element={ <AdminLogin/> }  />
          <Route path="/Admin" element={ <Admin/> }  />
        </Routes>

      </Router>

      
    </div>
  );
}

export default App;
