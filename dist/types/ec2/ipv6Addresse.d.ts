import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface Ipv6AddresseProperties {
    Ipv6Address: Value<string>;
}
export default class Ipv6Addresse extends ResourceBase {
    constructor(properties: Ipv6AddresseProperties, dependsOn?: Value<string>);
}
