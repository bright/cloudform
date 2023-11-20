import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class PublicAccessBlockConfiguration {
    RestrictPublicBuckets?: Value<boolean>;
    BlockPublicPolicy?: Value<boolean>;
    BlockPublicAcls?: Value<boolean>;
    IgnorePublicAcls?: Value<boolean>;
    constructor(properties: PublicAccessBlockConfiguration);
}
export declare class VpcConfiguration {
    VpcId?: Value<string>;
    constructor(properties: VpcConfiguration);
}
export interface AccessPointProperties {
    Policy?: {
        [key: string]: any;
    };
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    Bucket: Value<string>;
    BucketAccountId?: Value<string>;
    VpcConfiguration?: VpcConfiguration;
    Name?: Value<string>;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static PublicAccessBlockConfiguration: typeof PublicAccessBlockConfiguration;
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties: AccessPointProperties);
}
