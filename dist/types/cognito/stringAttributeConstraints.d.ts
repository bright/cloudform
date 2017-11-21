import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface StringAttributeConstraintsProperties {
    MaxLength?: Value<string>;
    MinLength?: Value<string>;
}
export default class StringAttributeConstraints extends ResourceBase {
    constructor(properties: StringAttributeConstraintsProperties, dependsOn?: Value<string>);
}
