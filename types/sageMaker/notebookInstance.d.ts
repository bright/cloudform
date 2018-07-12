import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface NotebookInstanceProperties {
    KmsKeyId?: Value<string>;
    DirectInternetAccess?: Value<string>;
    SubnetId?: Value<string>;
    NotebookInstanceName?: Value<string>;
    InstanceType: Value<string>;
    LifecycleConfigName?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn: Value<string>;
    Tags?: ResourceTag[];
}
export default class NotebookInstance extends ResourceBase {
    constructor(properties?: NotebookInstanceProperties);
}
