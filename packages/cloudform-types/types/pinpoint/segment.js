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
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceSegments = exports.SetDimension = exports.SegmentGroups = exports.SegmentDimensions = exports.Recency = exports.Location = exports.Groups = exports.GPSPoint = exports.Demographic = exports.Coordinates = exports.Behavior = exports.AttributeDimension = void 0;
const resource_1 = require("../resource");
class AttributeDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDimension = AttributeDimension;
class Behavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Behavior = Behavior;
class Coordinates {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Coordinates = Coordinates;
class Demographic {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Demographic = Demographic;
class GPSPoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GPSPoint = GPSPoint;
class Groups {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Groups = Groups;
class Location {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Location = Location;
class Recency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Recency = Recency;
class SegmentDimensions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SegmentDimensions = SegmentDimensions;
class SegmentGroups {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SegmentGroups = SegmentGroups;
class SetDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetDimension = SetDimension;
class SourceSegments {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceSegments = SourceSegments;
class Segment extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pinpoint::Segment', properties);
    }
}
exports.default = Segment;
Segment.AttributeDimension = AttributeDimension;
Segment.Behavior = Behavior;
Segment.Coordinates = Coordinates;
Segment.Demographic = Demographic;
Segment.GPSPoint = GPSPoint;
Segment.Groups = Groups;
Segment.Location = Location;
Segment.Recency = Recency;
Segment.SegmentDimensions = SegmentDimensions;
Segment.SegmentGroups = SegmentGroups;
Segment.SetDimension = SetDimension;
Segment.SourceSegments = SourceSegments;
