import { useState } from 'react';
import { Send, FileText, AlertTriangle, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const NewTicket = ({ onBack }) => {
  return (
    <div className="p-8 flex-1 max-w-4xl mx-auto w-full">
      <div className="mb-8">
        <button onClick={onBack} className="text-sm font-bold text-blue-600 hover:text-blue-800 mb-4 transition-colors">
          &larr; Voltar ao Painel
        </button>
        <h2 className="text-3xl font-black text-navy-900 tracking-tight mb-2">Novo Chamado de Suporte</h2>
        <p className="text-slate-500 font-medium">Preencha os detalhes abaixo para que nossa equipe possa ajudar você.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8"
      >
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                <FileText size={14} /> Assunto do Chamado
              </label>
              <input 
                type="text" 
                placeholder="Ex: Problema com o monitor" 
                className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none border hover:border-slate-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
                <Layers size={14} /> Categoria
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none border hover:border-slate-200 appearance-none">
                <option value="">Selecione uma categoria</option>
                <option value="it">Informática/TI</option>
                <option value="electric">Elétrica</option>
                <option value="civil">Predial/Civil</option>
                <option value="security">Segurança</option>
                <option value="telecom">Telecom</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-2">
              <AlertTriangle size={14} /> Prioridade
            </label>
            <div className="flex gap-4">
              {['Baixa', 'Média', 'Alta', 'Crítica'].map((p) => (
                <label key={p} className="flex-1 cursor-pointer group">
                  <input type="radio" name="priority" value={p} className="sr-only" />
                  <div className="text-center p-3 rounded-xl border border-slate-100 bg-slate-50 text-xs font-bold text-slate-500 group-hover:bg-white group-hover:border-blue-200 transition-all peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-600">
                    {p}
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Descrição Detalhada</label>
            <textarea 
              rows={5} 
              placeholder="Descreva o problema com o máximo de detalhes possível..." 
              className="w-full px-4 py-3 bg-slate-50 border-transparent rounded-xl text-sm focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all outline-none border hover:border-slate-200 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onBack} className="px-6 py-3 font-bold text-slate-500 hover:text-slate-700 transition-colors">
              Cancelar
            </button>
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95">
              <Send size={18} />
              Enviar Chamado
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default NewTicket;
