
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import Login from './page/Login';
import Register from './page/Register';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import useAuthCheck from './hooks/useAuthCheck';
import { routes } from './routes/routes';


function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute>
                  {route.element}
                </PrivateRoute>
              }
            />
          )
        })}

      </Routes>
    </Router>
  );
}

export default App
