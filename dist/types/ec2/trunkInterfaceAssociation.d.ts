import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface TrunkInterfaceAssociationProperties {
    BranchInterfaceId: Value<string>;
    GREKey?: Value<number>;
    TrunkInterfaceId: Value<string>;
    VLANId?: Value<number>;
}
export default class TrunkInterfaceAssociation extends ResourceBase {
    constructor(properties: TrunkInterfaceAssociationProperties, dependsOn?: Value<string>);
}
