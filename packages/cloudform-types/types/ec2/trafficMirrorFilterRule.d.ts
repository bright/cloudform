import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class TrafficMirrorPortRangeRequest {
    FromPort: Value<number>;
    ToPort: Value<number>;
    constructor(properties: TrafficMirrorPortRangeRequest);
}
export interface TrafficMirrorFilterRuleProperties {
    DestinationPortRange?: TrafficMirrorPortRangeRequest;
    Description?: Value<string>;
    SourcePortRange?: TrafficMirrorPortRangeRequest;
    RuleAction: Value<string>;
    SourceCidrBlock: Value<string>;
    RuleNumber: Value<number>;
    DestinationCidrBlock: Value<string>;
    TrafficMirrorFilterId: Value<string>;
    TrafficDirection: Value<string>;
    Protocol?: Value<number>;
}
export default class TrafficMirrorFilterRule extends ResourceBase<TrafficMirrorFilterRuleProperties> {
    static TrafficMirrorPortRangeRequest: typeof TrafficMirrorPortRangeRequest;
    constructor(properties: TrafficMirrorFilterRuleProperties);
}
