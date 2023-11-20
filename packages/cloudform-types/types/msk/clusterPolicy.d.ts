import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ClusterPolicyProperties {
    Policy: {
        [key: string]: any;
    };
    ClusterArn: Value<string>;
}
export default class ClusterPolicy extends ResourceBase<ClusterPolicyProperties> {
    constructor(properties: ClusterPolicyProperties);
}
