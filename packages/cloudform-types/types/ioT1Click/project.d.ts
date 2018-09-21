import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DeviceTemplate {
    DeviceType?: Value<string>;
    CallbackOverrides?: any;
    constructor(properties: DeviceTemplate);
}
export declare class PlacementTemplate {
    DeviceTemplates?: any;
    DefaultAttributes?: any;
    constructor(properties: PlacementTemplate);
}
export interface ProjectProperties {
    Description?: Value<string>;
    PlacementTemplate: PlacementTemplate;
    ProjectName: Value<string>;
}
export default class Project extends ResourceBase {
    static DeviceTemplate: typeof DeviceTemplate;
    static PlacementTemplate: typeof PlacementTemplate;
    constructor(properties?: ProjectProperties);
}
