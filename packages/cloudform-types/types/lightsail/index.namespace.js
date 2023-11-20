"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lightsail = void 0;
const alarm_1 = require("./alarm");
const bucket_1 = require("./bucket");
const certificate_1 = require("./certificate");
const container_1 = require("./container");
const database_1 = require("./database");
const disk_1 = require("./disk");
const instance_1 = require("./instance");
const loadBalancer_1 = require("./loadBalancer");
const loadBalancerTlsCertificate_1 = require("./loadBalancerTlsCertificate");
const staticIp_1 = require("./staticIp");
const distribution_1 = require("./distribution");
var Lightsail;
(function (Lightsail) {
    Lightsail.Alarm = alarm_1.default;
    Lightsail.Bucket = bucket_1.default;
    Lightsail.Certificate = certificate_1.default;
    Lightsail.Container = container_1.default;
    Lightsail.Database = database_1.default;
    Lightsail.Disk = disk_1.default;
    Lightsail.Instance = instance_1.default;
    Lightsail.LoadBalancer = loadBalancer_1.default;
    Lightsail.LoadBalancerTlsCertificate = loadBalancerTlsCertificate_1.default;
    Lightsail.StaticIp = staticIp_1.default;
    Lightsail.Distribution = distribution_1.default;
})(Lightsail = exports.Lightsail || (exports.Lightsail = {}));
