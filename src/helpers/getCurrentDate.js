export function getCurrentDate(offsetSeconds) {
  // Получаем текущую временную отметку в миллисекундах
  let timestamp = Date.now();
  
  // Добавляем сдвиг в миллисекундах к текущей временной отметке
  let offsetMilliseconds = offsetSeconds * 1000;
  let adjustedTimestamp = timestamp + offsetMilliseconds;
  
  // Создаем объект Date на основе скорректированной временной отметки
  let currentDate = new Date(adjustedTimestamp);
  
  // Получаем компоненты даты и времени
  let dayOfWeek = currentDate.getUTCDay();
  let dayOfMonth = currentDate.getUTCDate();
  let month = currentDate.getUTCMonth();
  
  // Массивы с названиями дней недели и месяцев
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
  // Форматируем строку с датой и временем
  let formattedDate = daysOfWeek[dayOfWeek] + ', ' + dayOfMonth + ' ' + months[month];
  
  // Возвращаем отформатированную строку
  return formattedDate;
}