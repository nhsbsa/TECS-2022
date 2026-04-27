/**
 * validation.js
 * --------------------------------------------
 * Shared helpers for routes (radio, email, lists, errors)
 */

function validateRequired(value, message = 'Select an option to continue') {
  return value ? null : message;
}

function isValidEmail(email) {
  if (!email) return false;
  if (email.includes(' ')) return false;

  const parts = email.split('@');
  if (parts.length !== 2) return false;

  const [local, domain] = parts;

  if (!local || !domain) return false;
  if (!domain.includes('.')) return false;

  return true;
}

function isInList(value, list = []) {
  return list.includes(value);
}

function setError(session, key, message) {
  session[key] = message;
}

function clearError(session, key) {
  delete session[key];
}

module.exports = {
  validateRequired,
  isValidEmail,
  isInList,
  setError,
  clearError
};