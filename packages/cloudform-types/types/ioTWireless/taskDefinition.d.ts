import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoRaWANGatewayVersion {
    Station?: Value<string>;
    Model?: Value<string>;
    PackageVersion?: Value<string>;
    constructor(properties: LoRaWANGatewayVersion);
}
export declare class LoRaWANUpdateGatewayTaskCreate {
    UpdateSignature?: Value<string>;
    SigKeyCrc?: Value<number>;
    UpdateVersion?: LoRaWANGatewayVersion;
    CurrentVersion?: LoRaWANGatewayVersion;
    constructor(properties: LoRaWANUpdateGatewayTaskCreate);
}
export declare class LoRaWANUpdateGatewayTaskEntry {
    UpdateVersion?: LoRaWANGatewayVersion;
    CurrentVersion?: LoRaWANGatewayVersion;
    constructor(properties: LoRaWANUpdateGatewayTaskEntry);
}
export declare class UpdateWirelessGatewayTaskCreate {
    LoRaWAN?: LoRaWANUpdateGatewayTaskCreate;
    UpdateDataSource?: Value<string>;
    UpdateDataRole?: Value<string>;
    constructor(properties: UpdateWirelessGatewayTaskCreate);
}
export interface TaskDefinitionProperties {
    AutoCreateTasks: Value<boolean>;
    LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntry;
    Update?: UpdateWirelessGatewayTaskCreate;
    TaskDefinitionType?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class TaskDefinition extends ResourceBase<TaskDefinitionProperties> {
    static LoRaWANGatewayVersion: typeof LoRaWANGatewayVersion;
    static LoRaWANUpdateGatewayTaskCreate: typeof LoRaWANUpdateGatewayTaskCreate;
    static LoRaWANUpdateGatewayTaskEntry: typeof LoRaWANUpdateGatewayTaskEntry;
    static UpdateWirelessGatewayTaskCreate: typeof UpdateWirelessGatewayTaskCreate;
    constructor(properties: TaskDefinitionProperties);
}
