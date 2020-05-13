/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class WorkGroupConfigurationUpdates {
    BytesScannedCutoffPerQuery?: Value<number>
    EnforceWorkGroupConfiguration?: Value<boolean>
    PublishCloudWatchMetricsEnabled?: Value<boolean>
    RequesterPaysEnabled?: Value<boolean>
    ResultConfigurationUpdates?: ResultConfigurationUpdates
    RemoveBytesScannedCutoffPerQuery?: Value<boolean>

    constructor(properties: WorkGroupConfigurationUpdates) {
        Object.assign(this, properties)
    }
}

export class WorkGroupConfiguration {
    BytesScannedCutoffPerQuery?: Value<number>
    EnforceWorkGroupConfiguration?: Value<boolean>
    PublishCloudWatchMetricsEnabled?: Value<boolean>
    RequesterPaysEnabled?: Value<boolean>
    ResultConfiguration?: ResultConfiguration

    constructor(properties: WorkGroupConfiguration) {
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

export class ResultConfiguration {
    EncryptionConfiguration?: EncryptionConfiguration
    OutputLocation?: Value<string>

    constructor(properties: ResultConfiguration) {
        Object.assign(this, properties)
    }
}

export class ResultConfigurationUpdates {
    EncryptionConfiguration?: EncryptionConfiguration
    OutputLocation?: Value<string>
    RemoveEncryptionConfiguration?: Value<boolean>
    RemoveOutputLocation?: Value<boolean>

    constructor(properties: ResultConfigurationUpdates) {
        Object.assign(this, properties)
    }
}

export class Tags {
    Tags?: List<ResourceTag>

    constructor(properties: Tags) {
        Object.assign(this, properties)
    }
}

export interface WorkGroupProperties {
    Name: Value<string>
    Description?: Value<string>
    Tags?: Tags
    WorkGroupConfiguration?: WorkGroupConfiguration
    WorkGroupConfigurationUpdates?: WorkGroupConfigurationUpdates
    State?: Value<string>
    RecursiveDeleteOption?: Value<boolean>
}

export default class WorkGroup extends ResourceBase<WorkGroupProperties> {
    static WorkGroupConfigurationUpdates = WorkGroupConfigurationUpdates
    static WorkGroupConfiguration = WorkGroupConfiguration
    static EncryptionConfiguration = EncryptionConfiguration
    static ResultConfiguration = ResultConfiguration
    static ResultConfigurationUpdates = ResultConfigurationUpdates
    static Tags = Tags

    constructor(properties: WorkGroupProperties) {
        super('AWS::Athena::WorkGroup', properties)
    }
}
