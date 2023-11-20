import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EndPoint {
    KinesisStreamConfig: KinesisStreamConfig;
    StreamType: Value<string>;
    constructor(properties: EndPoint);
}
export declare class KinesisStreamConfig {
    StreamArn: Value<string>;
    RoleArn: Value<string>;
    constructor(properties: KinesisStreamConfig);
}
export interface RealtimeLogConfigProperties {
    Fields: List<Value<string>>;
    EndPoints: List<EndPoint>;
    SamplingRate: Value<number>;
    Name: Value<string>;
}
export default class RealtimeLogConfig extends ResourceBase<RealtimeLogConfigProperties> {
    static EndPoint: typeof EndPoint;
    static KinesisStreamConfig: typeof KinesisStreamConfig;
    constructor(properties: RealtimeLogConfigProperties);
}
