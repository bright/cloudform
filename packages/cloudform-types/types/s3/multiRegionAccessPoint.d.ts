import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PublicAccessBlockConfiguration {
    RestrictPublicBuckets?: Value<boolean>;
    BlockPublicPolicy?: Value<boolean>;
    BlockPublicAcls?: Value<boolean>;
    IgnorePublicAcls?: Value<boolean>;
    constructor(properties: PublicAccessBlockConfiguration);
}
export declare class Region {
    Bucket: Value<string>;
    BucketAccountId?: Value<string>;
    constructor(properties: Region);
}
export interface MultiRegionAccessPointProperties {
    PublicAccessBlockConfiguration?: PublicAccessBlockConfiguration;
    Regions: List<Region>;
    Name?: Value<string>;
}
export default class MultiRegionAccessPoint extends ResourceBase<MultiRegionAccessPointProperties> {
    static PublicAccessBlockConfiguration: typeof PublicAccessBlockConfiguration;
    static Region: typeof Region;
    constructor(properties: MultiRegionAccessPointProperties);
}
