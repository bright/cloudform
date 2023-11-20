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
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ApacheKafkaCluster {
    Vpc!: Vpc
    BootstrapServers!: Value<string>

    constructor(properties: ApacheKafkaCluster) {
        Object.assign(this, properties)
    }
}

export class AutoScaling {
    ScaleOutPolicy!: ScaleOutPolicy
    ScaleInPolicy!: ScaleInPolicy
    MaxWorkerCount!: Value<number>
    MinWorkerCount!: Value<number>
    McuCount!: Value<number>

    constructor(properties: AutoScaling) {
        Object.assign(this, properties)
    }
}

export class Capacity {
    ProvisionedCapacity?: ProvisionedCapacity
    AutoScaling?: AutoScaling

    constructor(properties: Capacity) {
        Object.assign(this, properties)
    }
}

export class CloudWatchLogsLogDelivery {
    LogGroup?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: CloudWatchLogsLogDelivery) {
        Object.assign(this, properties)
    }
}

export class CustomPlugin {
    CustomPluginArn!: Value<string>
    Revision!: Value<number>

    constructor(properties: CustomPlugin) {
        Object.assign(this, properties)
    }
}

export class FirehoseLogDelivery {
    DeliveryStream?: Value<string>
    Enabled!: Value<boolean>

    constructor(properties: FirehoseLogDelivery) {
        Object.assign(this, properties)
    }
}

export class KafkaCluster {
    ApacheKafkaCluster!: ApacheKafkaCluster

    constructor(properties: KafkaCluster) {
        Object.assign(this, properties)
    }
}

export class KafkaClusterClientAuthentication {
    AuthenticationType!: Value<string>

    constructor(properties: KafkaClusterClientAuthentication) {
        Object.assign(this, properties)
    }
}

export class KafkaClusterEncryptionInTransit {
    EncryptionType!: Value<string>

    constructor(properties: KafkaClusterEncryptionInTransit) {
        Object.assign(this, properties)
    }
}

export class LogDelivery {
    WorkerLogDelivery!: WorkerLogDelivery

    constructor(properties: LogDelivery) {
        Object.assign(this, properties)
    }
}

export class Plugin {
    CustomPlugin!: CustomPlugin

    constructor(properties: Plugin) {
        Object.assign(this, properties)
    }
}

export class ProvisionedCapacity {
    WorkerCount!: Value<number>
    McuCount?: Value<number>

    constructor(properties: ProvisionedCapacity) {
        Object.assign(this, properties)
    }
}

export class S3LogDelivery {
    Bucket?: Value<string>
    Enabled!: Value<boolean>
    Prefix?: Value<string>

    constructor(properties: S3LogDelivery) {
        Object.assign(this, properties)
    }
}

export class ScaleInPolicy {
    CpuUtilizationPercentage!: Value<number>

    constructor(properties: ScaleInPolicy) {
        Object.assign(this, properties)
    }
}

export class ScaleOutPolicy {
    CpuUtilizationPercentage!: Value<number>

    constructor(properties: ScaleOutPolicy) {
        Object.assign(this, properties)
    }
}

export class Vpc {
    SecurityGroups!: List<Value<string>>
    Subnets!: List<Value<string>>

    constructor(properties: Vpc) {
        Object.assign(this, properties)
    }
}

export class WorkerConfiguration {
    Revision!: Value<number>
    WorkerConfigurationArn!: Value<string>

    constructor(properties: WorkerConfiguration) {
        Object.assign(this, properties)
    }
}

export class WorkerLogDelivery {
    S3?: S3LogDelivery
    Firehose?: FirehoseLogDelivery
    CloudWatchLogs?: CloudWatchLogsLogDelivery

    constructor(properties: WorkerLogDelivery) {
        Object.assign(this, properties)
    }
}

export interface ConnectorProperties {
    KafkaCluster: KafkaCluster
    KafkaConnectVersion: Value<string>
    WorkerConfiguration?: WorkerConfiguration
    Capacity: Capacity
    KafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit
    ConnectorDescription?: Value<string>
    KafkaClusterClientAuthentication: KafkaClusterClientAuthentication
    ConnectorName: Value<string>
    ServiceExecutionRoleArn: Value<string>
    ConnectorConfiguration: {[key: string]: Value<string>}
    LogDelivery?: LogDelivery
    Plugins: List<Plugin>
}

export default class Connector extends ResourceBase<ConnectorProperties> {
    static ApacheKafkaCluster = ApacheKafkaCluster
    static AutoScaling = AutoScaling
    static Capacity = Capacity
    static CloudWatchLogsLogDelivery = CloudWatchLogsLogDelivery
    static CustomPlugin = CustomPlugin
    static FirehoseLogDelivery = FirehoseLogDelivery
    static KafkaCluster = KafkaCluster
    static KafkaClusterClientAuthentication = KafkaClusterClientAuthentication
    static KafkaClusterEncryptionInTransit = KafkaClusterEncryptionInTransit
    static LogDelivery = LogDelivery
    static Plugin = Plugin
    static ProvisionedCapacity = ProvisionedCapacity
    static S3LogDelivery = S3LogDelivery
    static ScaleInPolicy = ScaleInPolicy
    static ScaleOutPolicy = ScaleOutPolicy
    static Vpc = Vpc
    static WorkerConfiguration = WorkerConfiguration
    static WorkerLogDelivery = WorkerLogDelivery

    constructor(properties: ConnectorProperties) {
        super('AWS::KafkaConnect::Connector', properties)
    }
}
