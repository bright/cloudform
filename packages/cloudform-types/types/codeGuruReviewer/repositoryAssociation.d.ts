import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RepositoryAssociationProperties {
    Type: Value<string>;
    Owner?: Value<string>;
    BucketName?: Value<string>;
    ConnectionArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class RepositoryAssociation extends ResourceBase<RepositoryAssociationProperties> {
    constructor(properties: RepositoryAssociationProperties);
}
