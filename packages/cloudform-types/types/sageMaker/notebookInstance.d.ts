import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NotebookInstanceProperties {
    KmsKeyId?: Value<string>;
    VolumeSizeInGB?: Value<number>;
    AdditionalCodeRepositories?: List<Value<string>>;
    DefaultCodeRepository?: Value<string>;
    DirectInternetAccess?: Value<string>;
    AcceleratorTypes?: List<Value<string>>;
    SubnetId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn: Value<string>;
    RootAccess?: Value<string>;
    NotebookInstanceName?: Value<string>;
    InstanceType: Value<string>;
    LifecycleConfigName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NotebookInstance extends ResourceBase<NotebookInstanceProperties> {
    constructor(properties: NotebookInstanceProperties);
}
