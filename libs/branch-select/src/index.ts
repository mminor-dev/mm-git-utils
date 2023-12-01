import clear from 'clear';
import branchSelect, { banner } from './lib/branch-select';

export default function main() {
  clear();
  banner();

  branchSelect();
}
