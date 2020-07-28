import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Distribution {
    Region: Value<string>;
    AmiDistributionConfiguration?: {
        [key: string]: any;
    };
    LicenseConfigurationArns?: List<Value<string>>;
    constructor(properties: Distribution);
}
export interface DistributionConfigurationProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Distributions: List<Distribution>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class DistributionConfiguration extends ResourceBase<DistributionConfigurationProperties> {
    static Distribution: typeof Distribution;
    constructor(properties: DistributionConfigurationProperties);
}
