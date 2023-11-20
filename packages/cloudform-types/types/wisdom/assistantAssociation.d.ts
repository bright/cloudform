import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssociationData {
    KnowledgeBaseId: Value<string>;
    constructor(properties: AssociationData);
}
export interface AssistantAssociationProperties {
    Association: AssociationData;
    AssociationType: Value<string>;
    AssistantId: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class AssistantAssociation extends ResourceBase<AssistantAssociationProperties> {
    static AssociationData: typeof AssociationData;
    constructor(properties: AssistantAssociationProperties);
}
