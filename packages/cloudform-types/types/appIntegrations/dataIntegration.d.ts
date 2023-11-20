import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FileConfiguration {
    Filters?: {
        [key: string]: any;
    };
    Folders: List<Value<string>>;
    constructor(properties: FileConfiguration);
}
export declare class ScheduleConfig {
    FirstExecutionFrom?: Value<string>;
    ScheduleExpression: Value<string>;
    Object?: Value<string>;
    constructor(properties: ScheduleConfig);
}
export interface DataIntegrationProperties {
    ScheduleConfig?: ScheduleConfig;
    FileConfiguration?: FileConfiguration;
    Description?: Value<string>;
    SourceURI: Value<string>;
    ObjectConfiguration?: {
        [key: string]: any;
    };
    KmsKey: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class DataIntegration extends ResourceBase<DataIntegrationProperties> {
    static FileConfiguration: typeof FileConfiguration;
    static ScheduleConfig: typeof ScheduleConfig;
    constructor(properties: DataIntegrationProperties);
}
