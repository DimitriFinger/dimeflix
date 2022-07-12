import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import NavBar from '../components/NavBar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import SeriesPage from '../pages/SeriesPage/SeriesPage';

const AppRoutes = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/series' exact element={<SeriesPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes