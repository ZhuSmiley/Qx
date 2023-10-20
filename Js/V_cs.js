
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1750952166"}}};
$done({body: JSON.stringify(obj)});