/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AgentlessDialerConfig {
    DialingCapacity?: Value<number>

    constructor(properties: AgentlessDialerConfig) {
        Object.assign(this, properties)
    }
}

export class AnswerMachineDetectionConfig {
    EnableAnswerMachineDetection!: Value<boolean>

    constructor(properties: AnswerMachineDetectionConfig) {
        Object.assign(this, properties)
    }
}

export class DialerConfig {
    AgentlessDialerConfig?: AgentlessDialerConfig
    PredictiveDialerConfig?: PredictiveDialerConfig
    ProgressiveDialerConfig?: ProgressiveDialerConfig

    constructor(properties: DialerConfig) {
        Object.assign(this, properties)
    }
}

export class OutboundCallConfig {
    ConnectContactFlowArn!: Value<string>
    ConnectQueueArn?: Value<string>
    AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig
    ConnectSourcePhoneNumber?: Value<string>

    constructor(properties: OutboundCallConfig) {
        Object.assign(this, properties)
    }
}

export class PredictiveDialerConfig {
    DialingCapacity?: Value<number>
    BandwidthAllocation!: Value<number>

    constructor(properties: PredictiveDialerConfig) {
        Object.assign(this, properties)
    }
}

export class ProgressiveDialerConfig {
    DialingCapacity?: Value<number>
    BandwidthAllocation!: Value<number>

    constructor(properties: ProgressiveDialerConfig) {
        Object.assign(this, properties)
    }
}

export interface CampaignProperties {
    OutboundCallConfig: OutboundCallConfig
    ConnectInstanceArn: Value<string>
    DialerConfig: DialerConfig
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Campaign extends ResourceBase<CampaignProperties> {
    static AgentlessDialerConfig = AgentlessDialerConfig
    static AnswerMachineDetectionConfig = AnswerMachineDetectionConfig
    static DialerConfig = DialerConfig
    static OutboundCallConfig = OutboundCallConfig
    static PredictiveDialerConfig = PredictiveDialerConfig
    static ProgressiveDialerConfig = ProgressiveDialerConfig

    constructor(properties: CampaignProperties) {
        super('AWS::ConnectCampaigns::Campaign', properties)
    }
}
