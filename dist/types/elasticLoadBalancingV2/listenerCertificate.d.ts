import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CertificateProperties {
    CertificateArn?: Value<string>;
}
export declare class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string>);
}
export interface ListenerCertificateProperties {
    Certificates: Certificate[];
    ListenerArn: Value<string>;
}
export default class ListenerCertificate extends ResourceBase {
    constructor(properties: ListenerCertificateProperties, dependsOn?: Value<string>);
}
