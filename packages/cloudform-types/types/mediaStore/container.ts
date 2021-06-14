/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class MetricPolicy {
    ContainerLevelMetrics!: Value<string>

    constructor(properties: MetricPolicy) {
        Object.assign(this, properties)
    }
}

export class MetricPolicyRule {
    ObjectGroup!: Value<string>
    ObjectGroupName!: Value<string>

    constructor(properties: MetricPolicyRule) {
        Object.assign(this, properties)
    }
}

export class CorsRule {
    MaxAgeSeconds?: Value<number>

    constructor(properties: CorsRule) {
        Object.assign(this, properties)
    }
}

export interface ContainerProperties {
    Policy?: Value<string>
    ContainerName: Value<string>
    LifecyclePolicy?: Value<string>
    AccessLoggingEnabled?: Value<boolean>
}

export default class Container extends ResourceBase<ContainerProperties> {
    static MetricPolicy = MetricPolicy
    static MetricPolicyRule = MetricPolicyRule
    static CorsRule = CorsRule

    constructor(properties: ContainerProperties) {
        super('AWS::MediaStore::Container', properties)
    }
}
