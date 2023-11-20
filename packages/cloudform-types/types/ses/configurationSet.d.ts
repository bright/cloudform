import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DashboardOptions {
    EngagementMetrics: Value<string>;
    constructor(properties: DashboardOptions);
}
export declare class DeliveryOptions {
    SendingPoolName?: Value<string>;
    TlsPolicy?: Value<string>;
    constructor(properties: DeliveryOptions);
}
export declare class GuardianOptions {
    OptimizedSharedDelivery: Value<string>;
    constructor(properties: GuardianOptions);
}
export declare class ReputationOptions {
    ReputationMetricsEnabled?: Value<boolean>;
    constructor(properties: ReputationOptions);
}
export declare class SendingOptions {
    SendingEnabled?: Value<boolean>;
    constructor(properties: SendingOptions);
}
export declare class SuppressionOptions {
    SuppressedReasons?: List<Value<string>>;
    constructor(properties: SuppressionOptions);
}
export declare class TrackingOptions {
    CustomRedirectDomain?: Value<string>;
    constructor(properties: TrackingOptions);
}
export declare class VdmOptions {
    DashboardOptions?: DashboardOptions;
    GuardianOptions?: GuardianOptions;
    constructor(properties: VdmOptions);
}
export interface ConfigurationSetProperties {
    SendingOptions?: SendingOptions;
    SuppressionOptions?: SuppressionOptions;
    TrackingOptions?: TrackingOptions;
    ReputationOptions?: ReputationOptions;
    VdmOptions?: VdmOptions;
    DeliveryOptions?: DeliveryOptions;
    Name?: Value<string>;
}
export default class ConfigurationSet extends ResourceBase<ConfigurationSetProperties> {
    static DashboardOptions: typeof DashboardOptions;
    static DeliveryOptions: typeof DeliveryOptions;
    static GuardianOptions: typeof GuardianOptions;
    static ReputationOptions: typeof ReputationOptions;
    static SendingOptions: typeof SendingOptions;
    static SuppressionOptions: typeof SuppressionOptions;
    static TrackingOptions: typeof TrackingOptions;
    static VdmOptions: typeof VdmOptions;
    constructor(properties?: ConfigurationSetProperties);
}
