import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessConfiguration {
    SecretsManagerAccessTokenConfiguration?: SecretsManagerAccessTokenConfiguration;
    AccessType?: Value<string>;
    constructor(properties: AccessConfiguration);
}
export declare class DefaultSegmentDeliveryConfiguration {
    BaseUrl?: Value<string>;
    constructor(properties: DefaultSegmentDeliveryConfiguration);
}
export declare class HttpConfiguration {
    BaseUrl: Value<string>;
    constructor(properties: HttpConfiguration);
}
export declare class SecretsManagerAccessTokenConfiguration {
    SecretArn?: Value<string>;
    HeaderName?: Value<string>;
    SecretStringKey?: Value<string>;
    constructor(properties: SecretsManagerAccessTokenConfiguration);
}
export declare class SegmentDeliveryConfiguration {
    BaseUrl?: Value<string>;
    Name?: Value<string>;
    constructor(properties: SegmentDeliveryConfiguration);
}
export interface SourceLocationProperties {
    SourceLocationName: Value<string>;
    DefaultSegmentDeliveryConfiguration?: DefaultSegmentDeliveryConfiguration;
    SegmentDeliveryConfigurations?: List<SegmentDeliveryConfiguration>;
    HttpConfiguration: HttpConfiguration;
    AccessConfiguration?: AccessConfiguration;
    Tags?: List<ResourceTag>;
}
export default class SourceLocation extends ResourceBase<SourceLocationProperties> {
    static AccessConfiguration: typeof AccessConfiguration;
    static DefaultSegmentDeliveryConfiguration: typeof DefaultSegmentDeliveryConfiguration;
    static HttpConfiguration: typeof HttpConfiguration;
    static SecretsManagerAccessTokenConfiguration: typeof SecretsManagerAccessTokenConfiguration;
    static SegmentDeliveryConfiguration: typeof SegmentDeliveryConfiguration;
    constructor(properties: SourceLocationProperties);
}
