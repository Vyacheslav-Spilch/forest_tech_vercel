import { Route, Routes } from 'react-router-dom'
import { Clients } from '../pages/clients/Clients'
import { Contacts } from '../pages/contacts/Contacts'
import { Home } from '../pages/home/Home'
import { Reviews } from '../pages/reviews/Reviews'
import { Services } from '../pages/services/Services'
import { Team } from '../pages/team/Team'
import { Routers} from './routes/routers'
import './../../global.css'
import { ScrollToTop } from '../utils/ScrollToTop'

const Layout = () => {
    return (
    <div>
        <ScrollToTop />
        <Routes>
            <Route index path={Routers.MAIN} element={<Home />}/>
            <Route path={Routers.TEAM} element={<Team />}/>
            <Route path={Routers.SERVICES} element={<Services />}/>
            <Route path={Routers.CLIENTS} element={<Clients />}/>
            <Route path={Routers.CONTACTS} element={<Contacts />}/>
            <Route path={Routers.REVIEWS} element={<Reviews />}/>
        </Routes>
    </div>
    )
}

export default Layout