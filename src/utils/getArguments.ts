/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable unicorn/prevent-abbreviations */
import yargs from 'yargs';
import { appDescription } from '../info/description';
import { validatePattern } from './validators';

interface ICommandArguments {
  _: string[];
  ext: string[];
  order: string;
  pattern: string;
  sort: string;
  sourcePath: string;
  userDir: string;
}

type UserArguments = Omit<ICommandArguments, '_'>;

const options = {
  dir: {
    alias: 'd',
    demandOption: 'Directory name for files is required',
    describe: 'Directory name with file for rename',
    type: 'string' as 'string',
  },
  ext: {
    alias: 'e',
    array: true,
    default: [],
    demandOption: false,
    describe: 'File extensions for rename',
    type: 'array' as 'array',
  },
  order: {
    alias: 'o',
    choices: ['asc', 'desc'],
    default: 'asc',
    describe: 'Sort order: asending or descending',
  },
  pattern: {
    alias: 'p',
    coerce: (userPattern: string): string => {
      if (!validatePattern(userPattern)) {
        throw new Error(
          'Please enter correct pattern for file name. Ex.: file-$$$',
        );
      }
      return userPattern;
    },
    default: 'file-$$$',
    demandOption: false,
    describe: 'Pattern for new file names ex. photo-$$$',
    type: 'string' as 'string',
  },
  sort: {
    alias: 's',
    choices: ['name', 'date'],
    default: 'name',
    describe: 'Sort base: date or name',
  },
};

const getArguments = (argv: string[]): UserArguments => {
  const argv1 = yargs(argv.slice(1))
    .options(options)
    .locale('en')
    .usage(appDescription).argv;
  console.log(argv1);
  const {
    argv: {
      dir: userDir,
      ext,
      order,
      pattern,
      sort,
      _: [sourcePath],
    },
  } = yargs(argv.slice(1)).options(options).locale('en').usage(appDescription);

  const userArguments: UserArguments = {
    ext,
    order,
    pattern,
    sort,
    sourcePath,
    userDir,
  };

  return userArguments;
};

export { getArguments, UserArguments };
