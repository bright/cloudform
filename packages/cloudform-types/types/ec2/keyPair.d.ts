import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface KeyPairProperties {
    KeyName: Value<string>;
    KeyType?: Value<string>;
    KeyFormat?: Value<string>;
    PublicKeyMaterial?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class KeyPair extends ResourceBase<KeyPairProperties> {
    constructor(properties: KeyPairProperties);
}
