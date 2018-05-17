/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 2.2.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface WebACLAssociationProperties {
    ResourceArn: Value<string>
    WebACLId: Value<string>
}

export default class WebACLAssociation extends ResourceBase {


    constructor(properties?: WebACLAssociationProperties) {
        super('AWS::WAFRegional::WebACLAssociation', properties)
    }
}
