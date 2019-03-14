import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Targets {
    Values?: List<Value<string>>;
    Key: Value<string>;
    constructor(properties: Targets);
}
export interface MaintenanceWindowTargetProperties {
    OwnerInformation?: Value<string>;
    Description?: Value<string>;
    WindowId: Value<string>;
    ResourceType: Value<string>;
    Targets: List<Targets>;
    Name?: Value<string>;
}
export default class MaintenanceWindowTarget extends ResourceBase<MaintenanceWindowTargetProperties> {
    static Targets: typeof Targets;
    constructor(properties: MaintenanceWindowTargetProperties);
}
