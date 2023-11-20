import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DateFilter {
    EndInclusive?: Value<number>;
    StartInclusive?: Value<number>;
    constructor(properties: DateFilter);
}
export declare class FilterCriteria {
    ResourceTags?: List<MapFilter>;
    Ec2InstanceImageId?: List<StringFilter>;
    FirstObservedAt?: List<DateFilter>;
    InspectorScore?: List<NumberFilter>;
    Ec2InstanceVpcId?: List<StringFilter>;
    LastObservedAt?: List<DateFilter>;
    EcrImagePushedAt?: List<DateFilter>;
    EcrImageArchitecture?: List<StringFilter>;
    RelatedVulnerabilities?: List<StringFilter>;
    EcrImageTags?: List<StringFilter>;
    VulnerabilityId?: List<StringFilter>;
    ComponentType?: List<StringFilter>;
    VendorSeverity?: List<StringFilter>;
    EcrImageRepositoryName?: List<StringFilter>;
    Title?: List<StringFilter>;
    ResourceType?: List<StringFilter>;
    Severity?: List<StringFilter>;
    NetworkProtocol?: List<StringFilter>;
    UpdatedAt?: List<DateFilter>;
    EcrImageHash?: List<StringFilter>;
    PortRange?: List<PortRangeFilter>;
    VulnerabilitySource?: List<StringFilter>;
    Ec2InstanceSubnetId?: List<StringFilter>;
    FindingArn?: List<StringFilter>;
    ResourceId?: List<StringFilter>;
    FindingStatus?: List<StringFilter>;
    VulnerablePackages?: List<PackageFilter>;
    AwsAccountId?: List<StringFilter>;
    ComponentId?: List<StringFilter>;
    EcrImageRegistry?: List<StringFilter>;
    FindingType?: List<StringFilter>;
    constructor(properties: FilterCriteria);
}
export declare class MapFilter {
    Comparison: Value<string>;
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: MapFilter);
}
export declare class NumberFilter {
    LowerInclusive?: Value<number>;
    UpperInclusive?: Value<number>;
    constructor(properties: NumberFilter);
}
export declare class PackageFilter {
    Architecture?: StringFilter;
    Version?: StringFilter;
    Epoch?: NumberFilter;
    SourceLayerHash?: StringFilter;
    Release?: StringFilter;
    Name?: StringFilter;
    constructor(properties: PackageFilter);
}
export declare class PortRangeFilter {
    BeginInclusive?: Value<number>;
    EndInclusive?: Value<number>;
    constructor(properties: PortRangeFilter);
}
export declare class StringFilter {
    Comparison: Value<string>;
    Value: Value<string>;
    constructor(properties: StringFilter);
}
export interface FilterProperties {
    Description?: Value<string>;
    FilterCriteria: FilterCriteria;
    FilterAction: Value<string>;
    Name: Value<string>;
}
export default class Filter extends ResourceBase<FilterProperties> {
    static DateFilter: typeof DateFilter;
    static FilterCriteria: typeof FilterCriteria;
    static MapFilter: typeof MapFilter;
    static NumberFilter: typeof NumberFilter;
    static PackageFilter: typeof PackageFilter;
    static PortRangeFilter: typeof PortRangeFilter;
    static StringFilter: typeof StringFilter;
    constructor(properties: FilterProperties);
}
