import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectionPoolConfigurationInfoFormat {
    MaxConnectionsPercent?: Value<number>;
    MaxIdleConnectionsPercent?: Value<number>;
    ConnectionBorrowTimeout?: Value<number>;
    SessionPinningFilters?: List<Value<string>>;
    InitQuery?: Value<string>;
    constructor(properties: ConnectionPoolConfigurationInfoFormat);
}
export interface DBProxyTargetGroupProperties {
    DBProxyName: Value<string>;
    TargetGroupName: Value<string>;
    ConnectionPoolConfigurationInfo?: ConnectionPoolConfigurationInfoFormat;
    DBInstanceIdentifiers?: List<Value<string>>;
    DBClusterIdentifiers?: List<Value<string>>;
}
export default class DBProxyTargetGroup extends ResourceBase<DBProxyTargetGroupProperties> {
    static ConnectionPoolConfigurationInfoFormat: typeof ConnectionPoolConfigurationInfoFormat;
    constructor(properties: DBProxyTargetGroupProperties);
}
