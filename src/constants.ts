export interface Constellation {
  id: string;
  name: string;
  enName: string;
  dateRange: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  element: '火' | '土' | '风' | '水';
  traits: {
    strengths: string[];
    weaknesses: string[];
  };
  matching: Record<string, number>;
  imageUrl: string;
  luckyColor: string;
  luckyNumber: number;
  guardianStar: string;
  description: string;
  icon: string;
}
export const CONSTELLATIONS: Constellation[] = [
  {
    id: 'aries',
    name: '白羊座',
    enName: 'Aries',
    dateRange: '03-21 ~ 04-19',
    startMonth: 3, startDay: 21, endMonth: 4, endDay: 19,
    element: '火',
    traits: {
      strengths: ['热情', '勇敢', '直率', '行动力强'],
      weaknesses: ['冲动', '急躁', '自我中心', '三分钟热度']
    },
    matching: {
      aries: 80, taurus: 75, gemini: 90, cancer: 45, leo: 95, virgo: 65,
      libra: 85, scorpio: 50, sagittarius: 98, capricorn: 40, aquarius: 92, pisces: 55
    },
    imageUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4b611?q=80&w=800&auto=format&fit=crop',
    luckyColor: '大红色',
    luckyNumber: 9,
    guardianStar: '火星',
    description: '白羊座是黄道十二宫的第一宫，代表着万物回春的生机。他们充满活力，勇于开拓，是天生的行动派和领导者。',
    icon: '♈'
  },
  {
    id: 'taurus',
    name: '金牛座',
    enName: 'Taurus',
    dateRange: '04-20 ~ 05-20',
    startMonth: 4, startDay: 20, endMonth: 5, endDay: 20,
    element: '土',
    traits: {
      strengths: ['稳重', '耐心', '务实', '审美极佳'],
      weaknesses: ['固执', '占有欲强', '慢热', '过于现实']
    },
    matching: {
      aries: 75, taurus: 80, gemini: 60, cancer: 85, leo: 55, virgo: 95,
      libra: 65, scorpio: 88, sagittarius: 50, capricorn: 98, aquarius: 45, pisces: 82
    },
    imageUrl: 'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=800&auto=format&fit=crop',
    luckyColor: '翠绿色',
    luckyNumber: 6,
    guardianStar: '金星',
    description: '金牛座由金星守护，追求感官的享受和物质的稳定。他们性格沉稳，做事踏实，对美和财富有着天然的敏锐度。',
    icon: '♉'
  },
  {
    id: 'gemini',
    name: '双子座',
    enName: 'Gemini',
    dateRange: '05-21 ~ 06-21',
    startMonth: 5, startDay: 21, endMonth: 6, endDay: 21,
    element: '风',
    traits: {
      strengths: ['机智', '好奇', '多才多艺', '沟通力强'],
      weaknesses: ['善变', '缺乏专注', '肤浅', '神经质']
    },
    matching: {
      aries: 90, taurus: 60, gemini: 80, cancer: 55, leo: 85, virgo: 50,
      libra: 98, scorpio: 45, sagittarius: 92, capricorn: 40, aquarius: 95, pisces: 65
    },
    imageUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop',
    luckyColor: '明黄色',
    luckyNumber: 5,
    guardianStar: '水星',
    description: '双子座思维敏捷，像风一样难以捉摸。他们热爱交流，渴望新鲜资讯，是社交场合中的开心果和信息中转站。',
    icon: '♊'
  },
  {
    id: 'cancer',
    name: '巨蟹座',
    enName: 'Cancer',
    dateRange: '06-22 ~ 07-22',
    startMonth: 6, startDay: 22, endMonth: 7, endDay: 22,
    element: '水',
    traits: {
      strengths: ['感性', '体贴', '忠诚', '直觉敏锐'],
      weaknesses: ['情绪化', '过度敏感', '多疑', '缺乏安全感']
    },
    matching: {
      aries: 45, taurus: 85, gemini: 55, cancer: 80, leo: 50, virgo: 90,
      libra: 40, scorpio: 98, sagittarius: 45, capricorn: 88, aquarius: 50, pisces: 95
    },
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop',
    luckyColor: '银白色',
    luckyNumber: 2,
    guardianStar: '月亮',
    description: '巨蟹座由月亮守护，内心柔软且极具保护欲。他们非常重视家庭和情感联结，拥有极强的同情心和母性光辉。',
    icon: '♋'
  },
  {
    id: 'leo',
    name: '狮子座',
    enName: 'Leo',
    dateRange: '07-23 ~ 08-22',
    startMonth: 7, startDay: 23, endMonth: 8, endDay: 22,
    element: '火',
    traits: {
      strengths: ['自信', '慷慨', '热情', '有领导力'],
      weaknesses: ['傲慢', '虚荣', '固执', '控制欲强']
    },
    matching: {
      aries: 95, taurus: 55, gemini: 85, cancer: 50, leo: 80, virgo: 60,
      libra: 90, scorpio: 45, sagittarius: 98, capricorn: 40, aquarius: 88, pisces: 55
    },
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
    luckyColor: '金黄色',
    luckyNumber: 1,
    guardianStar: '太阳',
    description: '狮子座天生具有王者气场，渴望成为众人的焦点。他们慷慨大方，充满正能量，是天生的表演者和领导者。',
    icon: '♌'
  },
  {
    id: 'virgo',
    name: '处女座',
    enName: 'Virgo',
    dateRange: '08-23 ~ 09-22',
    startMonth: 8, startDay: 23, endMonth: 9, endDay: 22,
    element: '土',
    traits: {
      strengths: ['细心', '追求完美', '勤奋', '理智'],
      weaknesses: ['挑剔', '焦虑', '过于拘泥细节', '爱唠叨']
    },
    matching: {
      aries: 65, taurus: 95, gemini: 50, cancer: 90, leo: 60, virgo: 80,
      libra: 55, scorpio: 85, sagittarius: 45, capricorn: 98, aquarius: 50, pisces: 88
    },
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop',
    luckyColor: '淡灰色',
    luckyNumber: 5,
    guardianStar: '水星',
    description: '处女座追求极致的秩序和完美，做事严谨认真。他们是极佳的分析者和执行者，总是能发现他人忽略的细节。',
    icon: '♍'
  },
  {
    id: 'libra',
    name: '天秤座',
    enName: 'Libra',
    dateRange: '09-23 ~ 10-23',
    startMonth: 9, startDay: 23, endMonth: 10, endDay: 23,
    element: '风',
    traits: {
      strengths: ['优雅', '公正', '善于社交', '审美极佳'],
      weaknesses: ['优柔寡断', '逃避冲突', '虚伪', '懒惰']
    },
    matching: {
      aries: 85, taurus: 65, gemini: 98, cancer: 40, leo: 90, virgo: 55,
      libra: 80, scorpio: 50, sagittarius: 95, capricorn: 45, aquarius: 98, pisces: 60
    },
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=800&auto=format&fit=crop',
    luckyColor: '淡蓝色',
    luckyNumber: 6,
    guardianStar: '金星',
    description: '天秤座追求平衡与和谐，具有极高的社交天赋。他们优雅得体，善于权衡利弊，是天生的外交官和美学家。',
    icon: '♎'
  },
  {
    id: 'scorpio',
    name: '天蝎座',
    enName: 'Scorpio',
    dateRange: '10-24 ~ 11-22',
    startMonth: 10, startDay: 24, endMonth: 11, endDay: 22,
    element: '水',
    traits: {
      strengths: ['深沉', '敏锐', '意志坚定', '有魅力'],
      weaknesses: ['嫉妒', '占有欲强', '多疑', '报复心重']
    },
    matching: {
      aries: 50, taurus: 88, gemini: 45, cancer: 98, leo: 45, virgo: 85,
      libra: 50, scorpio: 80, sagittarius: 55, capricorn: 92, aquarius: 40, pisces: 98
    },
    imageUrl: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=800&auto=format&fit=crop',
    luckyColor: '深紫色',
    luckyNumber: 4,
    guardianStar: '冥王星',
    description: '天蝎座充满神秘感和爆发力，情感深沉且强烈。他们具有极强的洞察力和不达目的誓不罢休的坚韧意志。',
    icon: '♏'
  },
  {
    id: 'sagittarius',
    name: '射手座',
    enName: 'Sagittarius',
    dateRange: '11-23 ~ 12-21',
    startMonth: 11, startDay: 23, endMonth: 12, endDay: 21,
    element: '火',
    traits: {
      strengths: ['乐观', '自由', '坦率', '富有正义感'],
      weaknesses: ['粗心', '盲目乐观', '缺乏耐心', '不负责任']
    },
    matching: {
      aries: 98, taurus: 50, gemini: 92, cancer: 45, leo: 98, virgo: 45,
      libra: 95, scorpio: 55, sagittarius: 80, capricorn: 50, aquarius: 90, pisces: 65
    },
    imageUrl: 'https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?q=80&w=800&auto=format&fit=crop',
    luckyColor: '深橙色',
    luckyNumber: 3,
    guardianStar: '木星',
    description: '射手座向往自由，热爱旅行和探索。他们性格开朗乐观，心胸开阔，永远在追求更高远的人生目标和真理。',
    icon: '♐'
  },
  {
    id: 'capricorn',
    name: '摩羯座',
    enName: 'Capricorn',
    dateRange: '12-22 ~ 01-19',
    startMonth: 12, startDay: 22, endMonth: 1, endDay: 19,
    element: '土',
    traits: {
      strengths: ['坚韧', '负责', '务实', '有抱负'],
      weaknesses: ['固执', '悲观', '冷漠', '不解风情']
    },
    matching: {
      aries: 40, taurus: 98, gemini: 40, cancer: 88, leo: 40, virgo: 98,
      libra: 45, scorpio: 92, sagittarius: 50, capricorn: 80, aquarius: 55, pisces: 85
    },
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop',
    luckyColor: '深灰色',
    luckyNumber: 8,
    guardianStar: '土星',
    description: '摩羯座是脚踏实地的实干家，极具耐心和责任感。他们志向远大，能够为了长远的目标忍受孤独和艰辛。',
    icon: '♑'
  },
  {
    id: 'aquarius',
    name: '水瓶座',
    enName: 'Aquarius',
    dateRange: '01-20 ~ 02-18',
    startMonth: 1, startDay: 20, endMonth: 2, endDay: 18,
    element: '风',
    traits: {
      strengths: ['独立', '创新', '友善', '博爱'],
      weaknesses: ['孤僻', '反叛', '情绪疏离', '不切实际']
    },
    matching: {
      aries: 92, taurus: 45, gemini: 95, cancer: 50, leo: 88, virgo: 50,
      libra: 98, scorpio: 40, sagittarius: 90, capricorn: 55, aquarius: 80, pisces: 70
    },
    imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800&auto=format&fit=crop',
    luckyColor: '青蓝色',
    luckyNumber: 7,
    guardianStar: '天王星',
    description: '水瓶座思维独特，追求独立自主，不愿随波逐流。他们充满人道主义精神，是充满创意的思想家和改革者。',
    icon: '♒'
  },
  {
    id: 'pisces',
    name: '双鱼座',
    enName: 'Pisces',
    dateRange: '02-19 ~ 03-20',
    startMonth: 2, startDay: 19, endMonth: 3, endDay: 20,
    element: '水',
    traits: {
      strengths: ['温柔', '体贴', '富有同情心', '艺术天赋'],
      weaknesses: ['多愁善感', '逃避现实', '意志薄弱', '优柔寡断']
    },
    matching: {
      aries: 55, taurus: 82, gemini: 65, cancer: 95, leo: 55, virgo: 88,
      libra: 60, scorpio: 98, sagittarius: 65, capricorn: 85, aquarius: 70, pisces: 80
    },
    imageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=800&auto=format&fit=crop',
    luckyColor: '海蓝色',
    luckyNumber: 3,
    guardianStar: '海王星',
    description: '双鱼座内心充满浪漫和幻想，极具同情心。他们感性而细腻，拥有极强的艺术天赋和超越现实的灵性追求。',
    icon: '♓'
  }
];
