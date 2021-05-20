function calculator(value) {
  //Регулярное выражение для нахождения значений в скобках
  var reg = new RegExp(/(\([^)]+\)+)/, 'g');
  //Заменяет все совпадения с регулярным выражением
  value = value.replace(reg, (m) => {
    //Убирает скобки в начале и конце
    m = m.replace(/^\(/, '');
    m = m.replace(/\)$/, '');
    //Рекурсивный вызов calculator
    //Таким образом первыми вычислятся выражения в скобках
    return calculator(m);
  });
  //Разделяю строку на массив и приравниваю его первый элемент константе symbol,
  //а все последующие сохраняются в массив values
  //Это называется - деструктуризация
  const [symbol, ...values] = value.split(' ');
  // Возвращаю функцию которая первым элементом примет символ для вычисления, а вторым массив со значениями
  return calculateValue(symbol, values);
}
function calculateValue(symbol, values) {
  //Создаю пустую переменную value
  let value;
  //Деструктивно достаю элементы
  [value, ...values] = values;
  //value это строка, делаю ее числом
  value = +value;
  switch (symbol) {
    case '+':
      //Перебор элементов
      values.forEach((valuesItem) => {
        //Прибавляю все значения к value, а также делаю valuesItem числом
        value += +valuesItem;
      });
      break;
    case '-':
      values.forEach((valuesItem) => {
        value -= +valuesItem;
      });
      break;
    case '/':
      values.forEach((valuesItem) => {
        value /= +valuesItem;
      });
      break;
    case '*':
      values.forEach((valuesItem) => {
        value *= +valuesItem;
      });
      break;
    default:
      values.forEach((valuesItem) => {
        value += +valuesItem;
      });
  }
  return value;
}
