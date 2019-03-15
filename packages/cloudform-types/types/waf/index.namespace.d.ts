import IPSet_ from './ipSet';
import SizeConstraintSet_ from './sizeConstraintSet';
import Rule_ from './rule';
import ByteMatchSet_ from './byteMatchSet';
import SqlInjectionMatchSet_ from './sqlInjectionMatchSet';
import WebACL_ from './webAcl';
import XssMatchSet_ from './xssMatchSet';
export declare namespace WAF {
    const IPSet: typeof IPSet_;
    const SizeConstraintSet: typeof SizeConstraintSet_;
    const Rule: typeof Rule_;
    const ByteMatchSet: typeof ByteMatchSet_;
    const SqlInjectionMatchSet: typeof SqlInjectionMatchSet_;
    const WebACL: typeof WebACL_;
    const XssMatchSet: typeof XssMatchSet_;
    type IPSet = IPSet_;
    type SizeConstraintSet = SizeConstraintSet_;
    type Rule = Rule_;
    type ByteMatchSet = ByteMatchSet_;
    type SqlInjectionMatchSet = SqlInjectionMatchSet_;
    type WebACL = WebACL_;
    type XssMatchSet = XssMatchSet_;
}
