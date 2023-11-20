import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANServiceProfile {
    DlBucketSize?: Value<number>;
    MinGwDiversity?: Value<number>;
    DrMax?: Value<number>;
    ReportDevStatusMargin?: Value<boolean>;
    PrAllowed?: Value<boolean>;
    DlRate?: Value<number>;
    UlRatePolicy?: Value<string>;
    ReportDevStatusBattery?: Value<boolean>;
    ChannelMask?: Value<string>;
    UlRate?: Value<number>;
    AddGwMetadata?: Value<boolean>;
    DlRatePolicy?: Value<string>;
    HrAllowed?: Value<boolean>;
    DrMin?: Value<number>;
    TargetPer?: Value<number>;
    NwkGeoLoc?: Value<boolean>;
    DevStatusReqFreq?: Value<number>;
    UlBucketSize?: Value<number>;
    RaAllowed?: Value<boolean>;
    constructor(properties: LoRaWANServiceProfile);
}
export interface ServiceProfileProperties {
    LoRaWAN?: LoRaWANServiceProfile;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ServiceProfile extends ResourceBase<ServiceProfileProperties> {
    static LoRaWANServiceProfile: typeof LoRaWANServiceProfile;
    constructor(properties?: ServiceProfileProperties);
}
