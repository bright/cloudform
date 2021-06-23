import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class OnPremConfig {
    AgentArns: List<Value<string>>;
    constructor(properties: OnPremConfig);
}
export declare class MountOptions {
    Version?: Value<string>;
    constructor(properties: MountOptions);
}
export interface LocationNFSProperties {
    MountOptions?: MountOptions;
    OnPremConfig: OnPremConfig;
    ServerHostname: Value<string>;
    Subdirectory: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocationNFS extends ResourceBase<LocationNFSProperties> {
    static OnPremConfig: typeof OnPremConfig;
    static MountOptions: typeof MountOptions;
    constructor(properties: LocationNFSProperties);
}
