import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CRLProperties {
    TrustAnchorArn?: Value<string>;
    Enabled?: Value<boolean>;
    CrlData: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class CRL extends ResourceBase<CRLProperties> {
    constructor(properties: CRLProperties);
}
