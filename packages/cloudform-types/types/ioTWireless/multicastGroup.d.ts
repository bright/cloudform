import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWAN {
    NumberOfDevicesRequested?: Value<number>;
    NumberOfDevicesInGroup?: Value<number>;
    RfRegion: Value<string>;
    DlClass: Value<string>;
    constructor(properties: LoRaWAN);
}
export interface MulticastGroupProperties {
    Description?: Value<string>;
    LoRaWAN: LoRaWAN;
    DisassociateWirelessDevice?: Value<string>;
    AssociateWirelessDevice?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class MulticastGroup extends ResourceBase<MulticastGroupProperties> {
    static LoRaWAN: typeof LoRaWAN;
    constructor(properties: MulticastGroupProperties);
}
