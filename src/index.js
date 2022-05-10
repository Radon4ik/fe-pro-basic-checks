/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string => string.split(' ').map((item) => item[0].toUpperCase() + item.slice(1)).join(' '));

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
    newString = `${newString}${string[i].toLowerCase()}`;
    } else {
      newString = `${newString}${string[i].toUpperCase()}`;
    }

  }
  return newString;

}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string) {
  if (action === 'uppercase') {
    return string.toUpperCase();
  }
  if (action === 'lowercase') {
    return string.toLowerCase();
  }
  if (action === 'capitalize') {
    return capitalizeString(string);
  }
  if (action === 'fence') {
    return fenceString(string);
  } else {
    return string;
  }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase();
    case 'lowercase':
      return string.toLowerCase();
    case 'capitalize':
      return capitalizeString(string);
    case 'fence':
      return fenceString(string);
    default:
      return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (let value of string) console.log(value);
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let index = 0;
  while (index < string.length) {
    index++;
    console.log(string[index]);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
  return string.split('', string.length).forEach((item) => console.log(item));
};
