import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceBlockDeviceMapping {
    DeviceName?: Value<string>;
    VirtualName?: Value<string>;
    NoDevice?: Value<string>;
    Ebs?: EbsInstanceBlockDeviceSpecification;
    constructor(properties: InstanceBlockDeviceMapping);
}
export declare class ComponentConfiguration {
    ComponentArn?: Value<string>;
    constructor(properties: ComponentConfiguration);
}
export declare class EbsInstanceBlockDeviceSpecification {
    Encrypted?: Value<boolean>;
    DeleteOnTermination?: Value<boolean>;
    Iops?: Value<number>;
    KmsKeyId?: Value<string>;
    SnapshotId?: Value<string>;
    VolumeSize?: Value<number>;
    VolumeType?: Value<string>;
    constructor(properties: EbsInstanceBlockDeviceSpecification);
}
export interface ImageRecipeProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Version: Value<string>;
    Components: List<ComponentConfiguration>;
    BlockDeviceMappings?: List<InstanceBlockDeviceMapping>;
    ParentImage: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ImageRecipe extends ResourceBase<ImageRecipeProperties> {
    static InstanceBlockDeviceMapping: typeof InstanceBlockDeviceMapping;
    static ComponentConfiguration: typeof ComponentConfiguration;
    static EbsInstanceBlockDeviceSpecification: typeof EbsInstanceBlockDeviceSpecification;
    constructor(properties: ImageRecipeProperties);
}
