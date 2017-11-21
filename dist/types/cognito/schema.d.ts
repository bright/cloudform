import { ResourceBase } from '../resource';
import { Value } from '../internal';
import NumberAttributeConstraints from './numberAttributeConstraints';
import StringAttributeConstraints from './stringAttributeConstraints';
export declare type AttributeDataType = "*" | "String" | "Number" | "DateTime" | "Boolean";
export interface SchemaProperties {
    AttributeDataType?: Value<AttributeDataType>;
    DeveloperOnlyAttribute?: Value<boolean>;
    Mutable?: Value<boolean>;
    Name?: Value<string>;
    NumberAttributeConstraints?: NumberAttributeConstraints;
    StringAttributeConstraints?: StringAttributeConstraints;
    Required?: Value<boolean>;
}
export default class Schema extends ResourceBase {
    constructor(properties: SchemaProperties, dependsOn?: Value<string>);
}
