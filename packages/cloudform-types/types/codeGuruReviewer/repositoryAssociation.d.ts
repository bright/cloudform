import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RepositoryAssociationProperties {
    Name: Value<string>;
    Type: Value<string>;
    Owner?: Value<string>;
    BucketName?: Value<string>;
    ConnectionArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class RepositoryAssociation extends ResourceBase<RepositoryAssociationProperties> {
    constructor(properties: RepositoryAssociationProperties);
}
