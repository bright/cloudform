import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CoverageTime {
    EndTime: Value<string>;
    StartTime: Value<string>;
    constructor(properties: CoverageTime);
}
export declare class MonthlySetting {
    DayOfMonth: Value<number>;
    HandOffTime: Value<string>;
    constructor(properties: MonthlySetting);
}
export declare class RecurrenceSettings {
    DailySettings?: List<Value<string>>;
    NumberOfOnCalls: Value<number>;
    ShiftCoverages?: List<ShiftCoverage>;
    WeeklySettings?: List<WeeklySetting>;
    RecurrenceMultiplier: Value<number>;
    MonthlySettings?: List<MonthlySetting>;
    constructor(properties: RecurrenceSettings);
}
export declare class ShiftCoverage {
    DayOfWeek: Value<string>;
    CoverageTimes: List<CoverageTime>;
    constructor(properties: ShiftCoverage);
}
export declare class WeeklySetting {
    DayOfWeek: Value<string>;
    HandOffTime: Value<string>;
    constructor(properties: WeeklySetting);
}
export interface RotationProperties {
    Recurrence: RecurrenceSettings;
    TimeZoneId: Value<string>;
    StartTime: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    ContactIds: List<Value<string>>;
}
export default class Rotation extends ResourceBase<RotationProperties> {
    static CoverageTime: typeof CoverageTime;
    static MonthlySetting: typeof MonthlySetting;
    static RecurrenceSettings: typeof RecurrenceSettings;
    static ShiftCoverage: typeof ShiftCoverage;
    static WeeklySetting: typeof WeeklySetting;
    constructor(properties: RotationProperties);
}
