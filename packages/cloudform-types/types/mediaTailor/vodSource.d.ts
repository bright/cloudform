import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HttpPackageConfiguration {
    Path: Value<string>;
    Type: Value<string>;
    SourceGroup: Value<string>;
    constructor(properties: HttpPackageConfiguration);
}
export interface VodSourceProperties {
    VodSourceName: Value<string>;
    SourceLocationName: Value<string>;
    HttpPackageConfigurations: List<HttpPackageConfiguration>;
    Tags?: List<ResourceTag>;
}
export default class VodSource extends ResourceBase<VodSourceProperties> {
    static HttpPackageConfiguration: typeof HttpPackageConfiguration;
    constructor(properties: VodSourceProperties);
}
