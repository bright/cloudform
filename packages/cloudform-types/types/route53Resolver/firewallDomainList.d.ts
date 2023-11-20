import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface FirewallDomainListProperties {
    Domains?: List<Value<string>>;
    DomainFileUrl?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class FirewallDomainList extends ResourceBase<FirewallDomainListProperties> {
    constructor(properties?: FirewallDomainListProperties);
}
