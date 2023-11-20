"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Port = exports.Networking = exports.MonthlyTransfer = exports.Location = exports.Hardware = exports.Disk = exports.AutoSnapshotAddOn = exports.AddOn = void 0;
const resource_1 = require("../resource");
class AddOn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AddOn = AddOn;
class AutoSnapshotAddOn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AutoSnapshotAddOn = AutoSnapshotAddOn;
class Disk {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Disk = Disk;
class Hardware {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Hardware = Hardware;
class Location {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Location = Location;
class MonthlyTransfer {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonthlyTransfer = MonthlyTransfer;
class Networking {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Networking = Networking;
class Port {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Port = Port;
class State {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.State = State;
class Instance extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Lightsail::Instance', properties);
    }
}
exports.default = Instance;
Instance.AddOn = AddOn;
Instance.AutoSnapshotAddOn = AutoSnapshotAddOn;
Instance.Disk = Disk;
Instance.Hardware = Hardware;
Instance.Location = Location;
Instance.MonthlyTransfer = MonthlyTransfer;
Instance.Networking = Networking;
Instance.Port = Port;
Instance.State = State;
