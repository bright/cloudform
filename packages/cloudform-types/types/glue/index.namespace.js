"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const dataCatalogEncryptionSettings_1 = require("./dataCatalogEncryptionSettings");
const job_1 = require("./job");
const database_1 = require("./database");
const devEndpoint_1 = require("./devEndpoint");
const crawler_1 = require("./crawler");
const classifier_1 = require("./classifier");
const table_1 = require("./table");
const connection_1 = require("./connection");
const partition_1 = require("./partition");
const trigger_1 = require("./trigger");
const securityConfiguration_1 = require("./securityConfiguration");
var Glue;
(function (Glue) {
    Glue.DataCatalogEncryptionSettings = dataCatalogEncryptionSettings_1.default;
    Glue.Job = job_1.default;
    Glue.Database = database_1.default;
    Glue.DevEndpoint = devEndpoint_1.default;
    Glue.Crawler = crawler_1.default;
    Glue.Classifier = classifier_1.default;
    Glue.Table = table_1.default;
    Glue.Connection = connection_1.default;
    Glue.Partition = partition_1.default;
    Glue.Trigger = trigger_1.default;
    Glue.SecurityConfiguration = securityConfiguration_1.default;
})(Glue = exports.Glue || (exports.Glue = {}));
