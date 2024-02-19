"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[962],{6920:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=o(7624),r=o(2172);const i={sidebar_position:6},s="Running without root",d={id:"guides/running-without-root",title:"Running without root",description:"This is only for advanced users",source:"@site/docs/guides/running-without-root.md",sourceDirName:"guides",slug:"/guides/running-without-root",permalink:"/ko/guides/running-without-root",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/running-without-root.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8",permalink:"/ko/guides/automatic-updates"},next:{title:"Advanced",permalink:"/ko/category/advanced"}},u={},c=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-without-root",children:"Running without root"}),"\n",(0,t.jsx)(n.p,{children:"This is only for advanced users"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to run this container and\n",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/run/#user",children:"override the default user"})," which is root in this image."]}),"\n",(0,t.jsxs)(n.p,{children:["Because you are specifiying the user and group ",(0,t.jsx)(n.code,{children:"PUID"})," and ",(0,t.jsx)(n.code,{children:"PGID"})," are ignored."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to find your UID: ",(0,t.jsx)(n.code,{children:"id -u"}),"\nIf you want to find your GID: ",(0,t.jsx)(n.code,{children:"id -g"})]}),"\n",(0,t.jsxs)(n.p,{children:["You must set user to ",(0,t.jsx)(n.code,{children:"NUMBERICAL_UID:NUMBERICAL_GID"})]}),"\n",(0,t.jsx)(n.p,{children:"Below we assume your UID is 1000 and your GID is 1001"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In docker run add ",(0,t.jsx)(n.code,{children:"--user 1000:1001 \\"})," above the last line."]}),"\n",(0,t.jsxs)(n.li,{children:["In docker compose add ",(0,t.jsx)(n.code,{children:"user: 1000:1001"})," above ports."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you wish to run it with a different UID/GID than your own you will need to change the ownership of the directory that\nis being bind: ",(0,t.jsx)(n.code,{children:"chown UID:GID palworld/"}),"\nor by changing the permissions for all other: ",(0,t.jsx)(n.code,{children:"chmod o=rwx palworld/"})]})]})}function l(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>d,M:()=>s});var t=o(1504);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);