/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class InputSourceRequest {
    Username?: Value<string>
    PasswordParam?: Value<string>
    Url?: Value<string>

    constructor(properties: InputSourceRequest) {
        Object.assign(this, properties)
    }
}

export class InputDeviceRequest {
    Id?: Value<string>

    constructor(properties: InputDeviceRequest) {
        Object.assign(this, properties)
    }
}

export class InputDeviceSettings {
    Id?: Value<string>

    constructor(properties: InputDeviceSettings) {
        Object.assign(this, properties)
    }
}

export class InputVpcRequest {
    SecurityGroupIds?: List<Value<string>>
    SubnetIds?: List<Value<string>>

    constructor(properties: InputVpcRequest) {
        Object.assign(this, properties)
    }
}

export class InputDestinationRequest {
    StreamName?: Value<string>

    constructor(properties: InputDestinationRequest) {
        Object.assign(this, properties)
    }
}

export class MediaConnectFlowRequest {
    FlowArn?: Value<string>

    constructor(properties: MediaConnectFlowRequest) {
        Object.assign(this, properties)
    }
}

export interface InputProperties {
    Type?: Value<string>
    Destinations?: List<InputDestinationRequest>
    Vpc?: InputVpcRequest
    MediaConnectFlows?: List<MediaConnectFlowRequest>
    InputSecurityGroups?: List<Value<string>>
    InputDevices?: List<InputDeviceSettings>
    Sources?: List<InputSourceRequest>
    RoleArn?: Value<string>
    Tags?: {[key: string]: any}
    Name?: Value<string>
}

export default class Input extends ResourceBase<InputProperties> {
    static InputSourceRequest = InputSourceRequest
    static InputDeviceRequest = InputDeviceRequest
    static InputDeviceSettings = InputDeviceSettings
    static InputVpcRequest = InputVpcRequest
    static InputDestinationRequest = InputDestinationRequest
    static MediaConnectFlowRequest = MediaConnectFlowRequest

    constructor(properties?: InputProperties) {
        super('AWS::MediaLive::Input', properties || {})
    }
}
