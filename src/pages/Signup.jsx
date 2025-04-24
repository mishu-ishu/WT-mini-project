import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import PasswordStrengthMeter from '../components/PasswordStrengthMeter.jsx'
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 6) newErrors.password = 'Must be at least 6 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
    
      setIsSubmitting(true);
      try {
        const response = await axios.post('http://localhost:5000/api/auth/signup', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
    
        console.log('Signup successful:', response.data);
        navigate('/login');  // Redirect after success
      } catch (error) {
        console.error(error);
        setErrors({ submit: error.response?.data?.message || 'Signup failed' });
      } finally {
        setIsSubmitting(false);
      }
    };
    

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          <PasswordStrengthMeter password={formData.password} />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>
        
        <button 
          type="submit" 
          className="auth-button signup-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
    </AuthLayout>
  )
}

export default SignUp