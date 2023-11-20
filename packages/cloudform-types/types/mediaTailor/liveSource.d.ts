import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HttpPackageConfiguration {
    Path: Value<string>;
    Type: Value<string>;
    SourceGroup: Value<string>;
    constructor(properties: HttpPackageConfiguration);
}
export interface LiveSourceProperties {
    LiveSourceName: Value<string>;
    SourceLocationName: Value<string>;
    HttpPackageConfigurations: List<HttpPackageConfiguration>;
    Tags?: List<ResourceTag>;
}
export default class LiveSource extends ResourceBase<LiveSourceProperties> {
    static HttpPackageConfiguration: typeof HttpPackageConfiguration;
    constructor(properties: LiveSourceProperties);
}
