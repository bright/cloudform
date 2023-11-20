import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BorrowConfiguration {
    AllowEarlyCheckIn: Value<boolean>;
    MaxTimeToLiveInMinutes: Value<number>;
    constructor(properties: BorrowConfiguration);
}
export declare class ConsumptionConfiguration {
    BorrowConfiguration?: BorrowConfiguration;
    RenewType?: Value<string>;
    ProvisionalConfiguration?: ProvisionalConfiguration;
    constructor(properties: ConsumptionConfiguration);
}
export declare class Entitlement {
    AllowCheckIn?: Value<boolean>;
    Overage?: Value<boolean>;
    Value?: Value<string>;
    MaxCount?: Value<number>;
    Unit: Value<string>;
    Name: Value<string>;
    constructor(properties: Entitlement);
}
export declare class IssuerData {
    SignKey?: Value<string>;
    Name: Value<string>;
    constructor(properties: IssuerData);
}
export declare class Metadata {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: Metadata);
}
export declare class ProvisionalConfiguration {
    MaxTimeToLiveInMinutes: Value<number>;
    constructor(properties: ProvisionalConfiguration);
}
export declare class ValidityDateFormat {
    Begin: Value<string>;
    End: Value<string>;
    constructor(properties: ValidityDateFormat);
}
export interface LicenseProperties {
    ProductSKU?: Value<string>;
    Status?: Value<string>;
    ConsumptionConfiguration: ConsumptionConfiguration;
    Validity: ValidityDateFormat;
    ProductName: Value<string>;
    Issuer: IssuerData;
    HomeRegion: Value<string>;
    Entitlements: List<Entitlement>;
    LicenseMetadata?: List<Metadata>;
    LicenseName: Value<string>;
    Beneficiary?: Value<string>;
}
export default class License extends ResourceBase<LicenseProperties> {
    static BorrowConfiguration: typeof BorrowConfiguration;
    static ConsumptionConfiguration: typeof ConsumptionConfiguration;
    static Entitlement: typeof Entitlement;
    static IssuerData: typeof IssuerData;
    static Metadata: typeof Metadata;
    static ProvisionalConfiguration: typeof ProvisionalConfiguration;
    static ValidityDateFormat: typeof ValidityDateFormat;
    constructor(properties: LicenseProperties);
}
