import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FieldMap {
    Name?: Value<string>;
    ObjectTypeField?: ObjectTypeField;
    constructor(properties: FieldMap);
}
export declare class KeyMap {
    ObjectTypeKeyList?: List<ObjectTypeKey>;
    Name?: Value<string>;
    constructor(properties: KeyMap);
}
export declare class ObjectTypeField {
    Target?: Value<string>;
    ContentType?: Value<string>;
    Source?: Value<string>;
    constructor(properties: ObjectTypeField);
}
export declare class ObjectTypeKey {
    FieldNames?: List<Value<string>>;
    StandardIdentifiers?: List<Value<string>>;
    constructor(properties: ObjectTypeKey);
}
export interface ObjectTypeProperties {
    Description?: Value<string>;
    Fields?: List<FieldMap>;
    DomainName: Value<string>;
    AllowProfileCreation?: Value<boolean>;
    ObjectTypeName?: Value<string>;
    Keys?: List<KeyMap>;
    SourceLastUpdatedTimestampFormat?: Value<string>;
    EncryptionKey?: Value<string>;
    Tags?: List<ResourceTag>;
    TemplateId?: Value<string>;
    ExpirationDays?: Value<number>;
}
export default class ObjectType extends ResourceBase<ObjectTypeProperties> {
    static FieldMap: typeof FieldMap;
    static KeyMap: typeof KeyMap;
    static ObjectTypeField: typeof ObjectTypeField;
    static ObjectTypeKey: typeof ObjectTypeKey;
    constructor(properties: ObjectTypeProperties);
}
