import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Constraints {
    ReadOnlyFields?: List<ReadOnlyFieldInfo>;
    InvisibleFields?: List<InvisibleFieldInfo>;
    RequiredFields?: List<RequiredFieldInfo>;
    constructor(properties: Constraints);
}
export declare class DefaultFieldValue {
    DefaultValue: Value<string>;
    Id: FieldIdentifier;
    constructor(properties: DefaultFieldValue);
}
export declare class Field {
    Type: Value<string>;
    Description?: Value<string>;
    Id: FieldIdentifier;
    SingleSelectOptions?: List<Value<string>>;
    constructor(properties: Field);
}
export declare class FieldIdentifier {
    Name: Value<string>;
    constructor(properties: FieldIdentifier);
}
export declare class InvisibleFieldInfo {
    Id: FieldIdentifier;
    constructor(properties: InvisibleFieldInfo);
}
export declare class ReadOnlyFieldInfo {
    Id: FieldIdentifier;
    constructor(properties: ReadOnlyFieldInfo);
}
export declare class RequiredFieldInfo {
    Id: FieldIdentifier;
    constructor(properties: RequiredFieldInfo);
}
export interface TaskTemplateProperties {
    Status?: Value<string>;
    Description?: Value<string>;
    Constraints?: Constraints;
    Defaults?: List<DefaultFieldValue>;
    Fields?: List<Field>;
    InstanceArn: Value<string>;
    ContactFlowArn?: Value<string>;
    ClientToken?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class TaskTemplate extends ResourceBase<TaskTemplateProperties> {
    static Constraints: typeof Constraints;
    static DefaultFieldValue: typeof DefaultFieldValue;
    static Field: typeof Field;
    static FieldIdentifier: typeof FieldIdentifier;
    static InvisibleFieldInfo: typeof InvisibleFieldInfo;
    static ReadOnlyFieldInfo: typeof ReadOnlyFieldInfo;
    static RequiredFieldInfo: typeof RequiredFieldInfo;
    constructor(properties: TaskTemplateProperties);
}
