import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HealthCheckTag {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: HealthCheckTag);
}
export interface HealthCheckProperties {
    HealthCheckConfig: {
        [key: string]: any;
    };
    HealthCheckTags?: List<HealthCheckTag>;
}
export default class HealthCheck extends ResourceBase<HealthCheckProperties> {
    static HealthCheckTag: typeof HealthCheckTag;
    constructor(properties: HealthCheckProperties);
}
