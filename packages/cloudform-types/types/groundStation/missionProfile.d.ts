import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataflowEdge {
    Source?: Value<string>;
    Destination?: Value<string>;
    constructor(properties: DataflowEdge);
}
export interface MissionProfileProperties {
    Name: Value<string>;
    ContactPrePassDurationSeconds?: Value<number>;
    ContactPostPassDurationSeconds?: Value<number>;
    MinimumViableContactDurationSeconds: Value<number>;
    DataflowEdges: List<DataflowEdge>;
    TrackingConfigArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class MissionProfile extends ResourceBase<MissionProfileProperties> {
    static DataflowEdge: typeof DataflowEdge;
    constructor(properties: MissionProfileProperties);
}
