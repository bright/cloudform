import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AssociationParameterProperties {
    Key: Value<string>;
    Value: Value<string>[];
}
export default class AssociationParameter extends ResourceBase {
    constructor(properties: AssociationParameterProperties, dependsOn?: Value<string>);
}
