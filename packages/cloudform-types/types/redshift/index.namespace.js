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
exports.Redshift = void 0;
const cluster_1 = require("./cluster");
const clusterParameterGroup_1 = require("./clusterParameterGroup");
const clusterSecurityGroup_1 = require("./clusterSecurityGroup");
const clusterSecurityGroupIngress_1 = require("./clusterSecurityGroupIngress");
const clusterSubnetGroup_1 = require("./clusterSubnetGroup");
const endpointAccess_1 = require("./endpointAccess");
const endpointAuthorization_1 = require("./endpointAuthorization");
const eventSubscription_1 = require("./eventSubscription");
const scheduledAction_1 = require("./scheduledAction");
var Redshift;
(function (Redshift) {
    Redshift.Cluster = cluster_1.default;
    Redshift.ClusterParameterGroup = clusterParameterGroup_1.default;
    Redshift.ClusterSecurityGroup = clusterSecurityGroup_1.default;
    Redshift.ClusterSecurityGroupIngress = clusterSecurityGroupIngress_1.default;
    Redshift.ClusterSubnetGroup = clusterSubnetGroup_1.default;
    Redshift.EndpointAccess = endpointAccess_1.default;
    Redshift.EndpointAuthorization = endpointAuthorization_1.default;
    Redshift.EventSubscription = eventSubscription_1.default;
    Redshift.ScheduledAction = scheduledAction_1.default;
})(Redshift = exports.Redshift || (exports.Redshift = {}));
