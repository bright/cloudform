import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisionalConfiguration {
    MaxTimeToLiveInMinutes: Value<number>;
    constructor(properties: ProvisionalConfiguration);
}
export declare class ConsumptionConfiguration {
    RenewType?: Value<string>;
    ProvisionalConfiguration?: ProvisionalConfiguration;
    BorrowConfiguration?: BorrowConfiguration;
    constructor(properties: ConsumptionConfiguration);
}
export declare class IssuerData {
    Name: Value<string>;
    SignKey?: Value<string>;
    constructor(properties: IssuerData);
}
export declare class BorrowConfiguration {
    MaxTimeToLiveInMinutes: Value<number>;
    AllowEarlyCheckIn: Value<boolean>;
    constructor(properties: BorrowConfiguration);
}
export declare class Metadata {
    Name: Value<string>;
    Value: Value<string>;
    constructor(properties: Metadata);
}
export declare class Entitlement {
    Name: Value<string>;
    Value?: Value<string>;
    MaxCount?: Value<number>;
    Overage?: Value<boolean>;
    Unit: Value<string>;
    AllowCheckIn?: Value<boolean>;
    constructor(properties: Entitlement);
}
export declare class ValidityDateFormat {
    Begin: Value<string>;
    End: Value<string>;
    constructor(properties: ValidityDateFormat);
}
export interface LicenseProperties {
    ProductSKU?: Value<string>;
    Issuer: IssuerData;
    LicenseName: Value<string>;
    ProductName: Value<string>;
    HomeRegion: Value<string>;
    Validity: ValidityDateFormat;
    Entitlements: List<Entitlement>;
    Beneficiary?: Value<string>;
    ConsumptionConfiguration: ConsumptionConfiguration;
    LicenseMetadata?: List<Metadata>;
    Status?: Value<string>;
}
export default class License extends ResourceBase<LicenseProperties> {
    static ProvisionalConfiguration: typeof ProvisionalConfiguration;
    static ConsumptionConfiguration: typeof ConsumptionConfiguration;
    static IssuerData: typeof IssuerData;
    static BorrowConfiguration: typeof BorrowConfiguration;
    static Metadata: typeof Metadata;
    static Entitlement: typeof Entitlement;
    static ValidityDateFormat: typeof ValidityDateFormat;
    constructor(properties: LicenseProperties);
}
