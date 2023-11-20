import Firewall_ from './firewall';
import FirewallPolicy_ from './firewallPolicy';
import LoggingConfiguration_ from './loggingConfiguration';
import RuleGroup_ from './ruleGroup';
export declare namespace NetworkFirewall {
    const Firewall: typeof Firewall_;
    const FirewallPolicy: typeof FirewallPolicy_;
    const LoggingConfiguration: typeof LoggingConfiguration_;
    const RuleGroup: typeof RuleGroup_;
    type Firewall = Firewall_;
    type FirewallPolicy = FirewallPolicy_;
    type LoggingConfiguration = LoggingConfiguration_;
    type RuleGroup = RuleGroup_;
}
