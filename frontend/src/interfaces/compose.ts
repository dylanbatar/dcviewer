export interface ICompose {
  name: string;
  description?: string;
  image?: string;
  createAt: string;
  updateAt: string;
}

export interface IComposeDetails extends ICompose {
  Version: string;
  Services: { [key: string]: ServiceConfig };
  Volumes: { [key: string]: VolumeConfig };
  Networks: { [key: string]: NetworkConfig };
}

export interface ServiceConfig {
  Image: string;
  Build: string;
  Ports: string[];
  Expose: string[];
  Environment: string[];
  EnvFile: string[];
  Volumes: string[];
  Networks: string[];
  DependsOn: string[];
  Links: string[];
  Restart: string;
  ContainerName: string;
  Command: string;
  EntryPoint: string;
  Logging: string;
  StdinOpen: boolean;
  Tty: boolean;
  Labels: { [key: string]: string };
  CapAdd: string[];
  CapDrop: string[];
  DNS: string[];
  DNSSearch: string[];
  ExtraHosts: string[];
  Hostname: string;
  Domainname: string;
  IPC: string;
  Privileged: boolean;
  ReadOnly: boolean;
  ShmSize: string;
  SecurityOpt: string[];
  Tmpfs: string[];
  Ulimits: string[];
  User: string;
  WorkingDir: string;
  Healthcheck: string;
  CgroupParent: string;
  Isolation: string;
  StopGracePeriod: string;
  Sysctls: string[];
  Secrets: string[];
  Deploy: string;
}

interface VolumeConfig {
  Driver: string;
  DriverOpts: { [key: string]: string };
  External: boolean;
  Name: string;
  Labels: { [key: string]: string };
  Args: string[];
}

interface NetworkConfig {
  Driver: string;
  DriverOpts: { [key: string]: string };
  EnableIPv6: boolean;
  IPAM: IPAMConfig;
  Internal: boolean;
  External: boolean;
  Name: string;
  Labels: { [key: string]: string };
  Attachable: boolean;
  Ingress: boolean;
  IPv6: boolean;
  IPv6Address: string;
  IPv6PrefixLength: number;
}

interface IPAMConfig {
  Driver: string;
  Config: IPAMSubnet[];
}

interface IPAMSubnet {
  Subnet: string;
  Gateway: string;
}
