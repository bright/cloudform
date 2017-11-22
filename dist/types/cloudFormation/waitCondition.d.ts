import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface WaitConditionProperties {
    Count?: Value<number>;
    Handle: Value<string>;
    Timeout: Value<string>;
}
export default class WaitCondition extends ResourceBase {
    constructor(properties: WaitConditionProperties, dependsOn?: Value<string>);
}
