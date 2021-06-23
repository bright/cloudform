"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ClientConnectOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientConnectOptions = ClientConnectOptions;
class DirectoryServiceAuthenticationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DirectoryServiceAuthenticationRequest = DirectoryServiceAuthenticationRequest;
class TagSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TagSpecification = TagSpecification;
class ClientAuthenticationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClientAuthenticationRequest = ClientAuthenticationRequest;
class FederatedAuthenticationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FederatedAuthenticationRequest = FederatedAuthenticationRequest;
class ConnectionLogOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectionLogOptions = ConnectionLogOptions;
class CertificateAuthenticationRequest {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CertificateAuthenticationRequest = CertificateAuthenticationRequest;
class ClientVpnEndpoint extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::EC2::ClientVpnEndpoint', properties);
    }
}
exports.default = ClientVpnEndpoint;
ClientVpnEndpoint.ClientConnectOptions = ClientConnectOptions;
ClientVpnEndpoint.DirectoryServiceAuthenticationRequest = DirectoryServiceAuthenticationRequest;
ClientVpnEndpoint.TagSpecification = TagSpecification;
ClientVpnEndpoint.ClientAuthenticationRequest = ClientAuthenticationRequest;
ClientVpnEndpoint.FederatedAuthenticationRequest = FederatedAuthenticationRequest;
ClientVpnEndpoint.ConnectionLogOptions = ConnectionLogOptions;
ClientVpnEndpoint.CertificateAuthenticationRequest = CertificateAuthenticationRequest;
