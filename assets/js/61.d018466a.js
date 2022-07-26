(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{406:function(e,t,r){"use strict";r.r(t);var a=r(48),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#reading-error-logs"}},[e._v("Reading Error Logs")]),r("ul",[r("li",[r("a",{attrs:{href:"#parsing-the-error"}},[e._v("Parsing the Error")])]),r("li",[r("a",{attrs:{href:"#understanding-the-error"}},[e._v("Understanding the Error")])]),r("li",[r("a",{attrs:{href:"#utilizing-grep"}},[e._v("Utilizing GREP")])])])]),r("li",[r("a",{attrs:{href:"#transfer-exceptions-xhr-poll-error"}},[e._v("Transfer Exceptions / XHR Poll Error")]),r("ul",[r("li",[r("a",{attrs:{href:"#example-errors"}},[e._v("Example Errors")])]),r("li",[r("a",{attrs:{href:"#basic-debugging-steps"}},[e._v("Basic Debugging Steps")])]),r("li",[r("a",{attrs:{href:"#more-advanced-debugging-steps"}},[e._v("More Advanced Debugging Steps")])])])]),r("li",[r("a",{attrs:{href:"#invalid-mac-exception"}},[e._v("Invalid MAC Exception")])]),r("li",[r("a",{attrs:{href:"#selinux-issues"}},[e._v("SELinux Issues")]),r("ul",[r("li",[r("a",{attrs:{href:"#redis-permissions-errors"}},[e._v("Redis Permissions Errors")])]),r("li",[r("a",{attrs:{href:"#in-case-there-is-any-weirdness-with-parts-of-the-panel"}},[e._v("In case there is any weirdness with parts of the panel")])]),r("li",[r("a",{attrs:{href:"#daemon-connection-errors"}},[e._v("Daemon Connection Errors")])])])]),r("li",[r("a",{attrs:{href:"#firewalld-issues"}},[e._v("FirewallD issues")])]),r("li",[r("a",{attrs:{href:"#database-errors"}},[e._v("Database Errors")]),r("ul",[r("li",[r("a",{attrs:{href:"#databasecontroller-php-142"}},[e._v("DatabaseController.php:142")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"reading-error-logs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reading-error-logs"}},[e._v("#")]),e._v(" Reading Error Logs")]),e._v(" "),r("p",[e._v("If you ever encounter an unexpected error with the Panel the first thing you will likely be asked for is the logs.\nTo retrieve these, simply execute the command below which will output the last 100 lines of the Panel's log file.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("tail")]),e._v(" -n "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" /var/www/pterodactyl/storage/logs/laravel-"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%F"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(".log\n")])])]),r("h3",{attrs:{id:"parsing-the-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parsing-the-error"}},[e._v("#")]),e._v(" Parsing the Error")]),e._v(" "),r("p",[e._v("When you run the command above, you'll probably be hit with a huge wall of text that might scare you. Fear not,\nthis is simply a stacktrace leading to the cause of the error, and you can actually ignore almost all of it when\nlooking for the cause of the error. Lets take a look at some example output below, which has been truncated to\nmake this easier to follow with.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("#70 /srv/www/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(116): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#71 /srv/www/public/index.php(53): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#72 {main}\n[2018-07-19 00:50:24] local.ERROR: ErrorException: file_put_contents(/srv/www/storage/framework/views/c9c05d1357df1ce4ec8fc5df78c16c493b0d4f48.php): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122\nStack trace:\n#0 [internal function]: Illuminate\\Foundation\\Bootstrap\\HandleExceptions->handleError(2, 'file_put_conten...', '/srv/www/vendor...', 122, Array)\n#1 /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(122): file_put_contents('/srv/www/storag...', '<?php $__env->s...', 0)\n#2 /srv/www/vendor/laravel/framework/src/Illuminate/View/Compilers/BladeCompiler.php(122): Illuminate\\Filesystem\\Filesystem->put('/srv/www/storag...', '<?php $__env->s...')\n#3 /srv/www/vendor/laravel/framework/src/Illuminate/View/Engines/CompilerEngine.php(51): Illuminate\\View\\Compilers\\BladeCompiler->compile('/srv/www/resour...')\n#4 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(142): Illuminate\\View\\Engines\\CompilerEngine->get('/srv/www/resour...', Array)\n#5 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(125): Illuminate\\View\\View->getContents()\n")])])]),r("p",[e._v("The first thing you'll want to do is follow the chain of numbers "),r("em",[e._v("up")]),e._v(" until you find "),r("code",[e._v("#0")]),e._v(", this will be the function that\ntriggered the exception. Right above line 0 you will see a line that has the date and time in brackets, "),r("code",[e._v("[2018-07-19 00:50:24]")]),e._v("\nabove for example. This line will be the human readable exception that you can use to understand what went wrong.")]),e._v(" "),r("h3",{attrs:{id:"understanding-the-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-error"}},[e._v("#")]),e._v(" Understanding the Error")]),e._v(" "),r("p",[e._v("In the example above we can see that the actual error was:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("local.ERROR: ErrorException: file_put_contents(...): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122\n")])])]),r("p",[e._v("From this error we can determine that there was an error performing a "),r("a",{attrs:{href:"http://php.net/manual/en/function.file-put-contents.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("file_put_contents()"),r("OutboundLink")],1),e._v(" call, and the error was\nthat we couldn't open the file because permissions were denied. Its okay if you don't understand the error at all, but\nit does help you get faster support if you're able to provide these logs, and at least find the source of the error.\nSometimes the errors are pretty straightforward and will tell you exactly what went wrong, such as a "),r("code",[e._v("ConnectionException")]),e._v("\nbeing thrown when the Panel can't connect to the Daemon.")]),e._v(" "),r("h3",{attrs:{id:"utilizing-grep"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#utilizing-grep"}},[e._v("#")]),e._v(" Utilizing GREP")]),e._v(" "),r("p",[e._v("If you're trying to go through a bunch of errors quickly, you can use the command below which will limit the results returned to only\nbe the actual error lines, without all of the stack traces.")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("tail")]),e._v(" -n "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" /var/www/pterodactyl/storage/logs/laravel-"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%F"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(".log "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\['),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("date")]),e._v(" +%Y"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v("\n")])])]),r("h2",{attrs:{id:"transfer-exceptions-xhr-poll-error"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transfer-exceptions-xhr-poll-error"}},[e._v("#")]),e._v(" Transfer Exceptions / XHR Poll Error")]),e._v(" "),r("p",[e._v("If you are seeing errors similar to the examples below, chances are there is some networking related issue, or you\njust don't have a required service running.")]),e._v(" "),r("h3",{attrs:{id:"example-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-errors"}},[e._v("#")]),e._v(" Example Errors")]),e._v(" "),r("ul",[r("li",[r("p",[e._v('"We were unable to connect to the main Socket.IO server, there may be network issues currently. The panel may not work as expected."')])]),e._v(" "),r("li",[r("p",[e._v('"A TransferException was encountered while trying to contact the daemon, please ensure it\'s online and accessible. This error has been logged."')])])]),e._v(" "),r("h3",{attrs:{id:"basic-debugging-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-debugging-steps"}},[e._v("#")]),e._v(" Basic Debugging Steps")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Ensure you have AdBlock disabled or whitelisted for your Panel and Daemon domains.")])]),e._v(" "),r("li",[r("p",[e._v("Check your browser's console by pressing "),r("code",[e._v("Ctrl + Shift + J")]),e._v(" (in Chrome) or "),r("code",[e._v("Cmd + Alt + I")]),e._v(" (in Safari). If there is\na red error in it, chances are that it will narrow down the potential problem.")])]),e._v(" "),r("li",[r("p",[e._v("Make sure if the daemon is properly installed and the active configuration matches the configuration shown under\n"),r("code",[e._v("Admin -> Node -> Configuration")]),e._v(" in the Panel.")])]),e._v(" "),r("li",[r("p",[e._v("Check that the Daemon is running, and not reporting errors. Use "),r("code",[e._v("service wings status")]),e._v(" to check the current status of the process.")])]),e._v(" "),r("li",[r("p",[e._v("Check that the Daemon ports are open on your firewall. The Daemon uses ports "),r("code",[e._v("8080")]),e._v(" or "),r("code",[e._v("8443")]),e._v(" for HTTP traffic,\nand "),r("code",[e._v("2022")]),e._v(" for SFTP traffic.")])]),e._v(" "),r("li",[r("p",[e._v("Check that the Panel can reach the Daemon using the domain that is configured on the Panel. Run "),r("code",[e._v("curl https://domain.com:8080")]),e._v(" on the Panel server and ensure that it can connect to the Daemon.")])]),e._v(" "),r("li",[r("p",[e._v("Ensure that you are using the correct HTTP scheme for your Panel and Daemon. If the Panel is running over HTTPS\nthe Daemon will also need to be running on HTTPS.")])])]),e._v(" "),r("h3",{attrs:{id:"more-advanced-debugging-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-advanced-debugging-steps"}},[e._v("#")]),e._v(" More Advanced Debugging Steps")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Stop the Daemon and run "),r("code",[e._v("cd /srv/daemon; sudo npm start")]),e._v(" to see if there are any errors being output by the Daemon.\nIf so, try resolving them manually, or contact us on Discord for more assistance.")])]),e._v(" "),r("li",[r("p",[e._v("Check your DNS and ensure that the response you receive is the one you expect using a tool such as "),r("code",[e._v("nslookup")]),e._v(" or "),r("code",[e._v("dig")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("If you use CloudFlare make sure that the yellow cloud is disabled for your Daemon or Panel "),r("code",[e._v("A")]),e._v(" records.")])]),e._v(" "),r("li",[r("p",[e._v("Make sure when using the daemon behind a firewall — pfSense, OpenSwitch, etc — that the correct NAT settings to access\nthe Daemon's ports from the outside network are setup.")])]),e._v(" "),r("li",[r("p",[e._v("If nothing is working so far, check your own DNS settings and consider switching DNS servers.")])]),e._v(" "),r("li",[r("p",[e._v("When running the Panel and Daemon on one server it can sometimes help if to add an entry in "),r("code",[e._v("/etc/hosts")]),e._v(" that directs\nthe public IP back to the server. Sometimes the reverse path is also needed, so you may need to add an entry to your\nservers "),r("code",[e._v("/etc/hosts")]),e._v(" file that points the Panel's domain to the correct IP.")])]),e._v(" "),r("li",[r("p",[e._v("When running the Daemon and Panel on separate VM's using the same adapter make sure the VM's can connect to each\nother. Promiscuous mode might be needed.")])])]),e._v(" "),r("h2",{attrs:{id:"invalid-mac-exception"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#invalid-mac-exception"}},[e._v("#")]),e._v(" Invalid MAC Exception")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("This error should never happen if you correctly follow our installation and upgrade guides. The only time we have\never seen this error occur is when you blindly restore the Panel database from a backup and try to use a fresh\ninstallation of the Panel.")]),e._v(" "),r("p",[e._v("When restoring backups you should "),r("em",[e._v("always")]),e._v(" restore the "),r("code",[e._v(".env")]),e._v(" file!")])]),e._v(" "),r("p",[e._v("Sometimes when using the Panel you'll unexpectedly encounter a broken page, and upon checking the logs you'll see\nan exception mentioning an invalid MAC when decrypting. This error is caused by mismatched "),r("code",[e._v("APP_KEY")]),e._v("s in your "),r("code",[e._v(".env")]),e._v(" file\nwhen the data was encrypted versus decrypted.")]),e._v(" "),r("p",[e._v("If you are seeing this error the only solution is to restore the "),r("code",[e._v("APP_KEY")]),e._v(" from your "),r("code",[e._v(".env")]),e._v(" file. If you have lost that\noriginal key there is no way to recover the lost data.")]),e._v(" "),r("h2",{attrs:{id:"selinux-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#selinux-issues"}},[e._v("#")]),e._v(" SELinux Issues")]),e._v(" "),r("p",[e._v("On systems with SELinux installed you might encounter unexpected errors when running redis or attempting to connect\nto the daemon to perform actions. These issues can generally be resolved by executing the commands below to allow\nthese programs to work with SELinux.")]),e._v(" "),r("h3",{attrs:{id:"redis-permissions-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redis-permissions-errors"}},[e._v("#")]),e._v(" Redis Permissions Errors")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("audit2allow -a -M redis_t\nsemodule -i redis_t.pp\n")])])]),r("h3",{attrs:{id:"in-case-there-is-any-weirdness-with-parts-of-the-panel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#in-case-there-is-any-weirdness-with-parts-of-the-panel"}},[e._v("#")]),e._v(" In case there is any weirdness with parts of the panel")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("restorecon -R /var/www/pterodactyl/\n")])])]),r("h3",{attrs:{id:"daemon-connection-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#daemon-connection-errors"}},[e._v("#")]),e._v(" Daemon Connection Errors")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("audit2allow -a -M http_port_t\nsemodule -i http_port_t.pp\n")])])]),r("h2",{attrs:{id:"firewalld-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-issues"}},[e._v("#")]),e._v(" FirewallD issues")]),e._v(" "),r("p",[e._v("If you are on a RHEL/CentOS server with firewalld installed you may have broken DNS.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0\nfirewall-cmd --reload\n")])])]),r("p",[e._v("restart docker and wings after running these to be sure the rules are applied.")]),e._v(" "),r("h2",{attrs:{id:"database-errors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-errors"}},[e._v("#")]),e._v(" Database Errors")]),e._v(" "),r("h3",{attrs:{id:"databasecontroller-php-142"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#databasecontroller-php-142"}},[e._v("#")]),e._v(" DatabaseController.php:142")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("production.ERROR: ErrorException: Undefined variable: host in /var/www/pterodactyl/app/Http/Controllers/Admin/DatabaseController.php:142\n")])])]),r("p",[e._v("The database user you are trying to use doesn't have appropriate grants/has used incorrect password.")])])}),[],!1,null,null,null);t.default=s.exports}}]);