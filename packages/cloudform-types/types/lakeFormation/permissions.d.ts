import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class Resource {
    TableResource?: TableResource;
    DatabaseResource?: DatabaseResource;
    constructor(properties: Resource);
}
export interface PermissionsProperties {
    DataLakePrincipal: DataLakePrincipal;
    Resource: Resource;
    Permissions?: List<Value<string>>;
    PermissionsWithGrantOption?: List<Value<string>>;
}
export default class Permissions extends ResourceBase<PermissionsProperties> {
    static DatabaseResource: typeof DatabaseResource;
    static DataLakePrincipal: typeof DataLakePrincipal;
    static TableResource: typeof TableResource;
    static Resource: typeof Resource;
    constructor(properties: PermissionsProperties);
}
