import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Rule {
    Operator?: Value<string>;
    Attribute?: Value<string>;
    Value?: Value<string>;
    constructor(properties: Rule);
}
export interface DevicePoolProperties {
    ProjectArn: Value<string>;
    Description?: Value<string>;
    MaxDevices?: Value<number>;
    Rules: List<Rule>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class DevicePool extends ResourceBase<DevicePoolProperties> {
    static Rule: typeof Rule;
    constructor(properties: DevicePoolProperties);
}
