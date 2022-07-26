(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{340:function(e,t,a){e.exports=a.p+"assets/img/Pterodactyl_Create_New_Egg_Process_Management.516b5b6f.png"},351:function(e,t,a){e.exports=a.p+"assets/img/Pterodactyl_Create_New_Egg_Select.5a2867ee.png"},352:function(e,t,a){e.exports=a.p+"assets/img/Pterodactyl_Create_New_Egg_Copy_Settings_From.e3102cdd.png"},353:function(e,t,a){e.exports=a.p+"assets/img/Pterodactyl_Create_New_Egg_Variables.3962b264.png"},354:function(e,t,a){e.exports=a.p+"assets/img/Pterodactyl_Create_New_Egg_Startup.b6e22637.png"},372:function(e,t,a){"use strict";a.r(t);var s=a(48),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"creating-a-custom-egg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-custom-egg"}},[e._v("#")]),e._v(" Creating a Custom Egg")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("You should not edit existing services or options that ship with the Panel. Each upgrade we push can make minor\nchanges to these, and you'll lose any changes you've made.")])]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#create-new-option"}},[e._v("Create New Option")])]),s("li",[s("a",{attrs:{href:"#configure-process-management"}},[e._v("Configure Process Management")]),s("ul",[s("li",[s("a",{attrs:{href:"#stop-command"}},[e._v("Stop Command")])]),s("li",[s("a",{attrs:{href:"#log-storage"}},[e._v("Log Storage")])]),s("li",[s("a",{attrs:{href:"#configuration-files"}},[e._v("Configuration Files")])]),s("li",[s("a",{attrs:{href:"#start-configuration"}},[e._v("Start Configuration")])])])]),s("li",[s("a",{attrs:{href:"#copy-settings-from"}},[e._v("Copy Settings From")])]),s("li",[s("a",{attrs:{href:"#egg-variables"}},[e._v("Egg Variables")])]),s("li",[s("a",{attrs:{href:"#list-of-default-variables"}},[e._v("List of default variables")])])])]),s("p"),e._v(" "),s("p",[e._v("The first thing you'll need to do is create a new service. In this case, the name and description speak for themselves\nin this case. The "),s("code",[e._v("Folder Name")]),e._v(" "),s("em",[e._v("must be a unique name")]),e._v(" not being used by any other service, and should only\ncontain letters, numbers, underscores, and dashes. This is the name of the folder where the daemon will be storing\nthe service options on the daemon.")]),e._v(" "),s("p",[e._v("The default start command is also required, however it can be changed per-option.")]),e._v(" "),s("h2",{attrs:{id:"create-new-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-new-option"}},[e._v("#")]),e._v(" Create New Option")]),e._v(" "),s("p",[e._v("After creating the service, in the bottom right of the page you should see a button titled "),s("code",[e._v("New Egg")]),e._v(", press it.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(351),alt:""}})]),e._v(" "),s("p",[e._v("You will be taken to a new service option page which is where most of the configuration happens. The first thing\nyou need to do is select your service that you created previously from the "),s("code",[e._v("Associated Nest")]),e._v(" dropdown.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(340),alt:""}})]),e._v(" "),s("p",[e._v("After that, enter an Option Name to describe it, in this case I am using "),s("code",[e._v("Widget")]),e._v(". You will also need to provide a\n"),s("em",[e._v("valid")]),e._v(" docker image, as well as a start command to be assigned to servers under this service option (remember, this\ncan be tweaked per-server if needed).")]),e._v(" "),s("p",[s("em",[e._v("Docker images must be specifically designed to work with Pterodactyl Panel.")]),e._v(" You should read more about that in\nour "),s("RouterLink",{attrs:{to:"/community/config/eggs/creating_a_custom_image.html"}},[e._v("Creating a Docker Image")]),e._v(" guide.")],1),e._v(" "),s("h2",{attrs:{id:"configure-process-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-process-management"}},[e._v("#")]),e._v(" Configure Process Management")]),e._v(" "),s("p",[e._v("This is perhaps the most important step in this service option configuration, as this tells the Daemon how to run everything.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(340),alt:""}})]),e._v(" "),s("p",[e._v("The first field you'll encounter is "),s("code",[e._v("Copy Settings From")]),e._v(". The default selection is "),s("code",[e._v("None")]),e._v(". That is expected, and okay.\nThis dropdown is discussed at the end of this article.")]),e._v(" "),s("h3",{attrs:{id:"stop-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-command"}},[e._v("#")]),e._v(" Stop Command")]),e._v(" "),s("p",[e._v("Next, you'll encounter "),s("code",[e._v("Stop Command")]),e._v(" and, as the name implies, this should be the command used to safely stop the\noption. For some games, this is "),s("code",[e._v("stop")]),e._v(" or "),s("code",[e._v("end")]),e._v(". Certain programs and games don't have a specified stop command, so\nyou can enter "),s("code",[e._v("^C")]),e._v(" to have the daemon execute a "),s("code",[e._v("SIGINT")]),e._v(" to end the process.")]),e._v(" "),s("h3",{attrs:{id:"log-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-storage"}},[e._v("#")]),e._v(" Log Storage")]),e._v(" "),s("p",[e._v("Logs are competely handeled by the daemon now and use the docker logs to output the complete output from the server.\nThis can be set like below.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h3",{attrs:{id:"configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration Files")]),e._v(" "),s("p",[e._v("The next block is one of the most complex blocks, the "),s("code",[e._v("Configuration Files")]),e._v(" descriptor. The Daemon will process this\nblock prior to booting the server to ensure all of the required settings are defined and set correctly.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"server.properties"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"parser"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"properties"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"find"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"server-ip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enable-query"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"server-port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{server.build.default.port}}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"query.port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{server.build.default.port}}"')]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("In this example, we are telling the Daemon to read "),s("code",[e._v("server.properties")]),e._v(" in "),s("code",[e._v("/home/container")]),e._v(". Within this block, we\ndefine a "),s("code",[e._v("parser")]),e._v(", in this case "),s("code",[e._v("properties")]),e._v(" but the following are "),s("a",{attrs:{href:"https://github.com/pterodactyl/wings/blob/develop/parser/parser.go#L25-L30",target:"_blank",rel:"noopener noreferrer"}},[e._v("valid parsers"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("file")]),e._v(" — This parser goes based on matching the beginning of lines, and not a specific property like the other five.\nAvoid using this parser if possible.")]),e._v(" "),s("li",[s("code",[e._v("yaml")]),e._v(" (supports "),s("code",[e._v("*")]),e._v(" notation)")]),e._v(" "),s("li",[s("code",[e._v("properties")])]),e._v(" "),s("li",[s("code",[e._v("ini")])]),e._v(" "),s("li",[s("code",[e._v("json")]),e._v(" (supports "),s("code",[e._v("*")]),e._v(" notation)")]),e._v(" "),s("li",[s("code",[e._v("xml")])])]),e._v(" "),s("p",[e._v("Once you have defined a parser, we then define a "),s("code",[e._v("find")]),e._v(" block which tells the Daemon what specific elements to find\nand replace. In this example, we have provided four separate items within the "),s("code",[e._v("server.properties")]),e._v(" file that we want to\nfind and replace to the assigned values. You can use either an exact value, or define a specific server setting from\nthe "),s("code",[e._v("server.json")]),e._v(" file. In this case, we're assigning the default server port to be used as the "),s("code",[e._v("server-port")]),e._v(" and\n"),s("code",[e._v("query.port")]),e._v(". "),s("strong",[e._v("These placeholders are case sensitive, and should have no spaces in them.")])]),e._v(" "),s("p",[e._v("You can have multiple files listed here, the Daemon will process them in parallel before starting the server. When\nusing "),s("code",[e._v("yaml")]),e._v(" or "),s("code",[e._v("json")]),e._v(" you can use more advanced searching for elements.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"config.yml"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"parser"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yaml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"find"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"listeners[0].query_enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"listeners[0].query_port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{server.build.default.port}}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"listeners[0].host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0.0:{{server.build.default.port}}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"servers.*.address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{config.docker.interface}}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{config.docker.interface}}"')]),e._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("In this example, we are parsing "),s("code",[e._v("config.yml")]),e._v(" using the "),s("code",[e._v("yaml")]),e._v(" parser. The first three find items are simply assigning\nports and IPs for the first listener block. The last one, "),s("code",[e._v("servers.*.address")]),e._v(" uses wildcard matching to match any items\nwithin the "),s("code",[e._v("servers")]),e._v(" block, and then finding each "),s("code",[e._v("address")]),e._v(" block for those items.")]),e._v(" "),s("div",{pre:!0},[s("p",[e._v("An advanced feature of this file configuration is the ability to define multiple find and replace statements for a\nsingle matching line. In this case, we are looking for either "),s("code",[e._v("127.0.0.1")]),e._v(" or "),s("code",[e._v("localhost")]),e._v(" and replacing them with the\ndocker interface defined in the configuration file using "),s("code",[e._v("{{config.docker.interface}}")]),e._v(".")])]),s("h3",{attrs:{id:"start-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-configuration"}},[e._v("#")]),e._v(" Start Configuration")]),e._v(" "),s("p",[e._v("The last block to configure is the "),s("code",[e._v("Start Configuration")]),e._v(" for servers running using this service option.")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"done"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('")! For help, type "')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("In the example block above, we define "),s("code",[e._v("done")]),e._v(" as the entire line, or part of a line that indicates a server is done\nstarting, and is ready for players to join. When the Daemon sees this output, it will mark the server as "),s("code",[e._v("ON")]),e._v(" rather\nthan "),s("code",[e._v("STARTING")]),e._v(".")]),e._v(" "),s("p",[e._v("That concludes basic service option configuration.")]),e._v(" "),s("h2",{attrs:{id:"copy-settings-from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-settings-from"}},[e._v("#")]),e._v(" Copy Settings From")]),e._v(" "),s("p",[e._v("As mentioned above, there is a unique "),s("code",[e._v("Copy Settings From")]),e._v(" dropdown when adding a new option. This gives you the\nability to, as the name suggests, copy settings defined above from a different option.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(352),alt:""}})]),e._v(" "),s("p",[e._v("In the panel, we use this to copy settings that remain the same between similar service options, such as many of the\nMinecraft options.")]),e._v(" "),s("p",[e._v("For example, lets look at the "),s("code",[e._v("Sponge (SpongeVanilla)")]),e._v(" service option.")]),e._v(" "),s("p",[e._v("As you can see, it as been told to copy settings from "),s("code",[e._v("Vanilla Minecraft")]),e._v(". This means that any of the fields that are\nleft blank will inherit from the assigned parent. We then define a specific "),s("code",[e._v("userInteraction")]),e._v(" line that is different in\nSponge compared to Vanilla, but tell it that everything else should remain the same.")]),e._v(" "),s("p",[s("em",[e._v("Please note that "),s("code",[e._v("Copy Settings From")]),e._v(" does not support nested copies, you can only copy from a single parent,\nand that parent "),s("strong",[e._v("must not be copying from another option.")])])]),e._v(" "),s("h2",{attrs:{id:"egg-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#egg-variables"}},[e._v("#")]),e._v(" Egg Variables")]),e._v(" "),s("p",[e._v("One of the great parts of the Egg Variables is the ability to define specific variables that users and/or admins can\ncontrol to tweak different settings without letting users modify the startup command. To create new variables, or edit\nexisting ones, visit the new service option you created, and click the "),s("code",[e._v("Variables")]),e._v(" tab at the top of the page. Lets take\na look at an example variable that we can create.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(353),alt:""}})]),e._v(" "),s("div",{pre:!0},[s("p",[e._v("The name and description are rather self-explanitory, so I'll skip down to the "),s("code",[e._v("Environment Variable")]),e._v(" box. This should\nbe an Alpha-Numeric name with underscores, and should be uppercase. This will be the name of the environment variable\nwhich can be accessed in the startup command as "),s("code",[e._v("{{WOOZLE_WOO}}")]),e._v(", within file modifications as "),s("code",[e._v("{{env.WOOZLE_WOO}}")]),e._v(", or\njust "),s("code",[e._v("${WOOZLE_WOO}")]),e._v(" in any shell scripts (it is passed through in the environment). We also define a default value for\nthis environment variable in this example, but it is not required to do so.")])]),s("p",[e._v("The next section is "),s("code",[e._v("Permissions")]),e._v(", which is a dropdown with two options: "),s("code",[e._v("Users Can View")]),e._v(" and "),s("code",[e._v("Users Can Edit")]),e._v(".")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Users Can View")]),e._v(" — allows a user to view the field on the front-end, as well as the assigned value of that variable.\nThey will be able to see it replaced in their startup command.")]),e._v(" "),s("li",[s("code",[e._v("Users Can Edit")]),e._v(" — allows a user to edit the value of the variable, for example the name of their "),s("code",[e._v("server.jar")]),e._v(" file\nif running Minecraft.")])]),e._v(" "),s("p",[e._v("You should use caution here, even if you assign neither of the permissions it does not mean that the value will be\nhidden. Crafty users will still be able to get the environment on their server. In most cases this is simply hiding\nit from the user, and then used within the Dockerfile to perform actions, thus it is not important for the user to see.")]),e._v(" "),s("p",[e._v("Finally, you will need to define some input rules to validate the value against. In this example, we use\n"),s("code",[e._v("required|string|between:1,10")]),e._v(", which means the field is "),s("code",[e._v("required")]),e._v(", must be a "),s("code",[e._v("string")]),e._v(", and must be between "),s("code",[e._v("1")]),e._v(" and\n"),s("code",[e._v("10")]),e._v(" characters in length. You can find "),s("a",{attrs:{href:"https://laravel.com/docs/5.6/validation#available-validation-rules",target:"_blank",rel:"noopener noreferrer"}},[e._v("all of the available validation rules"),s("OutboundLink")],1),e._v("\non the Laravel website. You can also use ReGEX based validation by using the "),s("code",[e._v("regex:")]),e._v(" rule flag. For example,\n"),s("a",{attrs:{href:"https://regex101.com/r/k4oEOn/1",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("required|regex:/^([\\w\\d._-]+)(\\.jar)$/")]),s("OutboundLink")],1),e._v(" will require the field, and will match the\nregex as any letters or numbers ("),s("code",[e._v("\\w\\d")]),e._v(") including underscore ("),s("code",[e._v("_")]),e._v("), periods ("),s("code",[e._v(".")]),e._v("), and dashes ("),s("code",[e._v("-")]),e._v(") ending in "),s("code",[e._v(".jar")]),e._v(".")]),e._v(" "),s("p",[e._v("They will then be visible when managing the startup for a server in both the Admin CP and on the Front-End.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(354),alt:""}})]),e._v(" "),s("h2",{attrs:{id:"list-of-default-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-default-variables"}},[e._v("#")]),e._v(" List of default variables")]),e._v(" "),s("p",[e._v("The default variables are always accessible to all eggs and don't have to be created separately. They can be used in the egg startup, install script, or the configuration file parser.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Variable")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Example")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("TZ")]),e._v(" "),s("td",[e._v("Time Zone")]),e._v(" "),s("td",[s("code",[e._v("Etc/UTC")])])]),e._v(" "),s("tr",[s("td",[e._v("STARTUP")]),e._v(" "),s("td",[e._v("Startup command of the egg")]),e._v(" "),s("td",[s("code",[e._v("java -Xms128M -Xmx"+e._s(e.SERVER_MEMORY)+"M -jar "+e._s(e.SERVER_JARFILE))])])]),e._v(" "),s("tr",[s("td",[e._v("SERVER_MEMORY")]),e._v(" "),s("td",[e._v("Memory available for the server in MB")]),e._v(" "),s("td",[s("code",[e._v("512")])])]),e._v(" "),s("tr",[s("td",[e._v("SERVER_IP")]),e._v(" "),s("td",[e._v("Default ip of the server")]),e._v(" "),s("td",[s("code",[e._v("127.0.0.1")])])]),e._v(" "),s("tr",[s("td",[e._v("SERVER_PORT")]),e._v(" "),s("td",[e._v("Primary Server Port")]),e._v(" "),s("td",[s("code",[e._v("27015")])])]),e._v(" "),s("tr",[s("td",[e._v("P_SERVER_LOCATION")]),e._v(" "),s("td",[e._v("Location of the server")]),e._v(" "),s("td",[s("code",[e._v("Example City")])])]),e._v(" "),s("tr",[s("td",[e._v("P_SERVER_UUID")]),e._v(" "),s("td",[e._v("UUID of the server")]),e._v(" "),s("td",[s("code",[e._v("539fdca8-4a08-4551-a8d2-8ee5475b50d9")])])]),e._v(" "),s("tr",[s("td",[e._v("P_SERVER_ALLOCATION_LIMIT")]),e._v(" "),s("td",[e._v("Limit of allocations allowed for the server")]),e._v(" "),s("td",[s("code",[e._v("0")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);