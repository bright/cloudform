import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NotificationSetting {
    Channel?: Value<string>;
    Enabled: Value<boolean>;
    Event: Value<string>;
    Threshold?: Value<number>;
    constructor(properties: NotificationSetting);
}
export declare class Source {
    SourceType?: Value<string>;
    SourceData?: SourceData;
    constructor(properties: Source);
}
export declare class SourceData {
    AcmPcaArn?: Value<string>;
    X509CertificateData?: Value<string>;
    constructor(properties: SourceData);
}
export interface TrustAnchorProperties {
    NotificationSettings?: List<NotificationSetting>;
    Enabled?: Value<boolean>;
    Source: Source;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class TrustAnchor extends ResourceBase<TrustAnchorProperties> {
    static NotificationSetting: typeof NotificationSetting;
    static Source: typeof Source;
    static SourceData: typeof SourceData;
    constructor(properties: TrustAnchorProperties);
}
