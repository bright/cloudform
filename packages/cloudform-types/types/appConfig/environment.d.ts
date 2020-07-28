import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Monitors {
    AlarmArn?: Value<string>;
    AlarmRoleArn?: Value<string>;
    constructor(properties: Monitors);
}
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface EnvironmentProperties {
    Description?: Value<string>;
    Monitors?: List<Monitors>;
    ApplicationId: Value<string>;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    static Monitors: typeof Monitors;
    static Tags: typeof Tags;
    constructor(properties: EnvironmentProperties);
}
