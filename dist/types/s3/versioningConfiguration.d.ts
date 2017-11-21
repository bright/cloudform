import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Status = "Enabled" | "Suspended";
export interface VersioningConfigurationProperties {
    Status: Value<Status>;
}
export default class VersioningConfiguration extends ResourceBase {
    constructor(properties: VersioningConfigurationProperties, dependsOn?: Value<string>);
}
