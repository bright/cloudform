import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWAN {
    RfRegion: Value<string>;
    StartTime?: Value<string>;
    constructor(properties: LoRaWAN);
}
export interface FuotaTaskProperties {
    FirmwareUpdateImage: Value<string>;
    Description?: Value<string>;
    LoRaWAN: LoRaWAN;
    FirmwareUpdateRole: Value<string>;
    AssociateMulticastGroup?: Value<string>;
    DisassociateWirelessDevice?: Value<string>;
    DisassociateMulticastGroup?: Value<string>;
    AssociateWirelessDevice?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class FuotaTask extends ResourceBase<FuotaTaskProperties> {
    static LoRaWAN: typeof LoRaWAN;
    constructor(properties: FuotaTaskProperties);
}
