import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PlaybackKeyPairProperties {
    Name?: Value<string>;
    PublicKeyMaterial: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class PlaybackKeyPair extends ResourceBase<PlaybackKeyPairProperties> {
    constructor(properties: PlaybackKeyPairProperties);
}
