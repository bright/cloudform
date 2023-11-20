import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class S3Location {
    BucketName: Value<string>;
    ObjectKey: Value<string>;
    constructor(properties: S3Location);
}
export interface SimulationProperties {
    SchemaS3Location?: S3Location;
    SnapshotS3Location?: S3Location;
    MaximumDuration?: Value<string>;
    RoleArn: Value<string>;
    Name: Value<string>;
}
export default class Simulation extends ResourceBase<SimulationProperties> {
    static S3Location: typeof S3Location;
    constructor(properties: SimulationProperties);
}
