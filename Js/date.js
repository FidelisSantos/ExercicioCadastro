export function dateFormatter() {
  const documentDate = new Date(document.querySelector('#date').value);
  let formatter = new Intl.DateTimeFormat('pt-BR');

  const dateFormatter = formatter.format(documentDate);
  return dateFormatter;
}

export function calculateDays() {
  const date = document.querySelector('#date').value;
  let message = '';
  const today = new Date();
  const birthday = new Date(date);

  const birthdayDays = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

  if (today > birthdayDays) {
    birthdayDays.setFullYear(today.getFullYear() + 1);
  }

  const oneDay = 24 * 60 * 60 * 1000;

  const daysLeft = Math.ceil((birthdayDays.getTime() - today.getTime()) / (oneDay));

  if (daysLeft > 0) {
     message = `Faltam ${daysLeft} dias para seu aniversário`;
  } else {
     message = "Parabéns seu aniversário é hoje.";
  }
  return message;
}
