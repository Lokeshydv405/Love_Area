import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaEnvelope, FaLock } from 'react-icons/fa'
import Loginbg from '../assets/images/LoginPageBg.png'

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      console.log('Sign Up:', { email, password })
    } else {
      console.log('Login:', { email, password })
    }
  }

  return (
    <div
      className="w-full h-screen bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-end"
      style={{
        backgroundImage: `url(${Loginbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="rounded-2xl p-8 mr-64 flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-8xl font-bold text-[#E75A9E] text-shadow-lg">
            Welcome
          </h2>
          <p className="text-gray-700 font-medium text-sm">
            Please enter your login details
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-5">
          {/* Email Input */}
          <div
            className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm mb-8"
            style={{ width: 360, height: 54 }}
          >
            <FaEnvelope className="mr-3 text-[#E75A9E]" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full focus:outline-none font-medium"
              required
            />
          </div>

          {/* Password Input */}
          <div
            className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm mb-2"
            style={{ width: 360, height: 54 }}
          >
            <FaLock className="mr-3 text-[#E75A9E]" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full focus:outline-none font-medium"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="w-full text-right text-sm text-[#E75A9E] hover:underline cursor-pointer pr-9 mb-8">
            Forgot Password?
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-40 mx-auto py-2 bg-[#E75A9E] text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
