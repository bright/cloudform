/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SpotProvisioningSpecification {
    BlockDurationMinutes?: Value<number>
    TimeoutAction!: Value<string>
    TimeoutDurationMinutes!: Value<number>

    constructor(properties: SpotProvisioningSpecification) {
        Object.assign(this, properties)
    }
}

export class EbsConfiguration {
    EbsBlockDeviceConfigs?: List<EbsBlockDeviceConfig>
    EbsOptimized?: Value<boolean>

    constructor(properties: EbsConfiguration) {
        Object.assign(this, properties)
    }
}

export class VolumeSpecification {
    Iops?: Value<number>
    SizeInGB!: Value<number>
    VolumeType!: Value<string>

    constructor(properties: VolumeSpecification) {
        Object.assign(this, properties)
    }
}

export class Configuration {
    Classification?: Value<string>
    ConfigurationProperties?: {[key: string]: Value<string>}
    Configurations?: List<Configuration>

    constructor(properties: Configuration) {
        Object.assign(this, properties)
    }
}

export class InstanceTypeConfig {
    BidPrice?: Value<string>
    BidPriceAsPercentageOfOnDemandPrice?: Value<number>
    Configurations?: List<Configuration>
    EbsConfiguration?: EbsConfiguration
    InstanceType!: Value<string>
    WeightedCapacity?: Value<number>

    constructor(properties: InstanceTypeConfig) {
        Object.assign(this, properties)
    }
}

export class InstanceFleetProvisioningSpecifications {
    SpotSpecification!: SpotProvisioningSpecification

    constructor(properties: InstanceFleetProvisioningSpecifications) {
        Object.assign(this, properties)
    }
}

export class EbsBlockDeviceConfig {
    VolumeSpecification!: VolumeSpecification
    VolumesPerInstance?: Value<number>

    constructor(properties: EbsBlockDeviceConfig) {
        Object.assign(this, properties)
    }
}

export interface InstanceFleetConfigProperties {
    ClusterId: Value<string>
    InstanceFleetType: Value<string>
    InstanceTypeConfigs?: List<InstanceTypeConfig>
    LaunchSpecifications?: InstanceFleetProvisioningSpecifications
    Name?: Value<string>
    TargetOnDemandCapacity?: Value<number>
    TargetSpotCapacity?: Value<number>
}

export default class InstanceFleetConfig extends ResourceBase<InstanceFleetConfigProperties> {
    static SpotProvisioningSpecification = SpotProvisioningSpecification
    static EbsConfiguration = EbsConfiguration
    static VolumeSpecification = VolumeSpecification
    static Configuration = Configuration
    static InstanceTypeConfig = InstanceTypeConfig
    static InstanceFleetProvisioningSpecifications = InstanceFleetProvisioningSpecifications
    static EbsBlockDeviceConfig = EbsBlockDeviceConfig

    constructor(properties: InstanceFleetConfigProperties) {
        super('AWS::EMR::InstanceFleetConfig', properties)
    }
}
