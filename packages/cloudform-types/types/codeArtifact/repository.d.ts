import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RepositoryProperties {
    RepositoryName: Value<string>;
    DomainName: Value<string>;
    DomainOwner?: Value<string>;
    Description?: Value<string>;
    ExternalConnections?: List<Value<string>>;
    Upstreams?: List<Value<string>>;
    PermissionsPolicyDocument?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    constructor(properties: RepositoryProperties);
}
