import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class MemberConfiguration {
    Description?: Value<string>;
    MemberFrameworkConfiguration?: MemberFrameworkConfiguration;
    Name: Value<string>;
    constructor(properties: MemberConfiguration);
}
export declare class ApprovalThresholdPolicy {
    ThresholdComparator?: Value<string>;
    ThresholdPercentage?: Value<number>;
    ProposalDurationInHours?: Value<number>;
    constructor(properties: ApprovalThresholdPolicy);
}
export declare class NetworkFrameworkConfiguration {
    NetworkFabricConfiguration?: NetworkFabricConfiguration;
    constructor(properties: NetworkFrameworkConfiguration);
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
export declare class MemberFrameworkConfiguration {
    MemberFabricConfiguration?: MemberFabricConfiguration;
    constructor(properties: MemberFrameworkConfiguration);
}
export declare class NetworkFabricConfiguration {
    Edition: Value<string>;
    constructor(properties: NetworkFabricConfiguration);
}
export declare class VotingPolicy {
    ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
    constructor(properties: VotingPolicy);
}
export declare class MemberFabricConfiguration {
    AdminUsername: Value<string>;
    AdminPassword: Value<string>;
    constructor(properties: MemberFabricConfiguration);
}
export interface MemberProperties {
    MemberConfiguration: MemberConfiguration;
    NetworkConfiguration?: NetworkConfiguration;
    NetworkId?: Value<string>;
    InvitationId?: Value<string>;
}
export default class Member extends ResourceBase<MemberProperties> {
    static MemberConfiguration: typeof MemberConfiguration;
    static ApprovalThresholdPolicy: typeof ApprovalThresholdPolicy;
    static NetworkFrameworkConfiguration: typeof NetworkFrameworkConfiguration;
    static NetworkConfiguration: typeof NetworkConfiguration;
    static MemberFrameworkConfiguration: typeof MemberFrameworkConfiguration;
    static NetworkFabricConfiguration: typeof NetworkFabricConfiguration;
    static VotingPolicy: typeof VotingPolicy;
    static MemberFabricConfiguration: typeof MemberFabricConfiguration;
    constructor(properties: MemberProperties);
}
