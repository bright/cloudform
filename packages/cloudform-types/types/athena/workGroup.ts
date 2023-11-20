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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AclConfiguration {
    S3AclOption!: Value<string>

    constructor(properties: AclConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomerContentEncryptionConfiguration {
    KmsKey!: Value<string>

    constructor(properties: CustomerContentEncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class EncryptionConfiguration {
    EncryptionOption!: Value<string>
    KmsKey?: Value<string>

    constructor(properties: EncryptionConfiguration) {
        Object.assign(this, properties)
    }
}

export class EngineVersion {
    SelectedEngineVersion?: Value<string>
    EffectiveEngineVersion?: Value<string>

    constructor(properties: EngineVersion) {
        Object.assign(this, properties)
    }
}

export class ResultConfiguration {
    EncryptionConfiguration?: EncryptionConfiguration
    OutputLocation?: Value<string>
    AclConfiguration?: AclConfiguration
    ExpectedBucketOwner?: Value<string>

    constructor(properties: ResultConfiguration) {
        Object.assign(this, properties)
    }
}

export class WorkGroupConfiguration {
    EnforceWorkGroupConfiguration?: Value<boolean>
    EngineVersion?: EngineVersion
    PublishCloudWatchMetricsEnabled?: Value<boolean>
    ResultConfiguration?: ResultConfiguration
    AdditionalConfiguration?: Value<string>
    CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration
    BytesScannedCutoffPerQuery?: Value<number>
    RequesterPaysEnabled?: Value<boolean>
    ExecutionRole?: Value<string>

    constructor(properties: WorkGroupConfiguration) {
        Object.assign(this, properties)
    }
}

export interface WorkGroupProperties {
    RecursiveDeleteOption?: Value<boolean>
    WorkGroupConfiguration?: WorkGroupConfiguration
    Description?: Value<string>
    State?: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class WorkGroup extends ResourceBase<WorkGroupProperties> {
    static AclConfiguration = AclConfiguration
    static CustomerContentEncryptionConfiguration = CustomerContentEncryptionConfiguration
    static EncryptionConfiguration = EncryptionConfiguration
    static EngineVersion = EngineVersion
    static ResultConfiguration = ResultConfiguration
    static WorkGroupConfiguration = WorkGroupConfiguration

    constructor(properties: WorkGroupProperties) {
        super('AWS::Athena::WorkGroup', properties)
    }
}
