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
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CoverageTime {
    EndTime!: Value<string>
    StartTime!: Value<string>

    constructor(properties: CoverageTime) {
        Object.assign(this, properties)
    }
}

export class MonthlySetting {
    DayOfMonth!: Value<number>
    HandOffTime!: Value<string>

    constructor(properties: MonthlySetting) {
        Object.assign(this, properties)
    }
}

export class RecurrenceSettings {
    DailySettings?: List<Value<string>>
    NumberOfOnCalls!: Value<number>
    ShiftCoverages?: List<ShiftCoverage>
    WeeklySettings?: List<WeeklySetting>
    RecurrenceMultiplier!: Value<number>
    MonthlySettings?: List<MonthlySetting>

    constructor(properties: RecurrenceSettings) {
        Object.assign(this, properties)
    }
}

export class ShiftCoverage {
    DayOfWeek!: Value<string>
    CoverageTimes!: List<CoverageTime>

    constructor(properties: ShiftCoverage) {
        Object.assign(this, properties)
    }
}

export class WeeklySetting {
    DayOfWeek!: Value<string>
    HandOffTime!: Value<string>

    constructor(properties: WeeklySetting) {
        Object.assign(this, properties)
    }
}

export interface RotationProperties {
    Recurrence: RecurrenceSettings
    TimeZoneId: Value<string>
    StartTime: Value<string>
    Tags?: List<ResourceTag>
    Name: Value<string>
    ContactIds: List<Value<string>>
}

export default class Rotation extends ResourceBase<RotationProperties> {
    static CoverageTime = CoverageTime
    static MonthlySetting = MonthlySetting
    static RecurrenceSettings = RecurrenceSettings
    static ShiftCoverage = ShiftCoverage
    static WeeklySetting = WeeklySetting

    constructor(properties: RotationProperties) {
        super('AWS::SSMContacts::Rotation', properties)
    }
}
