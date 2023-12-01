import chalk from 'chalk';
import { execSync } from 'child_process';
import figlet from 'figlet';

/** main */
export default function branchSelect() {
  const branches = getBranches();
  console.log(chalk.bgGreenBright(branches));
}

/** miscl */
export function banner() {
  const banner = figlet.textSync('Branch Select', { font: 'Small', horizontalLayout: 'full' });
  const banner_magenta = chalk.magentaBright(banner);

  console.log(banner_magenta);
}

/** private */
function getBranches() {
  const branches = execSync('git branch --sort=committerdate').toString();
  return branches;
}
