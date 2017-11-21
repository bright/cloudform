import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Attribute from './attribute';
export interface ParameterObjectProperties {
    Attributes: Attribute[];
    Id: Value<string>;
}
export default class ParameterObject extends ResourceBase {
    constructor(properties: ParameterObjectProperties, dependsOn?: Value<string>);
}
