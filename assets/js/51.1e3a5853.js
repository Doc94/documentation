(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{395:function(e,t,s){"use strict";s.r(t);var a=s(48),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"standalone-sftp-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standalone-sftp-server"}},[e._v("#")]),e._v(" Standalone SFTP Server")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("This Software is Abandoned")]),e._v(" "),s("p",[e._v("This documentation is for "),s("strong",[e._v("abandoned software")]),e._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),e._v(" "),s("p",[e._v("You should be installing and using "),s("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[e._v("Wings")]),e._v(" in production environments with\n"),s("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[e._v("Pterodactyl Panel 1.0")]),e._v(".")],1)]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("Standalone SFTP support was introduced in "),s("code",[e._v("Panel@v0.7.11")]),e._v(" and "),s("code",[e._v("Daemon@v0.6.8")]),e._v(" and will not work with prior versions.")])]),e._v(" "),s("p",[e._v("Pterodactyl now ships with the option to use a "),s("a",{attrs:{href:"https://github.com/pterodactyl/sftp-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("standalone SFTP server"),s("OutboundLink")],1),e._v("\nrather than using the one that was built into the Daemon. This provides better compatibility with SFTP clients, improved\ntransfer speeds, and a more native approach to file handling and server operation.")]),e._v(" "),s("p",[e._v("Because this functionality is new, we've decided to make it an opt-in process, rather than an opt-out process. This page\nwill cover how to setup your standalone SFTP server.")]),e._v(" "),s("h2",{attrs:{id:"disable-daemon-s-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-daemon-s-server"}},[e._v("#")]),e._v(" Disable Daemon's Server")]),e._v(" "),s("p",[e._v("To disable the Daemon SFTP server, you only need to add "),s("code",[e._v("sftp.enabled=false")]),e._v(" to your Daemon's "),s("code",[e._v("core.json")]),e._v(" file.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sftp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2022")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    ...\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Once you've done that, restarting the Daemon will apply the change and not boot the built-in server.")]),e._v(" "),s("h2",{attrs:{id:"run-the-standalone-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-standalone-server"}},[e._v("#")]),e._v(" Run the Standalone Server")]),e._v(" "),s("p",[e._v("To download the standalone server, execute the command below in your Daemon's base directory (generally "),s("code",[e._v("/srv/daemon")]),e._v(").")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -Lo sftp-server https://github.com/pterodactyl/sftp-server/releases/download/v1.0.5/sftp-server\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x sftp-server\n")])])]),s("p",[e._v("Excellent, now you've got the server binary. Because we've written this server using "),s("a",{attrs:{href:"https://golang.org",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("go")]),s("OutboundLink")],1),e._v(" there\nare no additional dependencies you need to install.")]),e._v(" "),s("h3",{attrs:{id:"start-the-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-the-server"}},[e._v("#")]),e._v(" Start the Server")]),e._v(" "),s("p",[e._v("Finally, start the SFTP server so that you can then use it to access your files.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("./sftp-server\n")])])]),s("p",[e._v("By default, this will start the SFTP server on the old port of "),s("code",[e._v("2022")]),e._v(". If you want to use a different port it can be\nspecified by passing the "),s("code",[e._v("--port")]),e._v(" flag. For more advanced usage, please refer to the "),s("a",{attrs:{href:"https://github.com/pterodactyl/sftp-server/tree/release/v1.0.4#running",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub README"),s("OutboundLink")],1),e._v("\nwhich includes all of the flags and their default values.")]),e._v(" "),s("h2",{attrs:{id:"daemonize-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daemonize-server"}},[e._v("#")]),e._v(" Daemonize Server")]),e._v(" "),s("p",[e._v("Chances are you'll want to daemonize the SFTP server using something like "),s("code",[e._v("systemd")]),e._v(" so that it will run in the\nbackground. Place the contents below in a file called "),s("code",[e._v("pterosftp.service")]),e._v(" in the "),s("code",[e._v("/etc/systemd/system")]),e._v(" directory.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[Unit]\nDescription=Pterodactyl Standalone SFTP Server\nAfter=wings.service\n\n[Service]\nUser=root\nWorkingDirectory=/srv/daemon\nLimitNOFILE=4096\nPIDFile=/var/run/wings/sftp.pid\nExecStart=/srv/daemon/sftp-server\nRestart=on-failure\nStartLimitInterval=600\n\n[Install]\nWantedBy=multi-user.target\n")])])]),s("p",[e._v("Then, run the command below to enable it in systemd and start the SFTP server.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" --now pterosftp\n")])])]),s("h3",{attrs:{id:"customizing-startup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizing-startup"}},[e._v("#")]),e._v(" Customizing Startup")]),e._v(" "),s("p",[e._v("If you're trying to pass additional arguments to the server when starting it using SystemD you'll want to modify\nthe "),s("code",[e._v("ExecStart")]),e._v(" line. Something like "),s("code",[e._v("ExecStart=/srv/daemon/sftp-server --port 2022")]),e._v(" for example.")])])}),[],!1,null,null,null);t.default=r.exports}}]);