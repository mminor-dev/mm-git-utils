import clear from 'clear';
import branchSelect, { banner } from './lib/branch-select';

export default async function main() {
  clear();
  banner();

  await branchSelect();
}
