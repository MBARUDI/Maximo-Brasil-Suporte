import { MessageSquare, Clock, Wrench, CheckCircle2 } from 'lucide-react';

const StatusCards = () => {
  const stats = [
    { 
      label: 'Chamados Abertos', 
      value: '24', 
      icon: MessageSquare, 
      color: 'blue',
      trend: '+12% desde ontem'
    },
    { 
      label: 'Em Atendimento', 
      value: '12', 
      icon: Clock, 
      color: 'amber',
      trend: 'Estável'
    },
    { 
      label: 'Aguardando Peças', 
      value: '08', 
      icon: Wrench, 
      color: 'rose',
      trend: '-5% esta semana'
    },
    { 
      label: 'Concluídos Hoje', 
      value: '16', 
      icon: CheckCircle2, 
      color: 'emerald',
      trend: 'Meta atingida'
    },
  ];

  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
    rose: 'bg-rose-50 text-rose-600 border-rose-100',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="card-stat group">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl border ${colors[stat.color]}`}>
              <stat.icon size={24} />
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
              {stat.trend}
            </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">{stat.label}</p>
          </div>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className={`h-full transition-all duration-1000 w-[70%] ${stat.color === 'blue' ? 'bg-blue-500' : stat.color === 'amber' ? 'bg-amber-500' : stat.color === 'rose' ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;
