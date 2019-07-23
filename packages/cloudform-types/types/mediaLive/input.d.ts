import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InputVpcRequest {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: InputVpcRequest);
}
export declare class InputSourceRequest {
    Username?: Value<string>;
    PasswordParam?: Value<string>;
    Url?: Value<string>;
    constructor(properties: InputSourceRequest);
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
    Sources?: List<InputSourceRequest>;
    RoleArn?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Input extends ResourceBase<InputProperties> {
    static InputVpcRequest: typeof InputVpcRequest;
    static InputSourceRequest: typeof InputSourceRequest;
    static InputDestinationRequest: typeof InputDestinationRequest;
    static MediaConnectFlowRequest: typeof MediaConnectFlowRequest;
    constructor(properties?: InputProperties);
}
