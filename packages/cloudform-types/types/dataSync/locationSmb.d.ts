import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MountOptions {
    Version?: Value<string>;
    constructor(properties: MountOptions);
}
export interface LocationSMBProperties {
    AgentArns: List<Value<string>>;
    Domain?: Value<string>;
    MountOptions?: MountOptions;
    Password: Value<string>;
    ServerHostname: Value<string>;
    Subdirectory: Value<string>;
    User: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocationSMB extends ResourceBase<LocationSMBProperties> {
    static MountOptions: typeof MountOptions;
    constructor(properties: LocationSMBProperties);
}
