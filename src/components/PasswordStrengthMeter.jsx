import React from 'react'

const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = () => {
    if (!password) return 0
    
    let strength = 0
    if (password.length > 5) strength += 1
    if (password.length > 7) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1
    
    return Math.min(strength, 5)
  }

  const strength = calculateStrength()
  const strengthText = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'][strength - 1] || ''

  return (
    <div className="password-strength">
      <div className="strength-meter">
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className={`strength-bar ${i <= strength ? 'active' : ''}`}
            style={{ 
              backgroundColor: i <= strength ? 
                (strength <= 2 ? '#ff5252' : 
                 strength <= 4 ? '#ff9800' : '#4CAF50') : '#e0e0e0' 
            }}
          />
        ))}
      </div>
      {password && (
        <div className="strength-text" style={{ 
          color: strength <= 2 ? '#ff5252' : 
                strength <= 4 ? '#ff9800' : '#4CAF50'
        }}>
          {strengthText}
        </div>
      )}
    </div>
  )
}

export default PasswordStrengthMeter