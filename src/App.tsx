import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Calendar as CalendarIcon,
  Moon,
  ArrowLeft,
  X,
  Search,
  LayoutGrid,
  Settings,
  Trash2,
  ShieldCheck,
  Info,
  Package,
  Sparkles,
  User
} from 'lucide-react';
import { cn } from './lib/utils';
import { CONSTELLATIONS, Constellation } from './constants';
import { useConstellation, CalendarType, HistoryRecord } from './hooks';

// --- Privacy and Agreement Components ---

const PrivacyModal = ({ onAccept, onDecline, onOpenAgreement, onOpenPrivacy }: { 
  onAccept: () => void, 
  onDecline: () => void, 
  onOpenAgreement: () => void, 
  onOpenPrivacy: () => void 
}) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-9999">
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white w-full max-w-sm shadow-2xl max-h-[80vh] overflow-y-auto rounded-[28px]"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1D1D1F] mb-6 text-center pt-4">
          用户协议与隐私政策
        </h3>
        <div className="mb-6">
          <p className="text-base text-[#1D1D1F] mb-3">(1)《隐私政策》中关于个人设备用户信息的收集和使用的说明。</p>
          <p className="text-base text-[#1D1D1F]">(2)《隐私政策》中与第三方SDK类服务商数据共享、相关信息收集和使用说明。</p>
        </div>
        <div className="mb-6">
          <p className="text-sm text-[#86868B] mb-2">用户协议和隐私政策说明：</p>
          <p className="text-sm text-[#424245]">
            阅读完整的
            <span 
              onClick={onOpenAgreement}
              className="text-[#0071E3] hover:underline cursor-pointer font-medium"
            >
              《用户服务协议》
            </span>
            和
            <span 
              onClick={onOpenPrivacy}
              className="text-[#0071E3] hover:underline cursor-pointer font-medium"
            >
              《隐私政策》
            </span>
            了解详细内容。
          </p>
        </div>
      </div>
      <div className="flex border-t border-gray-200">
        <button 
          onClick={onDecline}
          className="flex-1 py-4 text-base font-medium text-[#1D1D1F] bg-white border-r border-gray-200 rounded-bl-[28px] hover:bg-gray-50 transition-colors"
        >
          不同意
        </button>
        <button 
          onClick={onAccept}
          className="flex-1 py-4 text-base font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-br-[28px] transition-colors"
        >
          同意并继续
        </button>
      </div>
    </motion.div>
  </div>
);

const AgreementModal = ({ onClose, title, content }: { onClose: () => void, title: string, content: React.ReactNode }) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-9999">
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-[28px] w-full max-w-3xl h-[85vh] overflow-hidden shadow-2xl border border-black/5 flex flex-col"
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 text-[#0071E3] rounded-xl flex items-center justify-center">
            <ShieldCheck size={22} />
          </div>
          <h2 className="text-xl font-bold text-[#1D1D1F]">{title}</h2>
        </div>
        <button 
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#86868B] active:scale-90 transition-transform hover:bg-gray-200"
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto bg-[#F5F5F7] p-6">
        {content}
      </div>
    </motion.div>
  </div>
);

const PrivacyPolicyContent = () => (
  <div className="max-w-none text-gray-800">
    <h1 className="text-2xl font-bold text-[#0071E3] text-center mb-2">🔒 隐私政策</h1>
    <p className="text-center text-gray-600 mb-6"><strong>生效日期</strong>：2026年03月15日</p>

    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-[#0071E3] mb-6">
      <p className="text-gray-800">欢迎使用「月序星座」（以下简称"本应用"）。本应用由<strong>光年跃迁（温州）科技有限公司</strong>（以下简称"我们"）开发并运营。我们深知个人信息对您的重要性，将严格遵守《中华人民共和国个人信息保护法》等相关法律法规，保护您的个人信息安全。</p>
    </div>

    <p className="mb-6 text-gray-800">本隐私政策旨在说明我们如何收集、使用、存储和保护您在使用本应用过程中提供的个人信息，以及您对这些信息所享有的权利。请您在使用本应用前仔细阅读并充分理解本政策的全部内容，尤其是加粗的条款。如您对本政策有任何疑问、意见或建议，可通过本政策末尾提供的联系方式与我们联系。</p>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">一、我们收集的信息</h2>
    <p className="mb-4 text-gray-800">在您使用本应用的过程中，我们会收集以下信息，以提供、维护和改进我们的服务：</p>
    <ol className="list-decimal pl-6 mb-6">
      <li className="mb-3 text-gray-800"><strong>星座查询数据</strong>：您在使用本应用过程中主动录入的所有<strong>生日信息、查询记录</strong>等。这些数据是本应用的核心功能内容，用于为您提供星座查询、历史记录等服务。</li>
      <li className="mb-3 text-gray-800"><strong>设备信息</strong>：为了保障应用的稳定运行和优化用户体验，我们会自动收集您的设备相关信息，包括但不限于<strong>设备型号、操作系统版本、设备标识符（如IMEI/Android ID）、IP地址</strong>等。</li>
    </ol>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">二、我们如何使用收集的信息</h2>
    <p className="mb-4 text-gray-800">我们仅会在以下合法、正当、必要的范围内使用您的个人信息：</p>
    <ol className="list-decimal pl-6 mb-6">
      <li className="mb-3 text-gray-800"><strong>提供和改进服务</strong>：使用您的星座查询数据来实现星座查询、历史记录等核心功能；通过分析设备信息和使用数据，优化应用性能，修复已知问题，提升用户体验。</li>
      <li className="mb-3 text-gray-800"><strong>数据分析和统计</strong>：在对您的个人信息进行匿名化或去标识化处理后，进行内部数据分析和统计，以了解用户群体的使用习惯和需求，从而更好地规划和改进产品功能。</li>
    </ol>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">三、我们如何共享、转让和公开披露信息</h2>
    <p className="mb-4 text-gray-800">我们郑重承诺，严格保护您的个人信息，不会在以下情形之外向任何第三方共享、转让或公开披露您的信息：</p>
    <ol className="list-decimal pl-6 mb-6">
      <li className="mb-3 text-gray-800"><strong>法定情形</strong>：根据法律法规的规定、行政或司法机关的强制性要求，我们可能会向有关部门披露您的相关信息。</li>
      <li className="mb-3 text-gray-800"><strong>获得明确同意</strong>：在获得您的明确书面同意后，我们才会向第三方共享您的个人信息。</li>
      <li className="mb-3 text-gray-800"><strong>业务必要且合规</strong>：为了实现本政策第二条所述的目的，我们可能会与提供技术支持、支付服务或其他必要服务的合作伙伴共享必要的信息，但我们会要求其严格遵守本政策及相关法律法规，并对您的信息承担保密义务。</li>
    </ol>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">四、我们如何存储和保护信息</h2>
    <ol className="list-decimal pl-6 mb-6">
      <li className="mb-3 text-gray-800"><strong>存储地点和期限</strong>：您的个人信息将存储于中华人民共和国境内的安全服务器上。我们会在实现本政策所述目的所必需的最短时间内保留您的信息，超出此期限后，我们将对您的信息进行删除或匿名化处理。</li>
      <li className="mb-3 text-gray-800"><strong>安全措施</strong>：我们采用符合行业标准的技术手段和安全管理措施来保护您的个人信息，包括但不限于数据加密、访问控制、安全审计等，以防止信息泄露、丢失、篡改或被未经授权的访问。</li>
    </ol>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">五、您的权利</h2>
    <p className="mb-4 text-gray-800">根据相关法律法规，您对您的个人信息享有以下权利：</p>
    <ol className="list-decimal pl-6 mb-6">
      <li className="mb-3 text-gray-800"><strong>访问权</strong>：您可以随时在本应用中查看和管理您的查询历史记录。</li>
      <li className="mb-3 text-gray-800"><strong>删除权</strong>：您可以随时删除查询历史记录，应用将立即删除相关数据。</li>
      <li className="mb-3 text-gray-800"><strong>数据导出</strong>：本应用所有数据存储在您的设备本地，您可以通过设备备份等方式导出您的数据。</li>
    </ol>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">六、未成年人保护</h2>
    <p className="mb-6 text-gray-800">我们非常重视对未成年人个人信息的保护。如您是未满14周岁的未成年人，在使用本应用前，应在监护人的指导下仔细阅读本政策，并征得监护人的同意。如我们发现自己在未事先获得监护人可验证同意的情况下收集了未成年人的个人信息，将立即删除相关数据。</p>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">七、本政策的更新</h2>
    <p className="mb-6 text-gray-800">我们可能会根据法律法规的更新、业务的调整或技术的发展，适时对本隐私政策进行修订。修订后的政策将在本应用内显著位置公示，并在生效前通过合理方式通知您。如您继续使用本应用，即表示您同意接受修订后的政策。</p>

    <h2 className="text-xl font-semibold mt-8 mb-4 border-b-2 border-gray-200 pb-2 text-gray-900">八、联系我们</h2>
    <p className="mb-4 text-gray-800">如您对本隐私政策有任何疑问、意见或建议，或需要行使您的相关权利，请通过以下方式与我们联系：</p>
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
      <p className="mb-2 text-gray-800"><strong>电子邮箱</strong>：Jp112022@163.com</p>
    </div>

    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
      <p className="mb-2 text-gray-600">感谢您使用月序星座！</p>
      <p className="mb-4 text-gray-600">我们致力于为您提供安全、便捷的星座查询服务。</p>
      <p className="text-sm text-gray-500">© 2026 光年跃迁（温州）科技有限公司 版权所有</p>
    </div>
  </div>
);

const UserAgreementContent = () => (
  <div className="max-w-none text-gray-800">
    <h1 className="text-2xl font-bold text-[#0071E3] text-center mb-4">用户服务协议</h1>
    <p className="text-center text-gray-600 mb-8">更新日期：2026年3月20日</p>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">1. 协议的接受</h2>
    <p className="mb-3 text-gray-800">欢迎使用「月序星座」应用（以下简称「本应用」）。</p>
    <p className="mb-3 text-gray-800">本协议是您与光年跃迁（温州）科技有限公司（以下简称「我们」）之间关于使用本应用的法律协议。</p>
    <p className="mb-6 text-gray-800">通过下载、安装或使用本应用，您表示同意接受本协议的全部条款和条件。</p>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">2. 服务内容</h2>
    <p className="mb-3 text-gray-800">本应用提供以下服务：</p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li className="text-gray-800">星座查询（支持阳历和阴历）</li>
      <li className="text-gray-800">星座详情查看</li>
      <li className="text-gray-800">星座配对指数分析</li>
      <li className="text-gray-800">查询历史记录管理</li>
    </ul>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">3. 用户义务</h2>
    <p className="mb-3 text-gray-800">作为本应用的用户，您同意：</p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li className="text-gray-800">遵守本协议的所有条款</li>
      <li className="text-gray-800">不使用本应用进行任何非法活动</li>
      <li className="text-gray-800">不干扰本应用的正常运行</li>
      <li className="text-gray-800">保护您的设备安全，防止未授权访问</li>
    </ul>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">4. 知识产权</h2>
    <p className="mb-3 text-gray-800">本应用的所有内容，包括但不限于文字、图像、音频、视频、软件等，均受知识产权法律保护。</p>
    <p className="mb-6 text-gray-800">未经我们的书面许可，您不得复制、修改、分发或商业使用本应用的任何内容。</p>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">5. 免责声明</h2>
    <p className="mb-3 text-gray-800">本应用按「原样」提供，不做任何形式的保证。</p>
    <p className="mb-3 text-gray-800">我们不保证：</p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li className="text-gray-800">本应用将符合您的要求</li>
      <li className="text-gray-800">本应用将无中断、及时、安全或无错误地运行</li>
      <li className="text-gray-800">本应用的使用结果将是准确或可靠的</li>
    </ul>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">6. 终止</h2>
    <p className="mb-3 text-gray-800">我们有权在任何时候，出于任何原因，终止或暂停您对本应用的访问。</p>
    <p className="mb-6 text-gray-800">您也可以随时停止使用本应用。</p>
    
    <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-900">7. 适用法律</h2>
    <p className="mb-3 text-gray-800">本协议受中华人民共和国法律管辖。</p>
    <p className="mb-6 text-gray-800">任何与本协议相关的争议，应通过友好协商解决；协商不成的，应提交至温州市有管辖权的人民法院诉讼解决。</p>
  </div>
);

// --- Components ---

const StarBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="star-bg">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
          } as any}
        />
      ))}
    </div>
  );
};

const Card = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: (e: React.MouseEvent) => void }) => (
  <div 
    onClick={onClick}
    className={cn("bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl", className)}
  >
    {children}
  </div>
);

const Button = ({ 
  children, 
  onClick, 
  className, 
  variant = 'primary' 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}) => {
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20",
    secondary: "bg-white/10 hover:bg-white/20 text-white",
    ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white",
    danger: "bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-2xl font-medium transition-all duration-200 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
};

const ConfirmModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onConfirm: () => void; 
  title: string; 
  message: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
            onClick={onClose}
          >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-xs"
          >
            <Card className="p-6 text-center space-y-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <Trash2 className="w-8 h-8 text-red-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{message}</p>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={onClose} className="flex-1 py-3 px-0">
                  取消
                </Button>
                <Button variant="danger" onClick={() => { onConfirm(); onClose(); }} className="flex-1 py-3 px-0">
                  确认清空
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Pages ---

const HomePage = ({ 
  onSelect, 
  history, 
  calculateConstellation 
}: { 
  onSelect: (c: Constellation, dateStr: string, type: CalendarType) => void;
  history: HistoryRecord[];
  calculateConstellation: (y: number, m: number, d: number, type: CalendarType) => Constellation;
}) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [rawInput, setRawInput] = useState(new Date().toISOString().split('T')[0]);
  const [type, setType] = useState<CalendarType>('solar');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 8) val = val.slice(0, 8);
    
    let formatted = val;
    if (val.length > 4) {
      formatted = val.slice(0, 4) + '-' + val.slice(4);
    }
    if (val.length > 6) {
      formatted = formatted.slice(0, 7) + '-' + formatted.slice(7);
    }
    
    setRawInput(formatted);
    setError(null);

    // If it's a full date, try to sync it to the actual date state
    if (val.length === 8) {
      const y = parseInt(val.slice(0, 4));
      const m = parseInt(val.slice(4, 6));
      const d = parseInt(val.slice(6, 8));
      
      const testDate = new Date(y, m - 1, d);
      if (testDate.getFullYear() === y && testDate.getMonth() === m - 1 && testDate.getDate() === d) {
        setDate(`${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
      }
    }
  };

  const handleNativeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setDate(val);
    setRawInput(val);
    setError(null);
  };

  const handleSearch = () => {
    const parts = rawInput.split('-');
    if (parts.length !== 3 || parts.some(p => !p)) {
      setError('请输入正确的日期格式 (如: 19950520)');
      return;
    }

    const [y, m, d] = parts.map(Number);
    const testDate = new Date(y, m - 1, d);
    
    if (y < 1900 || y > 2100) {
      setError('年份需在 1900-2100 之间');
      return;
    }

    if (!(testDate.getFullYear() === y && testDate.getMonth() === m - 1 && testDate.getDate() === d)) {
      setError('无效的日期');
      return;
    }

    const constellation = calculateConstellation(y, m, d, type);
    onSelect(constellation, `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`, type);
  };

  return (
    <div className="space-y-8 pb-24">
      <header className="pt-12 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block p-3 rounded-full bg-indigo-500/20 mb-4"
        >
          <Moon className="w-8 h-8 text-indigo-400" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold tracking-tight mb-2"
        >
          月序星座
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-sm"
        >
          探索星辰的奥秘，发现真实的自我
        </motion.p>
      </header>

      <Card className="mx-4">
        <div className="space-y-6">
          <div className="flex bg-white/5 p-1 rounded-2xl">
            <button
              onClick={() => setType('solar')}
              className={cn(
                "flex-1 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2",
                type === 'solar' ? "bg-indigo-600 text-white shadow-lg" : "text-white/50"
              )}
            >
              阳历
            </button>
            <button
              onClick={() => setType('lunar')}
              className={cn(
                "flex-1 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2",
                type === 'lunar' ? "bg-indigo-600 text-white shadow-lg" : "text-white/50"
              )}
            >
              阴历
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end ml-1">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider">输入生日 (YYYYMMDD)</label>
              {error && <span className="text-[10px] text-red-400 font-medium">{error}</span>}
            </div>
            <div className="relative group">
              <input
                type="text"
                inputMode="numeric"
                placeholder="例如: 19950520"
                value={rawInput}
                onChange={handleInputChange}
                className={cn(
                  "w-full bg-white/5 border rounded-2xl px-5 py-4 text-white text-lg font-medium tracking-wider focus:outline-none focus:ring-2 transition-all",
                  error ? "border-red-500/50 focus:ring-red-500/30" : "border-white/10 focus:ring-indigo-500/50"
                )}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={handleNativeChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="p-2 rounded-xl bg-white/5 text-white/30 group-hover:text-white/60 transition-colors">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-white/20 ml-1">支持直接输入 8 位数字，或点击图标选择日期</p>
          </div>

          <Button onClick={handleSearch} className="w-full py-4 text-lg">
            立即查询 <Moon className="w-5 h-5" />
          </Button>
        </div>
      </Card>

      {history.length > 0 && (
        <div className="px-4 space-y-4">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-wider ml-1">最近查询</h2>
          <div className="space-y-3">
            {history.map((item) => {
              const constellation = CONSTELLATIONS.find(c => c.id === item.constellationId);
              return (
                <motion.div
                  key={item.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => constellation && onSelect(constellation, item.date, item.type)}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl">
                    {constellation?.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{constellation?.name}</div>
                    <div className="text-xs text-white/40">{item.date} ({item.type === 'solar' ? '阳历' : '阴历'})</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20" />
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const DetailPage = ({ constellation, date, type, onBack }: { constellation: Constellation; date: string; type: CalendarType; onBack: () => void }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="pb-24">
      <AnimatePresence>
        {showImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setShowImage(false)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowImage(false);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={constellation.imageUrl}
                alt={constellation.name}
                className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl border border-white/10 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold">{constellation.name} · 专属头像</p>
                <p className="text-sm text-white/40">长按图片即可保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sticky top-0 z-10 bg-star-bg/80 backdrop-blur-md px-4 py-4 flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-xl bg-white/5 text-white/70">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold">星座详情</h2>
      </div>

      <div className="px-4 pt-6 space-y-6">
        <header className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => setShowImage(true)}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-6xl shadow-2xl shadow-indigo-500/20 cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            {constellation.icon}
          </motion.div>
          <div>
            <h1 className="text-3xl font-bold">{constellation.name}</h1>
            <p className="text-indigo-400 font-medium">{constellation.enName}</p>
            <p className="text-white/40 text-sm mt-1">{constellation.dateRange}</p>
            <p className="text-[10px] text-indigo-400/60 mt-2">点击图标查看大图并保存</p>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 flex flex-col items-center text-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-white/40">属性</span>
            <span className="font-medium">{constellation.element}象星座</span>
          </Card>
          <Card className="p-4 flex flex-col items-center text-center gap-2">
            <User className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-white/40">守护星</span>
            <span className="font-medium">{constellation.guardianStar}</span>
          </Card>
          <Card className="p-4 flex flex-col items-center text-center gap-2">
            <div className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: constellation.luckyColor === '红色' ? '#ef4444' : constellation.luckyColor === '粉色' ? '#f472b6' : constellation.luckyColor === '黄色' ? '#eab308' : constellation.luckyColor === '银色' ? '#e2e8f0' : constellation.luckyColor === '金色' ? '#fbbf24' : constellation.luckyColor === '灰色' ? '#94a3b8' : constellation.luckyColor === '蓝色' ? '#3b82f6' : constellation.luckyColor === '紫色' ? '#a855f7' : constellation.luckyColor === '橙色' ? '#f97316' : constellation.luckyColor === '黑色' ? '#18181b' : constellation.luckyColor === '青色' ? '#06b6d4' : '#60a5fa' }} />
            <span className="text-xs text-white/40">幸运色</span>
            <span className="font-medium">{constellation.luckyColor}</span>
          </Card>
          <Card className="p-4 flex flex-col items-center text-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-white/40">幸运数字</span>
            <span className="font-medium">{constellation.luckyNumber}</span>
          </Card>
        </div>

        <Card>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Info className="w-5 h-5 text-indigo-400" /> 星座概况
          </h3>
          <p className="text-white/70 leading-relaxed text-sm">
            {constellation.description}
          </p>
        </Card>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider ml-1">性格特点</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl">
              <div className="text-green-400 text-xs font-bold mb-2">优点</div>
              <div className="flex flex-wrap gap-2">
                {constellation.traits.strengths.map(s => (
                  <span key={s} className="text-xs bg-green-500/20 px-2 py-1 rounded-lg text-green-200">{s}</span>
                ))}
              </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl">
              <div className="text-red-400 text-xs font-bold mb-2">缺点</div>
              <div className="flex flex-wrap gap-2">
                {constellation.traits.weaknesses.map(w => (
                  <span key={w} className="text-xs bg-red-500/20 px-2 py-1 rounded-lg text-red-200">{w}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Card>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" /> 星座配对指数
          </h3>
          <div className="space-y-3">
            {CONSTELLATIONS
              .filter(c => c.id !== constellation.id)
              .map(target => ({
                ...target,
                score: constellation.matching[target.id] || 50
              }))
              .sort((a, b) => b.score - a.score)
              .map(target => (
                <div key={target.id} className="flex items-center gap-3">
                  <div className="text-2xl w-8 text-center">{target.icon}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span>{target.name}</span>
                      <span className={cn(
                        target.score >= 90 ? "text-pink-400" : 
                        target.score >= 70 ? "text-indigo-400" : 
                        "text-white/40"
                      )}>
                        {target.score}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${target.score}%` }}
                        className={cn(
                          "h-full rounded-full",
                          target.score >= 90 ? "bg-gradient-to-r from-pink-500 to-rose-500" : 
                          target.score >= 70 ? "bg-indigo-500" : 
                          "bg-white/20"
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const ListPage = ({ onSelect }: { onSelect: (c: Constellation) => void }) => {
  return (
    <div className="pb-24">
      <header className="pt-12 pb-6 px-4">
        <h1 className="text-3xl font-bold">12星座大全</h1>
        <p className="text-white/40 text-sm mt-1">点击查看每个星座的独特魅力</p>
      </header>

      <div className="grid grid-cols-2 gap-4 px-4">
        {CONSTELLATIONS.map((c) => (
          <motion.div
            key={c.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(c)}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-3xl flex flex-col items-center text-center gap-3 cursor-pointer"
          >
            <div className="text-4xl">{c.icon}</div>
            <div>
              <div className="font-bold">{c.name}</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest">{c.dateRange}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SettingsPage = ({ clearHistory, onOpenPrivacy }: { clearHistory: () => void, onOpenPrivacy: () => void }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="pb-24">
      <ConfirmModal 
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={clearHistory}
        title="清空历史记录"
        message="确定要清空所有查询记录吗？此操作不可撤销。"
      />

      <header className="pt-12 pb-6 px-4">
        <h1 className="text-3xl font-bold">设置</h1>
      </header>

      <div className="px-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-wider ml-1">数据管理</h2>
          <Card className="p-0 overflow-hidden">
            <button
              onClick={() => setShowConfirm(true)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-red-400"
            >
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-red-400/70" />
                <span>清空历史记录</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20" />
            </button>
          </Card>
        </div>

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-wider ml-1">关于应用</h2>
          <Card className="p-0 overflow-hidden">
            <button
              onClick={onOpenPrivacy}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <span>隐私政策</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20" />
            </button>
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-indigo-400" />
                <span>当前版本</span>
              </div>
              <span className="text-white/40">v1.0</span>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-indigo-400" />
                <span>产品名称</span>
              </div>
              <span className="text-white/40">月序星座</span>
            </div>
          </Card>
        </div>

        <div className="pt-8 text-center">
          <p className="text-white/20 text-xs">© 2026 月序星座</p>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'list' | 'settings'>('home');
  const [selectedConstellation, setSelectedConstellation] = useState<{ c: Constellation; date: string; type: CalendarType } | null>(null);
  const { history, saveToHistory, clearHistory, calculateConstellation } = useConstellation();
  
  // Privacy and Agreement States
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showAgreementModal, setShowAgreementModal] = useState<string | null>(null);
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [hasDeclinedPrivacy, setHasDeclinedPrivacy] = useState(false);

  // Check if user has already accepted the privacy policy
  useEffect(() => {
    const hasAccepted = localStorage.getItem('moon_const_privacy_accepted');
    if (!hasAccepted) {
      setShowPrivacyModal(true);
    }
  }, []);

  const handleSelect = (c: Constellation, date: string, type: CalendarType) => {
    setSelectedConstellation({ c, date, type });
    saveToHistory({ name: c.name, date, type, constellationId: c.id });
  };

  const handleListSelect = (c: Constellation) => {
    setSelectedConstellation({ c, date: '', type: 'solar' });
  };

  const handleAcceptPrivacy = () => {
    localStorage.setItem('moon_const_privacy_accepted', 'true');
    setShowPrivacyModal(false);
  };

  const handleDeclinePrivacy = () => {
    setShowDeclineModal(true);
  };

  const handleDeclineCancel = () => {
    setShowDeclineModal(false);
  };

  const handleDeclineConfirm = () => {
    // Set state to track that user has declined privacy policy
    setHasDeclinedPrivacy(true);
    setShowDeclineModal(false);
    setShowPrivacyModal(false);
  };

  const handleOpenAgreement = () => {
    setShowAgreementModal('agreement');
  };

  const handleOpenPrivacy = () => {
    setShowAgreementModal('privacy');
  };

  const handleCloseAgreement = () => {
    setShowAgreementModal(null);
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative">
      <StarBackground />
      
      <main className="relative z-0">
        {hasDeclinedPrivacy ? (
          <div className="h-screen flex flex-col items-center justify-center p-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-10 h-10 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold">无法使用应用</h2>
              <p className="text-white/70">
                您已拒绝隐私政策，无法使用月序星座应用。
                请重新启动应用并同意隐私政策以继续使用。
              </p>
              <Button 
                onClick={() => {
                  setHasDeclinedPrivacy(false);
                  setShowPrivacyModal(true);
                }}
                className="w-full py-4"
              >
                重新同意
              </Button>
            </div>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {selectedConstellation ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <DetailPage 
                  constellation={selectedConstellation.c} 
                  date={selectedConstellation.date} 
                  type={selectedConstellation.type} 
                  onBack={() => setSelectedConstellation(null)} 
                />
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {activeTab === 'home' && (
                  <HomePage 
                    onSelect={handleSelect} 
                    history={history} 
                    calculateConstellation={calculateConstellation} 
                  />
                )}
                {activeTab === 'list' && <ListPage onSelect={handleListSelect} />}
                {activeTab === 'settings' && <SettingsPage clearHistory={clearHistory} onOpenPrivacy={handleOpenPrivacy} />}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      {/* Privacy and Agreement Modals */}
      {showPrivacyModal && (
        <PrivacyModal 
          onAccept={handleAcceptPrivacy}
          onDecline={handleDeclinePrivacy}
          onOpenAgreement={handleOpenAgreement}
          onOpenPrivacy={handleOpenPrivacy}
        />
      )}

      {showAgreementModal && (
        <AgreementModal 
          onClose={handleCloseAgreement}
          title={showAgreementModal === 'agreement' ? '用户服务协议' : '隐私政策'}
          content={showAgreementModal === 'agreement' ? <UserAgreementContent /> : <PrivacyPolicyContent />}
        />
      )}

      {showDeclineModal && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-9999"
        >
          <div className="bg-white rounded-[28px] w-full max-w-md overflow-hidden shadow-2xl border border-black/5 flex flex-col">
            <div className="flex-1 p-6">
              <h2 className="text-xl font-bold text-[#1D1D1F] mb-4">确认拒绝</h2>
              <p className="text-gray-600 mb-6">您确定要拒绝隐私政策吗？拒绝后将无法使用我们的服务。</p>
            </div>
            <div className="flex border-t border-black/5">
              <button
                onClick={handleDeclineCancel}
                className="flex-1 py-4 text-center text-gray-600 font-medium hover:bg-gray-50"
              >
                取消
              </button>
              <div className="w-px bg-black/5"></div>
              <button
                onClick={handleDeclineConfirm}
                className="flex-1 py-4 text-center text-[#0071E3] font-medium hover:bg-gray-50"
              >
                确定
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Bottom Navigation */}
      {!selectedConstellation && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-20 px-6 pb-8 pt-4">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl flex items-center justify-around p-2 shadow-2xl">
            <button
              onClick={() => setActiveTab('home')}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all",
                activeTab === 'home' ? "text-indigo-400 bg-indigo-400/10" : "text-white/40"
              )}
            >
              <Search className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">查询</span>
            </button>
            <button
              onClick={() => setActiveTab('list')}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all",
                activeTab === 'list' ? "text-indigo-400 bg-indigo-400/10" : "text-white/40"
              )}
            >
              <LayoutGrid className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">大全</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all",
                activeTab === 'settings' ? "text-indigo-400 bg-indigo-400/10" : "text-white/40"
              )}
            >
              <Settings className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">设置</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
