const leadZero = (number: number, digits: number): string => {
  const numberLength = number.toString().length;

  const zeroChar = '0';
  if (numberLength < digits) {
    const zeroNumber = digits - numberLength;
    const numberWithLead = `${zeroChar.repeat(zeroNumber)}${number}`;

    return numberWithLead;
  }

  return number.toString();
};

export { leadZero };
