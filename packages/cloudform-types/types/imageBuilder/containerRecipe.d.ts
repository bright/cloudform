import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
export declare class InstanceConfiguration {
    BlockDeviceMappings?: List<InstanceBlockDeviceMapping>;
    Image?: Value<string>;
    constructor(properties: InstanceConfiguration);
}
export declare class TargetContainerRepository {
    Service?: Value<string>;
    RepositoryName?: Value<string>;
    constructor(properties: TargetContainerRepository);
}
export interface ContainerRecipeProperties {
    WorkingDirectory?: Value<string>;
    ParentImage: Value<string>;
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    InstanceConfiguration?: InstanceConfiguration;
    ContainerType: Value<string>;
    Name: Value<string>;
    DockerfileTemplateData?: Value<string>;
    Components: List<ComponentConfiguration>;
    TargetRepository: TargetContainerRepository;
    Version: Value<string>;
    PlatformOverride?: Value<string>;
    ImageOsVersionOverride?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    DockerfileTemplateUri?: Value<string>;
}
export default class ContainerRecipe extends ResourceBase<ContainerRecipeProperties> {
    static ComponentConfiguration: typeof ComponentConfiguration;
    static ComponentParameter: typeof ComponentParameter;
    static EbsInstanceBlockDeviceSpecification: typeof EbsInstanceBlockDeviceSpecification;
    static InstanceBlockDeviceMapping: typeof InstanceBlockDeviceMapping;
    static InstanceConfiguration: typeof InstanceConfiguration;
    static TargetContainerRepository: typeof TargetContainerRepository;
    constructor(properties: ContainerRecipeProperties);
}
