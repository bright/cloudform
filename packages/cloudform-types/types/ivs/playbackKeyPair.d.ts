import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PlaybackKeyPairProperties {
    PublicKeyMaterial?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class PlaybackKeyPair extends ResourceBase<PlaybackKeyPairProperties> {
    constructor(properties?: PlaybackKeyPairProperties);
}
