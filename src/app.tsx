import { Route, Routes } from 'react-router-dom';
import { Users } from './pages/users/users';
import { AppProviders } from './app-providers';
import { ToastContainer } from './components/toast';

function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path="*" element={<Users />} />
      </Routes>
      <ToastContainer />
    </AppProviders>
  );
}

export default App;
