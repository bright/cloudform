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
exports.RDS = void 0;
const customDbEngineVersion_1 = require("./customDbEngineVersion");
const dbCluster_1 = require("./dbCluster");
const dbClusterParameterGroup_1 = require("./dbClusterParameterGroup");
const dbInstance_1 = require("./dbInstance");
const dbParameterGroup_1 = require("./dbParameterGroup");
const dbProxy_1 = require("./dbProxy");
const dbProxyEndpoint_1 = require("./dbProxyEndpoint");
const dbProxyTargetGroup_1 = require("./dbProxyTargetGroup");
const dbSecurityGroup_1 = require("./dbSecurityGroup");
const dbSecurityGroupIngress_1 = require("./dbSecurityGroupIngress");
const dbSubnetGroup_1 = require("./dbSubnetGroup");
const eventSubscription_1 = require("./eventSubscription");
const globalCluster_1 = require("./globalCluster");
const optionGroup_1 = require("./optionGroup");
var RDS;
(function (RDS) {
    RDS.CustomDBEngineVersion = customDbEngineVersion_1.default;
    RDS.DBCluster = dbCluster_1.default;
    RDS.DBClusterParameterGroup = dbClusterParameterGroup_1.default;
    RDS.DBInstance = dbInstance_1.default;
    RDS.DBParameterGroup = dbParameterGroup_1.default;
    RDS.DBProxy = dbProxy_1.default;
    RDS.DBProxyEndpoint = dbProxyEndpoint_1.default;
    RDS.DBProxyTargetGroup = dbProxyTargetGroup_1.default;
    RDS.DBSecurityGroup = dbSecurityGroup_1.default;
    RDS.DBSecurityGroupIngress = dbSecurityGroupIngress_1.default;
    RDS.DBSubnetGroup = dbSubnetGroup_1.default;
    RDS.EventSubscription = eventSubscription_1.default;
    RDS.GlobalCluster = globalCluster_1.default;
    RDS.OptionGroup = optionGroup_1.default;
})(RDS = exports.RDS || (exports.RDS = {}));
