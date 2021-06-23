import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StudioSessionMappingProperties {
    IdentityName: Value<string>;
    IdentityType: Value<string>;
    SessionPolicyArn: Value<string>;
    StudioId: Value<string>;
}
export default class StudioSessionMapping extends ResourceBase<StudioSessionMappingProperties> {
    constructor(properties: StudioSessionMappingProperties);
}
