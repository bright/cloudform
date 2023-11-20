import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class FailurePolicy {
    RpoInSecs: Value<number>;
    RtoInSecs: Value<number>;
    constructor(properties: FailurePolicy);
}
export interface ResiliencyPolicyProperties {
    Policy: {
        [key: string]: FailurePolicy;
    };
    PolicyDescription?: Value<string>;
    Tier: Value<string>;
    PolicyName: Value<string>;
    DataLocationConstraint?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ResiliencyPolicy extends ResourceBase<ResiliencyPolicyProperties> {
    static FailurePolicy: typeof FailurePolicy;
    constructor(properties: ResiliencyPolicyProperties);
}
