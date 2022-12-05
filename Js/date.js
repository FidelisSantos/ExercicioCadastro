export function dateFormatter() {
  const date = document.querySelector('#date').value;
  let myDate = new Date(date);
  let formatter = new Intl.DateTimeFormat('pt-BR');

  var dateFormatter = formatter.format(myDate);
  return dateFormatter;
}

export function calculateDays() {
  const date = document.querySelector('#date').value;
  let today = new Date();
  let bday = new Date(date);

  let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());

  if (today > upcomingBday) {
    upcomingBday.setFullYear(today.getFullYear() + 1);
  }

  var one_day = 24 * 60 * 60 * 1000;

  let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / (one_day));

  if (daysLeft > 0) {
    var message = `Faltam ${daysLeft} dias para seu aniversário`;
  } else {
    var message = "Parabéns seu aniversário é hoje.";
  }
  return message;
}
