/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NodeConfiguration {
    AvailabilityZone!: Value<string>
    InstanceType!: Value<string>

    constructor(properties: NodeConfiguration) {
        Object.assign(this, properties)
    }
}

export interface NodeProperties {
    MemberId: Value<string>
    NetworkId: Value<string>
    NodeConfiguration: NodeConfiguration
}

export default class Node extends ResourceBase<NodeProperties> {
    static NodeConfiguration = NodeConfiguration

    constructor(properties: NodeProperties) {
        super('AWS::ManagedBlockchain::Node', properties)
    }
}
