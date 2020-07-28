import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class PublicAccessBlockConfiguration {
    BlockPublicAcls?: Value<boolean>;
    IgnorePublicAcls?: Value<boolean>;
    BlockPublicPolicy?: Value<boolean>;
    RestrictPublicBuckets?: Value<boolean>;
    constructor(properties: PublicAccessBlockConfiguration);
}
export declare class VpcConfiguration {
    VpcId?: Value<string>;
    constructor(properties: VpcConfiguration);
}
export interface AccessPointProperties {
    Name?: Value<string>;
    Bucket: Value<string>;
    VpcConfiguration?: VpcConfiguration;
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    Policy?: {
        [key: string]: any;
    };
    PolicyStatus?: {
        [key: string]: any;
    };
    NetworkOrigin?: Value<string>;
    CreationDate?: Value<string>;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static PublicAccessBlockConfiguration: typeof PublicAccessBlockConfiguration;
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties: AccessPointProperties);
}
