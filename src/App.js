import Navbar from './Navbar';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Search from "./pages/Search"
import VictoriaResources from "./pages/VictoriaResources"
import SavedEvents from "./pages/SavedEvents"
import Request from "./pages/Request"
import { Route, Routes} from "react-router-dom"

function App() {
  return (
  <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/victoria-resources" element={<VictoriaResources />} />
        <Route path="/saved-events" element={<SavedEvents />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
