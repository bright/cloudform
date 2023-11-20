import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class PolicyStatus {
    IsPublic: Value<string>;
    constructor(properties: PolicyStatus);
}
export interface MultiRegionAccessPointPolicyProperties {
    Policy: {
        [key: string]: any;
    };
    MrapName: Value<string>;
}
export default class MultiRegionAccessPointPolicy extends ResourceBase<MultiRegionAccessPointPolicyProperties> {
    static PolicyStatus: typeof PolicyStatus;
    constructor(properties: MultiRegionAccessPointPolicyProperties);
}
