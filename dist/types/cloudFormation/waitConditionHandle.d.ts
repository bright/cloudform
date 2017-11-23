import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface WaitConditionHandleProperties {
}
export default class WaitConditionHandle extends ResourceBase {
    constructor(properties: WaitConditionHandleProperties, dependsOn?: Value<string>);
}
