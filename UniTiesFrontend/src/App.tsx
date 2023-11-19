import "./index.css"
import {Link,Route,Routes} from "react-router-dom"
import Menu from "./myComponents/Menu"
import MainBody from "./myComponents/MainBody"
import Evenimente from "./myComponents/evenimente/Evenimente"
import PaginaEveniment from "./myComponents/evenimente/paginaEveniment"
import Footer from "./myComponents/Footer"

function App() {
  return (
<>
  <Menu />
  <Routes>
      <Route index element={<MainBody />} />
      <Route path="evenimente" element={<Evenimente/>} />
      <Route path="event/:id" element={<PaginaEveniment />}/>
  </Routes>
  <Footer />
</>
  );
}

export default App;
