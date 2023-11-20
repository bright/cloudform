import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DeliveryOptions {
    SendingPoolName?: Value<string>;
    constructor(properties: DeliveryOptions);
}
export declare class ReputationOptions {
    ReputationMetricsEnabled?: Value<boolean>;
    constructor(properties: ReputationOptions);
}
export declare class SendingOptions {
    SendingEnabled?: Value<boolean>;
    constructor(properties: SendingOptions);
}
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export declare class TrackingOptions {
    CustomRedirectDomain?: Value<string>;
    constructor(properties: TrackingOptions);
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
    static DeliveryOptions: typeof DeliveryOptions;
    static ReputationOptions: typeof ReputationOptions;
    static SendingOptions: typeof SendingOptions;
    static Tags: typeof Tags;
    static TrackingOptions: typeof TrackingOptions;
    constructor(properties: ConfigurationSetProperties);
}
