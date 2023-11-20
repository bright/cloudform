import Database_ from './database';
import ScheduledQuery_ from './scheduledQuery';
import Table_ from './table';
export declare namespace Timestream {
    const Database: typeof Database_;
    const ScheduledQuery: typeof ScheduledQuery_;
    const Table: typeof Table_;
    type Database = Database_;
    type ScheduledQuery = ScheduledQuery_;
    type Table = Table_;
}
