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
} from 'lucide-react'
import { cn } from '@/lib/cn'

type Section = 'home' | 'products' | 'profile' | 'ai'

const products = [
  {
    name: 'AI Buddy',
    subdomain: 'ai.knuamd.com',
    icon: MessageSquare,
    emoji: '🤖',
    description: 'เลือกเพื่อน AI ที่เหมาะกับคุณ คุยได้ทุกเรื่อง เรียนได้ทุกวิชา',
    color: 'from-yellow-500 to-pink-500',
    textColor: 'text-yellow-400',
    features: ['9 AI Buddies ตามวัย', 'คุย ถาม ตอบ ได้ทุกเรื่อง', 'สร้างรูปจากจินตนาการ', 'Credit System'],
  },
  {
    name: 'Library',
    subdomain: 'read.knuamd.com',
    icon: BookOpen,
    emoji: '📚',
    description: 'คลังหนังสือ bilingual สำหรับเด็ก อ่านได้ 2 ภาษา ไทย-อังกฤษ',
    color: 'from-green-500 to-emerald-500',
    textColor: 'text-green-400',
    features: ['หนังสือ bilingual ไทย-อังกฤษ', 'อ่านได้ทุกที่ทุกเวลา', 'สำหรับเด็ก age 6-12', 'ฟรี!'],
  },
  {
    name: 'Courses',
    subdomain: 'courses.knuamd.com',
    icon: GraduationCap,
    emoji: '🎓',
    description: 'คอร์สเรียนออนไลน์ครบวงจร ผสาน Moodle LMS',
    color: 'from-blue-500 to-indigo-500',
    textColor: 'text-blue-400',
    features: ['Moodle LMS', 'คอร์สเรียนครบวงจร', 'ติดตามผลการเรียน', 'ใบรับรอง'],
  },
  {
    name: 'Games',
    subdomain: 'games.knuamd.com',
    icon: Gamepad2,
    emoji: '🎮',
    description: 'เกมการศึกษา สนุก的同时 เรียนรู้ไปด้วย',
    color: 'from-purple-500 to-violet-500',
    textColor: 'text-purple-400',
    features: ['เกมคณิตศาสตร์', 'เกมคำศัพท์', 'ปริศนาและท้าทาย', 'แข่งขันกับเพื่อน'],
  },
  {
    name: 'Interactive Novels',
    subdomain: 'interactivenovels.knuamd.com',
    icon: BookMarked,
    emoji: '📖',
    description: 'นิยาย interactive ที่คุณเลือกทางเอง AI สร้างเนื้อหาตามทางที่เลือก',
    color: 'from-rose-500 to-red-500',
    textColor: 'text-rose-400',
    features: ['Choose Your Adventure', 'AI สร้างเรื่องตามทางเลือก', 'ทุกแนวนิยาย', 'เรียนภาษาอังกฤษไปด้วย'],
  },
  {
    name: 'Community',
    subdomain: 'land.knuamd.com',
    icon: Users,
    emoji: '🏘️',
    description: 'ชุมชนผู้เรียน แลกเปลี่ยนความรู้ แบ่งปันประสบการณ์',
    color: 'from-amber-500 to-orange-500',
    textColor: 'text-amber-400',
    features: ['พูดคุยแลกเปลี่ยน', 'แบ่งปันความรู้', 'กิจกรรมชุมชน', 'เชื่อมต่อทุก subdomain'],
  },
]

function HeroSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-400 bg-clip-text text-transparent">
              knuamd
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              ✨ Learning Hub
            </span>
          </div>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          ศูนย์รวมการเรียนรู้สำหรับทุกคน
        </p>
        <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
          AI Buddy • หนังสือ • คอร์สเรียน • เกม • นิยาย interactive • Community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('products')}
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 text-lg"
          >
            เลือกบริการ
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('ai')}
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition flex items-center justify-center gap-2 text-lg"
          >
            <MessageSquare className="w-5 h-5" />
            ลอง AI Buddy
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            บริการทั้งหมด
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            เลือกสิ่งที่เหมาะกับคุณ — ทุกอย่างเชื่อมต่อกัน ใช้ credit เดียวกันได้ทุกที่
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <a
                key={product.name}
                href={`https://${product.subdomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn(
                    'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl flex-shrink-0',
                    product.color
                  )}>
                    {product.emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">
                      {product.subdomain}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-yellow-400 opacity-0 group-hover:opacity-100 transition">
                  เปิด {product.name}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProfileSection() {
  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 mx-auto mb-6 flex items-center justify-center text-4xl">
          👤
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">โปรไฟล์ของคุณ</h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          สมัครสมาชิกฟรี รับ 50 credits ติดตามผลการเรียน และเชื่อมต่อบริการทั้งหมดในที่เดียว
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Credit System</h3>
            <p className="text-sm text-gray-400">ใช้ credit เดียวกันทุก subdomain</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">เชื่อมต่อทุกที่</h3>
            <p className="text-sm text-gray-400">สมัครครั้งเดียว เข้าได้ทุก subdomain</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <Star className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">ติดตามผล</h3>
            <p className="text-sm text-gray-400">ดูพัฒนาการการเรียนของคุณ</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AIPreviewSection({ onNavigate }: { onNavigate: (s: Section) => void }) {
  const [input, setInput] = useState('')

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          🤖 ลองคุยกับ AI Buddy
        </h2>
        <p className="text-gray-400 mb-8">
          คุยสั้นๆ ได้เลย — ถ้าอยากคุยยาว ไปที่ ai.knuamd.com
        </p>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="พิมพ์ข้อความ..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50"
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
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
            >
              ส่ง
            </button>
          </div>
        </div>
        <button
          onClick={() => onNavigate('products')}
          className="mt-6 text-sm text-gray-400 hover:text-yellow-400 transition"
        >
          ดู AI Buddy ทั้งหมด →
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-400 bg-clip-text text-transparent">
                knuamd
              </span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Learning Hub for Young Readers</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {products.map((p) => (
              <a
                key={p.name}
                href={`https://${p.subdomain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                {p.emoji} {p.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-white font-semibold">Aeesia</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [section, setSection] = useState<Section>('home')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <button onClick={() => setSection('home')} className="flex items-center gap-2">
            <span className="text-xl font-extrabold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              knuamd
            </span>
          </button>
          <div className="flex items-center gap-1">
            {([
              { key: 'home' as Section, label: 'หน้าแรก' },
              { key: 'products' as Section, label: 'บริการ' },
              { key: 'ai' as Section, label: 'AI Buddy' },
              { key: 'profile' as Section, label: 'โปรไฟล์' },
            ]).map((item) => (
              <button
                key={item.key}
                onClick={() => setSection(item.key)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm transition',
                  section === item.key
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="pt-14">
        {section === 'home' && <HeroSection onNavigate={setSection} />}
        {section === 'products' && <ProductsSection />}
        {section === 'ai' && <AIPreviewSection onNavigate={setSection} />}
        {section === 'profile' && <ProfileSection />}
      </main>
      <Footer />
    </div>
  )
}
