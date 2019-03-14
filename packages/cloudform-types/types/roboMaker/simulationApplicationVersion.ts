/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface SimulationApplicationVersionProperties {
    CurrentRevisionId?: Value<string>
    Application: Value<string>
}

export default class SimulationApplicationVersion extends ResourceBase<SimulationApplicationVersionProperties> {


    constructor(properties: SimulationApplicationVersionProperties) {
        super('AWS::RoboMaker::SimulationApplicationVersion', properties)
    }
}
