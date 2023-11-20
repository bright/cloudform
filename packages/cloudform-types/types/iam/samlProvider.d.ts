import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SAMLProviderProperties {
    SamlMetadataDocument: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class SAMLProvider extends ResourceBase<SAMLProviderProperties> {
    constructor(properties: SAMLProviderProperties);
}
