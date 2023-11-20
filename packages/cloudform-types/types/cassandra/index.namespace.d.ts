import Keyspace_ from './keyspace';
import Table_ from './table';
export declare namespace Cassandra {
    const Keyspace: typeof Keyspace_;
    const Table: typeof Table_;
    type Keyspace = Keyspace_;
    type Table = Table_;
}
