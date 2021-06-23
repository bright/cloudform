import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Distribution {
    Region: Value<string>;
    AmiDistributionConfiguration?: {
        [key: string]: any;
    };
    ContainerDistributionConfiguration?: {
        [key: string]: any;
    };
    LicenseConfigurationArns?: List<Value<string>>;
    LaunchTemplateConfigurations?: List<LaunchTemplateConfiguration>;
    constructor(properties: Distribution);
}
export declare class LaunchTemplateConfiguration {
    LaunchTemplateId?: Value<string>;
    AccountId?: Value<string>;
    SetDefaultVersion?: Value<boolean>;
    constructor(properties: LaunchTemplateConfiguration);
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
    static LaunchTemplateConfiguration: typeof LaunchTemplateConfiguration;
    constructor(properties: DistributionConfigurationProperties);
}
