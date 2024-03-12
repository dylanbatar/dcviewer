package domain

type Compose struct {
	Version  string                   `yaml:"version"`
	Services map[string]ServiceConfig `yaml:"services"`
	Volumes  map[string]VolumeConfig  `yaml:"volumes"`
	Networks map[string]interface{}   `yaml:"networks"`
}

type ServiceConfig struct {
	Image           string            `yaml:"image,omitempty"`
	Build           string            `yaml:"build,omitempty"`
	Ports           []string          `yaml:"ports,omitempty"`
	Expose          []string          `yaml:"expose,omitempty"`
	Environment     []string          `yaml:"environment,omitempty"`
	EnvFile         []string          `yaml:"env_file,omitempty"`
	Volumes         []string          `yaml:"volumes,omitempty"`
	Networks        []string          `yaml:"networks,omitempty"`
	DependsOn       []string          `yaml:"depends_on,omitempty"`
	Links           []string          `yaml:"links,omitempty"`
	Restart         string            `yaml:"restart,omitempty"`
	ContainerName   string            `yaml:"container_name,omitempty"`
	Command         string            `yaml:"command,omitempty"`
	EntryPoint      string            `yaml:"entrypoint,omitempty"`
	Logging         string            `yaml:"logging,omitempty"`
	StdinOpen       bool              `yaml:"stdin_open,omitempty"`
	Tty             bool              `yaml:"tty,omitempty"`
	Labels          map[string]string `yaml:"labels,omitempty"`
	CapAdd          []string          `yaml:"cap_add,omitempty"`
	CapDrop         []string          `yaml:"cap_drop,omitempty"`
	DNS             []string          `yaml:"dns,omitempty"`
	DNSSearch       []string          `yaml:"dns_search,omitempty"`
	ExtraHosts      []string          `yaml:"extra_hosts,omitempty"`
	Hostname        string            `yaml:"hostname,omitempty"`
	Domainname      string            `yaml:"domainname,omitempty"`
	IPC             string            `yaml:"ipc,omitempty"`
	Privileged      bool              `yaml:"privileged,omitempty"`
	ReadOnly        bool              `yaml:"read_only,omitempty"`
	ShmSize         string            `yaml:"shm_size,omitempty"`
	SecurityOpt     []string          `yaml:"security_opt,omitempty"`
	Tmpfs           []string          `yaml:"tmpfs,omitempty"`
	Ulimits         []string          `yaml:"ulimits,omitempty"`
	User            string            `yaml:"user,omitempty"`
	WorkingDir      string            `yaml:"working_dir,omitempty"`
	Healthcheck     string            `yaml:"healthcheck,omitempty"`
	CgroupParent    string            `yaml:"cgroup_parent,omitempty"`
	Isolation       string            `yaml:"isolation,omitempty"`
	StopGracePeriod string            `yaml:"stop_grace_period,omitempty"`
	Sysctls         []string          `yaml:"sysctls,omitempty"`
	Secrets         []string          `yaml:"secrets,omitempty"`
	Deploy          string            `yaml:"deploy,omitempty"`
}

type VolumeConfig struct {
	Driver     string            `yaml:"driver,omitempty"`
	DriverOpts map[string]string `yaml:"driver_opts,omitempty"`
	External   bool              `yaml:"external,omitempty"`
	Name       string            `yaml:"name,omitempty"`
	Labels     map[string]string `yaml:"labels,omitempty"`
	Args       []string          `yaml:"args,omitempty"`
}

type NetworkConfig struct {
	Driver           string            `yaml:"driver,omitempty"`
	DriverOpts       map[string]string `yaml:"driver_opts,omitempty"`
	EnableIPv6       bool              `yaml:"enable_ipv6,omitempty"`
	IPAM             IPAMConfig        `yaml:"ipam,omitempty"`
	Internal         bool              `yaml:"internal,omitempty"`
	External         bool              `yaml:"external,omitempty"`
	Name             string            `yaml:"name,omitempty"`
	Labels           map[string]string `yaml:"labels,omitempty"`
	Attachable       bool              `yaml:"attachable,omitempty"`
	Ingress          bool              `yaml:"ingress,omitempty"`
	IPv6             bool              `yaml:"ipv6,omitempty"`
	IPv6Address      string            `yaml:"ipv6_address,omitempty"`
	IPv6PrefixLength int               `yaml:"ipv6_prefix_length,omitempty"`
}

type IPAMConfig struct {
	Driver string       `yaml:"driver,omitempty"`
	Config []IPAMSubnet `yaml:"config,omitempty"`
}

type IPAMSubnet struct {
	Subnet  string `yaml:"subnet,omitempty"`
	Gateway string `yaml:"gateway,omitempty"`
}
