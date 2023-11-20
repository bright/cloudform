import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ColumnWildcard {
    ExcludedColumnNames?: List<Value<string>>;
    constructor(properties: ColumnWildcard);
}
export declare class DataCellsFilterResource {
    TableName: Value<string>;
    DatabaseName: Value<string>;
    TableCatalogId: Value<string>;
    Name: Value<string>;
    constructor(properties: DataCellsFilterResource);
}
export declare class DataLakePrincipal {
    DataLakePrincipalIdentifier?: Value<string>;
    constructor(properties: DataLakePrincipal);
}
export declare class DataLocationResource {
    ResourceArn: Value<string>;
    CatalogId: Value<string>;
    constructor(properties: DataLocationResource);
}
export declare class DatabaseResource {
    CatalogId: Value<string>;
    Name: Value<string>;
    constructor(properties: DatabaseResource);
}
export declare class LFTag {
    TagKey?: Value<string>;
    TagValues?: List<Value<string>>;
    constructor(properties: LFTag);
}
export declare class LFTagKeyResource {
    TagKey: Value<string>;
    CatalogId: Value<string>;
    TagValues: List<Value<string>>;
    constructor(properties: LFTagKeyResource);
}
export declare class LFTagPolicyResource {
    Expression: List<LFTag>;
    ResourceType: Value<string>;
    CatalogId: Value<string>;
    constructor(properties: LFTagPolicyResource);
}
export declare class Resource {
    LFTag?: LFTagKeyResource;
    Table?: TableResource;
    DataCellsFilter?: DataCellsFilterResource;
    TableWithColumns?: TableWithColumnsResource;
    LFTagPolicy?: LFTagPolicyResource;
    Database?: DatabaseResource;
    DataLocation?: DataLocationResource;
    Catalog?: {
        [key: string]: any;
    };
    constructor(properties: Resource);
}
export declare class TableResource {
    DatabaseName: Value<string>;
    CatalogId: Value<string>;
    TableWildcard?: {
        [key: string]: any;
    };
    Name?: Value<string>;
    constructor(properties: TableResource);
}
export declare class TableWithColumnsResource {
    ColumnNames?: List<Value<string>>;
    DatabaseName: Value<string>;
    CatalogId: Value<string>;
    Name: Value<string>;
    ColumnWildcard?: ColumnWildcard;
    constructor(properties: TableWithColumnsResource);
}
export interface PrincipalPermissionsProperties {
    Resource: Resource;
    Permissions: List<Value<string>>;
    Catalog?: Value<string>;
    Principal: DataLakePrincipal;
    PermissionsWithGrantOption: List<Value<string>>;
}
export default class PrincipalPermissions extends ResourceBase<PrincipalPermissionsProperties> {
    static ColumnWildcard: typeof ColumnWildcard;
    static DataCellsFilterResource: typeof DataCellsFilterResource;
    static DataLakePrincipal: typeof DataLakePrincipal;
    static DataLocationResource: typeof DataLocationResource;
    static DatabaseResource: typeof DatabaseResource;
    static LFTag: typeof LFTag;
    static LFTagKeyResource: typeof LFTagKeyResource;
    static LFTagPolicyResource: typeof LFTagPolicyResource;
    static Resource: typeof Resource;
    static TableResource: typeof TableResource;
    static TableWithColumnsResource: typeof TableWithColumnsResource;
    constructor(properties: PrincipalPermissionsProperties);
}
