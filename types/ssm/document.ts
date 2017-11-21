import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type DocumentType = "*" | "Command" | "Policy" | "Automation"

export interface DocumentProperties {
    Content: any
    DocumentType?: Value<DocumentType>
}

export default class Document extends ResourceBase {
    constructor(properties: DocumentProperties, dependsOn?: Value<string>) {
        super('AWS::SSM::Document', properties, dependsOn)
    }
}