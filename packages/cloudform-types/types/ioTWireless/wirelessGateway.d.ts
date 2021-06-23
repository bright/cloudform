import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANGateway {
    GatewayEui: Value<string>;
    RfRegion: Value<string>;
    constructor(properties: LoRaWANGateway);
}
export interface WirelessGatewayProperties {
    Name?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    LoRaWAN: LoRaWANGateway;
    ThingArn?: Value<string>;
    LastUplinkReceivedAt?: Value<string>;
}
export default class WirelessGateway extends ResourceBase<WirelessGatewayProperties> {
    static LoRaWANGateway: typeof LoRaWANGateway;
    constructor(properties: WirelessGatewayProperties);
}
