import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "String" | "Number" | "Boolean";
export interface ConfigurationPropertieProperties {
    Description?: Value<string>;
    Key: Value<boolean>;
    Name: Value<string>;
    Queryable?: Value<boolean>;
    Required: Value<boolean>;
    Secret: Value<boolean>;
    Type?: Value<Type>;
}
export default class ConfigurationPropertie extends ResourceBase {
    constructor(properties: ConfigurationPropertieProperties, dependsOn?: Value<string>);
}
