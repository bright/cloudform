import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PortMappingProperties {
    ContainerPort: Value<number>;
    HostPort: Value<number>;
}
export default class PortMapping extends ResourceBase {
    constructor(properties: PortMappingProperties, dependsOn?: Value<string>);
}
