import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DeadLetterConfigProperties {
    TargetArn?: Value<string>;
}
export default class DeadLetterConfig extends ResourceBase {
    constructor(properties: DeadLetterConfigProperties, dependsOn?: Value<string>);
}
