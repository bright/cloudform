import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VPCEConfigurationProperties {
    VpceServiceName: Value<string>;
    VpceConfigurationDescription?: Value<string>;
    VpceConfigurationName: Value<string>;
    ServiceDnsName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VPCEConfiguration extends ResourceBase<VPCEConfigurationProperties> {
    constructor(properties: VPCEConfigurationProperties);
}
