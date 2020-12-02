const validatePattern = (pattern: string): boolean => {
  const regexp = /^(\w+)(-)(\$+)$/;
  return regexp.test(pattern);
};

export { validatePattern };
