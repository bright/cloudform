import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GatewayNetwork {
    CidrBlock: Value<string>;
    Name: Value<string>;
    constructor(properties: GatewayNetwork);
}
export interface GatewayProperties {
    Networks: List<GatewayNetwork>;
    EgressCidrBlocks: List<Value<string>>;
    Name: Value<string>;
}
export default class Gateway extends ResourceBase<GatewayProperties> {
    static GatewayNetwork: typeof GatewayNetwork;
    constructor(properties: GatewayProperties);
}
