import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SignatureValidityPeriod {
    Value?: Value<number>;
    Type?: Value<string>;
    constructor(properties: SignatureValidityPeriod);
}
export interface SigningProfileProperties {
    SignatureValidityPeriod?: SignatureValidityPeriod;
    PlatformId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class SigningProfile extends ResourceBase<SigningProfileProperties> {
    static SignatureValidityPeriod: typeof SignatureValidityPeriod;
    constructor(properties: SigningProfileProperties);
}
