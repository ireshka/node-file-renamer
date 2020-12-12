// eslint-disable-next-line node/no-missing-import
import chalk from 'chalk';

const { log, error } = console;

const errorBox = chalk.bold.magenta;
const infoBox = chalk.blueBright;

const errorAndExit = (message: string, errorObject: Error): never => {
  const errorText = `! ${message}`;
  error(`\n${errorBox(errorText)}\n`);
  if (process.env.NODE_ENV === 'development') {
    console.log(errorObject);
  }
  process.exit(1);
};

const displayInfo = (message: string): void => {
  const infoText = `➜ ${message}`;
  log(`\n${infoBox(infoText)}\n`);
};

const infoAndExit = (message: string): never => {
  displayInfo(message);
  process.exit(1);
};

const logInfo = (message: string): void => {
  displayInfo(message);
};

export { errorAndExit, infoAndExit, logInfo };
