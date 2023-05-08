import { BrowserRouter,Routes,Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,DroneCanvas,PlaneCanvas,HoverCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<DroneCanvas/>}/>
        <Route path='/plane' element={<PlaneCanvas/>}/>
        <Route path='/hover' element={<HoverCanvas/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App