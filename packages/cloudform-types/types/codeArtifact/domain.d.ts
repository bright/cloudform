import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DomainProperties {
    PermissionsPolicyDocument?: {
        [key: string]: any;
    };
    DomainName: Value<string>;
    Tags?: List<ResourceTag>;
    EncryptionKey?: Value<string>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    constructor(properties: DomainProperties);
}
