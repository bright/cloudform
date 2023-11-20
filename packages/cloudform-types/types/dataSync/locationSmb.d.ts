import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MountOptions {
    Version?: Value<string>;
    constructor(properties: MountOptions);
}
export interface LocationSMBProperties {
    User: Value<string>;
    Subdirectory?: Value<string>;
    ServerHostname?: Value<string>;
    Domain?: Value<string>;
    MountOptions?: MountOptions;
    AgentArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Password?: Value<string>;
}
export default class LocationSMB extends ResourceBase<LocationSMBProperties> {
    static MountOptions: typeof MountOptions;
    constructor(properties: LocationSMBProperties);
}
