import { motion } from 'framer-motion';
import { BarChart, PieChart, TrendingUp, Users, Calendar } from 'lucide-react';

const Reports = () => {
  return (
    <div className="p-8 flex-1">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy-900 tracking-tight mb-2">Relatórios e Métricas</h2>
        <p className="text-slate-500 font-medium">Analise o desempenho do suporte e a satisfação dos usuários.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp size={20} className="text-blue-500" /> Volume de Chamados Semanal
            </h3>
            <select className="bg-slate-50 border-none rounded-lg text-xs font-bold px-3 py-1.5 outline-none">
              <option>Últimos 7 dias</option>
              <option>Últimos 30 dias</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-4">
            {[45, 60, 35, 70, 55, 80, 50].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-blue-100 rounded-t-lg relative group cursor-pointer hover:bg-blue-600 transition-colors"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h} tickets
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
          </div>
        </div>

        <div className="bg-navy-900 p-8 rounded-3xl text-white flex flex-col justify-between overflow-hidden relative shadow-xl shadow-navy-900/20">
          <div className="relative z-10">
            <h3 className="font-bold mb-1">Resumo do Mês</h3>
            <p className="text-slate-400 text-sm">Maio 2026</p>
          </div>
          
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-black">128</p>
                <p className="text-xs text-slate-400 font-bold uppercase">Total Resolvido</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-400 text-sm font-bold">+18%</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-navy-800 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-blue-500"></div>
            </div>
          </div>

          <div className="absolute -right-4 -bottom-4 opacity-10">
            <BarChart size={160} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Tempo Médio Resposta', value: '14 min', icon: Calendar, color: 'blue' },
          { label: 'Satisfação Média', value: '4.8/5', icon: Users, color: 'purple' },
          { label: 'Resolução 1º Contato', value: '72%', icon: BarChart, color: 'emerald' },
          { label: 'SLA Atendido', value: '94%', icon: PieChart, color: 'amber' },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${
              item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
              item.color === 'purple' ? 'bg-purple-50 text-purple-600' :
              item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
              'bg-amber-50 text-amber-600'
            }`}>
              <item.icon size={20} />
            </div>
            <p className="text-2xl font-black text-slate-800">{item.value}</p>
            <p className="text-xs font-bold text-slate-500 uppercase mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
