import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email'
    if (!password) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
    
      setIsSubmitting(true);
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password
        });
    
        console.log('Login successful:', response.data);
    
        // You can store the token or user info like this:
        localStorage.setItem('token', response.data.token);
        
        navigate('/');  // Redirect to home after successful login
      } catch (error) {
        console.error(error);
        setErrors({ submit: error.response?.data?.message || 'Invalid credentials' });
      } finally {
        setIsSubmitting(false);
      }
    };
    

  return (
    <AuthLayout title="Welcome Back" isLogin={true}>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <div className="auth-options">
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
        </div>
        
        {errors.submit && <div className="form-error">{errors.submit}</div>}
        
        <button 
          type="submit" 
          className="auth-button login-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default Login