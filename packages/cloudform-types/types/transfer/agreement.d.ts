import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AgreementProperties {
    Status?: Value<string>;
    Description?: Value<string>;
    ServerId: Value<string>;
    BaseDirectory: Value<string>;
    AccessRole: Value<string>;
    PartnerProfileId: Value<string>;
    LocalProfileId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Agreement extends ResourceBase<AgreementProperties> {
    constructor(properties: AgreementProperties);
}
