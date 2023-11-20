import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TraceConfiguration {
    Vendor: Value<string>;
    constructor(properties: TraceConfiguration);
}
export interface ObservabilityConfigurationProperties {
    TraceConfiguration?: TraceConfiguration;
    ObservabilityConfigurationName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ObservabilityConfiguration extends ResourceBase<ObservabilityConfigurationProperties> {
    static TraceConfiguration: typeof TraceConfiguration;
    constructor(properties?: ObservabilityConfigurationProperties);
}
