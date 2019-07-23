import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EncryptionInfo {
    EncryptionAtRest?: EncryptionAtRest;
    EncryptionInTransit?: EncryptionInTransit;
    constructor(properties: EncryptionInfo);
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
export declare class StorageInfo {
    EBSStorageInfo?: EBSStorageInfo;
    constructor(properties: StorageInfo);
}
export declare class EncryptionAtRest {
    DataVolumeKMSKeyId: Value<string>;
    constructor(properties: EncryptionAtRest);
}
export declare class EBSStorageInfo {
    VolumeSize?: Value<number>;
    constructor(properties: EBSStorageInfo);
}
export declare class EncryptionInTransit {
    ClientBroker?: Value<string>;
    InCluster?: Value<boolean>;
    constructor(properties: EncryptionInTransit);
}
export declare class ClientAuthentication {
    Tls?: Tls;
    constructor(properties: ClientAuthentication);
}
export declare class Tls {
    CertificateAuthorityArnList?: List<Value<string>>;
    constructor(properties: Tls);
}
export interface ClusterProperties {
    BrokerNodeGroupInfo: BrokerNodeGroupInfo;
    EnhancedMonitoring?: Value<string>;
    KafkaVersion: Value<string>;
    NumberOfBrokerNodes: Value<number>;
    EncryptionInfo?: EncryptionInfo;
    ClusterName: Value<string>;
    ClientAuthentication?: ClientAuthentication;
    Tags?: {
        [key: string]: any;
    };
    ConfigurationInfo?: ConfigurationInfo;
}
export default class Cluster extends ResourceBase<ClusterProperties> {
    static EncryptionInfo: typeof EncryptionInfo;
    static ConfigurationInfo: typeof ConfigurationInfo;
    static BrokerNodeGroupInfo: typeof BrokerNodeGroupInfo;
    static StorageInfo: typeof StorageInfo;
    static EncryptionAtRest: typeof EncryptionAtRest;
    static EBSStorageInfo: typeof EBSStorageInfo;
    static EncryptionInTransit: typeof EncryptionInTransit;
    static ClientAuthentication: typeof ClientAuthentication;
    static Tls: typeof Tls;
    constructor(properties: ClusterProperties);
}
