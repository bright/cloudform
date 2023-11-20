import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LedgerProperties {
    PermissionsMode: Value<string>;
    DeletionProtection?: Value<boolean>;
    KmsKey?: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Ledger extends ResourceBase<LedgerProperties> {
    constructor(properties: LedgerProperties);
}
