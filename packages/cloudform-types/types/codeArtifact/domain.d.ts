import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DomainProperties {
    DomainName: Value<string>;
    EncryptionKey?: Value<string>;
    PermissionsPolicyDocument?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    constructor(properties: DomainProperties);
}
