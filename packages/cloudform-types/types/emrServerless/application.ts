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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AutoStartConfiguration {
    Enabled?: Value<boolean>

    constructor(properties: AutoStartConfiguration) {
        Object.assign(this, properties)
    }
}

export class AutoStopConfiguration {
    Enabled?: Value<boolean>
    IdleTimeoutMinutes?: Value<number>

    constructor(properties: AutoStopConfiguration) {
        Object.assign(this, properties)
    }
}

export class ConfigurationObject {
    Classification!: Value<string>
    Properties?: {[key: string]: Value<string>}
    Configurations?: List<ConfigurationObject>

    constructor(properties: ConfigurationObject) {
        Object.assign(this, properties)
    }
}

export class ImageConfigurationInput {
    ImageUri?: Value<string>

    constructor(properties: ImageConfigurationInput) {
        Object.assign(this, properties)
    }
}

export class InitialCapacityConfig {
    WorkerConfiguration!: WorkerConfiguration
    WorkerCount!: Value<number>

    constructor(properties: InitialCapacityConfig) {
        Object.assign(this, properties)
    }
}

export class InitialCapacityConfigKeyValuePair {
    Value!: InitialCapacityConfig
    Key!: Value<string>

    constructor(properties: InitialCapacityConfigKeyValuePair) {
        Object.assign(this, properties)
    }
}

export class ManagedPersistenceMonitoringConfiguration {
    EncryptionKeyArn?: Value<string>
    Enabled?: Value<boolean>

    constructor(properties: ManagedPersistenceMonitoringConfiguration) {
        Object.assign(this, properties)
    }
}

export class MaximumAllowedResources {
    Memory!: Value<string>
    Cpu!: Value<string>
    Disk?: Value<string>

    constructor(properties: MaximumAllowedResources) {
        Object.assign(this, properties)
    }
}

export class MonitoringConfiguration {
    S3MonitoringConfiguration?: S3MonitoringConfiguration
    ManagedPersistenceMonitoringConfiguration?: ManagedPersistenceMonitoringConfiguration

    constructor(properties: MonitoringConfiguration) {
        Object.assign(this, properties)
    }
}

export class NetworkConfiguration {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: NetworkConfiguration) {
        Object.assign(this, properties)
    }
}

export class S3MonitoringConfiguration {
    LogUri?: Value<string>
    EncryptionKeyArn?: Value<string>

    constructor(properties: S3MonitoringConfiguration) {
        Object.assign(this, properties)
    }
}

export class WorkerConfiguration {
    Memory!: Value<string>
    Cpu!: Value<string>
    Disk?: Value<string>

    constructor(properties: WorkerConfiguration) {
        Object.assign(this, properties)
    }
}

export class WorkerTypeSpecificationInput {
    ImageConfiguration?: ImageConfigurationInput

    constructor(properties: WorkerTypeSpecificationInput) {
        Object.assign(this, properties)
    }
}

export interface ApplicationProperties {
    AutoStartConfiguration?: AutoStartConfiguration
    Architecture?: Value<string>
    WorkerTypeSpecifications?: {[key: string]: WorkerTypeSpecificationInput}
    MonitoringConfiguration?: MonitoringConfiguration
    MaximumCapacity?: MaximumAllowedResources
    AutoStopConfiguration?: AutoStopConfiguration
    RuntimeConfiguration?: List<ConfigurationObject>
    Name?: Value<string>
    Type: Value<string>
    InitialCapacity?: List<InitialCapacityConfigKeyValuePair>
    ImageConfiguration?: ImageConfigurationInput
    NetworkConfiguration?: NetworkConfiguration
    ReleaseLabel: Value<string>
    Tags?: List<ResourceTag>
}

export default class Application extends ResourceBase<ApplicationProperties> {
    static AutoStartConfiguration = AutoStartConfiguration
    static AutoStopConfiguration = AutoStopConfiguration
    static ConfigurationObject = ConfigurationObject
    static ImageConfigurationInput = ImageConfigurationInput
    static InitialCapacityConfig = InitialCapacityConfig
    static InitialCapacityConfigKeyValuePair = InitialCapacityConfigKeyValuePair
    static ManagedPersistenceMonitoringConfiguration = ManagedPersistenceMonitoringConfiguration
    static MaximumAllowedResources = MaximumAllowedResources
    static MonitoringConfiguration = MonitoringConfiguration
    static NetworkConfiguration = NetworkConfiguration
    static S3MonitoringConfiguration = S3MonitoringConfiguration
    static WorkerConfiguration = WorkerConfiguration
    static WorkerTypeSpecificationInput = WorkerTypeSpecificationInput

    constructor(properties: ApplicationProperties) {
        super('AWS::EMRServerless::Application', properties)
    }
}
