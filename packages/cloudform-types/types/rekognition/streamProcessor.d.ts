import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BoundingBox {
    Left: Value<number>;
    Top: Value<number>;
    Height: Value<number>;
    Width: Value<number>;
    constructor(properties: BoundingBox);
}
export declare class ConnectedHomeSettings {
    MinConfidence?: Value<number>;
    Labels: List<Value<string>>;
    constructor(properties: ConnectedHomeSettings);
}
export declare class DataSharingPreference {
    OptIn: Value<boolean>;
    constructor(properties: DataSharingPreference);
}
export declare class FaceSearchSettings {
    CollectionId: Value<string>;
    FaceMatchThreshold?: Value<number>;
    constructor(properties: FaceSearchSettings);
}
export declare class KinesisDataStream {
    Arn: Value<string>;
    constructor(properties: KinesisDataStream);
}
export declare class KinesisVideoStream {
    Arn: Value<string>;
    constructor(properties: KinesisVideoStream);
}
export declare class NotificationChannel {
    Arn: Value<string>;
    constructor(properties: NotificationChannel);
}
export declare class S3Destination {
    BucketName: Value<string>;
    ObjectKeyPrefix?: Value<string>;
    constructor(properties: S3Destination);
}
export interface StreamProcessorProperties {
    S3Destination?: S3Destination;
    DataSharingPreference?: DataSharingPreference;
    KmsKeyId?: Value<string>;
    FaceSearchSettings?: FaceSearchSettings;
    PolygonRegionsOfInterest?: {
        [key: string]: any;
    };
    RoleArn: Value<string>;
    Name?: Value<string>;
    ConnectedHomeSettings?: ConnectedHomeSettings;
    NotificationChannel?: NotificationChannel;
    KinesisVideoStream: KinesisVideoStream;
    BoundingBoxRegionsOfInterest?: List<BoundingBox>;
    KinesisDataStream?: KinesisDataStream;
    Tags?: List<ResourceTag>;
}
export default class StreamProcessor extends ResourceBase<StreamProcessorProperties> {
    static BoundingBox: typeof BoundingBox;
    static ConnectedHomeSettings: typeof ConnectedHomeSettings;
    static DataSharingPreference: typeof DataSharingPreference;
    static FaceSearchSettings: typeof FaceSearchSettings;
    static KinesisDataStream: typeof KinesisDataStream;
    static KinesisVideoStream: typeof KinesisVideoStream;
    static NotificationChannel: typeof NotificationChannel;
    static S3Destination: typeof S3Destination;
    constructor(properties: StreamProcessorProperties);
}
