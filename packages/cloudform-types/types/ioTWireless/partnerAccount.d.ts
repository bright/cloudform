import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SidewalkAccountInfo {
    AppServerPrivateKey: Value<string>;
    constructor(properties: SidewalkAccountInfo);
}
export declare class SidewalkAccountInfoWithFingerprint {
    Fingerprint?: Value<string>;
    AmazonId?: Value<string>;
    Arn?: Value<string>;
    constructor(properties: SidewalkAccountInfoWithFingerprint);
}
export declare class SidewalkUpdateAccount {
    AppServerPrivateKey?: Value<string>;
    constructor(properties: SidewalkUpdateAccount);
}
export interface PartnerAccountProperties {
    PartnerType?: Value<string>;
    SidewalkResponse?: SidewalkAccountInfoWithFingerprint;
    AccountLinked?: Value<boolean>;
    Sidewalk?: SidewalkAccountInfo;
    PartnerAccountId?: Value<string>;
    SidewalkUpdate?: SidewalkUpdateAccount;
    Tags?: List<ResourceTag>;
}
export default class PartnerAccount extends ResourceBase<PartnerAccountProperties> {
    static SidewalkAccountInfo: typeof SidewalkAccountInfo;
    static SidewalkAccountInfoWithFingerprint: typeof SidewalkAccountInfoWithFingerprint;
    static SidewalkUpdateAccount: typeof SidewalkUpdateAccount;
    constructor(properties?: PartnerAccountProperties);
}
