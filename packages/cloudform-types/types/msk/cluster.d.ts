import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3 {
    Bucket?: Value<string>;
    Enabled: Value<boolean>;
    Prefix?: Value<string>;
    constructor(properties: S3);
}
export declare class CloudWatchLogs {
    LogGroup?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: CloudWatchLogs);
}
export declare class EncryptionAtRest {
    DataVolumeKMSKeyId: Value<string>;
    constructor(properties: EncryptionAtRest);
}
export declare class BrokerLogs {
    S3?: S3;
    Firehose?: Firehose;
    CloudWatchLogs?: CloudWatchLogs;
    constructor(properties: BrokerLogs);
}
export declare class EncryptionInTransit {
    ClientBroker?: Value<string>;
    InCluster?: Value<boolean>;
    constructor(properties: EncryptionInTransit);
}
export declare class Prometheus {
    JmxExporter?: JmxExporter;
    NodeExporter?: NodeExporter;
    constructor(properties: Prometheus);
}
export declare class LoggingInfo {
    BrokerLogs: BrokerLogs;
    constructor(properties: LoggingInfo);
}
export declare class EncryptionInfo {
    EncryptionAtRest?: EncryptionAtRest;
    EncryptionInTransit?: EncryptionInTransit;
    constructor(properties: EncryptionInfo);
}
export declare class Iam {
    Enabled: Value<boolean>;
    constructor(properties: Iam);
}
export declare class Sasl {
    Iam?: Iam;
    Scram?: Scram;
    constructor(properties: Sasl);
}
export declare class ConfigurationInfo {
    Revision: Value<number>;
    Arn: Value<string>;
    constructor(properties: ConfigurationInfo);
}
export declare class BrokerNodeGroupInfo {
    SecurityGroups?: List<Value<string>>;
    ClientSubnets: List<Value<string>>;
    StorageInfo?: StorageInfo;
    BrokerAZDistribution?: Value<string>;
    InstanceType: Value<string>;
    constructor(properties: BrokerNodeGroupInfo);
}
export declare class Scram {
    Enabled: Value<boolean>;
    constructor(properties: Scram);
}
export declare class JmxExporter {
    EnabledInBroker: Value<boolean>;
    constructor(properties: JmxExporter);
}
export declare class StorageInfo {
    EBSStorageInfo?: EBSStorageInfo;
    constructor(properties: StorageInfo);
}
export declare class NodeExporter {
    EnabledInBroker: Value<boolean>;
    constructor(properties: NodeExporter);
}
export declare class EBSStorageInfo {
    VolumeSize?: Value<number>;
    constructor(properties: EBSStorageInfo);
}
export declare class Firehose {
    DeliveryStream?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: Firehose);
}
export declare class ClientAuthentication {
    Sasl?: Sasl;
    Tls?: Tls;
    constructor(properties: ClientAuthentication);
}
export declare class Tls {
    CertificateAuthorityArnList?: List<Value<string>>;
    constructor(properties: Tls);
}
export declare class OpenMonitoring {
    Prometheus: Prometheus;
    constructor(properties: OpenMonitoring);
}
export interface ClusterProperties {
    BrokerNodeGroupInfo: BrokerNodeGroupInfo;
    EnhancedMonitoring?: Value<string>;
    KafkaVersion: Value<string>;
    NumberOfBrokerNodes: Value<number>;
    EncryptionInfo?: EncryptionInfo;
    OpenMonitoring?: OpenMonitoring;
    ClusterName: Value<string>;
    ClientAuthentication?: ClientAuthentication;
    LoggingInfo?: LoggingInfo;
    Tags?: {
        [key: string]: any;
    };
    ConfigurationInfo?: ConfigurationInfo;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static S3: typeof S3;
    static CloudWatchLogs: typeof CloudWatchLogs;
    static EncryptionAtRest: typeof EncryptionAtRest;
    static BrokerLogs: typeof BrokerLogs;
    static EncryptionInTransit: typeof EncryptionInTransit;
    static Prometheus: typeof Prometheus;
    static LoggingInfo: typeof LoggingInfo;
    static EncryptionInfo: typeof EncryptionInfo;
    static Iam: typeof Iam;
    static Sasl: typeof Sasl;
    static ConfigurationInfo: typeof ConfigurationInfo;
    static BrokerNodeGroupInfo: typeof BrokerNodeGroupInfo;
    static Scram: typeof Scram;
    static JmxExporter: typeof JmxExporter;
    static StorageInfo: typeof StorageInfo;
    static NodeExporter: typeof NodeExporter;
    static EBSStorageInfo: typeof EBSStorageInfo;
    static Firehose: typeof Firehose;
    static ClientAuthentication: typeof ClientAuthentication;
    static Tls: typeof Tls;
    static OpenMonitoring: typeof OpenMonitoring;
    constructor(properties: ClusterProperties);
}
