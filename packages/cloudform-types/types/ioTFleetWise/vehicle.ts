/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface VehicleProperties {
    AssociationBehavior?: Value<string>
    Attributes?: {[key: string]: Value<string>}
    DecoderManifestArn: Value<string>
    ModelManifestArn: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Vehicle extends ResourceBase<VehicleProperties> {


    constructor(properties: VehicleProperties) {
        super('AWS::IoTFleetWise::Vehicle', properties)
    }
}
