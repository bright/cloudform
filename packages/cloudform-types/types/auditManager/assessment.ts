/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Delegation {
    LastUpdated?: Value<number>
    ControlSetId?: Value<string>
    CreationTime?: Value<number>
    CreatedBy?: Value<string>
    RoleArn?: Value<string>
    AssessmentName?: Value<string>
    Comment?: Value<string>
    Id?: Value<string>
    RoleType?: Value<string>
    AssessmentId?: Value<string>
    Status?: Value<string>

    constructor(properties: Delegation) {
        Object.assign(this, properties)
    }
}

export class AWSAccount {
    Id?: Value<string>
    EmailAddress?: Value<string>
    Name?: Value<string>

    constructor(properties: AWSAccount) {
        Object.assign(this, properties)
    }
}

export class Role {
    RoleArn?: Value<string>
    RoleType?: Value<string>

    constructor(properties: Role) {
        Object.assign(this, properties)
    }
}

export class AssessmentReportsDestination {
    Destination?: Value<string>
    DestinationType?: Value<string>

    constructor(properties: AssessmentReportsDestination) {
        Object.assign(this, properties)
    }
}

export class AWSService {
    ServiceName?: Value<string>

    constructor(properties: AWSService) {
        Object.assign(this, properties)
    }
}

export class Scope {
    AwsAccounts?: List<AWSAccount>
    AwsServices?: List<AWSService>

    constructor(properties: Scope) {
        Object.assign(this, properties)
    }
}

export interface AssessmentProperties {
    FrameworkId?: Value<string>
    AwsAccount?: AWSAccount
    Tags?: List<ResourceTag>
    Roles?: List<Role>
    Scope?: Scope
    AssessmentReportsDestination?: AssessmentReportsDestination
    Status?: Value<string>
    Name?: Value<string>
    Description?: Value<string>
}

export default class Assessment extends ResourceBase<AssessmentProperties> {
    static Delegation = Delegation
    static AWSAccount = AWSAccount
    static Role = Role
    static AssessmentReportsDestination = AssessmentReportsDestination
    static AWSService = AWSService
    static Scope = Scope

    constructor(properties?: AssessmentProperties) {
        super('AWS::AuditManager::Assessment', properties || {})
    }
}
