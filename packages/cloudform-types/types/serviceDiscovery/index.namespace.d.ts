import HttpNamespace_ from './httpNamespace';
import Instance_ from './instance';
import PrivateDnsNamespace_ from './privateDnsNamespace';
import PublicDnsNamespace_ from './publicDnsNamespace';
import Service_ from './service';
export declare namespace ServiceDiscovery {
    const HttpNamespace: typeof HttpNamespace_;
    const Instance: typeof Instance_;
    const PrivateDnsNamespace: typeof PrivateDnsNamespace_;
    const PublicDnsNamespace: typeof PublicDnsNamespace_;
    const Service: typeof Service_;
    type HttpNamespace = HttpNamespace_;
    type Instance = Instance_;
    type PrivateDnsNamespace = PrivateDnsNamespace_;
    type PublicDnsNamespace = PublicDnsNamespace_;
    type Service = Service_;
}
