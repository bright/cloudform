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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ComputeCapacity {
    DesiredInstances?: Value<number>
    DesiredSessions?: Value<number>

    constructor(properties: ComputeCapacity) {
        Object.assign(this, properties)
    }
}

export class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>
    DirectoryName?: Value<string>

    constructor(properties: DomainJoinInfo) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    S3Bucket!: Value<string>
    S3Key!: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface FleetProperties {
    Description?: Value<string>
    ComputeCapacity?: ComputeCapacity
    Platform?: Value<string>
    VpcConfig?: VpcConfig
    FleetType?: Value<string>
    EnableDefaultInternetAccess?: Value<boolean>
    DomainJoinInfo?: DomainJoinInfo
    SessionScriptS3Location?: S3Location
    Name: Value<string>
    ImageName?: Value<string>
    MaxUserDurationInSeconds?: Value<number>
    IdleDisconnectTimeoutInSeconds?: Value<number>
    UsbDeviceFilterStrings?: List<Value<string>>
    DisconnectTimeoutInSeconds?: Value<number>
    DisplayName?: Value<string>
    StreamView?: Value<string>
    IamRoleArn?: Value<string>
    MaxSessionsPerInstance?: Value<number>
    InstanceType: Value<string>
    MaxConcurrentSessions?: Value<number>
    Tags?: List<ResourceTag>
    ImageArn?: Value<string>
}

export default class Fleet extends ResourceBase<FleetProperties> {
    static ComputeCapacity = ComputeCapacity
    static DomainJoinInfo = DomainJoinInfo
    static S3Location = S3Location
    static VpcConfig = VpcConfig

    constructor(properties: FleetProperties) {
        super('AWS::AppStream::Fleet', properties)
    }
}
