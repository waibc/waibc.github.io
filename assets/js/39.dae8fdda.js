(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{558:function(t,e,r){"use strict";r.r(e);var a=r(8),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"负载均衡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("\tupstream iotserver {\n        server 192.168.100.21:8081;\n         server 192.168.100.22:8081;\n    }\n\tserver {\n        listen       80;\n        server_name  localhost;\n\t\tclient_max_body_size 8M;\n\n\t\t#Web页面发布地址\n        location / {\n            root   /www/iotBuilder2;\n            index  index.html;\n   \n        }\n\t\t#web页面对应后台接口\n\t\tlocation /web/{ \n\t\t\tproxy_pass    http://iotserver/;\n\t\t\tproxy_set_header Host $http_host;\n\t\t\tproxy_set_header X-Real-IP $http_x_real_ip;\n\t\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\t\tproxy_set_header X-Forwarded-Proto $scheme;\n\t\t}\n    }\n")])])]),r("h3",{attrs:{id:"proxy-pass地址末尾斜杠"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass地址末尾斜杠"}},[t._v("#")]),t._v(" proxy_pass地址末尾斜杠")]),t._v(" "),r("p",[t._v("请求地址：http://127.0.0.1/web/getData")]),t._v(" "),r("ol",[r("li",[t._v("带斜杠，经代理后真实地址：http://127.0.0.1:8081/getData")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("location /web/{ \n\t\tproxy_pass    http://127.0.0.1:8081/;\n\t\tproxy_set_header Host $http_host;\n\t\tproxy_set_header X-Real-IP $http_x_real_ip;\n\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\tproxy_set_header X-Forwarded-Proto $scheme;\n}\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("不带斜杠，经代理后真实地址：http://127.0.0.1:8081/web/getData")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("location /web/{ \n\t\tproxy_pass    http://127.0.0.1:8081;\n\t\tproxy_set_header Host $http_host;\n\t\tproxy_set_header X-Real-IP $http_x_real_ip;\n\t\tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\t\tproxy_set_header X-Forwarded-Proto $scheme;\n}\n")])])]),r("copyright")],1)}),[],!1,null,null,null);e.default=s.exports}}]);