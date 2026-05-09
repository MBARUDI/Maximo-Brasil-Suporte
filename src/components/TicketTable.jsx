import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const TicketTable = ({ categoryFilter }) => {
  const [statusFilter, setStatusFilter] = useState('all');

  const tickets = [
    { 
      id: '#TK-2045', 
      subject: 'Servidor de arquivos inacessível no setor financeiro', 
      category: 'Informática/TI', 
      priority: 'Crítica', 
      status: 'Em Progresso',
      catId: 'it'
    },
    { 
      id: '#TK-2046', 
      subject: 'Manutenção preventiva no gerador principal', 
      category: 'Elétrica', 
      priority: 'Alta', 
      status: 'Pendente',
      catId: 'electric'
    },
    { 
      id: '#TK-2047', 
      subject: 'Vazamento detectado na tubulação do 3º andar', 
      category: 'Predial/Civil', 
      priority: 'Média', 
      status: 'Validando',
      catId: 'civil'
    },
    { 
      id: '#TK-2048', 
      subject: 'Câmera do estacionamento sem sinal (CFTV)', 
      category: 'Segurança', 
      priority: 'Alta', 
      status: 'Pendente',
      catId: 'security'
    },
    { 
      id: '#TK-2049', 
      subject: 'Instalação de novos pontos de rede (WIFI 6)', 
      category: 'Telecom', 
      priority: 'Baixa', 
      status: 'Em Progresso',
      catId: 'telecom'
    },
  ];

  const filteredTickets = tickets.filter(t => {
    const matchCat = categoryFilter === 'all' || t.catId === categoryFilter;
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchCat && matchStatus;
  });

  const priorityStyles = {
    'Crítica': 'text-red-700 bg-red-100 border-red-200',
    'Alta': 'text-orange-700 bg-orange-100 border-orange-200',
    'Média': 'text-amber-700 bg-amber-100 border-amber-200',
    'Baixa': 'text-blue-700 bg-blue-100 border-blue-200',
  };

  const statusStyles = {
    'Pendente': 'bg-slate-100 text-slate-600',
    'Em Progresso': 'bg-blue-100 text-blue-600',
    'Validando': 'bg-purple-100 text-purple-600',
    'Concluído': 'bg-emerald-100 text-emerald-600',
  };

  const categoryColors = {
    'Informática/TI': 'bg-blue-600',
    'Elétrica': 'bg-amber-500',
    'Predial/Civil': 'bg-orange-500',
    'Segurança': 'bg-indigo-600',
    'Telecom': 'bg-purple-600',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <h2 className="text-xl font-bold text-slate-800">Chamados Recentes</h2>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-400 uppercase">Filtrar Status:</span>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-blue-100 transition-all"
          >
            <option value="all">Todos os Status</option>
            <option value="Pendente">Pendente</option>
            <option value="Em Progresso">Em Progresso</option>
            <option value="Validando">Validando</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">ID/Ticket</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Assunto</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Categoria</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Prioridade</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredTickets.map((ticket, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-4 text-sm font-bold text-navy-700">{ticket.id}</td>
                <td className="px-6 py-4">
                  <p className="text-sm font-semibold text-slate-800 line-clamp-1">{ticket.subject}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${categoryColors[ticket.category]}`}></span>
                    <span className="text-sm font-medium text-slate-600">{ticket.category}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold border ${priorityStyles[ticket.priority]}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`badge ${statusStyles[ticket.status]}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredTickets.length === 0 && (
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-slate-300" size={32} />
          </div>
          <p className="text-slate-500 font-medium">Nenhum chamado encontrado para este filtro.</p>
        </div>
      )}

      <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex justify-center">
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
          Ver todos os chamados
        </button>
      </div>
    </div>
  );
};

export default TicketTable;
