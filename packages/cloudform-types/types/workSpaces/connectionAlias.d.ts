import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectionAliasAssociation {
    AssociationStatus?: Value<string>;
    AssociatedAccountId?: Value<string>;
    ResourceId?: Value<string>;
    ConnectionIdentifier?: Value<string>;
    constructor(properties: ConnectionAliasAssociation);
}
export interface ConnectionAliasProperties {
    ConnectionString: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ConnectionAlias extends ResourceBase<ConnectionAliasProperties> {
    static ConnectionAliasAssociation: typeof ConnectionAliasAssociation;
    constructor(properties: ConnectionAliasProperties);
}
