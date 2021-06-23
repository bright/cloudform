import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Metadata {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: Metadata);
}
export declare class EventFilter {
    Source: Value<string>;
    constructor(properties: EventFilter);
}
export declare class EventIntegrationAssociation {
    ClientAssociationMetadata?: List<Metadata>;
    ClientId?: Value<string>;
    EventBridgeRuleName?: Value<string>;
    EventIntegrationAssociationArn?: Value<string>;
    EventIntegrationAssociationId?: Value<string>;
    constructor(properties: EventIntegrationAssociation);
}
export interface EventIntegrationProperties {
    Description?: Value<string>;
    Name: Value<string>;
    EventBridgeBus: Value<string>;
    EventFilter: EventFilter;
    Tags?: List<ResourceTag>;
}
export default class EventIntegration extends ResourceBase<EventIntegrationProperties> {
    static Metadata: typeof Metadata;
    static EventFilter: typeof EventFilter;
    static EventIntegrationAssociation: typeof EventIntegrationAssociation;
    constructor(properties: EventIntegrationProperties);
}
