/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class S3 {
    Bucket?: Value<string>
    Enabled!: Value<boolean>
    Prefix?: Value<string>

    constructor(properties: S3) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogs {
    LogGroup?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: CloudWatchLogs) {
        Object.assign(this, properties)
    }
}

export class EncryptionAtRest {
    DataVolumeKMSKeyId!: Value<string>

    constructor(properties: EncryptionAtRest) {
        Object.assign(this, properties)
    }
}

export class BrokerLogs {
    S3?: S3
    Firehose?: Firehose
    CloudWatchLogs?: CloudWatchLogs

    constructor(properties: BrokerLogs) {
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

export class Prometheus {
    JmxExporter?: JmxExporter
    NodeExporter?: NodeExporter

    constructor(properties: Prometheus) {
        Object.assign(this, properties)
    }
}

export class LoggingInfo {
    BrokerLogs!: BrokerLogs

    constructor(properties: LoggingInfo) {
        Object.assign(this, properties)
    }
}

export class EncryptionInfo {
    EncryptionAtRest?: EncryptionAtRest
    EncryptionInTransit?: EncryptionInTransit

    constructor(properties: EncryptionInfo) {
        Object.assign(this, properties)
    }
}

export class Iam {
    Enabled!: Value<boolean>

    constructor(properties: Iam) {
        Object.assign(this, properties)
    }
}

export class Sasl {
    Iam?: Iam
    Scram?: Scram

    constructor(properties: Sasl) {
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

export class Scram {
    Enabled!: Value<boolean>

    constructor(properties: Scram) {
        Object.assign(this, properties)
    }
}

export class JmxExporter {
    EnabledInBroker!: Value<boolean>

    constructor(properties: JmxExporter) {
        Object.assign(this, properties)
    }
}

export class StorageInfo {
    EBSStorageInfo?: EBSStorageInfo

    constructor(properties: StorageInfo) {
        Object.assign(this, properties)
    }
}

export class NodeExporter {
    EnabledInBroker!: Value<boolean>

    constructor(properties: NodeExporter) {
        Object.assign(this, properties)
    }
}

export class EBSStorageInfo {
    VolumeSize?: Value<number>

    constructor(properties: EBSStorageInfo) {
        Object.assign(this, properties)
    }
}

export class Firehose {
    DeliveryStream?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: Firehose) {
        Object.assign(this, properties)
    }
}

export class ClientAuthentication {
    Sasl?: Sasl
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

export class OpenMonitoring {
    Prometheus!: Prometheus

    constructor(properties: OpenMonitoring) {
        Object.assign(this, properties)
    }
}

export interface ClusterProperties {
    BrokerNodeGroupInfo: BrokerNodeGroupInfo
    EnhancedMonitoring?: Value<string>
    KafkaVersion: Value<string>
    NumberOfBrokerNodes: Value<number>
    EncryptionInfo?: EncryptionInfo
    OpenMonitoring?: OpenMonitoring
    ClusterName: Value<string>
    ClientAuthentication?: ClientAuthentication
    LoggingInfo?: LoggingInfo
    Tags?: {[key: string]: any}
    ConfigurationInfo?: ConfigurationInfo
}

export default class Cluster extends ResourceBase<ClusterProperties> {
    static S3 = S3
    static CloudWatchLogs = CloudWatchLogs
    static EncryptionAtRest = EncryptionAtRest
    static BrokerLogs = BrokerLogs
    static EncryptionInTransit = EncryptionInTransit
    static Prometheus = Prometheus
    static LoggingInfo = LoggingInfo
    static EncryptionInfo = EncryptionInfo
    static Iam = Iam
    static Sasl = Sasl
    static ConfigurationInfo = ConfigurationInfo
    static BrokerNodeGroupInfo = BrokerNodeGroupInfo
    static Scram = Scram
    static JmxExporter = JmxExporter
    static StorageInfo = StorageInfo
    static NodeExporter = NodeExporter
    static EBSStorageInfo = EBSStorageInfo
    static Firehose = Firehose
    static ClientAuthentication = ClientAuthentication
    static Tls = Tls
    static OpenMonitoring = OpenMonitoring

    constructor(properties: ClusterProperties) {
        super('AWS::MSK::Cluster', properties)
    }
}
