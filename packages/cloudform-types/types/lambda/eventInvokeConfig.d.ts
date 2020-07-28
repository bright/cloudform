import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class OnFailure {
    Destination: Value<string>;
    constructor(properties: OnFailure);
}
export declare class OnSuccess {
    Destination: Value<string>;
    constructor(properties: OnSuccess);
}
export declare class DestinationConfig {
    OnSuccess?: OnSuccess;
    OnFailure?: OnFailure;
    constructor(properties: DestinationConfig);
}
export interface EventInvokeConfigProperties {
    FunctionName: Value<string>;
    MaximumRetryAttempts?: Value<number>;
    DestinationConfig?: DestinationConfig;
    Qualifier: Value<string>;
    MaximumEventAgeInSeconds?: Value<number>;
}
export default class EventInvokeConfig extends ResourceBase<EventInvokeConfigProperties> {
    static OnFailure: typeof OnFailure;
    static OnSuccess: typeof OnSuccess;
    static DestinationConfig: typeof DestinationConfig;
    constructor(properties: EventInvokeConfigProperties);
}
