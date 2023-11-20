import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DefaultViewAssociationProperties {
    ViewArn: Value<string>;
}
export default class DefaultViewAssociation extends ResourceBase<DefaultViewAssociationProperties> {
    constructor(properties: DefaultViewAssociationProperties);
}
