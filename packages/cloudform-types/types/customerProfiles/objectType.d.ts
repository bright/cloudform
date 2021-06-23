import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KeyMap {
    Name?: Value<string>;
    ObjectTypeKeyList?: List<ObjectTypeKey>;
    constructor(properties: KeyMap);
}
export declare class FieldMap {
    Name?: Value<string>;
    ObjectTypeField?: ObjectTypeField;
    constructor(properties: FieldMap);
}
export declare class ObjectTypeField {
    Source?: Value<string>;
    Target?: Value<string>;
    ContentType?: Value<string>;
    constructor(properties: ObjectTypeField);
}
export declare class ObjectTypeKey {
    FieldNames?: List<Value<string>>;
    StandardIdentifiers?: List<Value<string>>;
    constructor(properties: ObjectTypeKey);
}
export interface ObjectTypeProperties {
    DomainName: Value<string>;
    ObjectTypeName?: Value<string>;
    AllowProfileCreation?: Value<boolean>;
    Description?: Value<string>;
    EncryptionKey?: Value<string>;
    ExpirationDays?: Value<number>;
    Fields?: List<FieldMap>;
    Keys?: List<KeyMap>;
    Tags?: List<ResourceTag>;
    TemplateId?: Value<string>;
}
export default class ObjectType extends ResourceBase<ObjectTypeProperties> {
    static KeyMap: typeof KeyMap;
    static FieldMap: typeof FieldMap;
    static ObjectTypeField: typeof ObjectTypeField;
    static ObjectTypeKey: typeof ObjectTypeKey;
    constructor(properties: ObjectTypeProperties);
}
