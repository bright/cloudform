import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class UpdateWirelessGatewayTaskCreate {
    UpdateDataSource?: Value<string>;
    UpdateDataRole?: Value<string>;
    LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
    constructor(properties: UpdateWirelessGatewayTaskCreate);
}
export declare class LoRaWANUpdateGatewayTaskEntry {
    CurrentVersion?: LoRaWANGatewayVersion;
    UpdateVersion?: LoRaWANGatewayVersion;
    constructor(properties: LoRaWANUpdateGatewayTaskEntry);
}
export declare class LoRaWANGatewayVersion {
    PackageVersion?: Value<string>;
    Model?: Value<string>;
    Station?: Value<string>;
    constructor(properties: LoRaWANGatewayVersion);
}
export declare class LoRaWANUpdateGatewayTaskCreate {
    UpdateSignature?: Value<string>;
    SigKeyCrc?: Value<number>;
    CurrentVersion?: LoRaWANGatewayVersion;
    UpdateVersion?: LoRaWANGatewayVersion;
    constructor(properties: LoRaWANUpdateGatewayTaskCreate);
}
export interface TaskDefinitionProperties {
    Name?: Value<string>;
    AutoCreateTasks: Value<boolean>;
    Update?: UpdateWirelessGatewayTaskCreate;
    LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntry;
    TaskDefinitionType?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static UpdateWirelessGatewayTaskCreate: typeof UpdateWirelessGatewayTaskCreate;
    static LoRaWANUpdateGatewayTaskEntry: typeof LoRaWANUpdateGatewayTaskEntry;
    static LoRaWANGatewayVersion: typeof LoRaWANGatewayVersion;
    static LoRaWANUpdateGatewayTaskCreate: typeof LoRaWANUpdateGatewayTaskCreate;
    constructor(properties: TaskDefinitionProperties);
}
