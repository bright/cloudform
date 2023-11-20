import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class EdgeOutputConfig {
    KmsKeyId?: Value<string>;
    S3OutputLocation: Value<string>;
    constructor(properties: EdgeOutputConfig);
}
export interface DeviceFleetProperties {
    DeviceFleetName: Value<string>;
    Description?: Value<string>;
    OutputConfig: EdgeOutputConfig;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class DeviceFleet extends ResourceBase<DeviceFleetProperties> {
    static EdgeOutputConfig: typeof EdgeOutputConfig;
    constructor(properties: DeviceFleetProperties);
}
