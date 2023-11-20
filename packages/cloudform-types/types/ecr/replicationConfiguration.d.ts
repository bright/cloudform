import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ReplicationConfigurationInner {
    Rules: List<ReplicationRule>;
    constructor(properties: ReplicationConfigurationInner);
}
export declare class ReplicationDestination {
    Region: Value<string>;
    RegistryId: Value<string>;
    constructor(properties: ReplicationDestination);
}
export declare class ReplicationRule {
    RepositoryFilters?: List<RepositoryFilter>;
    Destinations: List<ReplicationDestination>;
    constructor(properties: ReplicationRule);
}
export declare class RepositoryFilter {
    FilterType: Value<string>;
    Filter: Value<string>;
    constructor(properties: RepositoryFilter);
}
export interface ReplicationConfigurationProperties {
    ReplicationConfiguration: ReplicationConfiguration;
}
export default class ReplicationConfiguration extends ResourceBase<ReplicationConfigurationProperties> {
    static ReplicationConfiguration: typeof ReplicationConfigurationInner;
    static ReplicationDestination: typeof ReplicationDestination;
    static ReplicationRule: typeof ReplicationRule;
    static RepositoryFilter: typeof RepositoryFilter;
    constructor(properties: ReplicationConfigurationProperties);
}
