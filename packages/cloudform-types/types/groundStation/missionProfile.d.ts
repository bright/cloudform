import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataflowEdge {
    Destination?: Value<string>;
    Source?: Value<string>;
    constructor(properties: DataflowEdge);
}
export declare class StreamsKmsKey {
    KmsKeyArn?: Value<string>;
    KmsAliasArn?: Value<string>;
    constructor(properties: StreamsKmsKey);
}
export interface MissionProfileProperties {
    StreamsKmsKey?: StreamsKmsKey;
    ContactPostPassDurationSeconds?: Value<number>;
    MinimumViableContactDurationSeconds: Value<number>;
    DataflowEdges: List<DataflowEdge>;
    StreamsKmsRole?: Value<string>;
    TrackingConfigArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    ContactPrePassDurationSeconds?: Value<number>;
}
export default class MissionProfile extends ResourceBase<MissionProfileProperties> {
    static DataflowEdge: typeof DataflowEdge;
    static StreamsKmsKey: typeof StreamsKmsKey;
    constructor(properties: MissionProfileProperties);
}
