/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Source {
    Password?: Value<string>
    Revision?: Value<string>
    SshKey?: Value<string>
    Type?: Value<string>
    Url?: Value<string>
    Username?: Value<string>

    constructor(properties: Source) {
        Object.assign(this, properties)
    }
}

export class ChefConfiguration {
    BerkshelfVersion?: Value<string>
    ManageBerkshelf?: Value<boolean>

    constructor(properties: ChefConfiguration) {
        Object.assign(this, properties)
    }
}

export class StackConfigurationManager {
    Name?: Value<string>
    Version?: Value<string>

    constructor(properties: StackConfigurationManager) {
        Object.assign(this, properties)
    }
}

export class RdsDbInstance {
    DbPassword!: Value<string>
    DbUser!: Value<string>
    RdsDbInstanceArn!: Value<string>

    constructor(properties: RdsDbInstance) {
        Object.assign(this, properties)
    }
}

export class ElasticIp {
    Ip!: Value<string>
    Name?: Value<string>

    constructor(properties: ElasticIp) {
        Object.assign(this, properties)
    }
}

export interface StackProperties {
    AgentVersion?: Value<string>
    Attributes?: {[key: string]: Value<string>}
    ChefConfiguration?: ChefConfiguration
    CloneAppIds?: List<Value<string>>
    ClonePermissions?: Value<boolean>
    ConfigurationManager?: StackConfigurationManager
    CustomCookbooksSource?: Source
    CustomJson?: any
    DefaultAvailabilityZone?: Value<string>
    DefaultInstanceProfileArn: Value<string>
    DefaultOs?: Value<string>
    DefaultRootDeviceType?: Value<string>
    DefaultSshKeyName?: Value<string>
    DefaultSubnetId?: Value<string>
    EcsClusterArn?: Value<string>
    ElasticIps?: List<ElasticIp>
    HostnameTheme?: Value<string>
    Name: Value<string>
    RdsDbInstances?: List<RdsDbInstance>
    ServiceRoleArn: Value<string>
    SourceStackId?: Value<string>
    Tags?: ResourceTag[]
    UseCustomCookbooks?: Value<boolean>
    UseOpsworksSecurityGroups?: Value<boolean>
    VpcId?: Value<string>
}

export default class Stack extends ResourceBase {
    static Source = Source
    static ChefConfiguration = ChefConfiguration
    static StackConfigurationManager = StackConfigurationManager
    static RdsDbInstance = RdsDbInstance
    static ElasticIp = ElasticIp

    constructor(properties?: StackProperties) {
        super('AWS::OpsWorks::Stack', properties)
    }
}
