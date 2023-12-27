import { execSync } from 'child_process';

import chalk from 'chalk';
import enquirer from 'enquirer';
import figlet from 'figlet';

/** main */
export default async function branchSelect() {
  const branches = getBranches();
  const choices = branches.map((name) => ({ name }));

  const _rsp = await enquirer.prompt<{ branch: string }>({
    name: 'branch',
    message: 'select branch to checkout',
    type: 'autocomplete',
    choices,
  });

  const branch = trimBranchName(_rsp.branch);
  return checkoutBranch(branch);
}

/** miscl */
export function banner() {
  const banner = figlet.textSync('Branch Select', { font: 'Small', horizontalLayout: 'full' });
  const banner_magenta = chalk.magentaBright(banner);

  console.log(banner_magenta);
}

export function trimBranchName(branch: string) {
  return branch.replace(/^\*/, '');
}

/** private */
function getBranches() {
  const branches = execSync('git branch --sort=committerdate').toString();
  return branches.split('\n').map((str) => str.trim());
}

function checkoutBranch(branch: string) {
  return execSync(`git checkout ${branch}`);
}
