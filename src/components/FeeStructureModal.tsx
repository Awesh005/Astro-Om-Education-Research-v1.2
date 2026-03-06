import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download } from 'lucide-react';

interface FeeStructureModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  feeStructure: {
    cbse: string;
    state: string;
  };
}

export default function FeeStructureModal({ isOpen, onClose, courseName, feeStructure }: FeeStructureModalProps) {
  const [activeTab, setActiveTab] = useState<'cbse' | 'state'>('cbse');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white shrink-0">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Fee Structure</h2>
                <p className="text-sm text-slate-500">{courseName}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X size={20} className="text-slate-500" />
              </button>
            </div>
            
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-center gap-4 shrink-0">
              <button
                onClick={() => setActiveTab('cbse')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'cbse'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                CBSE Board
              </button>
              <button
                onClick={() => setActiveTab('state')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'state'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                State Board
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 bg-slate-50 flex items-center justify-center">
              <div className="relative group w-full">
                <img 
                  src={activeTab === 'cbse' ? feeStructure.cbse : feeStructure.state} 
                  alt={`${courseName} ${activeTab === 'cbse' ? 'CBSE' : 'State'} Board Fee Structure`}
                  className="w-full h-auto rounded-xl shadow-lg border border-slate-200"
                />
                <a 
                  href={activeTab === 'cbse' ? feeStructure.cbse : feeStructure.state}
                  download
                  className="absolute bottom-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-50 text-blue-600 transition-all opacity-0 group-hover:opacity-100"
                  title="Download Image"
                >
                  <Download size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-100 bg-white shrink-0 text-center text-xs text-slate-500">
              * Fee are subject to change. Please contact administration for latest updates.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
