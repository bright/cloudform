/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'



export interface StackProperties {
    NotificationARNs?: Value<string>[]
    Parameters?: {[key: string]: Value<string>}
    Tags?: ResourceTag[]
    TemplateURL: Value<string>
    TimeoutInMinutes?: Value<number>
}

export default class Stack extends ResourceBase {
    constructor(properties: StackProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFormation::Stack', properties, dependsOn)
    }
}