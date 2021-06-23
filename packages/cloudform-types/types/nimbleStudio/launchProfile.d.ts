import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StreamConfiguration {
    ClipboardMode: Value<string>;
    StreamingImageIds: List<Value<string>>;
    Ec2InstanceTypes: List<Value<string>>;
    MaxSessionLengthInMinutes?: Value<number>;
    constructor(properties: StreamConfiguration);
}
export interface LaunchProfileProperties {
    Description?: Value<string>;
    Name: Value<string>;
    Ec2SubnetIds: List<Value<string>>;
    StreamConfiguration: StreamConfiguration;
    StudioComponentIds: List<Value<string>>;
    LaunchProfileProtocolVersions: List<Value<string>>;
    StudioId: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class LaunchProfile extends ResourceBase<LaunchProfileProperties> {
    static StreamConfiguration: typeof StreamConfiguration;
    constructor(properties: LaunchProfileProperties);
}
