import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface StepPropertieProperties {
    Key: Value<string>;
    Value?: Value<string>;
}
export default class StepPropertie extends ResourceBase {
    constructor(properties: StepPropertieProperties, dependsOn?: Value<string>);
}
