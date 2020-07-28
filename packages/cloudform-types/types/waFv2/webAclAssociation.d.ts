import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface WebACLAssociationProperties {
    ResourceArn: Value<string>;
    WebACLArn: Value<string>;
}
export default class WebACLAssociation extends ResourceBase<WebACLAssociationProperties> {
    constructor(properties: WebACLAssociationProperties);
}
