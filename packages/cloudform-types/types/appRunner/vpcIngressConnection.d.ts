import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IngressVpcConfiguration {
    VpcId: Value<string>;
    VpcEndpointId: Value<string>;
    constructor(properties: IngressVpcConfiguration);
}
export interface VpcIngressConnectionProperties {
    VpcIngressConnectionName?: Value<string>;
    ServiceArn: Value<string>;
    Tags?: List<ResourceTag>;
    IngressVpcConfiguration: IngressVpcConfiguration;
}
export default class VpcIngressConnection extends ResourceBase<VpcIngressConnectionProperties> {
    static IngressVpcConfiguration: typeof IngressVpcConfiguration;
    constructor(properties: VpcIngressConnectionProperties);
}
