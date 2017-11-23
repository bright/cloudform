/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface TrunkInterfaceAssociationProperties {
    BranchInterfaceId: Value<string>
    GREKey?: Value<number>
    TrunkInterfaceId: Value<string>
    VLANId?: Value<number>
}

export default class TrunkInterfaceAssociation extends ResourceBase {
    constructor(properties: TrunkInterfaceAssociationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::TrunkInterfaceAssociation', properties, dependsOn)
    }
}
