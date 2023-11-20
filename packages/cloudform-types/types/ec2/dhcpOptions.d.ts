import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DHCPOptionsProperties {
    NetbiosNameServers?: List<Value<string>>;
    NtpServers?: List<Value<string>>;
    DomainName?: Value<string>;
    NetbiosNodeType?: Value<number>;
    DomainNameServers?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class DHCPOptions extends ResourceBase<DHCPOptionsProperties> {
    constructor(properties?: DHCPOptionsProperties);
}
