import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StreamEncryption {
    EncryptionType: Value<string>;
    KeyId: Value<string>;
    constructor(properties: StreamEncryption);
}
export declare class StreamModeDetails {
    StreamMode: Value<string>;
    constructor(properties: StreamModeDetails);
}
export interface StreamProperties {
    StreamModeDetails?: StreamModeDetails;
    StreamEncryption?: StreamEncryption;
    RetentionPeriodHours?: Value<number>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    ShardCount?: Value<number>;
}
export default class Stream extends ResourceBase<StreamProperties> {
    static StreamEncryption: typeof StreamEncryption;
    static StreamModeDetails: typeof StreamModeDetails;
    constructor(properties?: StreamProperties);
}
