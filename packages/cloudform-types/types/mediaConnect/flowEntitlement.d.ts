import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Encryption {
    Algorithm: Value<string>;
    ConstantInitializationVector?: Value<string>;
    DeviceId?: Value<string>;
    KeyType?: Value<string>;
    Region?: Value<string>;
    ResourceId?: Value<string>;
    RoleArn: Value<string>;
    SecretArn?: Value<string>;
    Url?: Value<string>;
    constructor(properties: Encryption);
}
export interface FlowEntitlementProperties {
    FlowArn: Value<string>;
    DataTransferSubscriberFeePercent?: Value<number>;
    Description: Value<string>;
    Encryption?: Encryption;
    EntitlementStatus?: Value<string>;
    Name: Value<string>;
    Subscribers: List<Value<string>>;
}
export default class FlowEntitlement extends ResourceBase<FlowEntitlementProperties> {
    static Encryption: typeof Encryption;
    constructor(properties: FlowEntitlementProperties);
}
