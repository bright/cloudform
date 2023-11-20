import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AWSAccount {
    Id?: Value<string>;
    EmailAddress?: Value<string>;
    Name?: Value<string>;
    constructor(properties: AWSAccount);
}
export declare class AWSService {
    ServiceName?: Value<string>;
    constructor(properties: AWSService);
}
export declare class AssessmentReportsDestination {
    Destination?: Value<string>;
    DestinationType?: Value<string>;
    constructor(properties: AssessmentReportsDestination);
}
export declare class Delegation {
    Status?: Value<string>;
    Comment?: Value<string>;
    CreatedBy?: Value<string>;
    RoleType?: Value<string>;
    AssessmentId?: Value<string>;
    CreationTime?: Value<number>;
    LastUpdated?: Value<number>;
    Id?: Value<string>;
    AssessmentName?: Value<string>;
    RoleArn?: Value<string>;
    ControlSetId?: Value<string>;
    constructor(properties: Delegation);
}
export declare class Role {
    RoleType?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: Role);
}
export declare class Scope {
    AwsAccounts?: List<AWSAccount>;
    AwsServices?: List<AWSService>;
    constructor(properties: Scope);
}
export interface AssessmentProperties {
    Status?: Value<string>;
    AssessmentReportsDestination?: AssessmentReportsDestination;
    Delegations?: List<Delegation>;
    Description?: Value<string>;
    Scope?: Scope;
    AwsAccount?: AWSAccount;
    Roles?: List<Role>;
    FrameworkId?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Assessment extends ResourceBase<AssessmentProperties> {
    static AWSAccount: typeof AWSAccount;
    static AWSService: typeof AWSService;
    static AssessmentReportsDestination: typeof AssessmentReportsDestination;
    static Delegation: typeof Delegation;
    static Role: typeof Role;
    static Scope: typeof Scope;
    constructor(properties?: AssessmentProperties);
}
