import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LinkAssociationProperties {
    GlobalNetworkId: Value<string>;
    DeviceId: Value<string>;
    LinkId: Value<string>;
}
export default class LinkAssociation extends ResourceBase<LinkAssociationProperties> {
    constructor(properties: LinkAssociationProperties);
}
