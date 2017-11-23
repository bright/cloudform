/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface DocumentProperties {
    Content: any
    DocumentType?: Value<string>
}

export default class Document extends ResourceBase {
    constructor(properties: DocumentProperties) {
        super('AWS::SSM::Document', properties)
    }
}
