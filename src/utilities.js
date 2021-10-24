import format from 'format-number';

const formatAsCurrency = format({ suffix: ' VNĐ', truncate: 2, padRight: 0 });

export const toCurrency = (number) => {
  if (!number) return formatAsCurrency(0);
  return formatAsCurrency(number);
};
