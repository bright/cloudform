/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EncryptionInfo {
    EncryptionAtRest?: EncryptionAtRest
    EncryptionInTransit?: EncryptionInTransit

    constructor(properties: EncryptionInfo) {
        Object.assign(this, properties)
    }
}

export class ConfigurationInfo {
    Revision!: Value<number>
    Arn!: Value<string>

    constructor(properties: ConfigurationInfo) {
        Object.assign(this, properties)
    }
}

export class BrokerNodeGroupInfo {
    SecurityGroups?: List<Value<string>>
    ClientSubnets!: List<Value<string>>
    StorageInfo?: StorageInfo
    BrokerAZDistribution?: Value<string>
    InstanceType!: Value<string>

    constructor(properties: BrokerNodeGroupInfo) {
        Object.assign(this, properties)
    }
}

export class StorageInfo {
    EBSStorageInfo?: EBSStorageInfo

    constructor(properties: StorageInfo) {
        Object.assign(this, properties)
    }
}

export class EncryptionAtRest {
    DataVolumeKMSKeyId!: Value<string>

    constructor(properties: EncryptionAtRest) {
        Object.assign(this, properties)
    }
}

export class EBSStorageInfo {
    VolumeSize?: Value<number>

    constructor(properties: EBSStorageInfo) {
        Object.assign(this, properties)
    }
}

export class EncryptionInTransit {
    ClientBroker?: Value<string>
    InCluster?: Value<boolean>

    constructor(properties: EncryptionInTransit) {
        Object.assign(this, properties)
    }
}

export class ClientAuthentication {
    Tls?: Tls

    constructor(properties: ClientAuthentication) {
        Object.assign(this, properties)
    }
}

export class Tls {
    CertificateAuthorityArnList?: List<Value<string>>

    constructor(properties: Tls) {
        Object.assign(this, properties)
    }
}

export interface ClusterProperties {
    BrokerNodeGroupInfo: BrokerNodeGroupInfo
    EnhancedMonitoring?: Value<string>
    KafkaVersion: Value<string>
    NumberOfBrokerNodes: Value<number>
    EncryptionInfo?: EncryptionInfo
    ClusterName: Value<string>
    ClientAuthentication?: ClientAuthentication
    Tags?: {[key: string]: any}
    ConfigurationInfo?: ConfigurationInfo
}

export default class Cluster extends ResourceBase<ClusterProperties> {
    static EncryptionInfo = EncryptionInfo
    static ConfigurationInfo = ConfigurationInfo
    static BrokerNodeGroupInfo = BrokerNodeGroupInfo
    static StorageInfo = StorageInfo
    static EncryptionAtRest = EncryptionAtRest
    static EBSStorageInfo = EBSStorageInfo
    static EncryptionInTransit = EncryptionInTransit
    static ClientAuthentication = ClientAuthentication
    static Tls = Tls

    constructor(properties: ClusterProperties) {
        super('AWS::MSK::Cluster', properties)
    }
}
