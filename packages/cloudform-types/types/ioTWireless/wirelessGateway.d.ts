import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANGateway {
    RfRegion: Value<string>;
    GatewayEui: Value<string>;
    constructor(properties: LoRaWANGateway);
}
export interface WirelessGatewayProperties {
    LastUplinkReceivedAt?: Value<string>;
    Description?: Value<string>;
    LoRaWAN: LoRaWANGateway;
    ThingArn?: Value<string>;
    ThingName?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class WirelessGateway extends ResourceBase<WirelessGatewayProperties> {
    static LoRaWANGateway: typeof LoRaWANGateway;
    constructor(properties: WirelessGatewayProperties);
}
