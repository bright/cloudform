import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EnabledControlProperties {
    ControlIdentifier: Value<string>;
    TargetIdentifier: Value<string>;
}
export default class EnabledControl extends ResourceBase<EnabledControlProperties> {
    constructor(properties: EnabledControlProperties);
}
