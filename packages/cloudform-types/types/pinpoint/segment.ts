/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AttributeDimension {
    AttributeType?: Value<string>

    constructor(properties: AttributeDimension) {
        Object.assign(this, properties)
    }
}

export class Recency {
    Duration!: Value<string>
    RecencyType!: Value<string>

    constructor(properties: Recency) {
        Object.assign(this, properties)
    }
}

export class Groups {
    Type?: Value<string>
    SourceType?: Value<string>

    constructor(properties: Groups) {
        Object.assign(this, properties)
    }
}

export class Location {


    constructor(properties: Location) {
        Object.assign(this, properties)
    }
}

export class SegmentGroups {
    Include?: Value<string>

    constructor(properties: SegmentGroups) {
        Object.assign(this, properties)
    }
}

export class Coordinates {
    Latitude!: Value<number>
    Longitude!: Value<number>

    constructor(properties: Coordinates) {
        Object.assign(this, properties)
    }
}

export class SegmentDimensions {
    Metrics?: {[key: string]: any}
    Attributes?: {[key: string]: any}
    UserAttributes?: {[key: string]: any}

    constructor(properties: SegmentDimensions) {
        Object.assign(this, properties)
    }
}

export class SourceSegments {
    Version?: Value<number>
    Id!: Value<string>

    constructor(properties: SourceSegments) {
        Object.assign(this, properties)
    }
}

export class GPSPoint {
    RangeInKilometers!: Value<number>

    constructor(properties: GPSPoint) {
        Object.assign(this, properties)
    }
}

export class Demographic {


    constructor(properties: Demographic) {
        Object.assign(this, properties)
    }
}

export class SetDimension {
    DimensionType?: Value<string>

    constructor(properties: SetDimension) {
        Object.assign(this, properties)
    }
}

export class Behavior {


    constructor(properties: Behavior) {
        Object.assign(this, properties)
    }
}

export interface SegmentProperties {
    ApplicationId: Value<string>
    Tags?: {[key: string]: any}
    Name: Value<string>
}

export default class Segment extends ResourceBase<SegmentProperties> {
    static AttributeDimension = AttributeDimension
    static Recency = Recency
    static Groups = Groups
    static Location = Location
    static SegmentGroups = SegmentGroups
    static Coordinates = Coordinates
    static SegmentDimensions = SegmentDimensions
    static SourceSegments = SourceSegments
    static GPSPoint = GPSPoint
    static Demographic = Demographic
    static SetDimension = SetDimension
    static Behavior = Behavior

    constructor(properties: SegmentProperties) {
        super('AWS::Pinpoint::Segment', properties)
    }
}
