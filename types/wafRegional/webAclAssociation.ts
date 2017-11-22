/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface WebACLAssociationProperties {
    ResourceArn: Value<string>
    WebACLId: Value<string>
}

export default class WebACLAssociation extends ResourceBase {
    constructor(properties: WebACLAssociationProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::WebACLAssociation', properties, dependsOn)
    }
}