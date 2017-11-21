import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ViewerCertificateProperties {
    AcmCertificateArn?: Value<string>;
    CloudFrontDefaultCertificate?: Value<boolean>;
    IamCertificateId?: Value<string>;
    MinimumProtocolVersion?: Value<string>;
    SslSupportMethod?: Value<string>;
}
export default class ViewerCertificate extends ResourceBase {
    constructor(properties: ViewerCertificateProperties, dependsOn?: Value<string>);
}
