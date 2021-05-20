export default function validatePassword(password) {
  let result = {};

  if (password.length < 21) {
    if (password.length > 5) {
      if (password.match(/[a-z]/) && password.match(/[a-z]/)) {
        if (password.match(/[0-9]/)) {
          if (password.match(/[-*!@#$%^&*(),.?":{}|<>+]/)) {
            result.strong = true;
            result.error = '';
          } else {
            result.strong = false;
            result.error =
              'Sua senha precisa conter pelo menos um caracter especial';
          }
        } else {
          result.strong = false;
          result.error = 'Sua senha precisa conter pelo menos um número';
        }
      } else {
        result.strong = false;
        result.error = 'Sua senha precisa ter letras maiúsculas e minúsculas';
      }
    } else {
      result.strong = false;
      result.error = 'Sua senha precisa ter pelo menos 6 dígitos';
    }
  } else {
    result.strong = false;
    result.error = 'Sua senha pode ter no máximo 20 dígitos';
  }

  return result;
}
