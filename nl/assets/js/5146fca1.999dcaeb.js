"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[608],{4964:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=n(7624),s=n(2172);const d={sidebar_position:3},i="Serveropdrachten (RCON)",o={id:"getting-started/configuration/server-commands",title:"Serveropdrachten (RCON)",description:"Hoe RCON te gebruiken om met de server te communiceren.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/getting-started/configuration/server-commands.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/server-commands",permalink:"/nl/getting-started/configuration/server-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/server-commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Spelinstellingen",permalink:"/nl/getting-started/configuration/game-settings"},next:{title:"Guides",permalink:"/nl/category/guides"}},a={},c=[{value:"RCON",id:"rcon",level:2},{value:"Lijst van serveropdrachten",id:"lijst-van-serveropdrachten",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"serveropdrachten-rcon",children:"Serveropdrachten (RCON)"}),"\n",(0,t.jsx)(r.p,{children:"Hoe RCON te gebruiken om met de server te communiceren."}),"\n",(0,t.jsx)(r.h2,{id:"rcon",children:"RCON"}),"\n",(0,t.jsx)(r.p,{children:"RCON is standaard ingeschakeld voor de palworld-server-docker image.\nHet openen van de RCON CLI is vrij eenvoudig:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker exec -it palworld-server rcon-cli "<commando> <waarde>"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Bijvoorbeeld, je kunt een bericht naar iedereen in de server uitzenden met het volgende commando:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'docker exec -it palworld-server rcon-cli "Broadcast Hallo iedereen"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Dit opent een CLI die RCON gebruikt om opdrachten naar de Palworld Server te schrijven."}),"\n",(0,t.jsx)(r.h2,{id:"lijst-van-serveropdrachten",children:"Lijst van serveropdrachten"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Command"}),(0,t.jsx)(r.th,{children:"Info"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Shutdown (Seconds) (MessageText)"}),(0,t.jsx)(r.td,{children:"De server wordt afgesloten na het aantal Seconden"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"DoExit"}),(0,t.jsx)(r.td,{children:"Forceer het stoppen van de server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Broadcast"}),(0,t.jsx)(r.td,{children:"Stuur een bericht naar alle spelers in de server"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"KickPlayer (SteamID)"}),(0,t.jsx)(r.td,{children:"Speler uit de server schoppen."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"BanPlayer (SteamID)"}),(0,t.jsx)(r.td,{children:"Speler verbannen uit de server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TeleportToPlayer (SteamID)"}),(0,t.jsx)(r.td,{children:"Teleporteer naar de huidige locatie van de doelspeler."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"TeleportToMe (SteamID)"}),(0,t.jsx)(r.td,{children:"Doelspeler teleporteren naar jouw huidige locatie."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ShowPlayers"}),(0,t.jsx)(r.td,{children:"Toon informatie over alle verbonden spelers."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Info"}),(0,t.jsx)(r.td,{children:"Toon serverinformatie."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Save"}),(0,t.jsx)(r.td,{children:"Sla de wereldgegevens op."})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["Voor een volledige lijst met opdrachten ga naar: ",(0,t.jsx)(r.a,{href:"https://tech.palworldgame.com/server-commands",children:"https://tech.palworldgame.com/server-commands"})]})]})}function h(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2172:(e,r,n)=>{n.d(r,{I:()=>o,M:()=>i});var t=n(1504);const s={},d=t.createContext(s);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);