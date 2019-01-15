import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NotebookInstanceProperties {
    KmsKeyId?: Value<string>;
    VolumeSizeInGB?: Value<number>;
    DirectInternetAccess?: Value<string>;
    SubnetId?: Value<string>;
    NotebookInstanceName?: Value<string>;
    InstanceType: Value<string>;
    LifecycleConfigName?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class NotebookInstance extends ResourceBase {
    constructor(properties?: NotebookInstanceProperties);
}
