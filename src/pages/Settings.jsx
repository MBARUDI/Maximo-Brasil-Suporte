import { useState } from 'react';
import { User, Shield, Bell, Settings as SettingsIcon, Database, HelpCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'users', label: 'Usuários', icon: Users },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'system', label: 'Sistema', icon: SettingsIcon },
    { id: 'categories', label: 'Categorias & Status', icon: Database },
    { id: 'help', label: 'Ajuda', icon: HelpCircle },
  ];

  return (
    <div className="p-8 flex-1">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy-900 tracking-tight mb-2">Configurações</h2>
        <p className="text-slate-500 font-medium">Personalize sua experiência e gerencie as preferências do sistema.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Navegação de Abas */}
        <div className="w-full lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'text-slate-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Conteúdo da Aba */}
        <div className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          {activeTab === 'profile' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Perfil do Usuário</h3>
              <div className="flex items-center gap-6 mb-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                    <User size={40} className="text-slate-400" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all scale-90 group-hover:scale-100">
                    <SettingsIcon size={14} />
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">João Duarte</h4>
                  <p className="text-slate-500 text-sm">Técnico Nível 2</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nome Completo</label>
                  <input type="text" defaultValue="João Duarte" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">E-mail</label>
                  <input type="email" defaultValue="joao.duarte@empresa.com" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Telefone</label>
                  <input type="text" defaultValue="(11) 98888-7777" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Cargo</label>
                  <input type="text" defaultValue="Técnico Nível 2" readOnly className="w-full px-4 py-3 bg-slate-50/50 border-transparent rounded-xl text-sm text-slate-400 outline-none" />
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                  Salvar Alterações
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-800">Gestão de Usuários</h3>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all">
                  Novo Usuário
                </button>
              </div>
              <div className="overflow-hidden border border-slate-100 rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Nome</th>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Cargo</th>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase">E-mail</th>
                      <th className="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { name: 'João Duarte', role: 'Técnico', email: 'joao@hub.com' },
                      { name: 'Admin Hub', role: 'Administrador', email: 'admin@hub.com' },
                      { name: 'Maria Silva', role: 'Cliente', email: 'maria@empresa.com' },
                    ].map((u, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 text-sm font-bold text-slate-700">{u.name}</td>
                        <td className="px-6 py-4 text-sm text-slate-500">{u.role}</td>
                        <td className="px-6 py-4 text-sm text-slate-500">{u.email}</td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <button className="text-xs font-bold text-blue-600 hover:underline">Editar</button>
                          <button className="text-xs font-bold text-red-500 hover:underline">Excluir</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Segurança e Acesso</h3>
              <div className="max-w-md space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Senha Atual</label>
                  <input type="password" underline className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nova Senha</label>
                  <input type="password" underline className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Confirmar Nova Senha</label>
                  <input type="password" underline className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
                <button className="w-full py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all shadow-lg shadow-navy-900/20">
                  Trocar Senha
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'system' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Personalização do Sistema</h3>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Título do Site</label>
                    <input type="text" defaultValue="SupportHub" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Subtítulo</label>
                    <input type="text" defaultValue="Gestão Inteligente de Suporte" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                  </div>
                </div>

                <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                  <h4 className="font-bold text-red-700 flex items-center gap-2 mb-2">
                    <Info size={18} /> Zona de Perigo
                  </h4>
                  <p className="text-red-600 text-sm mb-4">Esta ação não pode ser desfeita. Todos os chamados serão permanentemente removidos do banco de dados.</p>
                  <button className="px-6 py-2.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all">
                    Excluir Todos os Chamados
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'categories' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Categorias e Status</h3>
                  <p className="text-slate-500 text-sm">Gerencie as opções disponíveis para os chamados.</p>
                </div>
                <button className="px-4 py-2 bg-navy-900 text-white text-sm font-bold rounded-xl hover:bg-navy-800 transition-all">
                  Nova Categoria
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-4 bg-blue-500 rounded-full"></span>
                    Categorias
                  </h4>
                  <ul className="space-y-2">
                    {['Informática/TI', 'Elétrica', 'Predial/Civil', 'Segurança', 'Telecom'].map((cat, i) => (
                      <li key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                        <span className="text-sm font-medium text-slate-600">{cat}</span>
                        <button className="text-xs font-bold text-red-500 hover:text-red-700">Remover</button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-2 h-4 bg-amber-500 rounded-full"></span>
                    Status de Chamados
                  </h4>
                  <ul className="space-y-2">
                    {['Pendente', 'Em Progresso', 'Validando', 'Concluído', 'Cancelado'].map((status, i) => (
                      <li key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-white border border-transparent hover:border-slate-200 transition-all">
                        <span className="text-sm font-medium text-slate-600">{status}</span>
                        <button className="text-xs font-bold text-red-500 hover:text-red-700">Remover</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'help' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6">Informações de Ajuda</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Texto de Ajuda (Máx 20 caracteres)</label>
                  <input type="text" maxLength={20} className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" placeholder="Ex: Suporte 24h" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">E-mail de Suporte</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Telefone de Suporte</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Site de Documentação</label>
                  <input type="url" className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none" />
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                  Atualizar Informações
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
