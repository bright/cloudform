import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface VoiceChannelProperties {
    Enabled?: Value<boolean>;
    ApplicationId: Value<string>;
}
export default class VoiceChannel extends ResourceBase<VoiceChannelProperties> {
    constructor(properties: VoiceChannelProperties);
}
