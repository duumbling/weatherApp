export function getCurrentTime(offsetSeconds) {
  // Получаем текущую временную отметку в миллисекундах
  let timestamp = Date.now();
  
  // Добавляем сдвиг в миллисекундах к текущей временной отметке
  let offsetMilliseconds = offsetSeconds * 1000;
  let adjustedTimestamp = timestamp + offsetMilliseconds;
  
  // Создаем объект Date на основе скорректированной временной отметки
  let currentDate = new Date(adjustedTimestamp);
  
  // Получаем компоненты времени
  let hours = currentDate.getUTCHours();
  let minutes = currentDate.getUTCMinutes();
  
  // Форматируем строку с временем
  let formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  
  // Возвращаем отформатированную строку
  return formattedTime;
}