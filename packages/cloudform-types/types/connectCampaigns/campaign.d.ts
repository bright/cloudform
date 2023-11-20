import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AgentlessDialerConfig {
    DialingCapacity?: Value<number>;
    constructor(properties: AgentlessDialerConfig);
}
export declare class AnswerMachineDetectionConfig {
    EnableAnswerMachineDetection: Value<boolean>;
    constructor(properties: AnswerMachineDetectionConfig);
}
export declare class DialerConfig {
    AgentlessDialerConfig?: AgentlessDialerConfig;
    PredictiveDialerConfig?: PredictiveDialerConfig;
    ProgressiveDialerConfig?: ProgressiveDialerConfig;
    constructor(properties: DialerConfig);
}
export declare class OutboundCallConfig {
    ConnectContactFlowArn: Value<string>;
    ConnectQueueArn?: Value<string>;
    AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;
    ConnectSourcePhoneNumber?: Value<string>;
    constructor(properties: OutboundCallConfig);
}
export declare class PredictiveDialerConfig {
    DialingCapacity?: Value<number>;
    BandwidthAllocation: Value<number>;
    constructor(properties: PredictiveDialerConfig);
}
export declare class ProgressiveDialerConfig {
    DialingCapacity?: Value<number>;
    BandwidthAllocation: Value<number>;
    constructor(properties: ProgressiveDialerConfig);
}
export interface CampaignProperties {
    OutboundCallConfig: OutboundCallConfig;
    ConnectInstanceArn: Value<string>;
    DialerConfig: DialerConfig;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Campaign extends ResourceBase<CampaignProperties> {
    static AgentlessDialerConfig: typeof AgentlessDialerConfig;
    static AnswerMachineDetectionConfig: typeof AnswerMachineDetectionConfig;
    static DialerConfig: typeof DialerConfig;
    static OutboundCallConfig: typeof OutboundCallConfig;
    static PredictiveDialerConfig: typeof PredictiveDialerConfig;
    static ProgressiveDialerConfig: typeof ProgressiveDialerConfig;
    constructor(properties: CampaignProperties);
}
