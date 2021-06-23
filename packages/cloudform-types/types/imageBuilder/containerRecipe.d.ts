import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class InstanceBlockDeviceMapping {
    DeviceName?: Value<string>;
    VirtualName?: Value<string>;
    NoDevice?: Value<string>;
    Ebs?: EbsInstanceBlockDeviceSpecification;
    constructor(properties: InstanceBlockDeviceMapping);
}
export declare class InstanceConfiguration {
    Image?: Value<string>;
    BlockDeviceMappings?: List<InstanceBlockDeviceMapping>;
    constructor(properties: InstanceConfiguration);
}
export declare class TargetContainerRepository {
    Service?: Value<string>;
    RepositoryName?: Value<string>;
    constructor(properties: TargetContainerRepository);
}
export interface ContainerRecipeProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Version: Value<string>;
    Components: List<ComponentConfiguration>;
    InstanceConfiguration?: InstanceConfiguration;
    DockerfileTemplateData?: Value<string>;
    DockerfileTemplateUri?: Value<string>;
    PlatformOverride?: Value<string>;
    ContainerType: Value<string>;
    ImageOsVersionOverride?: Value<string>;
    TargetRepository: TargetContainerRepository;
    KmsKeyId?: Value<string>;
    ParentImage: Value<string>;
    WorkingDirectory?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ContainerRecipe extends ResourceBase<ContainerRecipeProperties> {
    static ComponentConfiguration: typeof ComponentConfiguration;
    static EbsInstanceBlockDeviceSpecification: typeof EbsInstanceBlockDeviceSpecification;
    static InstanceBlockDeviceMapping: typeof InstanceBlockDeviceMapping;
    static InstanceConfiguration: typeof InstanceConfiguration;
    static TargetContainerRepository: typeof TargetContainerRepository;
    constructor(properties: ContainerRecipeProperties);
}
