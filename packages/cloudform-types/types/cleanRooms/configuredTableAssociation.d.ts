import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ConfiguredTableAssociationProperties {
    MembershipIdentifier: Value<string>;
    Description?: Value<string>;
    ConfiguredTableIdentifier: Value<string>;
    Tags?: List<ResourceTag>;
    RoleArn: Value<string>;
    Name: Value<string>;
}
export default class ConfiguredTableAssociation extends ResourceBase<ConfiguredTableAssociationProperties> {
    constructor(properties: ConfiguredTableAssociationProperties);
}
