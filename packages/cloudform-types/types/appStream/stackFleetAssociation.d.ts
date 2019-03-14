import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StackFleetAssociationProperties {
    FleetName: Value<string>;
    StackName: Value<string>;
}
export default class StackFleetAssociation extends ResourceBase<StackFleetAssociationProperties> {
    constructor(properties: StackFleetAssociationProperties);
}
