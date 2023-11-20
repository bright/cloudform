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
exports.DataSync = void 0;
const agent_1 = require("./agent");
const locationAzureBlob_1 = require("./locationAzureBlob");
const locationEfs_1 = require("./locationEfs");
const locationFSxLustre_1 = require("./locationFSxLustre");
const locationFSxOntap_1 = require("./locationFSxOntap");
const locationFSxOpenZfs_1 = require("./locationFSxOpenZfs");
const locationFSxWindows_1 = require("./locationFSxWindows");
const locationHdfs_1 = require("./locationHdfs");
const locationNfs_1 = require("./locationNfs");
const locationObjectStorage_1 = require("./locationObjectStorage");
const locationS3_1 = require("./locationS3");
const locationSmb_1 = require("./locationSmb");
const storageSystem_1 = require("./storageSystem");
const task_1 = require("./task");
var DataSync;
(function (DataSync) {
    DataSync.Agent = agent_1.default;
    DataSync.LocationAzureBlob = locationAzureBlob_1.default;
    DataSync.LocationEFS = locationEfs_1.default;
    DataSync.LocationFSxLustre = locationFSxLustre_1.default;
    DataSync.LocationFSxONTAP = locationFSxOntap_1.default;
    DataSync.LocationFSxOpenZFS = locationFSxOpenZfs_1.default;
    DataSync.LocationFSxWindows = locationFSxWindows_1.default;
    DataSync.LocationHDFS = locationHdfs_1.default;
    DataSync.LocationNFS = locationNfs_1.default;
    DataSync.LocationObjectStorage = locationObjectStorage_1.default;
    DataSync.LocationS3 = locationS3_1.default;
    DataSync.LocationSMB = locationSmb_1.default;
    DataSync.StorageSystem = storageSystem_1.default;
    DataSync.Task = task_1.default;
})(DataSync = exports.DataSync || (exports.DataSync = {}));
