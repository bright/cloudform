import Database_ from './database';
import Table_ from './table';
export declare namespace Timestream {
    const Database: typeof Database_;
    const Table: typeof Table_;
    type Database = Database_;
    type Table = Table_;
}
