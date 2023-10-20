/*
CamScanner 解锁部分高级特权
"https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js"
***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://github.com/Js/CamScanner1.js

[mitm]
hostname = ap*.intsig.net
**************************/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1750731200"}}};
$done({body: JSON.stringify(obj)});