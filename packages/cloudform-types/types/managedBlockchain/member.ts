/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NetworkFrameworkConfiguration {
    NetworkFabricConfiguration?: NetworkFabricConfiguration

    constructor(properties: NetworkFrameworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    Description?: Value<string>
    FrameworkVersion!: Value<string>
    VotingPolicy!: VotingPolicy
    Framework!: Value<string>
    Name!: Value<string>
    NetworkFrameworkConfiguration?: NetworkFrameworkConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkFabricConfiguration {
    Edition!: Value<string>

    constructor(properties: NetworkFabricConfiguration) {
        Object.assign(this, properties)
    }
}

export class MemberConfiguration {
    Description?: Value<string>
    MemberFrameworkConfiguration?: MemberFrameworkConfiguration
    Name!: Value<string>

    constructor(properties: MemberConfiguration) {
        Object.assign(this, properties)
    }
}

export class ApprovalThresholdPolicy {
    ThresholdComparator?: Value<string>
    ThresholdPercentage?: Value<number>
    ProposalDurationInHours?: Value<number>

    constructor(properties: ApprovalThresholdPolicy) {
        Object.assign(this, properties)
    }
}

export class MemberFrameworkConfiguration {
    MemberFabricConfiguration?: MemberFabricConfiguration

    constructor(properties: MemberFrameworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class VotingPolicy {
    ApprovalThresholdPolicy?: ApprovalThresholdPolicy

    constructor(properties: VotingPolicy) {
        Object.assign(this, properties)
    }
}

export class MemberFabricConfiguration {
    AdminUsername!: Value<string>
    AdminPassword!: Value<string>

    constructor(properties: MemberFabricConfiguration) {
        Object.assign(this, properties)
    }
}

export interface MemberProperties {
    MemberConfiguration: MemberConfiguration
    NetworkConfiguration?: NetworkConfiguration
    NetworkId?: Value<string>
    InvitationId?: Value<string>
}

export default class Member extends ResourceBase<MemberProperties> {
    static NetworkFrameworkConfiguration = NetworkFrameworkConfiguration
    static NetworkConfiguration = NetworkConfiguration
    static NetworkFabricConfiguration = NetworkFabricConfiguration
    static MemberConfiguration = MemberConfiguration
    static ApprovalThresholdPolicy = ApprovalThresholdPolicy
    static MemberFrameworkConfiguration = MemberFrameworkConfiguration
    static VotingPolicy = VotingPolicy
    static MemberFabricConfiguration = MemberFabricConfiguration

    constructor(properties: MemberProperties) {
        super('AWS::ManagedBlockchain::Member', properties)
    }
}
