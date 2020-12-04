/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable unicorn/prevent-abbreviations */
import yargs from 'yargs';
import { appDescription } from '../info/description';
import { validatePattern } from './validators';

interface ICommandArguments {
  _: string[];
  ext: string[];
  pattern: string;
  sourcePath: string;
  userDir: string;
}

type UserArguments = Omit<ICommandArguments, '_'>;

const options = {
  d: {
    alias: 'dir',
    demandOption: 'Directory name for files is required',
    describe: 'Directory name with file for rename',
    type: 'string' as 'string',
  },
  // e needed as command parameter
  // eslint-disable-next-line unicorn/prevent-abbreviations
  e: {
    alias: 'ext',
    array: true,
    default: [],
    demandOption: false,
    describe: 'File extensions for rename',
    type: 'array' as 'array',
  },
  p: {
    alias: 'pattern',
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
};

const getArguments = (argv: string[]): UserArguments => {
  const {
    argv: {
      d: userDir,
      e: ext,
      p: pattern,
      _: [sourcePath],
    },
  } = yargs(argv.slice(1)).options(options).locale('en').usage(appDescription);

  console.log(ext);

  const userArguments: UserArguments = {
    ext,
    pattern,
    sourcePath,
    userDir,
  };

  return userArguments;
};

export { getArguments, UserArguments };
