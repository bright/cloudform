import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DatabaseResource {
    CatalogId: Value<string>;
    Name: Value<string>;
    constructor(properties: DatabaseResource);
}
export declare class LFTagPair {
    TagKey: Value<string>;
    CatalogId: Value<string>;
    TagValues: List<Value<string>>;
    constructor(properties: LFTagPair);
}
export declare class Resource {
    Table?: TableResource;
    TableWithColumns?: TableWithColumnsResource;
    Database?: DatabaseResource;
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
    ColumnNames: List<Value<string>>;
    DatabaseName: Value<string>;
    CatalogId: Value<string>;
    Name: Value<string>;
    constructor(properties: TableWithColumnsResource);
}
export interface TagAssociationProperties {
    LFTags: List<LFTagPair>;
    Resource: Resource;
}
export default class TagAssociation extends ResourceBase<TagAssociationProperties> {
    static DatabaseResource: typeof DatabaseResource;
    static LFTagPair: typeof LFTagPair;
    static Resource: typeof Resource;
    static TableResource: typeof TableResource;
    static TableWithColumnsResource: typeof TableWithColumnsResource;
    constructor(properties: TagAssociationProperties);
}
