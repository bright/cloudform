/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

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

export class MemberFrameworkConfiguration {
    MemberFabricConfiguration?: MemberFabricConfiguration

    constructor(properties: MemberFrameworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkFabricConfiguration {
    Edition!: Value<string>

    constructor(properties: NetworkFabricConfiguration) {
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
    static MemberConfiguration = MemberConfiguration
    static ApprovalThresholdPolicy = ApprovalThresholdPolicy
    static NetworkFrameworkConfiguration = NetworkFrameworkConfiguration
    static NetworkConfiguration = NetworkConfiguration
    static MemberFrameworkConfiguration = MemberFrameworkConfiguration
    static NetworkFabricConfiguration = NetworkFabricConfiguration
    static VotingPolicy = VotingPolicy
    static MemberFabricConfiguration = MemberFabricConfiguration

    constructor(properties: MemberProperties) {
        super('AWS::ManagedBlockchain::Member', properties)
    }
}
