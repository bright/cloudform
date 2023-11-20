import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ApprovalThresholdPolicy {
    ThresholdComparator?: Value<string>;
    ThresholdPercentage?: Value<number>;
    ProposalDurationInHours?: Value<number>;
    constructor(properties: ApprovalThresholdPolicy);
}
export declare class MemberConfiguration {
    Description?: Value<string>;
    MemberFrameworkConfiguration?: MemberFrameworkConfiguration;
    Name: Value<string>;
    constructor(properties: MemberConfiguration);
}
export declare class MemberFabricConfiguration {
    AdminUsername: Value<string>;
    AdminPassword: Value<string>;
    constructor(properties: MemberFabricConfiguration);
}
export declare class MemberFrameworkConfiguration {
    MemberFabricConfiguration?: MemberFabricConfiguration;
    constructor(properties: MemberFrameworkConfiguration);
}
export declare class NetworkConfiguration {
    Description?: Value<string>;
    FrameworkVersion: Value<string>;
    VotingPolicy: VotingPolicy;
    Framework: Value<string>;
    Name: Value<string>;
    NetworkFrameworkConfiguration?: NetworkFrameworkConfiguration;
    constructor(properties: NetworkConfiguration);
}
export declare class NetworkFabricConfiguration {
    Edition: Value<string>;
    constructor(properties: NetworkFabricConfiguration);
}
export declare class NetworkFrameworkConfiguration {
    NetworkFabricConfiguration?: NetworkFabricConfiguration;
    constructor(properties: NetworkFrameworkConfiguration);
}
export declare class VotingPolicy {
    ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
    constructor(properties: VotingPolicy);
}
export interface MemberProperties {
    MemberConfiguration: MemberConfiguration;
    NetworkConfiguration?: NetworkConfiguration;
    NetworkId?: Value<string>;
    InvitationId?: Value<string>;
}
export default class Member extends ResourceBase<MemberProperties> {
    static ApprovalThresholdPolicy: typeof ApprovalThresholdPolicy;
    static MemberConfiguration: typeof MemberConfiguration;
    static MemberFabricConfiguration: typeof MemberFabricConfiguration;
    static MemberFrameworkConfiguration: typeof MemberFrameworkConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static NetworkFabricConfiguration: typeof NetworkFabricConfiguration;
    static NetworkFrameworkConfiguration: typeof NetworkFrameworkConfiguration;
    static VotingPolicy: typeof VotingPolicy;
    constructor(properties: MemberProperties);
}
