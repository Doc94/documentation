(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{413:function(e,t,n){"use strict";n.r(t);var a=n(48),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"webserver-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webserver-configuration"}},[e._v("#")]),e._v(" Webserver Configuration")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the "),n("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[e._v("Creating SSL Certificates")]),e._v(" documentation page to learn how to create these certificates before continuing.")],1)]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("If you are using "),n("a",{attrs:{href:"#caddy-with-automatic-ssl"}},[e._v("Caddy With Automatic SSL")]),e._v(", you do not have to create SSL certificates manually, Caddy will take care of it automatically.")])]),e._v(" "),n("tabs",[n("tab",{attrs:{name:"Nginx With SSL"}},[n("p",[e._v("First, remove the default NGINX configuration.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/nginx/sites-enabled/default\n")])])]),n("p",[e._v("Now, you should paste the contents of the file below, replacing "),n("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),n("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),n("code",[e._v("/etc/nginx/sites-available/")]),e._v(", or — if on CentOS, "),n("code",[e._v("/etc/nginx/conf.d/")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration - Replace the example <domain> with your domain\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),n("h3",{attrs:{id:"enabling-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),n("p",[e._v("The final step is to enable your NGINX configuration and restart it.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to symlink this file if you are using CentOS.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You need to restart nginx regardless of OS.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart nginx\n")])])])]),e._v(" "),n("tab",{attrs:{name:"Nginx Without SSL"}},[n("p",[e._v("First, remove the default NGINX configuration.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/nginx/sites-enabled/default\n")])])]),n("p",[e._v("Now, you should paste the contents of the file below, replacing "),n("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),n("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),n("code",[e._v("/etc/nginx/sites-available/")]),e._v(", or — if on CentOS, "),n("code",[e._v("/etc/nginx/conf.d/")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('server {\n    # Replace the example <domain> with your domain name or IP address\n    listen 80;\n    server_name <domain>;\n\n\n    root /var/www/pterodactyl/public;\n    index index.html index.htm index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    access_log off;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])]),n("h3",{attrs:{id:"enabling-configuration-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-2"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),n("p",[e._v("The final step is to enable your NGINX configuration and restart it.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to symlink this file if you are using CentOS.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You need to restart nginx regardless of OS.")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart nginx\n")])])])]),e._v(" "),n("tab",{attrs:{name:"Apache With SSL"}},[n("p",[e._v("First, remove the default Apache configuration.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("a2dissite 000-default.conf\n")])])]),n("p",[e._v("Now, you should paste the contents of the file below, replacing "),n("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),n("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),n("code",[e._v("/etc/apache2/sites-available")]),e._v(", or — if on CentOS, "),n("code",[e._v("/etc/httpd/conf.d/")]),e._v(".")]),e._v(" "),n("p",[e._v("Note: When using Apache, make sure you have the "),n("code",[e._v("libapache2-mod-php")]),e._v(" package installed or else PHP will not display on your webserver.")]),e._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<VirtualHost *:80>\n  ServerName <domain>\n  \n  RewriteEngine On\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n\n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n\n  <Directory "/var/www/pterodactyl/public">\n    Require all granted\n    AllowOverride all\n  </Directory>\n\n  SSLEngine on\n  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n')])])]),n("h3",{attrs:{id:"enabling-configuration-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-3"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),n("p",[e._v("Once you've created the file above, simply run the commands below. If you are on CentOS "),n("em",[e._v("you do not need to run the commands\nbelow!")]),e._v(" You only need to run "),n("code",[e._v("systemctl restart httpd")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to run any of these commands on CentOS")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" a2enmod rewrite\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" a2enmod ssl\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart apache2\n")])])])]),e._v(" "),n("tab",{attrs:{name:"Apache Without SSL"}},[n("p",[e._v("First, remove the default Apache configuration.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("a2dissite 000-default.conf\n")])])]),n("p",[e._v("Now, you should paste the contents of the file below, replacing "),n("code",[e._v("<domain>")]),e._v(" with your domain name being used in a file called\n"),n("code",[e._v("pterodactyl.conf")]),e._v(" and place the file in "),n("code",[e._v("/etc/apache2/sites-available")]),e._v(", or — if on CentOS, "),n("code",[e._v("/etc/httpd/conf.d/")]),e._v(".")]),e._v(" "),n("p",[e._v("Note: When using Apache, make sure you have the "),n("code",[e._v("libapache2-mod-php")]),e._v(" package installed or else PHP will not display on your webserver.")]),e._v(" "),n("div",{staticClass:"language-conf extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<VirtualHost *:80>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n  \n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n  \n  <Directory "/var/www/pterodactyl/public">\n    AllowOverride all\n    Require all granted\n  </Directory>\n</VirtualHost>\n')])])]),n("h3",{attrs:{id:"enabling-configuration-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-4"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),n("p",[e._v("Once you've created the file above, simply run the commands below. If you are on CentOS "),n("em",[e._v("you do not need to run the commands\nbelow!")]),e._v(" You only need to run "),n("code",[e._v("systemctl restart httpd")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# You do not need to run any of these commands on CentOS")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" a2enmod rewrite\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl restart apache2\n")])])])]),e._v(" "),n("tab",{attrs:{name:"Caddy With Automatic SSL"}},[n("p",[e._v("Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is "),n("code",[e._v("/etc/caddy/Caddyfile")]),e._v(".")]),e._v(" "),n("p",[e._v("To delete the config file completely, run the following command:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/caddy/Caddyfile\n")])])]),n("p",[e._v("Then continue with an editor of your choice to write the config.")]),e._v(" "),n("p",[e._v("You should paste the contents of the file below, replacing "),n("code",[e._v("<domain>")]),e._v(" with your domain name.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    servers :443 {\n        timeouts {\n            read_body 120s\n        }\n    }\n}\n\n<domain> {\n    root * /var/www/pterodactyl/public\n\n    file_server\n\n    php_fastcgi unix//run/php/php8.1-fpm.sock {\n        root /var/www/pterodactyl/public\n        index index.php\n\n        env PHP_VALUE "upload_max_filesize = 100M\n        post_max_size = 100M"\n        env HTTP_PROXY ""\n        env HTTPS "on"\n\n        read_timeout 300s\n        dial_timeout 300s\n        write_timeout 300s\n    }\n\n    header Strict-Transport-Security "max-age=16768000; preload;"\n    header X-Content-Type-Options "nosniff"\n    header X-XSS-Protection "1; mode=block;"\n    header X-Robots-Tag "none"\n    header Content-Security-Policy "frame-ancestors \'self\'"\n    header X-Frame-Options "DENY"\n    header Referrer-Policy "same-origin"\n\n    request_body {\n        max_size 100m\n    }\n\n    respond /.ht* 403\n\n    log {\n        output file /var/log/caddy/pterodactyl.log {\n            roll_size 100MiB\n            roll_keep_for 7d\n        }\n        level INFO\n    }\n}')])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("If you are using Cloudflare DNS in proxy mode, refer to "),n("RouterLink",{attrs:{to:"/tutorials/creating_ssl_certificates.html#method-3:-caddy-(using-cloudflare-api)"}},[e._v("this tutorial")]),e._v(", to see how to configure Caddy to use DNS challenge for obtaining SSL certificates.")],1)]),e._v(" "),n("h3",{attrs:{id:"enabling-configuration-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-5"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),n("p",[e._v("The final step is to restart Caddy.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("systemctl restart caddy\n")])])])]),e._v(" "),n("tab",{attrs:{name:"Caddy Without SSL"}},[n("p",[e._v("Before adding our custom configuration, let's remove the default one. You can do it either by deleting the contents of config file or by deleting the config file completely and than creating a new one from scratch. The config file path is "),n("code",[e._v("/etc/caddy/Caddyfile")]),e._v(".")]),e._v(" "),n("p",[e._v("To delete the config file completely, run the following command:")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" /etc/caddy/Caddyfile\n")])])]),n("p",[e._v("Then continue with an editor of your choice to write the config.")]),e._v(" "),n("p",[e._v("You should paste the contents of the file below, replacing "),n("code",[e._v("<domain>")]),e._v(" with your domain name.")]),e._v(" "),n("p",[e._v("The only two differences are that we have suffixed the "),n("code",[e._v("<domain>")]),e._v(" with "),n("code",[e._v(":80")]),e._v(" and in the global config at "),n("code",[e._v("servers")]),e._v(" directive, we have changed the port from "),n("code",[e._v(":443")]),e._v(" to "),n("code",[e._v(":80")]),e._v(".")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[e._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    servers :80 {\n        timeouts {\n            read_body 120s\n        }\n    }\n}\n\n<domain>:80 {\n    root * /var/www/pterodactyl/public\n\n    file_server\n\n    php_fastcgi unix//run/php/php8.1-fpm.sock {\n        root /var/www/pterodactyl/public\n        index index.php\n\n        env PHP_VALUE "upload_max_filesize = 100M\n        post_max_size = 100M"\n        env HTTP_PROXY ""\n        # env HTTPS "on" # IMPORTANT: this is commented out, to disable HTTPS\n\n        read_timeout 300s\n        dial_timeout 300s\n        write_timeout 300s\n    }\n\n    header Strict-Transport-Security "max-age=16768000; preload;"\n    header X-Content-Type-Options "nosniff"\n    header X-XSS-Protection "1; mode=block;"\n    header X-Robots-Tag "none"\n    header Content-Security-Policy "frame-ancestors \'self\'"\n    header X-Frame-Options "DENY"\n    header Referrer-Policy "same-origin"\n\n    request_body {\n        max_size 100m\n    }\n\n    respond /.ht* 403\n\n    log {\n        output file /var/log/caddy/pterodactyl.log {\n            roll_size 100MiB\n            roll_keep_for 7d\n        }\n        level INFO\n    }\n}')])])]),n("h3",{attrs:{id:"enabling-configuration-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enabling-configuration-6"}},[e._v("#")]),e._v(" Enabling Configuration")]),e._v(" "),n("p",[e._v("The final step is to restart Caddy.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("systemctl restart caddy\n")])])])])],1),e._v(" "),n("h4",{attrs:{id:"next-step-wings-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-step-wings-installation"}},[e._v("#")]),e._v(" Next Step: "),n("RouterLink",{attrs:{to:"/wings/installing.html"}},[e._v("Wings Installation")])],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);