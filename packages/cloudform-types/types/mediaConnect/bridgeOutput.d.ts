import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class BridgeNetworkOutput {
    NetworkName: Value<string>;
    Port: Value<number>;
    IpAddress: Value<string>;
    Protocol: Value<string>;
    Ttl: Value<number>;
    constructor(properties: BridgeNetworkOutput);
}
export interface BridgeOutputProperties {
    BridgeArn: Value<string>;
    NetworkOutput: BridgeNetworkOutput;
    Name: Value<string>;
}
export default class BridgeOutput extends ResourceBase<BridgeOutputProperties> {
    static BridgeNetworkOutput: typeof BridgeNetworkOutput;
    constructor(properties: BridgeOutputProperties);
}
