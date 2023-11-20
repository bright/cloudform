import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ColumnWildcard {
    ExcludedColumnNames?: List<Value<string>>;
    constructor(properties: ColumnWildcard);
}
export declare class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>;
    constructor(properties: DataLakePrincipal);
}
export declare class DataLocationResource {
    S3Resource?: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: DataLocationResource);
}
export declare class DatabaseResource {
    CatalogId?: Value<string>;
    Name?: Value<string>;
    constructor(properties: DatabaseResource);
}
export declare class Resource {
    TableResource?: TableResource;
    DatabaseResource?: DatabaseResource;
    DataLocationResource?: DataLocationResource;
    TableWithColumnsResource?: TableWithColumnsResource;
    constructor(properties: Resource);
}
export declare class TableResource {
    DatabaseName?: Value<string>;
    CatalogId?: Value<string>;
    TableWildcard?: TableWildcard;
    Name?: Value<string>;
    constructor(properties: TableResource);
}
export declare class TableWildcard {
    constructor(properties: TableWildcard);
}
export declare class TableWithColumnsResource {
    ColumnNames?: List<Value<string>>;
    DatabaseName?: Value<string>;
    CatalogId?: Value<string>;
    Name?: Value<string>;
    ColumnWildcard?: ColumnWildcard;
    constructor(properties: TableWithColumnsResource);
}
export interface PermissionsProperties {
    DataLakePrincipal: DataLakePrincipal;
    Resource: Resource;
    Permissions?: List<Value<string>>;
    PermissionsWithGrantOption?: List<Value<string>>;
}
export default class Permissions extends ResourceBase<PermissionsProperties> {
    static ColumnWildcard: typeof ColumnWildcard;
    static DataLakePrincipal: typeof DataLakePrincipal;
    static DataLocationResource: typeof DataLocationResource;
    static DatabaseResource: typeof DatabaseResource;
    static Resource: typeof Resource;
    static TableResource: typeof TableResource;
    static TableWildcard: typeof TableWildcard;
    static TableWithColumnsResource: typeof TableWithColumnsResource;
    constructor(properties: PermissionsProperties);
}
