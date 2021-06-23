import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AttributeGroupAssociationProperties {
    Application: Value<string>;
    AttributeGroup: Value<string>;
}
export default class AttributeGroupAssociation extends ResourceBase<AttributeGroupAssociationProperties> {
    constructor(properties: AttributeGroupAssociationProperties);
}
