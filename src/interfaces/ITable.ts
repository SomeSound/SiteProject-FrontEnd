import IPagination from './IPagination';

import IMusic from './IMusic';

interface ITable {
  headers: string[];
  items: Array<IMusic>;
  pagination?: IPagination;
}

export default ITable;
