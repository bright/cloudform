import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SmsTemplateProperties {
    TemplateName: Value<string>;
    TemplateDescription?: Value<string>;
    DefaultSubstitutions?: Value<string>;
    Body: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class SmsTemplate extends ResourceBase<SmsTemplateProperties> {
    constructor(properties: SmsTemplateProperties);
}
