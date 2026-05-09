import { Search, Bell, User, Plus, HelpCircle, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40 backdrop-blur-md bg-white/80">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar chamados por título ou usuário..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl text-sm transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn-primary shadow-lg shadow-navy-900/10 active:scale-95 transition-transform">
          <Plus size={20} />
          <span className="hidden sm:inline">Novo Chamado</span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors" title="Ajuda">
          <HelpCircle size={20} />
        </button>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <button className="flex items-center gap-2 p-1 hover:bg-slate-100 rounded-full pr-3 transition-colors group relative">
          <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 font-bold text-xs border border-navy-200 overflow-hidden">
            JD
          </div>
          <span className="text-sm font-semibold text-slate-700 hidden md:block">João Duarte</span>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
      </div>
    </header>
  );
};

export default Header;
