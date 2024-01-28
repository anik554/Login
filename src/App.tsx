import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navber from "./components/Navber"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Login2 from "./pages/Login2"
import SpeedDialler from "./components/SpeedDialler"

function App() {


  return (
    <BrowserRouter>
    {/* <Navber /> */}
      <Routes>
        <Route path="/" element={<Login2 />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/speedDail" element={<SpeedDialler />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
