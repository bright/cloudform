/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EventSubscription {
    EventType!: Value<string>
    SnsTopicArn?: Value<string>
    Name!: Value<string>

    constructor(properties: EventSubscription) {
        Object.assign(this, properties)
    }
}

export class PermissionModel {
    Type!: Value<string>
    CrossAccountRoleArns?: List<Value<string>>
    InvokerRoleName?: Value<string>

    constructor(properties: PermissionModel) {
        Object.assign(this, properties)
    }
}

export class PhysicalResourceId {
    Type!: Value<string>
    Identifier!: Value<string>
    AwsRegion?: Value<string>
    AwsAccountId?: Value<string>

    constructor(properties: PhysicalResourceId) {
        Object.assign(this, properties)
    }
}

export class ResourceMapping {
    MappingType!: Value<string>
    LogicalStackName?: Value<string>
    ResourceName?: Value<string>
    TerraformSourceName?: Value<string>
    PhysicalResourceId!: PhysicalResourceId
    EksSourceName?: Value<string>

    constructor(properties: ResourceMapping) {
        Object.assign(this, properties)
    }
}

export interface AppProperties {
    Description?: Value<string>
    AppTemplateBody: Value<string>
    AppAssessmentSchedule?: Value<string>
    PermissionModel?: PermissionModel
    ResourceMappings: List<ResourceMapping>
    EventSubscriptions?: List<EventSubscription>
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
    ResiliencyPolicyArn?: Value<string>
}

export default class App extends ResourceBase<AppProperties> {
    static EventSubscription = EventSubscription
    static PermissionModel = PermissionModel
    static PhysicalResourceId = PhysicalResourceId
    static ResourceMapping = ResourceMapping

    constructor(properties: AppProperties) {
        super('AWS::ResilienceHub::App', properties)
    }
}
