var _0x707f=["\x38\x31\x64\x42\x38\x65\x30\x34\x36\x63\x63\x36\x41\x36\x38\x65\x35\x39\x66\x65\x32\x34\x41\x64\x63","\x43\x48\x49\x52\x50\x5F\x41\x50\x50\x5F\x4B\x45\x59","\x52\x65\x63\x65\x69\x76\x69\x6E\x67\x20\x44\x61\x74\x61","\x6C\x6F\x67","\x6C\x65\x6E\x67\x74\x68","\x44\x65\x63\x6F\x64\x65\x20\x66\x61\x69\x6C\x65\x64","\x65\x72\x72\x6F\x72","\x63\x61\x74\x63\x68","\x76\x61\x6C\x75\x65","\x64\x61\x74\x61\x5F\x74\x6F\x5F\x73\x65\x6E\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x56\x69\x7A","\x73\x65\x6E\x64","\x74\x68\x65\x6E","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x70\x61\x6E","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x53\x74\x72\x69\x6E\x67","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x20\x3A\x20","","\x72\x65\x63\x65\x69\x76\x65\x64\x5F\x64\x61\x74\x61"];const {Chirp,toAscii}=ChirpConnectSDK;const config={CHIRP_APP_KEY:_0x707f[0]};const chirpInstance=Chirp({key:config[_0x707f[1]],onReceived:function(_0xe20ex3){console[_0x707f[3]](_0x707f[2]);if(_0xe20ex3[_0x707f[4]]> 0){const _0xe20ex4=toAscii(_0xe20ex3);console[_0x707f[3]](_0xe20ex4);addReceivedData(_0xe20ex4)}else {console[_0x707f[6]](_0x707f[5])}}});function sendData(){chirpInstance[_0x707f[13]]((_0xe20ex6)=>{content= document[_0x707f[10]](_0x707f[9])[_0x707f[8]];const _0xe20ex7={name:_0x707f[11],content:content};_0xe20ex6[_0x707f[12]](content)})[_0x707f[7]](console[_0x707f[6]])}function receiveData(){}function addReceivedData(_0xe20ex3){const _0xe20exa=document[_0x707f[15]](_0x707f[14]);const _0xe20exb=document[_0x707f[15]](_0x707f[16]);_0xe20exb[_0x707f[17]]=  new Date()[_0x707f[18]]();_0xe20exa[_0x707f[19]](_0xe20exb);const _0xe20exc=document[_0x707f[15]](_0x707f[16]);_0xe20exc[_0x707f[17]]= (_0x707f[20]+ _0xe20ex3+ _0x707f[21]);_0xe20exa[_0x707f[19]](_0xe20exc);document[_0x707f[10]](_0x707f[22])[_0x707f[19]](_0xe20exa)}