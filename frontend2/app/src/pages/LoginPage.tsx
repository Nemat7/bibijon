import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(username, password)
      navigate('/')
    } catch {
      setError('Неверный логин или пароль')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #faf9f7 0%, #f2f1ef 50%, #e8e4df 100%)',
      }}
    >
      <div
        className="w-full bg-white"
        style={{
          maxWidth: '420px',
          borderRadius: '16px',
          padding: '48px 40px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        {/* Welcome Text */}
        <div className="text-center mb-7">
          <h1 className="text-[22px] font-bold text-[#212121]">Добро пожаловать</h1>
          <p className="text-sm text-[#656565] mt-1">Войдите в свой аккаунт</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              className="block text-[12px] font-semibold text-[#656565] mb-[6px]"
            >
              Имя пользователя
            </label>
            <input
              type="text"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-[#dad6cf] rounded-lg outline-none transition-all duration-150 focus:border-[#e4002b] focus:ring-3"
              style={{
                height: '44px',
                padding: '0 14px',
                fontSize: '14px',
                '--tw-ring-color': 'rgba(228, 0, 43, 0.15)',
                '--tw-ring-opacity': '0.15',
              } as React.CSSProperties}
            />
          </div>

          <div>
            <label
              className="block text-[12px] font-semibold text-[#656565] mb-[6px]"
            >
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[#dad6cf] rounded-lg outline-none transition-all duration-150 focus:border-[#e4002b] focus:ring-3 pr-10"
                style={{
                  height: '44px',
                  padding: '0 14px',
                  fontSize: '14px',
                  '--tw-ring-color': 'rgba(228, 0, 43, 0.15)',
                  '--tw-ring-opacity': '0.15',
                } as React.CSSProperties}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#656565] hover:text-[#212121] transition-colors duration-150"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-[#e4002b] text-sm px-4 py-3 rounded-lg font-semibold">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e4002b] hover:bg-[#87041e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition-colors duration-150 border-none cursor-pointer flex items-center justify-center gap-2"
            style={{
              height: '46px',
              fontSize: '15px',
              borderRadius: '8px',
              marginTop: '12px',
            }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Вход...
              </>
            ) : 'Войти'}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="text-[13px] text-[#e4002b] hover:text-[#87041e] transition-colors duration-150 font-medium no-underline"
          >
            Забыли пароль?
          </a>
        </div>
      </div>
    </div>
  )
}
