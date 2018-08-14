(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(t,e,s){t.exports=s.p+"assets/img/daemon_configuration_example.a99a5bde.png"},153:function(t,e,s){"use strict";s.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#supported-systems"}},[t._v("Supported Systems")])]),s("li",[s("a",{attrs:{href:"#system-requirements"}},[t._v("System Requirements")])]),s("li",[s("a",{attrs:{href:"#dependencies"}},[t._v("Dependencies")]),s("ul",[s("li",[s("a",{attrs:{href:"#installing-docker"}},[t._v("Installing Docker")])]),s("li",[s("a",{attrs:{href:"#installing-nodejs"}},[t._v("Installing Nodejs")])])])]),s("li",[s("a",{attrs:{href:"#installing-daemon-software"}},[t._v("Installing Daemon Software")])]),s("li",[s("a",{attrs:{href:"#configure-daemon"}},[t._v("Configure Daemon")])]),s("li",[s("a",{attrs:{href:"#starting-the-daemon"}},[t._v("Starting the Daemon")]),s("ul",[s("li",[s("a",{attrs:{href:"#daemonizing-using-systemd"}},[t._v("Daemonizing (using systemd)")])]),s("li",[s("a",{attrs:{href:"#daemonizing-using-forever"}},[t._v("Daemonizing (using Forever)")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-systems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-systems","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Systems")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Operating System")]),this._v(" "),e("th",[this._v("Version")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Supported")]),this._v(" "),e("th",[this._v("Notes")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("strong",[this._v("Ubuntu")])]),this._v(" "),e("td",[this._v("14.04")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("⚠️")]),this._v(" "),e("td",[this._v("Approaching EOL, not recommended for new installations.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td",[this._v("16.04")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("✅")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td",[this._v("18.04")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("✅")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("strong",[this._v("CentOS")])]),this._v(" "),e("td",[this._v("6")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("🚫")]),this._v(" "),e("td",[this._v("Does not support all of the required packages.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td",[this._v("7")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("✅")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("strong",[this._v("Debian")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td",[this._v("9")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("✅")]),this._v(" "),e("td")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("strong",[this._v("Alpine Linux")])]),this._v(" "),e("td",[this._v("3.4+")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("⚠️")]),this._v(" "),e("td",[this._v("Not officially supported, but reportedly works.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("strong",[this._v("RHEL")])]),this._v(" "),e("td",[this._v("7")]),this._v(" "),e("td",{staticStyle:{"text-align":"center"}},[this._v("⚠️")]),this._v(" "),e("td",[this._v("Not officially supported, should work.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"system-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" System Requirements")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("If your provider makes use of "),s("code",[t._v("Virtuozzo")]),t._v(", "),s("code",[t._v("OpenVZ")]),t._v(" (or "),s("code",[t._v("OVZ")]),t._v("), or "),s("code",[t._v("LXC")]),t._v(" then you will most likely be unable to\nrun the Daemon. If you are unsure what your host is using there are a couple of options. The easiest is to check\ntheir website, or reach out to their support team.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you want to take a different approach, try using "),e("code",[this._v("lscpu")]),this._v(" and checking what the virtualization type listed is. An\nexample of this is shown below which shows my hypervisor running with full virtualization — this means it will\nsupport Docker without issues. If you see "),e("code",[this._v("KVM")]),this._v(" for the vendor, chances are you're fine as well.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("dane@daemon:~$ lscpu "),e("span",{attrs:{class:"token operator"}},[this._v("|")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("grep")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v("'vendor\\|type'")]),this._v("\nHypervisor vendor:     VMware\nVirtualization type:   full\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If that doesn't work for some reason, or you're still unsure, you can also run the command below and as long as it\ndoesn't report "),e("code",[this._v("Xen")]),this._v(" or "),e("code",[this._v("LXC")]),this._v(" you're probably okay to continue.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("dane@daemon:~$ "),e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" dmidecode -s system-manufacturer\nVMware, Inc.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependencies")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Docker")]),t._v(" "),s("li",[t._v("Nodejs ("),s("code",[t._v("8.0")]),t._v(" or "),s("code",[t._v("10.0")]),t._v(")")]),t._v(" "),s("li",[s("code",[t._v("tar")])]),t._v(" "),s("li",[s("code",[t._v("unzip")])]),t._v(" "),s("li",[s("code",[t._v("make")]),t._v(", "),s("code",[t._v("gcc")]),t._v(" ("),s("code",[t._v("gcc-g++")]),t._v(" on CentOS), "),s("code",[t._v("g++")])]),t._v(" "),s("li",[s("code",[t._v("python")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Docker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"start-docker-on-boot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-docker-on-boot","aria-hidden":"true"}},[this._v("#")]),this._v(" Start Docker on Boot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" docker\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"enabling-swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-swap","aria-hidden":"true"}},[this._v("#")]),this._v(" Enabling Swap")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("On most systems, docker will be unable to setup swap space, you can check if this is the case by running "),e("code",[this._v("docker info")]),this._v(".\nIf it outputs "),e("code",[this._v("WARNING: No swap limit support")]),this._v(" near the bottom, this is the case. Enabling swap is completely optional,\nbut we recommended doing it if you will be hosting for others, and to prevent OOM errors.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To do so, open "),e("code",[this._v("/etc/default/grub")]),this._v(" as a root user, and find the line starting with "),e("code",[this._v("GRUB_CMDLINE_LINUX_DEFAULT")]),this._v(". Make\nsure the line includes "),e("code",[this._v("swapaccount=1")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After doing that, simply run "),e("code",[this._v("sudo update-grub")]),this._v(" followed by "),e("code",[this._v("sudo reboot")]),this._v(" to restart the server and have swap enabled.\nBelow is an example of what the line should look like, "),e("em",[this._v("do not copy this line verbatium, it often has additional\nOS specific parameters.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"installing-nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-nodejs","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Nodejs")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_8.x "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -E "),s("span",{attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\napt -y "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" nodejs "),s("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" gcc g++\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-daemon-software"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-daemon-software","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Daemon Software")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" -p /srv/daemon /srv/daemon-data\n"),e("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" /srv/daemon\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("OVH Servers")]),t._v(" "),s("p",[t._v("If you are using a server provided by OVH please be aware that your main drive space is probably allocated to\n"),s("code",[t._v("/home")]),t._v(", and not "),s("code",[t._v("/")]),t._v(" by default. Please consider using "),s("code",[t._v("/home/daemon-data")]),t._v(" for server data. This can be easily\nset when creating the node.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/pterodactyl/daemon/releases/download/v0.6.5/daemon.tar.gz "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tar")]),t._v(" --strip-components"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("1 -xzv\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" --only"),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v("production\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configure-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-daemon","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Daemon")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Simply copy and paste the code block and paste it into a file called "),e("code",[this._v("core.json")]),this._v(" in "),e("code",[this._v("/srv/daemon/config")]),this._v(" and save it.\nYou may also use the Auto-Deployment feature rather than manually creating the files.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(131),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"starting-the-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-daemon","aria-hidden":"true"}},[this._v("#")]),this._v(" Starting the Daemon")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To start your daemon simply move into the daemon directory and run the command below which will start the daemon in\nforeground mode. Once you are done, use "),e("code",[this._v("CTRL+C")]),this._v(" to terminate the process. Depending on your server's internet connection\npulling and starting the Daemon for the first time may take a few minutes.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" start\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"daemonizing-using-systemd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#daemonizing-using-systemd","aria-hidden":"true"}},[this._v("#")]),this._v(" Daemonizing (using systemd)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("If you are using Ubuntu 14 you cannot use "),e("code",[this._v("systemd")]),this._v(' to manage your Daemon. Please see the instructions below on using\n"forever" to run the daemon.')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Running Pterodactyl Daemon in the background is a simple task, just make sure that it runs without errors before doing\nthis. Place the contents below in a file called "),e("code",[this._v("wings.service")]),this._v(" in the "),e("code",[this._v("/etc/systemd/system")]),this._v(" directory.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[Unit]\nDescription=Pterodactyl Wings Daemon\nAfter=docker.service\n\n[Service]\nUser=root\n#Group=some_group\nWorkingDirectory=/srv/daemon\nLimitNOFILE=4096\nPIDFile=/var/run/wings/daemon.pid\nExecStart=/usr/bin/node /srv/daemon/src/index.js\nRestart=on-failure\nStartLimitInterval=600\n\n[Install]\nWantedBy=multi-user.target\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl daemon-reload\nsystemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" wings\nsystemctl start wings\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"daemonizing-using-forever"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#daemonizing-using-forever","aria-hidden":"true"}},[this._v("#")]),this._v(" Daemonizing (using Forever)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -g forever\nforever start src/index.js\n\n"),e("span",{attrs:{class:"token comment"}},[this._v("# To stop the daemon use:")]),this._v("\nforever stop src/index.js\n")])])])}],a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("table",[t._m(3),t._v(" "),s("tbody",[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("tr",[t._m(9),t._v(" "),s("td",[t._v("8")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("⚠️")]),t._v(" "),s("td",[t._v("Requires "),s("router-link",{attrs:{to:"./debian_8_docker.html"}},[t._v("kernel modifications")]),t._v(" to run Docker.")],1)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)])]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("In order to run the Daemon you will need a system capable of running Docker containers. Most VPS and almost all\ndedicated servers should be capable of running Docker, but there are edge cases.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),s("p",[t._v("Pterodactyl's Daemon requires the following dependencies be installed on your system in order for it to operate.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Please reference the official Docker documentation for how to install Docker CE on your server. Some quick links\nare listed below for commonly supported systems.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("CentOS"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debian"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Check your Kernel")]),t._v(" "),s("p",[t._v("Please be aware that some hosts install a modified kernel that does not support important docker features. Please\ncheck your kernel by running "),s("code",[t._v("uname -r")]),t._v(". If your kernel ends in "),s("code",[t._v("-xxxx-grs-ipv6-64")]),t._v(" or "),s("code",[t._v("-xxxx-mod-std-ipv6-64")]),t._v(" you're\nprobably using a non-supported kernel. Check our "),s("router-link",{attrs:{to:"./kernel_modifications.html"}},[t._v("Kernel Modifications")]),t._v(" guide for details.")],1)]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("If you are on Ubuntu 16 or CentOS run the command below to have Docker start when you boot your machine.")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),s("p",[t._v("NodeJS is also super easy to install! Simply run the command below to make the package accessible to your system.")]),t._v(" "),t._m(30),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Other OS Distributions")]),t._v(" "),s("p",[t._v("If you are using CentOS, "),s("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/#enterprise-linux-and-fedora",target:"_blank",rel:"noopener noreferrer"}},[t._v("please follow these instructions"),s("OutboundLink")],1),t._v(". Ubuntu and Debian users may also follow the "),s("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions",target:"_blank",rel:"noopener noreferrer"}},[t._v("official\ninstructions provided by Nodejs"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(31),t._v(" "),s("p",[t._v("The first step for installing the daemon is to make sure we have the required directory structure setup. To do so,\nrun the commands below.")]),t._v(" "),t._m(32),t._m(33),t._v(" "),s("p",[t._v("The next step is to download the software and unpack the archive.")]),t._v(" "),t._m(34),s("p",[t._v("Finally, we need to install the dependencies that allow the Daemon to run properly. This command will most likely\ntake a few minutes to run, please do not interrupt it.")]),t._v(" "),t._m(35),t._m(36),t._v(" "),s("p",[t._v("Once you have installed the daemon and required components, the next step is to create a node on your installed Panel\nOnce you have done that there will be a tab called Configuration when you view the node.")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),s("p",[t._v("Then, run the commands below to reload systemd and start the daemon.")]),t._v(" "),t._m(46),t._m(47),t._v(" "),s("p",[t._v("Forever allows us to run the daemon as a pseudo-daemonized application. We can exit our terminal session without\nkilling the process, and we don't have to run it in a screen. Inside the daemon directory, run the commands below which\nwill install forever and then start the process in the background.")]),t._v(" "),s("p",[t._v("You should use this only if your system does not support systemd.")]),t._v(" "),t._m(48)])},n,!1,null,null,null);e.default=r.exports}}]);