/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 6.3.0
 */

import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Attribute {
    JsonPath?: Value<string>

    constructor(properties: Attribute) {
        Object.assign(this, properties)
    }
}

export class InputDefinition {
    Attributes?: List<Attribute>

    constructor(properties: InputDefinition) {
        Object.assign(this, properties)
    }
}

export interface InputProperties {
    InputDefinition?: InputDefinition
    InputName?: Value<string>
    InputDescription?: Value<string>
    Tags?: List<ResourceTag>
}

export default class Input extends ResourceBase<InputProperties> {
    static Attribute = Attribute
    static InputDefinition = InputDefinition

    constructor(properties?: InputProperties) {
        super('AWS::IoTEvents::Input', properties || {})
    }
}
