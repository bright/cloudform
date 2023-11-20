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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AddOn {
    Status?: Value<string>
    AddOnType!: Value<string>
    AutoSnapshotAddOnRequest?: AutoSnapshotAddOn

    constructor(properties: AddOn) {
        Object.assign(this, properties)
    }
}

export class AutoSnapshotAddOn {
    SnapshotTimeOfDay?: Value<string>

    constructor(properties: AutoSnapshotAddOn) {
        Object.assign(this, properties)
    }
}

export class Location {
    RegionName?: Value<string>
    AvailabilityZone?: Value<string>

    constructor(properties: Location) {
        Object.assign(this, properties)
    }
}

export interface DiskProperties {
    SizeInGb: Value<number>
    AvailabilityZone?: Value<string>
    AddOns?: List<AddOn>
    DiskName: Value<string>
    Tags?: List<ResourceTag>
    Location?: Location
}

export default class Disk extends ResourceBase<DiskProperties> {
    static AddOn = AddOn
    static AutoSnapshotAddOn = AutoSnapshotAddOn
    static Location = Location

    constructor(properties: DiskProperties) {
        super('AWS::Lightsail::Disk', properties)
    }
}
