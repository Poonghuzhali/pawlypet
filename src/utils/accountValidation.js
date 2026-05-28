export const NAME_MAX_LETTERS = 30

export function validateName(value, fieldLabel = 'Name') {
  const trimmed = value.trim()

  if (!trimmed) {
    return `${fieldLabel} is required.`
  }

  if (!/^[a-zA-Z\s'-]+$/.test(trimmed)) {
    return `${fieldLabel} can only contain letters.`
  }

  const letterCount = trimmed.replace(/[^a-zA-Z]/g, '').length
  if (letterCount > NAME_MAX_LETTERS) {
    return `${fieldLabel} must be ${NAME_MAX_LETTERS} letters or fewer.`
  }

  return ''
}

export function validateEmail(value) {
  const trimmed = value.trim()

  if (!trimmed) {
    return 'Email is required.'
  }

  if (!trimmed.includes('@')) {
    return 'Email must include @.'
  }

  if (!trimmed.toLowerCase().includes('.com')) {
    return 'Email must include .com.'
  }

  if (!/^[^\s@]+@[^\s@]+\.com$/i.test(trimmed)) {
    return 'Enter a valid email address (e.g. name@example.com).'
  }

  return ''
}

export function validatePhone(value) {
  const trimmed = value.trim()

  if (!trimmed) {
    return 'Phone number is required.'
  }

  if (!trimmed.startsWith('+')) {
    return 'Phone must start with a country code (e.g. +1).'
  }

  const match = trimmed.match(/^\+(\d{1,3})([\d\s\-().]*)$/)
  if (!match) {
    return 'Use format +[country code] [number], e.g. +1 5551234567.'
  }

  const localDigits = match[2].replace(/\D/g, '')
  if (localDigits.length === 0) {
    return 'Enter your phone number after the country code.'
  }

  if (localDigits.length > 10) {
    return 'Phone number must be up to 10 digits after the country code.'
  }

  if (localDigits.length < 10) {
    return 'Phone number must be 10 digits after the country code.'
  }

  return ''
}

export function validateAccountForm(form) {
  return {
    fullName: validateName(form.fullName, 'Full name'),
    email: validateEmail(form.email),
    phone: validatePhone(form.phone),
    preferredName: validateName(form.preferredName, 'Preferred name'),
  }
}

export function hasValidationErrors(errors) {
  return Object.values(errors).some(Boolean)
}
