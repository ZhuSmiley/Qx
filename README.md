# some Js
#Display jd historical price

[rewrite_local]
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

[mitm]
hostname = api.m.jd.com


https://github.com/w37fhy/QuantumultX/blob/master/QuantumultX_JS.conf
