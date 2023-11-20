import IPSet_ from './ipSet';
import LoggingConfiguration_ from './loggingConfiguration';
import RegexPatternSet_ from './regexPatternSet';
import RuleGroup_ from './ruleGroup';
import WebACL_ from './webAcl';
import WebACLAssociation_ from './webAclAssociation';
export declare namespace WAFv2 {
    const IPSet: typeof IPSet_;
    const LoggingConfiguration: typeof LoggingConfiguration_;
    const RegexPatternSet: typeof RegexPatternSet_;
    const RuleGroup: typeof RuleGroup_;
    const WebACL: typeof WebACL_;
    const WebACLAssociation: typeof WebACLAssociation_;
    type IPSet = IPSet_;
    type LoggingConfiguration = LoggingConfiguration_;
    type RegexPatternSet = RegexPatternSet_;
    type RuleGroup = RuleGroup_;
    type WebACL = WebACL_;
    type WebACLAssociation = WebACLAssociation_;
}
