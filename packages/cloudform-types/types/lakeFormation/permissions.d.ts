import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataLocationResource {
    S3Resource?: Value<string>;
    constructor(properties: DataLocationResource);
}
export declare class ColumnWildcard {
    ExcludedColumnNames?: List<Value<string>>;
    constructor(properties: ColumnWildcard);
}
export declare class DatabaseResource {
    Name?: Value<string>;
    constructor(properties: DatabaseResource);
}
export declare class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>;
    constructor(properties: DataLakePrincipal);
}
export declare class TableResource {
    DatabaseName?: Value<string>;
    Name?: Value<string>;
    constructor(properties: TableResource);
}
export declare class TableWithColumnsResource {
    ColumnNames?: List<Value<string>>;
    DatabaseName?: Value<string>;
    Name?: Value<string>;
    ColumnWildcard?: ColumnWildcard;
    constructor(properties: TableWithColumnsResource);
}
export declare class Resource {
    TableResource?: TableResource;
    DatabaseResource?: DatabaseResource;
    DataLocationResource?: DataLocationResource;
    TableWithColumnsResource?: TableWithColumnsResource;
    constructor(properties: Resource);
}
export interface PermissionsProperties {
    DataLakePrincipal: DataLakePrincipal;
    Resource: Resource;
    Permissions?: List<Value<string>>;
    PermissionsWithGrantOption?: List<Value<string>>;
}
export default class Permissions extends ResourceBase<PermissionsProperties> {
    static DataLocationResource: typeof DataLocationResource;
    static ColumnWildcard: typeof ColumnWildcard;
    static DatabaseResource: typeof DatabaseResource;
    static DataLakePrincipal: typeof DataLakePrincipal;
    static TableResource: typeof TableResource;
    static TableWithColumnsResource: typeof TableWithColumnsResource;
    static Resource: typeof Resource;
    constructor(properties: PermissionsProperties);
}
