import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Delegation {
    LastUpdated?: Value<number>;
    ControlSetId?: Value<string>;
    CreationTime?: Value<number>;
    CreatedBy?: Value<string>;
    RoleArn?: Value<string>;
    AssessmentName?: Value<string>;
    Comment?: Value<string>;
    Id?: Value<string>;
    RoleType?: Value<string>;
    AssessmentId?: Value<string>;
    Status?: Value<string>;
    constructor(properties: Delegation);
}
export declare class AWSAccount {
    Id?: Value<string>;
    EmailAddress?: Value<string>;
    Name?: Value<string>;
    constructor(properties: AWSAccount);
}
export declare class Role {
    RoleArn?: Value<string>;
    RoleType?: Value<string>;
    constructor(properties: Role);
}
export declare class AssessmentReportsDestination {
    Destination?: Value<string>;
    DestinationType?: Value<string>;
    constructor(properties: AssessmentReportsDestination);
}
export declare class AWSService {
    ServiceName?: Value<string>;
    constructor(properties: AWSService);
}
export declare class Scope {
    AwsAccounts?: List<AWSAccount>;
    AwsServices?: List<AWSService>;
    constructor(properties: Scope);
}
export interface AssessmentProperties {
    FrameworkId?: Value<string>;
    AwsAccount?: AWSAccount;
    Tags?: List<ResourceTag>;
    Roles?: List<Role>;
    Scope?: Scope;
    AssessmentReportsDestination?: AssessmentReportsDestination;
    Status?: Value<string>;
    Name?: Value<string>;
    Description?: Value<string>;
}
export default class Assessment extends ResourceBase<AssessmentProperties> {
    static Delegation: typeof Delegation;
    static AWSAccount: typeof AWSAccount;
    static Role: typeof Role;
    static AssessmentReportsDestination: typeof AssessmentReportsDestination;
    static AWSService: typeof AWSService;
    static Scope: typeof Scope;
    constructor(properties?: AssessmentProperties);
}
