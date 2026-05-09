import { useState } from 'react';
import TicketTable from '../components/TicketTable';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

const MyTickets = ({ searchQuery }) => {
  return (
    <div className="p-8 flex-1">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-navy-900 tracking-tight mb-2">Meus Chamados</h2>
          <p className="text-slate-500 font-medium">Gerencie e acompanhe todos os seus tickets de suporte.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Pesquisar meus tickets..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-blue-100 outline-none transition-all w-64"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TicketTable categoryFilter="all" />
      </motion.div>
    </div>
  );
};

export default MyTickets;
