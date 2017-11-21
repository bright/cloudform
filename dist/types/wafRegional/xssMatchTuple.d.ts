import { ResourceBase } from '../resource';
import { Value } from '../internal';
import FieldToMatch from './fieldToMatch';
export interface XssMatchTupleProperties {
    FieldToMatch: FieldToMatch;
    TextTransformation: Value<string>;
}
export default class XssMatchTuple extends ResourceBase {
    constructor(properties: XssMatchTupleProperties, dependsOn?: Value<string>);
}
