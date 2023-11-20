import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PolicyTemplateProperties {
    Description?: Value<string>;
    Statement: Value<string>;
    PolicyStoreId?: Value<string>;
}
export default class PolicyTemplate extends ResourceBase<PolicyTemplateProperties> {
    constructor(properties: PolicyTemplateProperties);
}
