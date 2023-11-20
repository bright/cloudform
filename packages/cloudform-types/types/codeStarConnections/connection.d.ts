import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ConnectionProperties {
    ConnectionName: Value<string>;
    HostArn?: Value<string>;
    ProviderType?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Connection extends ResourceBase<ConnectionProperties> {
    constructor(properties: ConnectionProperties);
}
