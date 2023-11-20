import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ResourceSpecificLoggingProperties {
    TargetType: Value<string>;
    TargetName: Value<string>;
    LogLevel: Value<string>;
}
export default class ResourceSpecificLogging extends ResourceBase<ResourceSpecificLoggingProperties> {
    constructor(properties: ResourceSpecificLoggingProperties);
}
