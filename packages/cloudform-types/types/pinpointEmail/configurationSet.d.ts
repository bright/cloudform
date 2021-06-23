import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SendingOptions {
    SendingEnabled?: Value<boolean>;
    constructor(properties: SendingOptions);
}
export declare class ReputationOptions {
    ReputationMetricsEnabled?: Value<boolean>;
    constructor(properties: ReputationOptions);
}
export declare class TrackingOptions {
    CustomRedirectDomain?: Value<string>;
    constructor(properties: TrackingOptions);
}
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export declare class DeliveryOptions {
    SendingPoolName?: Value<string>;
    constructor(properties: DeliveryOptions);
}
export interface ConfigurationSetProperties {
    SendingOptions?: SendingOptions;
    TrackingOptions?: TrackingOptions;
    ReputationOptions?: ReputationOptions;
    DeliveryOptions?: DeliveryOptions;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class ConfigurationSet extends ResourceBase<ConfigurationSetProperties> {
    static SendingOptions: typeof SendingOptions;
    static ReputationOptions: typeof ReputationOptions;
    static TrackingOptions: typeof TrackingOptions;
    static Tags: typeof Tags;
    static DeliveryOptions: typeof DeliveryOptions;
    constructor(properties: ConfigurationSetProperties);
}
