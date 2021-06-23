import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InputSourceRequest {
    Username?: Value<string>;
    PasswordParam?: Value<string>;
    Url?: Value<string>;
    constructor(properties: InputSourceRequest);
}
export declare class InputDeviceRequest {
    Id?: Value<string>;
    constructor(properties: InputDeviceRequest);
}
export declare class InputDeviceSettings {
    Id?: Value<string>;
    constructor(properties: InputDeviceSettings);
}
export declare class InputVpcRequest {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: InputVpcRequest);
}
export declare class InputDestinationRequest {
    StreamName?: Value<string>;
    constructor(properties: InputDestinationRequest);
}
export declare class MediaConnectFlowRequest {
    FlowArn?: Value<string>;
    constructor(properties: MediaConnectFlowRequest);
}
export interface InputProperties {
    Type?: Value<string>;
    Destinations?: List<InputDestinationRequest>;
    Vpc?: InputVpcRequest;
    MediaConnectFlows?: List<MediaConnectFlowRequest>;
    InputSecurityGroups?: List<Value<string>>;
    InputDevices?: List<InputDeviceSettings>;
    Sources?: List<InputSourceRequest>;
    RoleArn?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Input extends ResourceBase<InputProperties> {
    static InputSourceRequest: typeof InputSourceRequest;
    static InputDeviceRequest: typeof InputDeviceRequest;
    static InputDeviceSettings: typeof InputDeviceSettings;
    static InputVpcRequest: typeof InputVpcRequest;
    static InputDestinationRequest: typeof InputDestinationRequest;
    static MediaConnectFlowRequest: typeof MediaConnectFlowRequest;
    constructor(properties?: InputProperties);
}
