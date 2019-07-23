import IPSet_ from './ipSet';
import SizeConstraintSet_ from './sizeConstraintSet';
import ByteMatchSet_ from './byteMatchSet';
import XssMatchSet_ from './xssMatchSet';
import Rule_ from './rule';
import SqlInjectionMatchSet_ from './sqlInjectionMatchSet';
import WebACL_ from './webAcl';
export declare namespace WAF {
    const IPSet: typeof IPSet_;
    const SizeConstraintSet: typeof SizeConstraintSet_;
    const ByteMatchSet: typeof ByteMatchSet_;
    const XssMatchSet: typeof XssMatchSet_;
    const Rule: typeof Rule_;
    const SqlInjectionMatchSet: typeof SqlInjectionMatchSet_;
    const WebACL: typeof WebACL_;
    type IPSet = IPSet_;
    type SizeConstraintSet = SizeConstraintSet_;
    type ByteMatchSet = ByteMatchSet_;
    type XssMatchSet = XssMatchSet_;
    type Rule = Rule_;
    type SqlInjectionMatchSet = SqlInjectionMatchSet_;
    type WebACL = WebACL_;
}
