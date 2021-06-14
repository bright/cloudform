/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Metadata {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: Metadata) {
        Object.assign(this, properties)
    }
}

export class EventFilter {
    Source!: Value<string>

    constructor(properties: EventFilter) {
        Object.assign(this, properties)
    }
}

export class EventIntegrationAssociation {
    ClientAssociationMetadata?: List<Metadata>
    ClientId?: Value<string>
    EventBridgeRuleName?: Value<string>
    EventIntegrationAssociationArn?: Value<string>
    EventIntegrationAssociationId?: Value<string>

    constructor(properties: EventIntegrationAssociation) {
        Object.assign(this, properties)
    }
}

export interface EventIntegrationProperties {
    Description?: Value<string>
    Name: Value<string>
    EventBridgeBus: Value<string>
    EventFilter: EventFilter
    Tags?: List<ResourceTag>
}

export default class EventIntegration extends ResourceBase<EventIntegrationProperties> {
    static Metadata = Metadata
    static EventFilter = EventFilter
    static EventIntegrationAssociation = EventIntegrationAssociation

    constructor(properties: EventIntegrationProperties) {
        super('AWS::AppIntegrations::EventIntegration', properties)
    }
}
