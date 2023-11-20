import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AmiDistributionConfiguration {
    AmiTags?: {
        [key: string]: Value<string>;
    };
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    LaunchPermissionConfiguration?: LaunchPermissionConfiguration;
    TargetAccountIds?: List<Value<string>>;
    Name?: Value<string>;
    constructor(properties: AmiDistributionConfiguration);
}
export declare class ContainerDistributionConfiguration {
    TargetRepository?: TargetContainerRepository;
    ContainerTags?: List<Value<string>>;
    Description?: Value<string>;
    constructor(properties: ContainerDistributionConfiguration);
}
export declare class Distribution {
    AmiDistributionConfiguration?: AmiDistributionConfiguration;
    ContainerDistributionConfiguration?: ContainerDistributionConfiguration;
    FastLaunchConfigurations?: List<FastLaunchConfiguration>;
    LaunchTemplateConfigurations?: List<LaunchTemplateConfiguration>;
    LicenseConfigurationArns?: List<Value<string>>;
    Region: Value<string>;
    constructor(properties: Distribution);
}
export declare class FastLaunchConfiguration {
    AccountId?: Value<string>;
    LaunchTemplate?: FastLaunchLaunchTemplateSpecification;
    Enabled?: Value<boolean>;
    MaxParallelLaunches?: Value<number>;
    SnapshotConfiguration?: FastLaunchSnapshotConfiguration;
    constructor(properties: FastLaunchConfiguration);
}
export declare class FastLaunchLaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>;
    LaunchTemplateVersion?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: FastLaunchLaunchTemplateSpecification);
}
export declare class FastLaunchSnapshotConfiguration {
    TargetResourceCount?: Value<number>;
    constructor(properties: FastLaunchSnapshotConfiguration);
}
export declare class LaunchPermissionConfiguration {
    OrganizationArns?: List<Value<string>>;
    OrganizationalUnitArns?: List<Value<string>>;
    UserIds?: List<Value<string>>;
    UserGroups?: List<Value<string>>;
    constructor(properties: LaunchPermissionConfiguration);
}
export declare class LaunchTemplateConfiguration {
    SetDefaultVersion?: Value<boolean>;
    AccountId?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: LaunchTemplateConfiguration);
}
export declare class TargetContainerRepository {
    Service?: Value<string>;
    RepositoryName?: Value<string>;
    constructor(properties: TargetContainerRepository);
}
export interface DistributionConfigurationProperties {
    Description?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
    Distributions: List<Distribution>;
}
export default class DistributionConfiguration extends ResourceBase<DistributionConfigurationProperties> {
    static AmiDistributionConfiguration: typeof AmiDistributionConfiguration;
    static ContainerDistributionConfiguration: typeof ContainerDistributionConfiguration;
    static Distribution: typeof Distribution;
    static FastLaunchConfiguration: typeof FastLaunchConfiguration;
    static FastLaunchLaunchTemplateSpecification: typeof FastLaunchLaunchTemplateSpecification;
    static FastLaunchSnapshotConfiguration: typeof FastLaunchSnapshotConfiguration;
    static LaunchPermissionConfiguration: typeof LaunchPermissionConfiguration;
    static LaunchTemplateConfiguration: typeof LaunchTemplateConfiguration;
    static TargetContainerRepository: typeof TargetContainerRepository;
    constructor(properties: DistributionConfigurationProperties);
}
