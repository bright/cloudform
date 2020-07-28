import Table_ from './table';
import Keyspace_ from './keyspace';
export declare namespace Cassandra {
    const Table: typeof Table_;
    const Keyspace: typeof Keyspace_;
    type Table = Table_;
    type Keyspace = Keyspace_;
}
