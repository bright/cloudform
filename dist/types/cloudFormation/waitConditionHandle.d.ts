import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface WaitConditionHandleProperties {
}
export default class WaitConditionHandle extends ResourceBase {
    constructor(properties: WaitConditionHandleProperties, dependsOn?: Value<string>);
}
