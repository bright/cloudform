import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SchemaInputAttribute {
    GroupName?: Value<string>;
    Type: Value<string>;
    SubType?: Value<string>;
    MatchKey?: Value<string>;
    FieldName: Value<string>;
    constructor(properties: SchemaInputAttribute);
}
export interface SchemaMappingProperties {
    Description?: Value<string>;
    MappedInputFields: List<SchemaInputAttribute>;
    SchemaName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class SchemaMapping extends ResourceBase<SchemaMappingProperties> {
    static SchemaInputAttribute: typeof SchemaInputAttribute;
    constructor(properties: SchemaMappingProperties);
}
