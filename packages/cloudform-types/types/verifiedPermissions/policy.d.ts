import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class EntityIdentifier {
    EntityType: Value<string>;
    EntityId: Value<string>;
    constructor(properties: EntityIdentifier);
}
export declare class PolicyDefinition {
    Static?: StaticPolicyDefinition;
    TemplateLinked?: TemplateLinkedPolicyDefinition;
    constructor(properties: PolicyDefinition);
}
export declare class StaticPolicyDefinition {
    Description?: Value<string>;
    Statement: Value<string>;
    constructor(properties: StaticPolicyDefinition);
}
export declare class TemplateLinkedPolicyDefinition {
    Resource?: EntityIdentifier;
    PolicyTemplateId: Value<string>;
    Principal?: EntityIdentifier;
    constructor(properties: TemplateLinkedPolicyDefinition);
}
export interface PolicyProperties {
    Definition: PolicyDefinition;
    PolicyStoreId?: Value<string>;
}
export default class Policy extends ResourceBase<PolicyProperties> {
    static EntityIdentifier: typeof EntityIdentifier;
    static PolicyDefinition: typeof PolicyDefinition;
    static StaticPolicyDefinition: typeof StaticPolicyDefinition;
    static TemplateLinkedPolicyDefinition: typeof TemplateLinkedPolicyDefinition;
    constructor(properties: PolicyProperties);
}
