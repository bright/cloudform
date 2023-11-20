import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InstanceMetadataServiceConfiguration {
    MinimumInstanceMetadataServiceVersion: Value<string>;
    constructor(properties: InstanceMetadataServiceConfiguration);
}
export interface NotebookInstanceProperties {
    KmsKeyId?: Value<string>;
    VolumeSizeInGB?: Value<number>;
    AdditionalCodeRepositories?: List<Value<string>>;
    DefaultCodeRepository?: Value<string>;
    DirectInternetAccess?: Value<string>;
    PlatformIdentifier?: Value<string>;
    AcceleratorTypes?: List<Value<string>>;
    SubnetId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn: Value<string>;
    InstanceMetadataServiceConfiguration?: InstanceMetadataServiceConfiguration;
    RootAccess?: Value<string>;
    NotebookInstanceName?: Value<string>;
    InstanceType: Value<string>;
    LifecycleConfigName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NotebookInstance extends ResourceBase<NotebookInstanceProperties> {
    static InstanceMetadataServiceConfiguration: typeof InstanceMetadataServiceConfiguration;
    constructor(properties: NotebookInstanceProperties);
}
