import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface FieldProperties {
    Key: Value<string>;
    RefValue?: Value<string>;
    StringValue?: Value<string>;
}
export default class Field extends ResourceBase {
    constructor(properties: FieldProperties, dependsOn?: Value<string>);
}
