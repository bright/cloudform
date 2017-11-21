import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "String" | "StringList";
export interface ParameterProperties {
    Name?: Value<string>;
    Description?: Value<string>;
    Type: Value<Type>;
    Value: Value<string>;
}
export default class Parameter extends ResourceBase {
    constructor(properties: ParameterProperties, dependsOn?: Value<string>);
}
