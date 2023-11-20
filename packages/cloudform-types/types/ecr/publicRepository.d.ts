import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class RepositoryCatalogData {
    AboutText?: Value<string>;
    OperatingSystems?: List<Value<string>>;
    UsageText?: Value<string>;
    RepositoryDescription?: Value<string>;
    Architectures?: List<Value<string>>;
    constructor(properties: RepositoryCatalogData);
}
export interface PublicRepositoryProperties {
    RepositoryPolicyText?: {
        [key: string]: any;
    };
    RepositoryName?: Value<string>;
    RepositoryCatalogData?: RepositoryCatalogData;
    Tags?: List<ResourceTag>;
}
export default class PublicRepository extends ResourceBase<PublicRepositoryProperties> {
    static RepositoryCatalogData: typeof RepositoryCatalogData;
    constructor(properties?: PublicRepositoryProperties);
}
