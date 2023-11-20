import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RoleAliasProperties {
    RoleAlias?: Value<string>;
    CredentialDurationSeconds?: Value<number>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class RoleAlias extends ResourceBase<RoleAliasProperties> {
    constructor(properties: RoleAliasProperties);
}
