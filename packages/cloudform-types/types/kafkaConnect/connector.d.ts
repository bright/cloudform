import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApacheKafkaCluster {
    Vpc: Vpc;
    BootstrapServers: Value<string>;
    constructor(properties: ApacheKafkaCluster);
}
export declare class AutoScaling {
    ScaleOutPolicy: ScaleOutPolicy;
    ScaleInPolicy: ScaleInPolicy;
    MaxWorkerCount: Value<number>;
    MinWorkerCount: Value<number>;
    McuCount: Value<number>;
    constructor(properties: AutoScaling);
}
export declare class Capacity {
    ProvisionedCapacity?: ProvisionedCapacity;
    AutoScaling?: AutoScaling;
    constructor(properties: Capacity);
}
export declare class CloudWatchLogsLogDelivery {
    LogGroup?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: CloudWatchLogsLogDelivery);
}
export declare class CustomPlugin {
    CustomPluginArn: Value<string>;
    Revision: Value<number>;
    constructor(properties: CustomPlugin);
}
export declare class FirehoseLogDelivery {
    DeliveryStream?: Value<string>;
    Enabled: Value<boolean>;
    constructor(properties: FirehoseLogDelivery);
}
export declare class KafkaCluster {
    ApacheKafkaCluster: ApacheKafkaCluster;
    constructor(properties: KafkaCluster);
}
export declare class KafkaClusterClientAuthentication {
    AuthenticationType: Value<string>;
    constructor(properties: KafkaClusterClientAuthentication);
}
export declare class KafkaClusterEncryptionInTransit {
    EncryptionType: Value<string>;
    constructor(properties: KafkaClusterEncryptionInTransit);
}
export declare class LogDelivery {
    WorkerLogDelivery: WorkerLogDelivery;
    constructor(properties: LogDelivery);
}
export declare class Plugin {
    CustomPlugin: CustomPlugin;
    constructor(properties: Plugin);
}
export declare class ProvisionedCapacity {
    WorkerCount: Value<number>;
    McuCount?: Value<number>;
    constructor(properties: ProvisionedCapacity);
}
export declare class S3LogDelivery {
    Bucket?: Value<string>;
    Enabled: Value<boolean>;
    Prefix?: Value<string>;
    constructor(properties: S3LogDelivery);
}
export declare class ScaleInPolicy {
    CpuUtilizationPercentage: Value<number>;
    constructor(properties: ScaleInPolicy);
}
export declare class ScaleOutPolicy {
    CpuUtilizationPercentage: Value<number>;
    constructor(properties: ScaleOutPolicy);
}
export declare class Vpc {
    SecurityGroups: List<Value<string>>;
    Subnets: List<Value<string>>;
    constructor(properties: Vpc);
}
export declare class WorkerConfiguration {
    Revision: Value<number>;
    WorkerConfigurationArn: Value<string>;
    constructor(properties: WorkerConfiguration);
}
export declare class WorkerLogDelivery {
    S3?: S3LogDelivery;
    Firehose?: FirehoseLogDelivery;
    CloudWatchLogs?: CloudWatchLogsLogDelivery;
    constructor(properties: WorkerLogDelivery);
}
export interface ConnectorProperties {
    KafkaCluster: KafkaCluster;
    KafkaConnectVersion: Value<string>;
    WorkerConfiguration?: WorkerConfiguration;
    Capacity: Capacity;
    KafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit;
    ConnectorDescription?: Value<string>;
    KafkaClusterClientAuthentication: KafkaClusterClientAuthentication;
    ConnectorName: Value<string>;
    ServiceExecutionRoleArn: Value<string>;
    ConnectorConfiguration: {
        [key: string]: Value<string>;
    };
    LogDelivery?: LogDelivery;
    Plugins: List<Plugin>;
}
export default class Connector extends ResourceBase<ConnectorProperties> {
    static ApacheKafkaCluster: typeof ApacheKafkaCluster;
    static AutoScaling: typeof AutoScaling;
    static Capacity: typeof Capacity;
    static CloudWatchLogsLogDelivery: typeof CloudWatchLogsLogDelivery;
    static CustomPlugin: typeof CustomPlugin;
    static FirehoseLogDelivery: typeof FirehoseLogDelivery;
    static KafkaCluster: typeof KafkaCluster;
    static KafkaClusterClientAuthentication: typeof KafkaClusterClientAuthentication;
    static KafkaClusterEncryptionInTransit: typeof KafkaClusterEncryptionInTransit;
    static LogDelivery: typeof LogDelivery;
    static Plugin: typeof Plugin;
    static ProvisionedCapacity: typeof ProvisionedCapacity;
    static S3LogDelivery: typeof S3LogDelivery;
    static ScaleInPolicy: typeof ScaleInPolicy;
    static ScaleOutPolicy: typeof ScaleOutPolicy;
    static Vpc: typeof Vpc;
    static WorkerConfiguration: typeof WorkerConfiguration;
    static WorkerLogDelivery: typeof WorkerLogDelivery;
    constructor(properties: ConnectorProperties);
}
