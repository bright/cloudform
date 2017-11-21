import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface NumberAttributeConstraintsProperties {
    MaxLength?: Value<string>;
    MinLength?: Value<string>;
}
export default class NumberAttributeConstraints extends ResourceBase {
    constructor(properties: NumberAttributeConstraintsProperties, dependsOn?: Value<string>);
}
