export function dateFormatter() {
  const date = document.querySelector('#date').value;
  let myDate = new Date(date);
  let formatter = new Intl.DateTimeFormat('pt-BR');

  const dateFormatter = formatter.format(myDate);
  return dateFormatter;
}

export function calculateDays() {
  const date = document.querySelector('#date').value;
  let message = '';
  const today = new Date();
  const birthday = new Date(date);

  const upcomingBday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

  if (today > upcomingBday) {
    upcomingBday.setFullYear(today.getFullYear() + 1);
  }

  const oneDay = 24 * 60 * 60 * 1000;

  const daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (oneDay));

  if (daysLeft > 0) {
     message = `Faltam ${daysLeft} dias para seu aniversário`;
  } else {
     message = "Parabéns seu aniversário é hoje.";
  }
  return message;
}
