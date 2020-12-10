# Simple node renamer powered by Typescript

This is a Typescript project to practice command-line node scripting and utilize built-in modules (but it also includes external libraries).

User:
- can mark all files for renaming or choose files with specified extensions (example: '.png' '.jpg') - by default script will rename all files found in given directory
- can choose sort type - by name or date of creation and order descending or asdending (example `--sort name` `--sort date` `--order asc` `--order desc`) - by default script sorts by file name in an ascending order

**Used libraries:**
- yargs

**Planned libraries:**
- signale / chalk for console info for user