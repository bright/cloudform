import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MountOptions {
    Version?: Value<string>;
    constructor(properties: MountOptions);
}
export declare class OnPremConfig {
    AgentArns: List<Value<string>>;
    constructor(properties: OnPremConfig);
}
export interface LocationNFSProperties {
    Subdirectory?: Value<string>;
    ServerHostname?: Value<string>;
    MountOptions?: MountOptions;
    OnPremConfig: OnPremConfig;
    Tags?: List<ResourceTag>;
}
export default class LocationNFS extends ResourceBase<LocationNFSProperties> {
    static MountOptions: typeof MountOptions;
    static OnPremConfig: typeof OnPremConfig;
    constructor(properties: LocationNFSProperties);
}
