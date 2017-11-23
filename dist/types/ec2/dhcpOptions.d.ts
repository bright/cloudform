import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface DHCPOptionsProperties {
    DomainName?: Value<string>;
    DomainNameServers?: Value<string>[];
    NetbiosNameServers?: Value<string>[];
    NetbiosNodeType?: Value<number>;
    NtpServers?: Value<string>[];
    Tags?: ResourceTag[];
}
export default class DHCPOptions extends ResourceBase {
    constructor(properties: DHCPOptionsProperties, dependsOn?: Value<string>);
}
