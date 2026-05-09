import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MyTickets from './pages/MyTickets';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NewTicket from './pages/NewTicket';
import Login from './pages/Login';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState('dashboard');
  const [isCreatingTicket, setIsCreatingTicket] = useState(false);
  const [systemSettings, setSystemSettings] = useState({
    title: 'SupportHub',
    subtitle: 'Gestão Inteligente de Suporte',
    logo: null
  });

  const updateSystemSettings = (newSettings) => {
    setSystemSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Simulação de login inicial
  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setActivePage('dashboard');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    if (isCreatingTicket) {
      return <NewTicket onBack={() => setIsCreatingTicket(false)} />;
    }

    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'tickets':
        return <MyTickets />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activePage={activePage} setActivePage={(page) => {
        setActivePage(page);
        setIsCreatingTicket(false);
      }} />

      <div className="flex-1 ml-64 flex flex-col">
        <Header 
          user={user} 
          onLogout={handleLogout} 
          onNewTicket={() => setIsCreatingTicket(true)} 
        />

        <main className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={isCreatingTicket ? 'new-ticket' : activePage}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="p-8 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
          &copy; 2026 Maximo Brasil Suporte - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default App;
