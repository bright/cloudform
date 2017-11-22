import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ConfigSnapshotDeliveryPropertiesProperties {
    DeliveryFrequency?: Value<string>;
}
export declare class ConfigSnapshotDeliveryProperties extends ResourceBase {
    constructor(properties: ConfigSnapshotDeliveryPropertiesProperties, dependsOn?: Value<string>);
}
export interface DeliveryChannelProperties {
    ConfigSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
    Name?: Value<string>;
    S3BucketName: Value<string>;
    S3KeyPrefix?: Value<string>;
    SnsTopicARN?: Value<string>;
}
export default class DeliveryChannel extends ResourceBase {
    constructor(properties: DeliveryChannelProperties, dependsOn?: Value<string>);
}
