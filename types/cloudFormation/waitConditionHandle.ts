/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface WaitConditionHandleProperties {

}

export default class WaitConditionHandle extends ResourceBase {
    constructor(properties: WaitConditionHandleProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFormation::WaitConditionHandle', properties, dependsOn)
    }
}