const errorAndExit = (message: string, error: Error): never => {
  console.error(message);
  if (process.env.NODE_ENV === 'development') {
    console.log(error);
  }
  process.exit(1);
};

const infoAndExit = (message: string): never => {
  console.log(message);
  process.exit(1);
};

const logInfo = (message: string): void => {
  console.log(message);
};

export { errorAndExit, infoAndExit, logInfo };
