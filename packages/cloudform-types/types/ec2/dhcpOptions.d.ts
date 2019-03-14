import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DHCPOptionsProperties {
    DomainName?: Value<string>;
    DomainNameServers?: List<Value<string>>;
    NetbiosNameServers?: List<Value<string>>;
    NetbiosNodeType?: Value<number>;
    NtpServers?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class DHCPOptions extends ResourceBase<DHCPOptionsProperties> {
    constructor(properties?: DHCPOptionsProperties);
}
