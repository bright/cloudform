import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Sidewalk {
    Role?: Value<string>;
    SidewalkManufacturingSn?: Value<string>;
    DeviceCreationFile?: Value<string>;
    DeviceCreationFileList?: List<Value<string>>;
    constructor(properties: Sidewalk);
}
export interface WirelessDeviceImportTaskProperties {
    DestinationName: Value<string>;
    Sidewalk: Sidewalk;
    Tags?: List<ResourceTag>;
}
export default class WirelessDeviceImportTask extends ResourceBase<WirelessDeviceImportTaskProperties> {
    static Sidewalk: typeof Sidewalk;
    constructor(properties: WirelessDeviceImportTaskProperties);
}
