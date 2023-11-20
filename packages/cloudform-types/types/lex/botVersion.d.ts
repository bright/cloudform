import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BotVersionLocaleDetails {
    SourceBotVersion: Value<string>;
    constructor(properties: BotVersionLocaleDetails);
}
export declare class BotVersionLocaleSpecification {
    LocaleId: Value<string>;
    BotVersionLocaleDetails: BotVersionLocaleDetails;
    constructor(properties: BotVersionLocaleSpecification);
}
export interface BotVersionProperties {
    Description?: Value<string>;
    BotId: Value<string>;
    BotVersionLocaleSpecification: List<BotVersionLocaleSpecification>;
}
export default class BotVersion extends ResourceBase<BotVersionProperties> {
    static BotVersionLocaleDetails: typeof BotVersionLocaleDetails;
    static BotVersionLocaleSpecification: typeof BotVersionLocaleSpecification;
    constructor(properties: BotVersionProperties);
}
