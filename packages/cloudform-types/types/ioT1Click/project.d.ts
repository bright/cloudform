import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DeviceTemplate {
    DeviceType?: Value<string>;
    CallbackOverrides?: {
        [key: string]: any;
    };
    constructor(properties: DeviceTemplate);
}
export declare class PlacementTemplate {
    DeviceTemplates?: {
        [key: string]: any;
    };
    DefaultAttributes?: {
        [key: string]: any;
    };
    constructor(properties: PlacementTemplate);
}
export interface ProjectProperties {
    Description?: Value<string>;
    PlacementTemplate: PlacementTemplate;
    ProjectName?: Value<string>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static DeviceTemplate: typeof DeviceTemplate;
    static PlacementTemplate: typeof PlacementTemplate;
    constructor(properties: ProjectProperties);
}
