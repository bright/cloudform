import Table_ from './table';
import GlobalTable_ from './globalTable';
export declare namespace DynamoDB {
    const Table: typeof Table_;
    const GlobalTable: typeof GlobalTable_;
    type Table = Table_;
    type GlobalTable = GlobalTable_;
}
