import { useState } from 'react';
import { LogIn, Lock, Mail, Settings, Shield, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Lista de usuários de teste
    const users = [
      { id: '1', email: 'admin@hub.com', password: 'admin', name: 'Administrador Hub', role: 'administrador' },
      { id: '2', email: 'marcelobarudi71@gmail.com', password: '123456', name: 'Marcelo Barudi', role: 'administrador' }
    ];

    const user = users.find(u => (u.email === email || (email === 'admin' && u.email === 'admin@hub.com')) && u.password === password);

    if (user) {
      onLogin(user);
    } else {
      setError('E-mail ou senha incorretos.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-600/20 rotate-3">
            <Settings className="text-white animate-spin-slow" size={32} />
          </div>
          <h1 className="text-4xl font-black text-navy-900 tracking-tight mb-2">SupportHub</h1>
          <p className="text-slate-500 font-medium italic">Acesse seu painel de atendimento</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">E-mail</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none border hover:border-slate-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex justify-between">
                <span>Senha</span>
                <button type="button" className="text-blue-600 hover:underline lowercase">Esqueci a senha</button>
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha secreta" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none border hover:border-slate-200"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs font-bold text-red-500 text-center bg-red-50 py-2 rounded-lg">{error}</p>
            )}

            <button 
              type="submit" 
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95 mt-4"
            >
              <LogIn size={20} />
              Entrar no Sistema
            </button>
          </form>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-1"><Shield size={12} /> Seguro</div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <div>v1.0.0</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
