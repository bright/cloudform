import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SidewalkAccountInfo {
    AppServerPrivateKey: Value<string>;
    constructor(properties: SidewalkAccountInfo);
}
export declare class SidewalkUpdateAccount {
    AppServerPrivateKey?: Value<string>;
    constructor(properties: SidewalkUpdateAccount);
}
export interface PartnerAccountProperties {
    Sidewalk?: SidewalkAccountInfo;
    PartnerAccountId?: Value<string>;
    PartnerType?: Value<string>;
    AccountLinked?: Value<boolean>;
    SidewalkUpdate?: SidewalkUpdateAccount;
    Fingerprint?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class PartnerAccount extends ResourceBase<PartnerAccountProperties> {
    static SidewalkAccountInfo: typeof SidewalkAccountInfo;
    static SidewalkUpdateAccount: typeof SidewalkUpdateAccount;
    constructor(properties?: PartnerAccountProperties);
}
