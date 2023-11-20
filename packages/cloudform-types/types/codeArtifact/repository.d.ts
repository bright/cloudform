import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RepositoryProperties {
    Description?: Value<string>;
    PermissionsPolicyDocument?: {
        [key: string]: any;
    };
    DomainName: Value<string>;
    Upstreams?: List<Value<string>>;
    RepositoryName: Value<string>;
    ExternalConnections?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    DomainOwner?: Value<string>;
}
export default class Repository extends ResourceBase<RepositoryProperties> {
    constructor(properties: RepositoryProperties);
}
