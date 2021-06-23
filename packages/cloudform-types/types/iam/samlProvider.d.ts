import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SAMLProviderProperties {
    Name?: Value<string>;
    SamlMetadataDocument: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class SAMLProvider extends ResourceBase<SAMLProviderProperties> {
    constructor(properties: SAMLProviderProperties);
}
