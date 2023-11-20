import ByteMatchSet_ from './byteMatchSet';
import IPSet_ from './ipSet';
import Rule_ from './rule';
import SizeConstraintSet_ from './sizeConstraintSet';
import SqlInjectionMatchSet_ from './sqlInjectionMatchSet';
import WebACL_ from './webAcl';
import XssMatchSet_ from './xssMatchSet';
export declare namespace WAF {
    const ByteMatchSet: typeof ByteMatchSet_;
    const IPSet: typeof IPSet_;
    const Rule: typeof Rule_;
    const SizeConstraintSet: typeof SizeConstraintSet_;
    const SqlInjectionMatchSet: typeof SqlInjectionMatchSet_;
    const WebACL: typeof WebACL_;
    const XssMatchSet: typeof XssMatchSet_;
    type ByteMatchSet = ByteMatchSet_;
    type IPSet = IPSet_;
    type Rule = Rule_;
    type SizeConstraintSet = SizeConstraintSet_;
    type SqlInjectionMatchSet = SqlInjectionMatchSet_;
    type WebACL = WebACL_;
    type XssMatchSet = XssMatchSet_;
}
