import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type StreamingStatus = "ENABLED" | "DISABLED";
export interface CognitoStreamsProperties {
    RoleArn?: Value<string>;
    StreamingStatus?: Value<StreamingStatus>;
    StreamName?: Value<string>;
}
export default class CognitoStreams extends ResourceBase {
    constructor(properties: CognitoStreamsProperties, dependsOn?: Value<string>);
}
