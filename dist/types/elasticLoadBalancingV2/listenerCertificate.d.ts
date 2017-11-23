import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface CertificateProperties {
    CertificateArn?: Value<string>;
}
export declare class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ListenerCertificateProperties {
    Certificates: List<Certificate>;
    ListenerArn: Value<string>;
}
export default class ListenerCertificate extends ResourceBase {
    constructor(properties: ListenerCertificateProperties, dependsOn?: Value<string> | Value<string>[]);
}
