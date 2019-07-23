import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DefinitionDocument {
    Language: Value<string>;
    Text: Value<string>;
    constructor(properties: DefinitionDocument);
}
export interface FlowTemplateProperties {
    CompatibleNamespaceVersion?: Value<number>;
    Definition: DefinitionDocument;
}
export default class FlowTemplate extends ResourceBase<FlowTemplateProperties> {
    static DefinitionDocument: typeof DefinitionDocument;
    constructor(properties: FlowTemplateProperties);
}
