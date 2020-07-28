import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class TrafficMirrorPortRange {
    FromPort: Value<number>;
    ToPort: Value<number>;
    constructor(properties: TrafficMirrorPortRange);
}
export interface TrafficMirrorFilterRuleProperties {
    DestinationPortRange?: TrafficMirrorPortRange;
    Description?: Value<string>;
    SourcePortRange?: TrafficMirrorPortRange;
    RuleAction: Value<string>;
    SourceCidrBlock: Value<string>;
    RuleNumber: Value<number>;
    DestinationCidrBlock: Value<string>;
    TrafficMirrorFilterId: Value<string>;
    TrafficDirection: Value<string>;
    Protocol?: Value<number>;
}
export default class TrafficMirrorFilterRule extends ResourceBase<TrafficMirrorFilterRuleProperties> {
    static TrafficMirrorPortRange: typeof TrafficMirrorPortRange;
    constructor(properties: TrafficMirrorFilterRuleProperties);
}
