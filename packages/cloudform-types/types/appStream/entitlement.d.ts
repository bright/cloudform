import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Attribute {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: Attribute);
}
export interface EntitlementProperties {
    AppVisibility: Value<string>;
    Description?: Value<string>;
    Attributes: List<Attribute>;
    StackName: Value<string>;
    Name: Value<string>;
}
export default class Entitlement extends ResourceBase<EntitlementProperties> {
    static Attribute: typeof Attribute;
    constructor(properties: EntitlementProperties);
}
