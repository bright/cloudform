"use strict";
/* Generated from:
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class AttributeDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDimension = AttributeDimension;
class Recency {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Recency = Recency;
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
class SegmentGroups {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SegmentGroups = SegmentGroups;
class Coordinates {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Coordinates = Coordinates;
class SegmentDimensions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SegmentDimensions = SegmentDimensions;
class SourceSegments {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SourceSegments = SourceSegments;
class GPSPoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GPSPoint = GPSPoint;
class Demographic {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Demographic = Demographic;
class SetDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SetDimension = SetDimension;
class Behavior {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Behavior = Behavior;
class Segment extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Pinpoint::Segment', properties);
    }
}
exports.default = Segment;
Segment.AttributeDimension = AttributeDimension;
Segment.Recency = Recency;
Segment.Groups = Groups;
Segment.Location = Location;
Segment.SegmentGroups = SegmentGroups;
Segment.Coordinates = Coordinates;
Segment.SegmentDimensions = SegmentDimensions;
Segment.SourceSegments = SourceSegments;
Segment.GPSPoint = GPSPoint;
Segment.Demographic = Demographic;
Segment.SetDimension = SetDimension;
Segment.Behavior = Behavior;
