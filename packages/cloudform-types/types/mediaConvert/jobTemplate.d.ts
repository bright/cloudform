import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HopDestination {
    WaitMinutes?: Value<number>;
    Priority?: Value<number>;
    Queue?: Value<string>;
    constructor(properties: HopDestination);
}
export declare class AccelerationSettings {
    Mode: Value<string>;
    constructor(properties: AccelerationSettings);
}
export interface JobTemplateProperties {
    Category?: Value<string>;
    Description?: Value<string>;
    AccelerationSettings?: AccelerationSettings;
    Priority?: Value<number>;
    StatusUpdateInterval?: Value<string>;
    SettingsJson: {
        [key: string]: any;
    };
    Queue?: Value<string>;
    HopDestinations?: List<HopDestination>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class JobTemplate extends ResourceBase<JobTemplateProperties> {
    static HopDestination: typeof HopDestination;
    static AccelerationSettings: typeof AccelerationSettings;
    constructor(properties: JobTemplateProperties);
}
