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
  const [searchQuery, setSearchQuery] = useState('');
  const [tickets, setTickets] = useState([
    { 
      id: '#TK-2045', 
      subject: 'Servidor de arquivos inacessível no setor financeiro', 
      category: 'Informática/TI', 
      priority: 'Crítica', 
      status: 'Em Progresso',
      catId: 'it',
      created_at: '2026-05-09T10:00:00Z',
      closed_at: null,
      user_id: '1'
    },
    { 
      id: '#TK-2046', 
      subject: 'Manutenção preventiva no gerador principal', 
      category: 'Elétrica', 
      priority: 'Alta', 
      status: 'Pendente',
      catId: 'electric',
      created_at: '2026-05-09T11:30:00Z',
      closed_at: null,
      user_id: '2'
    },
    { 
      id: '#TK-2047', 
      subject: 'Vazamento detectado na tubulação do 3º andar', 
      category: 'Predial/Civil', 
      priority: 'Média', 
      status: 'Validando',
      catId: 'civil',
      created_at: '2026-05-08T15:20:00Z',
      closed_at: null,
      user_id: '1'
    },
  ]);

  const addTicket = (newTicket) => {
    const ticket = {
      ...newTicket,
      id: `#TK-${Math.floor(Math.random() * 9000) + 1000}`,
      status: 'Pendente',
      created_at: new Date().toISOString(),
      closed_at: null,
      user_id: user.id
    };
    setTickets([ticket, ...tickets]);
  };

  const updateTicketStatus = (ticketId, newStatus) => {
    setTickets(tickets.map(t => {
      if (t.id === ticketId) {
        return { 
          ...t, 
          status: newStatus, 
          closed_at: newStatus === 'Concluído' ? new Date().toISOString() : t.closed_at 
        };
      }
      return t;
    }));
  };

  const deleteTicket = (ticketId) => {
    setTickets(tickets.filter(t => t.id !== ticketId));
  };

  const clearAllTickets = () => {
    setTickets([]);
  };

  const [systemSettings, setSystemSettings] = useState({
    title: 'SupportHub',
    subtitle: 'Gestão Inteligente de Suporte',
    logo: null
  });

  const updateSystemSettings = (newSettings) => {
    setSystemSettings(prev => ({ ...prev, ...newSettings }));
  };

  const updateUser = (newData) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  // Simulação de login inicial
  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    setActivePage('dashboard');
  };

  const [helpInfo, setHelpInfo] = useState({
    text: 'Suporte Maximo',
    email: 'ajuda@maximo.com.br',
    site: 'https://ajuda.maximo.com.br',
    phone: '(11) 4004-0000'
  });

  const updateHelpInfo = (newInfo) => {
    setHelpInfo(prev => ({ ...prev, ...newInfo }));
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    if (isCreatingTicket) {
      return (
        <NewTicket 
          onBack={() => setIsCreatingTicket(false)} 
          onSubmit={(data) => {
            addTicket(data);
            setIsCreatingTicket(false);
            setActivePage('tickets');
          }} 
        />
      );
    }

    switch (activePage) {
      case 'dashboard':
        return (
          <Dashboard 
            searchQuery={searchQuery} 
            tickets={tickets} 
            onUpdateStatus={updateTicketStatus} 
            onDelete={deleteTicket} 
          />
        );
      case 'tickets':
        return (
          <MyTickets 
            searchQuery={searchQuery} 
            tickets={tickets} 
            onUpdateStatus={updateTicketStatus} 
            onDelete={deleteTicket} 
            user={user}
          />
        );
      case 'reports':
        return <Reports tickets={tickets} />;
      case 'settings':
        return (
          <Settings 
            user={user} 
            updateUser={updateUser}
            systemSettings={systemSettings} 
            updateSystemSettings={updateSystemSettings}
            helpInfo={helpInfo}
            updateHelpInfo={updateHelpInfo}
            onClearAllTickets={clearAllTickets}
          />
        );
      default:
        return <Dashboard searchQuery={searchQuery} tickets={tickets} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar 
        activePage={activePage} 
        setActivePage={(page) => {
          setActivePage(page);
          setIsCreatingTicket(false);
          setSearchQuery(''); // Limpar busca ao mudar de página
        }} 
        systemSettings={systemSettings}
      />

      <div className="flex-1 ml-64 flex flex-col">
        <Header 
          user={user} 
          onLogout={handleLogout} 
          onNewTicket={() => setIsCreatingTicket(true)} 
          helpInfo={helpInfo}
          systemSettings={systemSettings}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
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
