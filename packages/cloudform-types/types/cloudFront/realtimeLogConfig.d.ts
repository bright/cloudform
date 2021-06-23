import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndPoint {
    KinesisStreamConfig: KinesisStreamConfig;
    StreamType: Value<string>;
    constructor(properties: EndPoint);
}
export declare class KinesisStreamConfig {
    RoleArn: Value<string>;
    StreamArn: Value<string>;
    constructor(properties: KinesisStreamConfig);
}
export interface RealtimeLogConfigProperties {
    EndPoints: List<EndPoint>;
    Fields: List<Value<string>>;
    Name: Value<string>;
    SamplingRate: Value<number>;
}
export default class RealtimeLogConfig extends ResourceBase<RealtimeLogConfigProperties> {
    static EndPoint: typeof EndPoint;
    static KinesisStreamConfig: typeof KinesisStreamConfig;
    constructor(properties: RealtimeLogConfigProperties);
}
