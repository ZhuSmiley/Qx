filters nuw

https://raw.githubusercontent.com/ZhuSmiley/Qx/main/Filter/Ads0.list, tag=Ads1, force-policy=Ads, update-interval=86400, opt-parser=true, enabled=true

https://raw.githubusercontent.com/ZhuSmiley/Qx/main/Filter/Ads00.list, tag=Ads2, force-policy=Ads, update-interval=86400, opt-parser=true, enabled=true

https://raw.githubusercontent.com/ZhuSmiley/Qx/main/Filter/Hij0.list, tag=Hijack, force-policy=Ads, update-interval=86400, opt-parser=true, enabled=true

https://raw.githubusercontent.com/ZhuSmiley/Qx/main/Filter/Privacy0.list, tag=Trace_Reject, force-policy=Ads, update-interval=86400, opt-parser=true, enabled=true









# some Js
#Display jd historical price

[rewrite_local]
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

[mitm]
hostname = api.m.jd.com


https://github.com/w37fhy/QuantumultX/blob/master/QuantumultX_JS.conf

https://raw.githubusercontent.com/w37fhy/QuantumultX/master/QuantumultX_JS.conf

vmess=ws-tls-zhumax.xyz:689, method=none, password=c92102ab-6414-40d3-83e1-0e24a874b814, obfs-host=ws-tls-zhumax.xyz, obfs=wss, obfs-uri=/ws, tls-verification=true,fast-open=false, udp-relay=false, tag=OR_jp


trojan=zhumax.xyz:443, password=2NUMY9UBNRF4Ziyf, over-tls=true, tls-verification=true, fast-open=false, udp-relay=false, tag=Or_trojan-tls-01
trojan=152.70.96.36:443, password=2NUMY9UBNRF4Ziyf, over-tls=true, tls-host=zhumax.xyz, tls-verification=true, fast-open=false, udp-relay=false, tag=Or_trojan-tls-02

