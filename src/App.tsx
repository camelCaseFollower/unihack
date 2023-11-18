import "./index.css"
import {Link,Route,Routes} from "react-router-dom"
import Menu from "./myComponents/Menu"
import MainBody from "./myComponents/MainBody"
import Evenimente from "./myComponents/evenimente/Evenimente"
import Dashboard from "./myComponents/dashboard/Dashboard"
import Login from "./myComponents/Login"

function App() {
  return (
<>
  <Menu />
  <Routes>
      <Route index element={<MainBody />} />
      <Route path="evenimente" element={<Evenimente/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="login" element={<Login />} />
  </Routes>
</>
  );
}

export default App;
