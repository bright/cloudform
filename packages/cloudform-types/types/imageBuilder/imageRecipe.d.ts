import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdditionalInstanceConfiguration {
    UserDataOverride?: Value<string>;
    SystemsManagerAgent?: SystemsManagerAgent;
    constructor(properties: AdditionalInstanceConfiguration);
}
export declare class ComponentConfiguration {
    Parameters?: List<ComponentParameter>;
    ComponentArn?: Value<string>;
    constructor(properties: ComponentConfiguration);
}
export declare class ComponentParameter {
    Value: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: ComponentParameter);
}
export declare class EbsInstanceBlockDeviceSpecification {
    SnapshotId?: Value<string>;
    VolumeType?: Value<string>;
    KmsKeyId?: Value<string>;
    Encrypted?: Value<boolean>;
    Throughput?: Value<number>;
    Iops?: Value<number>;
    VolumeSize?: Value<number>;
    DeleteOnTermination?: Value<boolean>;
    constructor(properties: EbsInstanceBlockDeviceSpecification);
}
export declare class InstanceBlockDeviceMapping {
    Ebs?: EbsInstanceBlockDeviceSpecification;
    NoDevice?: Value<string>;
    VirtualName?: Value<string>;
    DeviceName?: Value<string>;
    constructor(properties: InstanceBlockDeviceMapping);
}
export declare class SystemsManagerAgent {
    UninstallAfterBuild?: Value<boolean>;
    constructor(properties: SystemsManagerAgent);
}
export interface ImageRecipeProperties {
    Components: List<ComponentConfiguration>;
    WorkingDirectory?: Value<string>;
    ParentImage: Value<string>;
    Description?: Value<string>;
    Version: Value<string>;
    BlockDeviceMappings?: List<InstanceBlockDeviceMapping>;
    AdditionalInstanceConfiguration?: AdditionalInstanceConfiguration;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class ImageRecipe extends ResourceBase<ImageRecipeProperties> {
    static AdditionalInstanceConfiguration: typeof AdditionalInstanceConfiguration;
    static ComponentConfiguration: typeof ComponentConfiguration;
    static ComponentParameter: typeof ComponentParameter;
    static EbsInstanceBlockDeviceSpecification: typeof EbsInstanceBlockDeviceSpecification;
    static InstanceBlockDeviceMapping: typeof InstanceBlockDeviceMapping;
    static SystemsManagerAgent: typeof SystemsManagerAgent;
    constructor(properties: ImageRecipeProperties);
}
