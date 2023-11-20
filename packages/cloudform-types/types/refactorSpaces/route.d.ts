import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DefaultRouteInput {
    ActivationState: Value<string>;
    constructor(properties: DefaultRouteInput);
}
export declare class UriPathRouteInput {
    SourcePath?: Value<string>;
    AppendSourcePath?: Value<boolean>;
    ActivationState: Value<string>;
    Methods?: List<Value<string>>;
    IncludeChildPaths?: Value<boolean>;
    constructor(properties: UriPathRouteInput);
}
export interface RouteProperties {
    UriPathRoute?: UriPathRouteInput;
    EnvironmentIdentifier: Value<string>;
    RouteType: Value<string>;
    DefaultRoute?: DefaultRouteInput;
    ServiceIdentifier: Value<string>;
    ApplicationIdentifier: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Route extends ResourceBase<RouteProperties> {
    static DefaultRouteInput: typeof DefaultRouteInput;
    static UriPathRouteInput: typeof UriPathRouteInput;
    constructor(properties: RouteProperties);
}
