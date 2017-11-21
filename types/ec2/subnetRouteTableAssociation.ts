import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SubnetRouteTableAssociationProperties {
    RouteTableId: Value<string>
    SubnetId: Value<string>
}

export default class SubnetRouteTableAssociation extends ResourceBase {
    constructor(properties: SubnetRouteTableAssociationProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SubnetRouteTableAssociation', properties, dependsOn)
    }
}