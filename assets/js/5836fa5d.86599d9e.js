"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[855],{1089:function(e,n,a){a.r(n),a.d(n,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return u}});var t=a(7462),o=a(3366),r=a(7294),l=a(3905),i=a(8086),p=a(3772),s=function(){return r.createElement(p.Map,{center:{lat:33.450701,lng:126.570667},style:{width:"100%",height:"450px"},level:3},r.createElement(p.MapMarker,{position:{lat:33.450701,lng:126.570667}},r.createElement("div",{style:{padding:"5px"}},"Hello World! ",r.createElement("br",null),r.createElement("a",{href:"https://map.kakao.com/link/map/Hello World!,33.450701,126.570667",style:{color:"blue"},target:"_blank"},"\ud070\uc9c0\ub3c4\ubcf4\uae30")," ",r.createElement("a",{href:"https://map.kakao.com/link/to/Hello World!,33.450701,126.570667",style:{color:"blue"},target:"_blank"},"\uae38\ucc3e\uae30"))))},m=["components"],c={title:"\ub9c8\ucee4\uc5d0 \uc778\ud3ec\uc708\ub3c4\uc6b0 \ud45c\uc2dc\ud558\uae30",sidebar_position:5},d=void 0,k={unversionedId:"sample/overlay/markerWithInfoWindow",id:"sample/overlay/markerWithInfoWindow",isDocsHomePage:!1,title:"\ub9c8\ucee4\uc5d0 \uc778\ud3ec\uc708\ub3c4\uc6b0 \ud45c\uc2dc\ud558\uae30",description:"\ub9c8\ucee4 \uc704\uc5d0 \uc778\ud3ec\uc708\ub3c4\uc6b0\ub97c \ud568\uaed8 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc778\ud3ec\uc708\ub3c4\uc6b0\uc5d0 \ub4e4\uc5b4\uac08 \ub0b4\uc6a9\uc740 HTML (React Component)\ub85c \uc790\uc720\ub86d\uac8c \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/markerWithInfoWindow.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/markerWithInfoWindow",permalink:"/docs/sample/overlay/markerWithInfoWindow",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/markerWithInfoWindow.mdx",version:"current",sidebarPosition:5,frontMatter:{title:"\ub9c8\ucee4\uc5d0 \uc778\ud3ec\uc708\ub3c4\uc6b0 \ud45c\uc2dc\ud558\uae30",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\uc778\ud3ec\uc708\ub3c4\uc6b0 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/overlay/basicInfoWindow"},next:{title:"\ub9c8\ucee4\uc5d0 \ud074\ub9ad \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",permalink:"/docs/sample/overlay/addMarkerClickEvent"}},u=[{value:"Source Code",id:"source-code",children:[]}],h={toc:u};function f(e){var n=e.components,a=(0,o.Z)(e,m);return(0,l.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ub9c8\ucee4 \uc704\uc5d0 \uc778\ud3ec\uc708\ub3c4\uc6b0\ub97c \ud568\uaed8 \ud45c\uc2dc\ud569\ub2c8\ub2e4. \uc778\ud3ec\uc708\ub3c4\uc6b0\uc5d0 \ub4e4\uc5b4\uac08 \ub0b4\uc6a9\uc740 HTML (React Component)\ub85c \uc790\uc720\ub86d\uac8c \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(s,{mdxType:"SampleCreateMap"}),(0,l.kt)("h3",{id:"source-code"},"Source Code"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"original docs : ",(0,l.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/markerWithInfoWindow/"},"https://apis.map.kakao.com/web/sample/markerWithInfoWindow/"))),(0,l.kt)(i.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { Map, MapMarker } from "react-kakao-maps-sdk";\n\nconst SampleCreateMap = () => {\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    >\n      <MapMarker // \uc778\ud3ec\uc708\ub3c4\uc6b0\ub97c \uc0dd\uc131\ud558\uace0 \uc9c0\ub3c4\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4\n        position={{\n          // \uc778\ud3ec\uc708\ub3c4\uc6b0\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n      >\n        {/* MapMarker\uc758 \uc790\uc2dd\uc744 \ub123\uc5b4\uc90c\uc73c\ub85c \ud574\ub2f9 \uc790\uc2dd\uc774 InfoWindow\ub85c \ub9cc\ub4e4\uc5b4\uc9c0\uac8c \ud569\ub2c8\ub2e4 */}\n        {/* \uc778\ud3ec\uc708\ub3c4\uc6b0\uc5d0 \ud45c\ucd9c\ub420 \ub0b4\uc6a9\uc73c\ub85c HTML \ubb38\uc790\uc5f4\uc774\ub098 React Component\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4 */}\n        <div style={{ padding: "5px" }}>\n          Hello World! <br />\n          <a\n            href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667"\n            style={{ color: "blue" }}\n            target="_blank"\n          >\n            \ud070\uc9c0\ub3c4\ubcf4\uae30\n          </a>{" "}\n          <a\n            href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"\n            style={{ color: "blue" }}\n            target="_blank"\n          >\n            \uae38\ucc3e\uae30\n          </a>\n        </div>\n      </MapMarker>\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}f.isMDXComponent=!0}}]);