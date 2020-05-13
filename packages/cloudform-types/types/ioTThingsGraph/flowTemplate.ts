/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DefinitionDocument {
    Language!: Value<string>
    Text!: Value<string>

    constructor(properties: DefinitionDocument) {
        Object.assign(this, properties)
    }
}

export interface FlowTemplateProperties {
    CompatibleNamespaceVersion?: Value<number>
    Definition: DefinitionDocument
}

export default class FlowTemplate extends ResourceBase<FlowTemplateProperties> {
    static DefinitionDocument = DefinitionDocument

    constructor(properties: FlowTemplateProperties) {
        super('AWS::IoTThingsGraph::FlowTemplate', properties)
    }
}
