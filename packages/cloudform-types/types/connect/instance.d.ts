import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Attributes {
    InboundCalls: Value<boolean>;
    UseCustomTTSVoices?: Value<boolean>;
    OutboundCalls: Value<boolean>;
    EarlyMedia?: Value<boolean>;
    ContactflowLogs?: Value<boolean>;
    ContactLens?: Value<boolean>;
    AutoResolveBestVoices?: Value<boolean>;
    constructor(properties: Attributes);
}
export interface InstanceProperties {
    DirectoryId?: Value<string>;
    IdentityManagementType: Value<string>;
    InstanceAlias?: Value<string>;
    Attributes: Attributes;
}
export default class Instance extends ResourceBase<InstanceProperties> {
    static Attributes: typeof Attributes;
    constructor(properties: InstanceProperties);
}
