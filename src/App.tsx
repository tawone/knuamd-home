import { useState } from 'react'
import {
  BookOpen,
  GraduationCap,
  Gamepad2,
  MessageSquare,
  Users,
  BookMarked,
  ArrowRight,
  Star,
  Zap,
  Globe,
  Home,
  Briefcase,
  Bot,
  User,
} from 'lucide-react'
import { cn } from '@/lib/cn'

type Section = 'home' | 'products' | 'ai' | 'profile'

const products = [
  {
    name: 'AI Buddy',
    subdomain: 'ai.knuamd.com',
    emoji: '🤖',
    description: 'เลือกเพื่อน AI ที่เหมาะกับคุณ',
    color: 'from-yellow-500 to-pink-500',
    features: ['9 AI Buddies ตามวัย', 'คุยได้ทุกเรื่อง', 'Credit System'],
  },
  {
    name: 'Library',
    subdomain: 'read.knuamd.com',
    emoji: '📚',
    description: 'คลังหนังสือ bilingual สำหรับเด็ก',
    color: 'from-green-500 to-emerald-500',
    features: ['bilingual ไทย-อังกฤษ', 'อ่านได้ทุกที่', 'ฟรี!'],
  },
  {
    name: 'Courses',
    subdomain: 'courses.knuamd.com',
    emoji: '🎓',
    description: 'คอร์สเรียนออนไลน์ครบวงจร',
    color: 'from-blue-500 to-indigo-500',
    features: ['Moodle LMS', 'ติดตามผลการเรียน', 'ใบรับรอง'],
  },
  {
    name: 'Games',
    subdomain: 'games.knuamd.com',
    emoji: '🎮',
    description: 'เกมการศึกษา สนุก的同时 เรียนรู้',
    color: 'from-purple-500 to-violet-500',
    features: ['เกมคณิตศาสตร์', 'เกมคำศัพท์', 'แข่งขันกับเพื่อน'],
  },
  {
    name: 'Interactive Novels',
    subdomain: 'interactivenovels.knuamd.com',
    emoji: '📖',
    description: 'นิยาย interactive AI สร้างเนื้อหา',
    color: 'from-rose-500 to-red-500',
    features: ['Choose Your Adventure', 'AI สร้างเรื่อง', 'เรียนภาษาอังกฤษ'],
  },
  {
    name: 'Community',
    subdomain: 'land.knuamd.com',
    emoji: '🏘️',
    description: 'ชุมชนผู้เรียน แลกเปลี่ยนความรู้',
    color: 'from-amber-500 to-orange-500',
    features: ['พูดคุยแลกเปลี่ยน', 'แบ่งปันความรู้', 'กิจกรรมชุมชน'],
  },
]

function HomeSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  return (
    <div className="space-y-6 pb-6">
      {/* Hero */}
      <section className="relative py-16 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 to-slate-950" />
        <div className="relative z-10 space-y-4">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-400 bg-clip-text text-transparent">
              knuamd
            </span>
          </h1>
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
            ✨ Learning Hub
          </span>
          <p className="text-lg text-gray-300">ศูนย์รวมการเรียนรู้สำหรับทุกคน</p>
          <p className="text-sm text-gray-500">
            AI Buddy • หนังสือ • คอร์ส • เกม • นิยาย • Community
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-3 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-semibold rounded-xl text-sm flex items-center gap-2"
            >
              เลือกบริการ <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('ai')}
              className="px-5 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 text-sm flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> ลอง AI Buddy
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4">
        <div className="grid grid-cols-3 gap-3">
          {products.slice(0, 6).map((p) => (
            <a
              key={p.name}
              href={`https://${p.subdomain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-xs font-medium text-white">{p.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
          <h3 className="font-bold text-white text-sm">🔥 ยอดนิยม</h3>
          <a
            href="https://ai.knuamd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <span className="text-3xl">🤖</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">AI Buddy</p>
              <p className="text-xs text-gray-400">เลือกเพื่อน AI คุยได้ทุกเรื่อง</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500" />
          </a>
        </div>
      </section>
    </div>
  )
}

function ProductsSection() {
  return (
    <section className="px-4 py-6 space-y-4">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-white">บริการทั้งหมด</h2>
        <p className="text-gray-400 text-xs">ทุกอย่างเชื่อมต่อกัน ใช้ credit เดียวกันได้ทุกที่</p>
      </div>
      <div className="space-y-3">
        {products.map((product) => (
          <a
            key={product.name}
            href={`https://${product.subdomain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={cn(
                'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-xl flex-shrink-0',
                product.color
              )}>
                {product.emoji}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{product.name}</h3>
                <p className="text-[10px] text-gray-500 font-mono">{product.subdomain}</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs mb-2">{product.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {product.features.map((f) => (
                <span key={f} className="text-[10px] bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function AIPreviewSection() {
  const [input, setInput] = useState('')

  return (
    <section className="px-4 py-6 space-y-4">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-white">🤖 ลองคุยกับ AI Buddy</h2>
        <p className="text-gray-400 text-xs">คุยสั้นๆ ได้เลย หรือไปที่ ai.knuamd.com</p>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-500/50"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.trim()) {
                window.open(`https://ai.knuamd.com?q=${encodeURIComponent(input)}`, '_blank')
                setInput('')
              }
            }}
          />
          <button
            onClick={() => {
              if (input.trim()) {
                window.open(`https://ai.knuamd.com?q=${encodeURIComponent(input)}`, '_blank')
                setInput('')
              }
            }}
            className="px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-semibold rounded-xl text-sm"
          >
            ส่ง
          </button>
        </div>
      </div>
      <div className="text-center">
        <a href="https://ai.knuamd.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-yellow-400 transition">
          ดู AI Buddy ทั้งหมด →
        </a>
      </div>
    </section>
  )
}

function ProfileSection() {
  return (
    <section className="px-4 py-6 space-y-4">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 mx-auto flex items-center justify-center text-2xl">
          👤
        </div>
        <h2 className="text-xl font-bold text-white">โปรไฟล์ของคุณ</h2>
        <p className="text-gray-400 text-xs max-w-xs mx-auto">
          สมัครสมาชิกฟรี รับ 50 credits เชื่อมต่อบริการทั้งหมด
        </p>
      </div>
      <div className="space-y-3">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-white">Credit System</h3>
            <p className="text-xs text-gray-400">ใช้ credit เดียวกันทุก subdomain</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <Globe className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-white">เชื่อมต่อทุกที่</h3>
            <p className="text-xs text-gray-400">สมัครครั้งเดียว เข้าได้ทุก subdomain</p>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
          <Star className="w-6 h-6 text-pink-400 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-white">ติดตามผล</h3>
            <p className="text-xs text-gray-400">ดูพัฒนาการการเรียนของคุณ</p>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <p className="text-gray-500 text-[10px]">© 2026 <span className="text-white font-semibold">Aeesia</span>. All rights reserved.</p>
      </div>
    </section>
  )
}

const navItems = [
  { key: 'home' as Section, icon: Home, label: 'Home' },
  { key: 'products' as Section, icon: Briefcase, label: 'Services' },
  { key: 'ai' as Section, icon: Bot, label: 'AI Buddy' },
  { key: 'profile' as Section, icon: User, label: 'Profile' },
]

export default function App() {
  const [section, setSection] = useState<Section>('home')

  return (
    <div className="min-h-screen bg-slate-950 flex items-start justify-center">
      {/* Portrait phone frame */}
      <div className="relative w-full max-w-[min(430px,85vw)] min-h-screen text-white overflow-y-auto overflow-x-hidden pb-16 isolation isolate max-lg:rounded-none lg:rounded-3xl lg:my-4 lg:min-h-[calc(100vh-2rem)] lg:shadow-2xl lg:border lg:border-white/10">
        {section === 'home' && <HomeSection onNavigate={setSection} />}
        {section === 'products' && <ProductsSection />}
        {section === 'ai' && <AIPreviewSection />}
        {section === 'profile' && <ProfileSection />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[min(430px,85vw)] z-50">
        <div className="bg-black/80 backdrop-blur-lg border-t border-white/10">
          <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            {navItems.map(item => {
              const Icon = item.icon
              const isActive = section === item.key
              return (
                <button
                  key={item.key}
                  onClick={() => setSection(item.key)}
                  className={cn(
                    'flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all min-w-[52px]',
                    isActive ? 'text-orange-400' : 'text-white/40 hover:text-white/60'
                  )}
                >
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
