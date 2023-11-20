/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class StreamConfiguration {
    MaxSessionLengthInMinutes?: Value<number>
    ClipboardMode!: Value<string>
    StreamingImageIds!: List<Value<string>>
    MaxStoppedSessionLengthInMinutes?: Value<number>
    SessionPersistenceMode?: Value<string>
    AutomaticTerminationMode?: Value<string>
    SessionBackup?: StreamConfigurationSessionBackup
    Ec2InstanceTypes!: List<Value<string>>
    SessionStorage?: StreamConfigurationSessionStorage
    VolumeConfiguration?: VolumeConfiguration

    constructor(properties: StreamConfiguration) {
        Object.assign(this, properties)
    }
}

export class StreamConfigurationSessionBackup {
    Mode?: Value<string>
    MaxBackupsToRetain?: Value<number>

    constructor(properties: StreamConfigurationSessionBackup) {
        Object.assign(this, properties)
    }
}

export class StreamConfigurationSessionStorage {
    Root?: StreamingSessionStorageRoot
    Mode!: List<Value<string>>

    constructor(properties: StreamConfigurationSessionStorage) {
        Object.assign(this, properties)
    }
}

export class StreamingSessionStorageRoot {
    Linux?: Value<string>
    Windows?: Value<string>

    constructor(properties: StreamingSessionStorageRoot) {
        Object.assign(this, properties)
    }
}

export class VolumeConfiguration {
    Size?: Value<number>
    Throughput?: Value<number>
    Iops?: Value<number>

    constructor(properties: VolumeConfiguration) {
        Object.assign(this, properties)
    }
}

export interface LaunchProfileProperties {
    Description?: Value<string>
    Ec2SubnetIds: List<Value<string>>
    StudioComponentIds: List<Value<string>>
    StreamConfiguration: StreamConfiguration
    LaunchProfileProtocolVersions: List<Value<string>>
    StudioId: Value<string>
    Tags?: {[key: string]: Value<string>}
    Name: Value<string>
}

export default class LaunchProfile extends ResourceBase<LaunchProfileProperties> {
    static StreamConfiguration = StreamConfiguration
    static StreamConfigurationSessionBackup = StreamConfigurationSessionBackup
    static StreamConfigurationSessionStorage = StreamConfigurationSessionStorage
    static StreamingSessionStorageRoot = StreamingSessionStorageRoot
    static VolumeConfiguration = VolumeConfiguration

    constructor(properties: LaunchProfileProperties) {
        super('AWS::NimbleStudio::LaunchProfile', properties)
    }
}
