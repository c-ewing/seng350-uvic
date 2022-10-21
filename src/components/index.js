import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Home from './Home/Home'
import Profile from "./Profile/Profile"
import Explore from "./Explore/Explore"
import VictoriaResources from "./VictoriaResources/VictoriaResources"
import SavedEvents from "./SavedEvents/SavedEvents"
import Request from "./Request/Request"
import { Route, Routes} from "react-router-dom"
import EditProfile from './EditProfile/EditProfile'

export const ExploreVicWebsite = () => {
    return <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/victoria-resources" element={<VictoriaResources />} />
        <Route path="/saved-events" element={<SavedEvents />} />
        <Route path="/request" element={<Request />} />
        <Route path="/Profile/EditProfile" element={<EditProfile />} />
      </Routes>
    </div>
    <Footer />
  </>
}