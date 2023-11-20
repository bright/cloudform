/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface FleetProperties {
    Description?: Value<string>
    Id: Value<string>
    SignalCatalogArn: Value<string>
    Tags?: List<ResourceTag>
}

export default class Fleet extends ResourceBase<FleetProperties> {


    constructor(properties: FleetProperties) {
        super('AWS::IoTFleetWise::Fleet', properties)
    }
}
