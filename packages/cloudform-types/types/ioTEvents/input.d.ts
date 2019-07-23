import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Attribute {
    JsonPath?: Value<string>;
    constructor(properties: Attribute);
}
export declare class InputDefinition {
    Attributes?: List<Attribute>;
    constructor(properties: InputDefinition);
}
export interface InputProperties {
    InputDefinition?: InputDefinition;
    InputName?: Value<string>;
    InputDescription?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Input extends ResourceBase<InputProperties> {
    static Attribute: typeof Attribute;
    static InputDefinition: typeof InputDefinition;
    constructor(properties?: InputProperties);
}
