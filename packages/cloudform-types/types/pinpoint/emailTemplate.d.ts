import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EmailTemplateProperties {
    HtmlPart?: Value<string>;
    TextPart?: Value<string>;
    TemplateName: Value<string>;
    TemplateDescription?: Value<string>;
    DefaultSubstitutions?: Value<string>;
    Subject: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class EmailTemplate extends ResourceBase<EmailTemplateProperties> {
    constructor(properties: EmailTemplateProperties);
}
