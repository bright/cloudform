import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PublicRepositoryProperties {
    RepositoryName?: Value<string>;
    RepositoryPolicyText?: {
        [key: string]: any;
    };
    RepositoryCatalogData?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class PublicRepository extends ResourceBase<PublicRepositoryProperties> {
    constructor(properties?: PublicRepositoryProperties);
}
