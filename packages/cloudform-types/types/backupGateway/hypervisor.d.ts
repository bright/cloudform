import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface HypervisorProperties {
    KmsKeyArn?: Value<string>;
    Username?: Value<string>;
    Host?: Value<string>;
    LogGroupArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    Password?: Value<string>;
}
export default class Hypervisor extends ResourceBase<HypervisorProperties> {
    constructor(properties?: HypervisorProperties);
}
