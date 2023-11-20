import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FairsharePolicy {
    ShareDistribution?: List<ShareAttributes>;
    ShareDecaySeconds?: Value<number>;
    ComputeReservation?: Value<number>;
    constructor(properties: FairsharePolicy);
}
export declare class ShareAttributes {
    WeightFactor?: Value<number>;
    ShareIdentifier?: Value<string>;
    constructor(properties: ShareAttributes);
}
export interface SchedulingPolicyProperties {
    FairsharePolicy?: FairsharePolicy;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
}
export default class SchedulingPolicy extends ResourceBase<SchedulingPolicyProperties> {
    static FairsharePolicy: typeof FairsharePolicy;
    static ShareAttributes: typeof ShareAttributes;
    constructor(properties?: SchedulingPolicyProperties);
}
