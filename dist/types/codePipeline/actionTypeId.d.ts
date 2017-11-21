import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Category = "*" | "Source" | "Build" | "Deploy" | "Test" | "Invoke";
export declare type Owner = "*" | "AWS" | "ThirdParty" | "Custom";
export interface ActionTypeIdProperties {
    Category: Value<Category>;
    Owner: Value<Owner>;
    Provider: Value<string>;
    Version: Value<string>;
}
export default class ActionTypeId extends ResourceBase {
    constructor(properties: ActionTypeIdProperties, dependsOn?: Value<string>);
}
