/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AwsVpcConfiguration {
    SecurityGroups?: List<Value<string>>
    Subnets!: List<Value<string>>
    AssignPublicIp?: Value<string>

    constructor(properties: AwsVpcConfiguration) {
        Object.assign(this, properties)
    }
}

export class LoadBalancer {
    TargetGroupArn?: Value<string>
    ContainerName?: Value<string>
    ContainerPort?: Value<number>

    constructor(properties: LoadBalancer) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    AwsVpcConfiguration?: AwsVpcConfiguration

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class Scale {
    Value?: Value<number>
    Unit?: Value<string>

    constructor(properties: Scale) {
        Object.assign(this, properties)
    }
}

export class ServiceRegistry {
    ContainerName?: Value<string>
    Port?: Value<number>
    ContainerPort?: Value<number>
    RegistryArn?: Value<string>

    constructor(properties: ServiceRegistry) {
        Object.assign(this, properties)
    }
}

export interface TaskSetProperties {
    PlatformVersion?: Value<string>
    TaskDefinition: Value<string>
    ExternalId?: Value<string>
    Cluster: Value<string>
    LoadBalancers?: List<LoadBalancer>
    Service: Value<string>
    NetworkConfiguration?: NetworkConfiguration
    Scale?: Scale
    ServiceRegistries?: List<ServiceRegistry>
    LaunchType?: Value<string>
}

export default class TaskSet extends ResourceBase<TaskSetProperties> {
    static AwsVpcConfiguration = AwsVpcConfiguration
    static LoadBalancer = LoadBalancer
    static NetworkConfiguration = NetworkConfiguration
    static Scale = Scale
    static ServiceRegistry = ServiceRegistry

    constructor(properties: TaskSetProperties) {
        super('AWS::ECS::TaskSet', properties)
    }
}
