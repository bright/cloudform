import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANServiceProfile {
    UlRate?: Value<number>;
    UlBucketSize?: Value<number>;
    UlRatePolicy?: Value<string>;
    DlRate?: Value<number>;
    DlBucketSize?: Value<number>;
    DlRatePolicy?: Value<string>;
    AddGwMetadata?: Value<boolean>;
    DevStatusReqFreq?: Value<number>;
    ReportDevStatusBattery?: Value<boolean>;
    ReportDevStatusMargin?: Value<boolean>;
    DrMin?: Value<number>;
    DrMax?: Value<number>;
    ChannelMask?: Value<string>;
    PrAllowed?: Value<boolean>;
    HrAllowed?: Value<boolean>;
    RaAllowed?: Value<boolean>;
    NwkGeoLoc?: Value<boolean>;
    TargetPer?: Value<number>;
    MinGwDiversity?: Value<number>;
    constructor(properties: LoRaWANServiceProfile);
}
export interface ServiceProfileProperties {
    Name?: Value<string>;
    LoRaWAN?: LoRaWANServiceProfile;
    Tags?: List<ResourceTag>;
}
export default class ServiceProfile extends ResourceBase<ServiceProfileProperties> {
    static LoRaWANServiceProfile: typeof LoRaWANServiceProfile;
    constructor(properties?: ServiceProfileProperties);
}
