/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class HealthCheckConfig {
    Path?: Value<string>
    HealthCheckIntervalSeconds?: Value<number>
    Matcher?: Matcher
    HealthyThresholdCount?: Value<number>
    Port?: Value<number>
    Enabled?: Value<boolean>
    Protocol?: Value<string>
    ProtocolVersion?: Value<string>
    UnhealthyThresholdCount?: Value<number>
    HealthCheckTimeoutSeconds?: Value<number>

    constructor(properties: HealthCheckConfig) {
        Object.assign(this, properties)
    }
}

export class Matcher {
    HttpCode!: Value<string>

    constructor(properties: Matcher) {
        Object.assign(this, properties)
    }
}

export class Target {
    Port?: Value<number>
    Id!: Value<string>

    constructor(properties: Target) {
        Object.assign(this, properties)
    }
}

export class TargetGroupConfig {
    IpAddressType?: Value<string>
    Port?: Value<number>
    HealthCheck?: HealthCheckConfig
    LambdaEventStructureVersion?: Value<string>
    VpcIdentifier?: Value<string>
    Protocol?: Value<string>
    ProtocolVersion?: Value<string>

    constructor(properties: TargetGroupConfig) {
        Object.assign(this, properties)
    }
}

export interface TargetGroupProperties {
    Type: Value<string>
    Config?: TargetGroupConfig
    Targets?: List<Target>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class TargetGroup extends ResourceBase<TargetGroupProperties> {
    static HealthCheckConfig = HealthCheckConfig
    static Matcher = Matcher
    static Target = Target
    static TargetGroupConfig = TargetGroupConfig

    constructor(properties: TargetGroupProperties) {
        super('AWS::VpcLattice::TargetGroup', properties)
    }
}
