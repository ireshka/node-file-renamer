# Simple node renamer powered by Typescript

![Powered by: Free imagination](https://img.shields.io/badge/Powered%20by-Free%20imagination-blueviolet)
![Status: In progress](https://img.shields.io/badge/Status-In%20progress-blue)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

> This is a Typescript project to practice command-line node scripting and utilize built-in modules (but it also includes external libraries).

## :arrow_forward: Install
[soon]

## :key: Key features

- user can **mark all files for renaming or choose files with specified extensions** (example: '.png' '.jpg') - by default script will rename all files found in given directory
- can **choose sort type** - by name or date of creation and order descending or asdending (example `--sort name` `--sort date` `--order asc` `--order desc`) - by default script sorts by file name in an ascending order
- can **enter pattern for renaming** as: 'word-$$$', pattern should be in single quotation marks or script throws an error

## :gear: Usage
(before deploy) - example usage

```
npx ts-node ./src/index.ts --dir userDirectory [optional parameters] 

-e, --ext
  File extensions for renaming separated by space, ex. --ext '.jpg' '.png',
  by default all files are chosen for renaming

-o, --order
  Sort order: asending or descending, ex. --order asc
  Available options: asc or desc, by default: asc

-p, --pattern
  Pattern for new file names ex. --pattern photo-$$$
  Pattern should contain phrase with alphanumeric chars,
  next '-' char and min. one $ char for marking leading zeros,
  Default pattern is: 'file-$$$'.
  Pattern should be in single quotation marks.

-s, --sort
  Sort base: date or name, ex. --sort name
  Available options: name or date, by default: name
```

## :bomb: Attention & know issues
:paperclip: Files are renamed **without creating backup**. Always makes backup before renaming.

:paperclip: Do not use the same pattern more than once on partly renamed directory (for example: do not rename photo-$$$ again if you already have renamed some files with this pattern) - risk of file loss.

## :hammer: Technically
**Used external libraries:**
- [yargs](https://yargs.js.org/) for handling command-line options and managing built-in app doc

**Planned libraries:**
- signale / chalk for console info for user