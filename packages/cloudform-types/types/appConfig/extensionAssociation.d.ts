import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ExtensionAssociationProperties {
    ResourceIdentifier?: Value<string>;
    Parameters?: {
        [key: string]: Value<string>;
    };
    ExtensionIdentifier?: Value<string>;
    ExtensionVersionNumber?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class ExtensionAssociation extends ResourceBase<ExtensionAssociationProperties> {
    constructor(properties?: ExtensionAssociationProperties);
}
