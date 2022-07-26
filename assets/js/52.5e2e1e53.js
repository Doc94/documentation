(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{396:function(e,t,a){"use strict";a.r(t);var o=a(48),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading-0-4-x-to-0-5-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-4-x-to-0-5-x"}},[e._v("#")]),e._v(" Upgrading 0.4.X to 0.5.X")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("This Software is Abandoned")]),e._v(" "),a("p",[e._v("This documentation is for "),a("strong",[e._v("abandoned software")]),e._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),e._v(" "),a("p",[e._v("You should be installing and using "),a("RouterLink",{attrs:{to:"/wings/1.0/installing.html"}},[e._v("Wings")]),e._v(" in production environments with\n"),a("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[e._v("Pterodactyl Panel 1.0")]),e._v(".")],1)]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#docker-adjustments"}},[e._v("Docker Adjustments")])]),a("li",[a("a",{attrs:{href:"#download-files"}},[e._v("Download Files")])]),a("li",[a("a",{attrs:{href:"#sftp-cleanup"}},[e._v("SFTP Cleanup")])]),a("li",[a("a",{attrs:{href:"#file-migration"}},[e._v("File Migration")]),a("ul",[a("li",[a("a",{attrs:{href:"#rebuild-containers"}},[e._v("Rebuild Containers")])])])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("This upgrade process will require that "),a("strong",[e._v("all")]),e._v(" servers running through the Daemon be offline for a short period\nof time while data is reorganized and server containers are rebuilt. Please plan accordingly for this.")]),e._v(" "),a("p",[e._v("You will need to update your Panel to the 0.7.X series in order to complete this process as well.")])]),e._v(" "),a("h2",{attrs:{id:"docker-adjustments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-adjustments"}},[e._v("#")]),e._v(" Docker Adjustments")]),e._v(" "),a("p",[e._v("Previously we provided a quick Docker installation script in our installation instructions. We made the regrettable\nmistake of not reading deeper into it and realizing it enabled edge release channels for Docker. You'll want to take\na look at the official documentation for Docker and change your channel to be a stable release channel.")]),e._v(" "),a("p",[e._v("Please reference the official Docker documentation for how to install Docker CE on your server. Some quick links\nare listed below for commonly supported systems.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("Debian"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"download-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-files"}},[e._v("#")]),e._v(" Download Files")]),e._v(" "),a("p",[e._v("To upgrade from v0.4.X first switch the directory where you installed your Daemon. If you followed the installation\nguide your Daemon is most likely located in "),a("code",[e._v("/srv/daemon")]),e._v(". Then, download and unpack the archive using the\ncommand below.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/pterodactyl/daemon/releases/download/v0.5.7/daemon.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" --strip-components"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -xzv\n")])])]),a("p",[e._v("Then, update the core dependencies for the Daemon with the following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" update --only"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("production\n")])])]),a("h2",{attrs:{id:"sftp-cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sftp-cleanup"}},[e._v("#")]),e._v(" SFTP Cleanup")]),e._v(" "),a("p",[e._v("This version of the Daemon ships with an internal SFTP subsystem, no more need for a special Docker container or\nconfusing file permissions. For the most part the Daemon can handle all of the internal changes that make this possible,\nyou'll just need to remove the old Docker container for SFTP.")]),e._v(" "),a("p",[e._v("To do so, simply run the following commands, changing "),a("code",[e._v("2022")]),e._v(" if you are using a different port.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker rmi -f quay.io/pterodactyl/scrappy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("kill")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("lsof")]),e._v(" -i:2022 -t "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),a("p",[e._v("Once you have completed that step, you will need to boot the Daemon in order to have the new system user created\nautomatically. This can be done by running "),a("code",[e._v("sudo npm start")]),e._v(" in the Daemon directory. You'll want to run it in the\nforeground in order to monitor progress and make sure it executes without issues. Once it has finished running and\nthe Daemon is up and running, stop it again using "),a("code",[e._v("CTRL+C")]),e._v(".")]),e._v(" "),a("p",[e._v("If for whatever reason you need your user to be named something other than "),a("code",[e._v("pterodactyl")]),e._v(" you can change that in the\n"),a("code",[e._v("core.json")]),e._v(" before booting the Daemon by setting the "),a("code",[e._v("docker.container.username")]),e._v(" key. 99.9% of users will not need\nto change the username.")]),e._v(" "),a("h2",{attrs:{id:"file-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-migration"}},[e._v("#")]),e._v(" File Migration")]),e._v(" "),a("p",[e._v("Now for the longest part of the upgrade: data migration. You only need to migrate data once when updating from v0.4.X.")]),e._v(" "),a("p",[e._v("You'll need all of your servers to be stopped for this part of the migration. All of their containers will also need\nto be rebuilt, but this will be completed on the Panel with a console command since we also need to update their\nconfigurations with some new data. We will run that command after we migrate all of the data.")]),e._v(" "),a("p",[e._v("To perform this migration, simply run the command below in the Daemon directory and follow its prompts. Be aware it\nmight take a few minutes to run, especially with large volumes of data.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run migrate\ndocker system prune\n")])])]),a("h3",{attrs:{id:"rebuild-containers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebuild-containers"}},[e._v("#")]),e._v(" Rebuild Containers")]),e._v(" "),a("p",[e._v("After migrating your data, you'll also need to run a command on the Panel in order to update all of the configurations\nfor these servers. First, be sure to boot the Daemon in foreground mode ("),a("code",[e._v("sudo npm start")]),e._v("). You'll then want to run the\nfollowing command in the Panel directory, "),a("strong",[e._v("not the Daemon directory")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan p:server:rebuild --node"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("###")]),e._v("\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("###")]),e._v(" above with the ID of your node that is being updated. This will toggle all servers for a rebuild, as\nwell as push the latest information to their configurations. Once this is done, stop the Daemon, run the command below,\nand then boot it. If you have all daemons running and wish to update them all at once, remove the "),a("code",[e._v("--node")]),e._v(" flag.")]),e._v(" "),a("p",[e._v("Boot the Daemon one last time in the foreground, make sure it completes without errors, and then you can stop it and\nrestart it using your service: "),a("code",[e._v("sudo systemctl start wings")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Thanks!")]),e._v(" "),a("p",[e._v("You're all finished! Thanks for bearing with us, this update addresses a lot of flaws in the previous implementations\nof the software, and also prepares your data for the eventual migration to our new daemon — which is still in the works.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);