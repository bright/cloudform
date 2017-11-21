import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Status = "Active" | "Inactive";
export interface AccessKeyProperties {
    Serial?: Value<string>;
    Status: Value<Status>;
    UserName: Value<string>;
}
export default class AccessKey extends ResourceBase {
    constructor(properties: AccessKeyProperties, dependsOn?: Value<string>);
}
