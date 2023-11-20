import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BrokerLogs {
    S3?: S3;
    Firehose?: Firehose;
    CloudWatchLogs?: CloudWatchLogs;
    constructor(properties: BrokerLogs);
}
export declare class BrokerNodeGroupInfo {
    SecurityGroups?: List<Value<string>>;
    ClientSubnets: List<Value<string>>;
    ConnectivityInfo?: ConnectivityInfo;
    StorageInfo?: StorageInfo;
    BrokerAZDistribution?: Value<string>;
    InstanceType: Value<string>;
    constructor(properties: BrokerNodeGroupInfo);
}
export declare class ClientAuthentication {
    Sasl?: Sasl;
    Unauthenticated?: Unauthenticated;
    Tls?: Tls;
    constructor(properties: ClientAuthentication);
}
export declare class CloudWatchLogs {
    LogGroup?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: CloudWatchLogs);
}
export declare class ConfigurationInfo {
    Revision: Value<number>;
    Arn: Value<string>;
    constructor(properties: ConfigurationInfo);
}
export declare class ConnectivityInfo {
    VpcConnectivity?: VpcConnectivity;
    PublicAccess?: PublicAccess;
    constructor(properties: ConnectivityInfo);
}
export declare class EBSStorageInfo {
    ProvisionedThroughput?: ProvisionedThroughput;
    VolumeSize?: Value<number>;
    constructor(properties: EBSStorageInfo);
}
export declare class EncryptionAtRest {
    DataVolumeKMSKeyId: Value<string>;
    constructor(properties: EncryptionAtRest);
}
export declare class EncryptionInTransit {
    ClientBroker?: Value<string>;
    InCluster?: Value<boolean>;
    constructor(properties: EncryptionInTransit);
}
export declare class EncryptionInfo {
    EncryptionAtRest?: EncryptionAtRest;
    EncryptionInTransit?: EncryptionInTransit;
    constructor(properties: EncryptionInfo);
}
export declare class Firehose {
    DeliveryStream?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: Firehose);
}
export declare class Iam {
    Enabled: Value<boolean>;
    constructor(properties: Iam);
}
export declare class JmxExporter {
    EnabledInBroker: Value<boolean>;
    constructor(properties: JmxExporter);
}
export declare class LoggingInfo {
    BrokerLogs: BrokerLogs;
    constructor(properties: LoggingInfo);
}
export declare class NodeExporter {
    EnabledInBroker: Value<boolean>;
    constructor(properties: NodeExporter);
}
export declare class OpenMonitoring {
    Prometheus: Prometheus;
    constructor(properties: OpenMonitoring);
}
export declare class Prometheus {
    JmxExporter?: JmxExporter;
    NodeExporter?: NodeExporter;
    constructor(properties: Prometheus);
}
export declare class ProvisionedThroughput {
    VolumeThroughput?: Value<number>;
    Enabled?: Value<boolean>;
    constructor(properties: ProvisionedThroughput);
}
export declare class PublicAccess {
    Type?: Value<string>;
    constructor(properties: PublicAccess);
}
export declare class S3 {
    Bucket?: Value<string>;
    Enabled: Value<boolean>;
    Prefix?: Value<string>;
    constructor(properties: S3);
}
export declare class Sasl {
    Iam?: Iam;
    Scram?: Scram;
    constructor(properties: Sasl);
}
export declare class Scram {
    Enabled: Value<boolean>;
    constructor(properties: Scram);
}
export declare class StorageInfo {
    EBSStorageInfo?: EBSStorageInfo;
    constructor(properties: StorageInfo);
}
export declare class Tls {
    Enabled?: Value<boolean>;
    CertificateAuthorityArnList?: List<Value<string>>;
    constructor(properties: Tls);
}
export declare class Unauthenticated {
    Enabled: Value<boolean>;
    constructor(properties: Unauthenticated);
}
export declare class VpcConnectivity {
    ClientAuthentication?: VpcConnectivityClientAuthentication;
    constructor(properties: VpcConnectivity);
}
export declare class VpcConnectivityClientAuthentication {
    Sasl?: VpcConnectivitySasl;
    Tls?: VpcConnectivityTls;
    constructor(properties: VpcConnectivityClientAuthentication);
}
export declare class VpcConnectivityIam {
    Enabled: Value<boolean>;
    constructor(properties: VpcConnectivityIam);
}
export declare class VpcConnectivitySasl {
    Iam?: VpcConnectivityIam;
    Scram?: VpcConnectivityScram;
    constructor(properties: VpcConnectivitySasl);
}
export declare class VpcConnectivityScram {
    Enabled: Value<boolean>;
    constructor(properties: VpcConnectivityScram);
}
export declare class VpcConnectivityTls {
    Enabled: Value<boolean>;
    constructor(properties: VpcConnectivityTls);
}
export interface ClusterProperties {
    KafkaVersion: Value<string>;
    NumberOfBrokerNodes: Value<number>;
    EncryptionInfo?: EncryptionInfo;
    OpenMonitoring?: OpenMonitoring;
    CurrentVersion?: Value<string>;
    StorageMode?: Value<string>;
    ConfigurationInfo?: ConfigurationInfo;
    BrokerNodeGroupInfo: BrokerNodeGroupInfo;
    EnhancedMonitoring?: Value<string>;
    ClusterName: Value<string>;
    ClientAuthentication?: ClientAuthentication;
    LoggingInfo?: LoggingInfo;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static BrokerLogs: typeof BrokerLogs;
    static BrokerNodeGroupInfo: typeof BrokerNodeGroupInfo;
    static ClientAuthentication: typeof ClientAuthentication;
    static CloudWatchLogs: typeof CloudWatchLogs;
    static ConfigurationInfo: typeof ConfigurationInfo;
    static ConnectivityInfo: typeof ConnectivityInfo;
    static EBSStorageInfo: typeof EBSStorageInfo;
    static EncryptionAtRest: typeof EncryptionAtRest;
    static EncryptionInTransit: typeof EncryptionInTransit;
    static EncryptionInfo: typeof EncryptionInfo;
    static Firehose: typeof Firehose;
    static Iam: typeof Iam;
    static JmxExporter: typeof JmxExporter;
    static LoggingInfo: typeof LoggingInfo;
    static NodeExporter: typeof NodeExporter;
    static OpenMonitoring: typeof OpenMonitoring;
    static Prometheus: typeof Prometheus;
    static ProvisionedThroughput: typeof ProvisionedThroughput;
    static PublicAccess: typeof PublicAccess;
    static S3: typeof S3;
    static Sasl: typeof Sasl;
    static Scram: typeof Scram;
    static StorageInfo: typeof StorageInfo;
    static Tls: typeof Tls;
    static Unauthenticated: typeof Unauthenticated;
    static VpcConnectivity: typeof VpcConnectivity;
    static VpcConnectivityClientAuthentication: typeof VpcConnectivityClientAuthentication;
    static VpcConnectivityIam: typeof VpcConnectivityIam;
    static VpcConnectivitySasl: typeof VpcConnectivitySasl;
    static VpcConnectivityScram: typeof VpcConnectivityScram;
    static VpcConnectivityTls: typeof VpcConnectivityTls;
    constructor(properties: ClusterProperties);
}
