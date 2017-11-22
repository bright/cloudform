/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface PlacementGroupProperties {
    Strategy?: Value<string>
}

export default class PlacementGroup extends ResourceBase {
    constructor(properties: PlacementGroupProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::PlacementGroup', properties, dependsOn)
    }
}