import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AttributeGroupAssociationProperties {
    AttributeGroup: Value<string>;
    Application: Value<string>;
}
export default class AttributeGroupAssociation extends ResourceBase<AttributeGroupAssociationProperties> {
    constructor(properties: AttributeGroupAssociationProperties);
}
