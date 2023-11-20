import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DestinationConfig {
    OnSuccess?: OnSuccess;
    OnFailure?: OnFailure;
    constructor(properties: DestinationConfig);
}
export declare class OnFailure {
    Destination: Value<string>;
    constructor(properties: OnFailure);
}
export declare class OnSuccess {
    Destination: Value<string>;
    constructor(properties: OnSuccess);
}
export interface EventInvokeConfigProperties {
    FunctionName: Value<string>;
    MaximumRetryAttempts?: Value<number>;
    DestinationConfig?: DestinationConfig;
    Qualifier: Value<string>;
    MaximumEventAgeInSeconds?: Value<number>;
}
export default class EventInvokeConfig extends ResourceBase<EventInvokeConfigProperties> {
    static DestinationConfig: typeof DestinationConfig;
    static OnFailure: typeof OnFailure;
    static OnSuccess: typeof OnSuccess;
    constructor(properties: EventInvokeConfigProperties);
}
