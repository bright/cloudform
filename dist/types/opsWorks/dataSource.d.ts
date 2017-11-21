import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "AutoSelectOpsworksMysqlInstance" | "OpsworksMysqlInstance" | "RdsDbInstance";
export interface DataSourceProperties {
    Arn?: Value<string>;
    DatabaseName?: Value<string>;
    Type?: Value<Type>;
}
export default class DataSource extends ResourceBase {
    constructor(properties: DataSourceProperties, dependsOn?: Value<string>);
}
