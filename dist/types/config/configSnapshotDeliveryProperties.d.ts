import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type DeliveryFrequency = "*" | "One_Hour" | "Three_Hours" | "Six_Hours" | "Twelve_Hours" | "TwentyFour_Hours";
export interface ConfigSnapshotDeliveryPropertiesProperties {
    DeliveryFrequency?: Value<DeliveryFrequency>;
}
export default class ConfigSnapshotDeliveryProperties extends ResourceBase {
    constructor(properties: ConfigSnapshotDeliveryPropertiesProperties, dependsOn?: Value<string>);
}
