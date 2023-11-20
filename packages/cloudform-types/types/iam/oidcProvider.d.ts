import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface OIDCProviderProperties {
    ClientIdList?: List<Value<string>>;
    ThumbprintList: List<Value<string>>;
    Url?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class OIDCProvider extends ResourceBase<OIDCProviderProperties> {
    constructor(properties: OIDCProviderProperties);
}
