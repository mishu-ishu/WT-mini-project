import React from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './SocialLogin.jsx'

const AuthLayout = ({ children, title, isLogin = false }) => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">{title}</h1>
        {children}
        
        {!isLogin && (
          <div className="auth-divider">
            <span>OR</span>
          </div>
        )}
        
        {!isLogin && <SocialLogin />}
        
        <div className="auth-switch">
          {isLogin ? (
            <p>Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
          ) : (
            <p>Already have an account? <Link to="/login" className="auth-link">Login</Link></p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout