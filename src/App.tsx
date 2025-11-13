import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import NotFoundPage from './pages/not_found';
import TicketManagementPage from './pages/dashboard/ticket_mngmt';
import ProfilePage from './pages/dashboard/profile';
import {
  DASHBOARD_PAGE,
  LANDING_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  TICKETS_PAGE,
} from './config/routes';
import OverviewPage from './pages/dashboard/overview';
import { ProtectedRoute } from './layout/protections/protected_routes';

function App() {
  return (
    <div className='App'>
      {/* Navigation links will go here */}

      {/* Routes definition */}
      <Routes>
        <Route path={LANDING_PAGE} element={<LandingPage />} />

        {/* Auth */}
        <Route path={LOGIN_PAGE} element={<LoginPage />} />
        <Route path={REGISTER_PAGE} element={<RegisterPage />} />

        <Route
          path={DASHBOARD_PAGE}
          element={
            <ProtectedRoute>
              <OverviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={TICKETS_PAGE}
          element={
            <ProtectedRoute>
              <TicketManagementPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={PROFILE_PAGE}
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
