"use strict";(self.webpackChunkdreamweaver=self.webpackChunkdreamweaver||[]).push([[914],{77503:function(e,t,l){l.d(t,{S:function(){return k}});var n=l(64572),o=l(15785),i=l(15007),a=l(95223),r=l(75900),s=l.n(r),d=l(53971),c=l(68457),u=l(52078),p=l(67500),v=l(1895),m=l(34634),g=l(1254),h=l(47549),f=l(43925),w=l(32647),y=l(65480),O=l(47720),b=l(59273),C=l(3135),Z=l(516),x=l(65034);function S(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function D(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?S(Object(l),!0).forEach((function(t){(0,n.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}const j=/^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;var I={name:"14s3c4g",styles:"display:flex;gap:32px;width:100%;flex-direction:column"},P={name:"h8f25w",styles:"color:var(--spectrum-global-color-gray-800);display:inline-flex"},A={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"},N={name:"6apepd",styles:"display:flex;flex-direction:column;gap:48px"};const k=e=>{var t,l;let{showCreateForm:n,setShowCreateForm:r,isCreateNewCredential:S,setIsCreateNewCredential:F,setIsPrevious:U,formData:E,setFormData:z}=e;const{getCredentialData:M}=(0,i.useContext)(x.Z),T=M,{0:L,1:B}=(0,i.useState)(!1),{0:V,1:q}=(0,i.useState)(!1),{0:H,1:J}=(0,i.useState)({}),{0:Q,1:Y}=(0,i.useState)(""),{0:$,1:R}=(0,i.useState)(!1),{0:W,1:_}=(0,i.useState)([]),{0:G,1:K}=(0,i.useState)(!1),{0:X,1:ee}=(0,i.useState)(!1),{0:te,1:le}=(0,i.useState)(!1),{0:ne,1:oe}=(0,i.useState)(!1),{0:ie,1:ae}=(0,i.useState)(),{selectedOrganization:re,template:se,previousProjectDetail:de}=(0,i.useContext)(x.Z),ce=null==T?void 0:T[k],ue=null==ce||null===(t=ce.children)||void 0===t?void 0:t.filter((e=>Object.keys(e.props).some((e=>e.startsWith("contextHelp")))));(0,i.useEffect)((()=>{var e;null!==(e=window.adobeIMS)&&void 0!==e&&e.isSignedInUser()?setTimeout((()=>{B(!1)}),1e3):B(!0)}),[null===(l=window.adobeIMS)||void 0===l?void 0:l.isSignedInUser()]),(0,i.useEffect)((()=>{n&&q(!1)}),[n]),(0,i.useEffect)((()=>{(()=>{const e={},t={label:"Language",selectOptions:[]},l={label:"products",productList:[]};null==ce||ce.children.forEach((n=>{let{type:i,props:a}=n;var r,s;i===m.i&&null!=a&&a.children&&(t.required=a.required||!1,(r=t.selectOptions).push.apply(r,(0,o.Z)([].concat(a.children).map((e=>{let{props:{title:t,href:l}}=e;return{title:t,href:l}})))),z((e=>{var t,l;return D(D({},e),Array.isArray(a.children)?null:{Download:null===(t=a.children)||void 0===t||null===(l=t.props)||void 0===l?void 0:l.title})}))),i===C.QI&&null!=a&&a.children&&(s=l.productList).push.apply(s,(0,o.Z)([].concat(a.children).map((e=>{let{props:{label:t,icon:l}}=e;return{label:t,icon:l}})))),e[i]=D(D({},a),{},{required:i===p.M||(null==a?void 0:a.required)})})),t.selectOptions.length&&(e[g.U]=t,1===t.selectOptions.length&&z((e=>{var l,n;return D(D({},e),{},{Download:null===(l=t.selectOptions[0])||void 0===l?void 0:l.title,zipUrl:null===(n=t.selectOptions[0])||void 0===n?void 0:n.href})}))),null!=l&&l.productList.length&&(e[C.xs]=l);const n=!(null==de||!de.count);ee(!!n),_(e)})()}),[]),(0,i.useEffect)((()=>{const e=j.test(E.CredentialName),t=ce.children.some((e=>e.type===v.d));let l;t?E.AllowedOrigins&&(l=(0,c.Jv)(E.AllowedOrigins)):l=!0,ae(l);const n=e&&(!t||l)&&!0===E.Agree;K(n)}),[E]);const pe=(e,t)=>{let l;if(l="Download"===t?e.title:"Downloads"===t||"Agree"===t?e.target.checked:e.target.value,z((e=>D(D({},e),{},{[t]:l}))),"Downloads"===t&&pe(null==fe?void 0:fe.selectOptions[0],"Download"),"Download"===t){var n;const e=null==W||null===(n=W[g.U])||void 0===n?void 0:n.selectOptions.find((e=>e.title===l));e&&z((t=>D(D({},t),{},{zipUrl:e.href})))}};(0,i.useEffect)((()=>{X&&(U(!0),r(!0))}),[X]);const ve=null==W?void 0:W[u.v],me=null==W?void 0:W[p.M],ge=null==W?void 0:W[v.d],he=null==W?void 0:W[m.i],fe=null==W?void 0:W[g.U],we=null==W?void 0:W[C.QI],ye=null==W?void 0:W[C.xs],Oe=null==W?void 0:W[f.O];return(0,a.tZ)(i.default.Fragment,null,n&&!L&&(0,a.tZ)("div",{className:s()(null==ce?void 0:ce.className),css:N},(0,a.tZ)("div",{css:(0,a.iv)("display:flex;flex-direction:column;gap:48px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width: ",c.xU,") and (max-width: ",c.Ey,"){padding:0;width:100%;}","")},(0,a.tZ)("div",{css:A},(null==ce?void 0:ce.title)&&(0,a.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeL"},null==ce?void 0:ce.title),(null==ce?void 0:ce.paragraph)&&(0,a.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL"},null==ce?void 0:ce.paragraph),(0,a.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:P,onClick:()=>le(!0)},"developer"===re.type?"You're creating this credential in your personal developer organization":(0,a.tZ)(i.default.Fragment,null,"You're creating this credential in [",(0,a.tZ)("b",null,null==re?void 0:re.name),"]."),(0,a.tZ)(Z.c,{isShow:te,setIsShow:le})))),(0,a.tZ)("div",{css:(0,a.iv)("display:flex;gap:35px;@media screen and (min-width: ",c.xU,") and (max-width: ",c.Ey,"){flex-direction:column;padding-left:0;}","")},(0,a.tZ)("div",{css:(0,a.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width: ",c.xU,") and (max-width: ",c.Ey,"){width:100%;}","")},(0,a.tZ)("div",{css:I},me&&(0,a.tZ)(p.M,{nameProps:me,isFormValue:ue,formData:E,handleChange:pe}),ge&&(0,a.tZ)(v.d,{originsProps:ge,isFormValue:ue,formData:E,handleChange:pe,isAllowedOriginsValid:ie}),he&&fe&&(0,a.tZ)(m.i,{downloadsProp:he,type:"Downloads",formData:E,handleChange:pe}),E.Downloads&&fe&&(0,a.tZ)(g.U,{downloadProp:fe,isFormValue:ue,handleChange:pe}),(0,a.tZ)(C.QI,{products:we,product:ye}),Oe&&(0,a.tZ)(f.O,{formData:E,adobeDeveloperConsole:Oe,handleChange:pe}),(0,a.tZ)(w.p,{createCredential:async()=>{var e,t;const l=null===(e=window.adobeIMS)||void 0===e||null===(t=e.getTokenFromStorage())||void 0===t?void 0:t.token;l||console.log("User not logged in"),B(!0),r(!1);const n=se.apis.map((e=>({code:e.code,credentialType:e.credentialType,flowType:e.flowType,licenseConfigs:Array.isArray(e.licenseConfigs)&&e.licenseConfigs.length>0?[D(D({},e.licenseConfigs[0]),{},{op:"add"})]:[]}))),o={projectName:E.CredentialName,description:"created for get credential",metadata:{domain:E.AllowedOrigins},orgId:re.code,apis:n};try{var i,a,s;const e="/templates/install/"+se.id,t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+l,"x-api-key":null===(i=window)||void 0===i||null===(a=i.adobeIMS)||void 0===a||null===(s=a.adobeIdData)||void 0===s?void 0:s.client_id,Accept:"application/json"},body:JSON.stringify(o)}),n=await(null==t?void 0:t.json());if(t.ok)J(n),R(!0),oe(!0),B(!1);else{const e=n.errors[0].message.match(/\((\{.*\})\)/)[1],t=JSON.parse(e);d=t.messages[0].message,B(!1),oe(!0),K(!1),Y(d),r(!0),q(!0)}}catch(c){r(!0),B(!1),oe(!0),Y(c.message),q(!0)}var d},isValid:G,setIsCreateNewCredential:F,isCreateNewCredential:S}))),ve?(0,a.tZ)(h.c,{sideContent:null==ve?void 0:ve.children,SideComp:u.v}):null)),ne&&(0,a.tZ)(i.default.Fragment,null,(0,a.tZ)(d.F,{customDisableFunction:oe,message:n&&!$?Q:!V&&$&&"Your credentials were created successfully.",variant:V||n&&!$?"error":"success",disable:5e3})),L&&!$&&!V&&!n&&(0,a.tZ)(O.g,{credentials:ce,isCreateCredential:!0,downloadStatus:E.Downloads}),V&&!n&&!$&&(0,a.tZ)(b.I,{errorMessage:null==T?void 0:T[b.I]}),$&&!n&&(0,a.tZ)(y.Z,{response:H,formData:E,handleRestart:()=>{r(!0),R(!1),F(!0),ee(!0),z({})}}))}}}]);
//# sourceMappingURL=987e9e88-fd0049867eeed8e9fb1d.js.map