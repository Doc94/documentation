(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{408:function(e,t,a){"use strict";a.r(t);var s=a(48),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading-0-7-series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-0-7-series"}},[e._v("#")]),e._v(" Upgrading 0.7 Series")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("This Version is End-of-Life")]),e._v(" "),a("p",[e._v("This documentation is for "),a("strong",[e._v("end-of-life software")]),e._v(" which does not recieve any security updates or support\nfrom the community. This documentation has been left accessible for historial reasons.")]),e._v(" "),a("p",[e._v("You should be installing and using "),a("RouterLink",{attrs:{to:"/panel/1.0/getting_started.html"}},[e._v("Pterodactyl Panel 1.0")]),e._v(" in production environments.")],1)]),e._v(" "),a("p",[e._v("This documentation covers the process for upgrading within the "),a("code",[e._v("0.7.X")]),e._v(" series of releases. This means upgrading from\n— for example — "),a("code",[e._v("0.7.3")]),e._v(" to "),a("code",[e._v("0.7.11")]),e._v(". "),a("strong",[e._v("Do not use this guide for upgrading from "),a("code",[e._v("0.6")]),e._v(" or upgrading to "),a("code",[e._v("1.0")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you are using a custom theme please be aware that upgrading will remove those files. You will need to re-upload\nyour theme once the upgrade is complete or you will end up with server errors.")])]),e._v(" "),a("h2",{attrs:{id:"fetch-updated-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-updated-files"}},[e._v("#")]),e._v(" Fetch Updated Files")]),e._v(" "),a("p",[e._v("The first step in the update process is to download the new panel files from GitHub. The command below will download\nthe release archive for the most recent version of Pterodactyl and save it in the current directory. Now is a good time\nto ensure that you're in the "),a("code",[e._v("/var/www/pterodactyl")]),e._v(" directory as the command below will automatically unpack the archive\ninto your current folder.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -L https://github.com/pterodactyl/panel/releases/download/v0.7.19/panel.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" --strip-components"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -xzv\n")])])]),a("p",[e._v("Once all of the files are downloaded we need to set the correct permissions on the cache and storage directories to avoid\nany webserver related errors.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("755")]),e._v(" storage/* bootstrap/cache\n")])])]),a("h2",{attrs:{id:"update-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-dependencies"}},[e._v("#")]),e._v(" Update Dependencies")]),e._v(" "),a("p",[e._v("After you've downloaded all of the new files you will need to upgrade the core components of the panel. To do this,\nsimply run the commands below and follow any prompts.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev --optimize-autoloader\n")])])]),a("h2",{attrs:{id:"clear-compiled-template-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear-compiled-template-cache"}},[e._v("#")]),e._v(" Clear Compiled Template Cache")]),e._v(" "),a("p",[e._v("You'll also want to clear the compiled template cache to ensure that new and modified templates show up correctly for\nusers.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan view:clear\nphp artisan config:clear\n")])])]),a("h2",{attrs:{id:"database-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-updates"}},[e._v("#")]),e._v(" Database Updates")]),e._v(" "),a("p",[e._v("You'll also need to update your database schema for the newest version of Pterodactyl. Running the two commands below\nwill update the schema and ensure the default eggs we ship are up to date (and add any new ones we might have). Just\nremember, "),a("em",[e._v("never edit core eggs we ship")]),e._v("! They will be overwritten by this update process.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan migrate --force\nphp artisan db:seed --force\n")])])]),a("h2",{attrs:{id:"set-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-permissions"}},[e._v("#")]),e._v(" Set Permissions")]),e._v(" "),a("p",[e._v("The last step is to set the proper owner of the files to be the user that runs your webserver. In most cases this\nis "),a("code",[e._v("www-data")]),e._v(" but can vary from system to system — sometimes being "),a("code",[e._v("nginx")]),e._v(", "),a("code",[e._v("apache")]),e._v(", or even "),a("code",[e._v("nobody")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX or Apache (not on CentOS):")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R www-data:www-data * \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using NGINX on CentOS:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R nginx:nginx *\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If using Apache on CentOS")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R apache:apache *\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);