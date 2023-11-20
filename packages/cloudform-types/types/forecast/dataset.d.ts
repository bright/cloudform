import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributesItems {
    AttributeType?: Value<string>;
    AttributeName?: Value<string>;
    constructor(properties: AttributesItems);
}
export declare class EncryptionConfig {
    KmsKeyArn?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: EncryptionConfig);
}
export declare class Schema {
    Attributes?: List<AttributesItems>;
    constructor(properties: Schema);
}
export declare class TagsItems {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagsItems);
}
export interface DatasetProperties {
    DataFrequency?: Value<string>;
    DatasetName: Value<string>;
    Schema: Schema;
    DatasetType: Value<string>;
    Domain: Value<string>;
    EncryptionConfig?: EncryptionConfig;
    Tags?: List<TagsItems>;
}
export default class Dataset extends ResourceBase<DatasetProperties> {
    static AttributesItems: typeof AttributesItems;
    static EncryptionConfig: typeof EncryptionConfig;
    static Schema: typeof Schema;
    static TagsItems: typeof TagsItems;
    constructor(properties: DatasetProperties);
}
