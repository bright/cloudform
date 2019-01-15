/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.19.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class VPCOptions {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: VPCOptions) {
        Object.assign(this, properties)
    }
}

export class NodeToNodeEncryptionOptions {
    Enabled?: Value<boolean>

    constructor(properties: NodeToNodeEncryptionOptions) {
        Object.assign(this, properties)
    }
}

export class ElasticsearchClusterConfig {
    DedicatedMasterCount?: Value<number>
    DedicatedMasterEnabled?: Value<boolean>
    DedicatedMasterType?: Value<string>
    InstanceCount?: Value<number>
    InstanceType?: Value<string>
    ZoneAwarenessEnabled?: Value<boolean>

    constructor(properties: ElasticsearchClusterConfig) {
        Object.assign(this, properties)
    }
}

export class SnapshotOptions {
    AutomatedSnapshotStartHour?: Value<number>

    constructor(properties: SnapshotOptions) {
        Object.assign(this, properties)
    }
}

export class EBSOptions {
    EBSEnabled?: Value<boolean>
    Iops?: Value<number>
    VolumeSize?: Value<number>
    VolumeType?: Value<string>

    constructor(properties: EBSOptions) {
        Object.assign(this, properties)
    }
}

export class EncryptionAtRestOptions {
    Enabled?: Value<boolean>
    KmsKeyId?: Value<string>

    constructor(properties: EncryptionAtRestOptions) {
        Object.assign(this, properties)
    }
}

export interface DomainProperties {
    AccessPolicies?: {[key: string]: any}
    AdvancedOptions?: {[key: string]: Value<string>}
    DomainName?: Value<string>
    EBSOptions?: EBSOptions
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig
    ElasticsearchVersion?: Value<string>
    EncryptionAtRestOptions?: EncryptionAtRestOptions
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions
    SnapshotOptions?: SnapshotOptions
    Tags?: List<ResourceTag>
    VPCOptions?: VPCOptions
}

export default class Domain extends ResourceBase {
    static VPCOptions = VPCOptions
    static NodeToNodeEncryptionOptions = NodeToNodeEncryptionOptions
    static ElasticsearchClusterConfig = ElasticsearchClusterConfig
    static SnapshotOptions = SnapshotOptions
    static EBSOptions = EBSOptions
    static EncryptionAtRestOptions = EncryptionAtRestOptions

    constructor(properties?: DomainProperties) {
        super('AWS::Elasticsearch::Domain', properties)
    }
}
