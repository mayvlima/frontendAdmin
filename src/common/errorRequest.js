import Swal from "sweetalert2";

export default function errorRequest(history, error) {
  if (error.response && error.response.status === 401) {
    Swal.fire(
      'Token inválido',
      'Por favor, efetue login novamente',
      'info'
    ).then(() => {
      localStorage.clear();
      history.push('/');
    });
  } else {
    Swal.fire(
      'Erro',
      (error.response && error.response.data.message) ||
      'Ocorreu um erro, verifique os dados e tente novamente!',
      'error'
    );
  };
}
