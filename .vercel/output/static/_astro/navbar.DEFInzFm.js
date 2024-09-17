import{c as q,u as k,j as t,S as Ne,a as K,b as Y,P as A,d as E,e as z,f as G,g as Re,h as j,C as je,i as L,D as jt,k as Mt,l as Ce,m as Me,O as Ie,n as Ee,o as It,p as Et,T as Ae,q as Te,r as At,R as Tt,s as Pt,t as S,B as $}from"./index.Cnfu0Ja8.js";import{r as i,R as I,a as _t}from"./index.B7Bdx_XD.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pe=(...e)=>e.filter((o,n,r)=>!!o&&r.indexOf(o)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=i.forwardRef(({color:e="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:c,...u},d)=>i.createElement("svg",{ref:d,...kt,width:o,height:o,stroke:e,strokeWidth:r?Number(n)*24/Number(o):n,className:Pe("lucide",s),...u},[...c.map(([m,l])=>i.createElement(m,l)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=(e,o)=>{const n=i.forwardRef(({className:r,...s},a)=>i.createElement(Ot,{ref:a,iconNode:o,className:Pe(`lucide-${St(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=Dt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);function se(e){const o=e+"CollectionProvider",[n,r]=q(o),[s,a]=n(o,{collectionRef:{current:null},itemMap:new Map}),c=N=>{const{scope:p,children:x}=N,h=I.useRef(null),C=I.useRef(new Map).current;return t.jsx(s,{scope:p,itemMap:C,collectionRef:h,children:x})};c.displayName=o;const u=e+"CollectionSlot",d=I.forwardRef((N,p)=>{const{scope:x,children:h}=N,C=a(u,x),g=k(p,C.collectionRef);return t.jsx(Ne,{ref:g,children:h})});d.displayName=u;const m=e+"CollectionItemSlot",l="data-radix-collection-item",f=I.forwardRef((N,p)=>{const{scope:x,children:h,...C}=N,g=I.useRef(null),v=k(p,g),w=a(m,x);return I.useEffect(()=>(w.itemMap.set(g,{ref:g,...C}),()=>void w.itemMap.delete(g))),t.jsx(Ne,{[l]:"",ref:v,children:h})});f.displayName=m;function y(N){const p=a(e+"CollectionConsumer",N);return I.useCallback(()=>{const h=p.collectionRef.current;if(!h)return[];const C=Array.from(h.querySelectorAll(`[${l}]`));return Array.from(p.itemMap.values()).sort((w,b)=>C.indexOf(w.ref.current)-C.indexOf(b.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:c,Slot:d,ItemSlot:f},y,r]}var ie="Collapsible",[Ft,_e]=q(ie),[Vt,ce]=Ft(ie),Se=i.forwardRef((e,o)=>{const{__scopeCollapsible:n,open:r,defaultOpen:s,disabled:a,onOpenChange:c,...u}=e,[d=!1,m]=K({prop:r,defaultProp:s,onChange:c});return t.jsx(Vt,{scope:n,disabled:a,contentId:Y(),open:d,onOpenToggle:i.useCallback(()=>m(l=>!l),[m]),children:t.jsx(A.div,{"data-state":de(d),"data-disabled":a?"":void 0,...u,ref:o})})});Se.displayName=ie;var ke="CollapsibleTrigger",Oe=i.forwardRef((e,o)=>{const{__scopeCollapsible:n,...r}=e,s=ce(ke,n);return t.jsx(A.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":de(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...r,ref:o,onClick:E(e.onClick,s.onOpenToggle)})});Oe.displayName=ke;var le="CollapsibleContent",De=i.forwardRef((e,o)=>{const{forceMount:n,...r}=e,s=ce(le,e.__scopeCollapsible);return t.jsx(z,{present:n||s.open,children:({present:a})=>t.jsx($t,{...r,ref:o,present:a})})});De.displayName=le;var $t=i.forwardRef((e,o)=>{const{__scopeCollapsible:n,present:r,children:s,...a}=e,c=ce(le,n),[u,d]=i.useState(r),m=i.useRef(null),l=k(o,m),f=i.useRef(0),y=f.current,N=i.useRef(0),p=N.current,x=c.open||u,h=i.useRef(x),C=i.useRef();return i.useEffect(()=>{const g=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(g)},[]),G(()=>{const g=m.current;if(g){C.current=C.current||{transitionDuration:g.style.transitionDuration,animationName:g.style.animationName},g.style.transitionDuration="0s",g.style.animationName="none";const v=g.getBoundingClientRect();f.current=v.height,N.current=v.width,h.current||(g.style.transitionDuration=C.current.transitionDuration,g.style.animationName=C.current.animationName),d(r)}},[c.open,r]),t.jsx(A.div,{"data-state":de(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!x,...a,ref:l,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":p?`${p}px`:void 0,...e.style},children:x&&s})});function de(e){return e?"open":"closed"}var Kt=Se,zt=Oe,Ht=De,O="Accordion",Bt=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[ue,Gt,Ut]=se(O),[X,Lo]=q(O,[Ut,_e]),fe=_e(),Le=I.forwardRef((e,o)=>{const{type:n,...r}=e,s=r,a=r;return t.jsx(ue.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?t.jsx(Xt,{...a,ref:o}):t.jsx(Yt,{...s,ref:o})})});Le.displayName=O;var[Fe,Wt]=X(O),[Ve,qt]=X(O,{collapsible:!1}),Yt=I.forwardRef((e,o)=>{const{value:n,defaultValue:r,onValueChange:s=()=>{},collapsible:a=!1,...c}=e,[u,d]=K({prop:n,defaultProp:r,onChange:s});return t.jsx(Fe,{scope:e.__scopeAccordion,value:u?[u]:[],onItemOpen:d,onItemClose:I.useCallback(()=>a&&d(""),[a,d]),children:t.jsx(Ve,{scope:e.__scopeAccordion,collapsible:a,children:t.jsx($e,{...c,ref:o})})})}),Xt=I.forwardRef((e,o)=>{const{value:n,defaultValue:r,onValueChange:s=()=>{},...a}=e,[c=[],u]=K({prop:n,defaultProp:r,onChange:s}),d=I.useCallback(l=>u((f=[])=>[...f,l]),[u]),m=I.useCallback(l=>u((f=[])=>f.filter(y=>y!==l)),[u]);return t.jsx(Fe,{scope:e.__scopeAccordion,value:c,onItemOpen:d,onItemClose:m,children:t.jsx(Ve,{scope:e.__scopeAccordion,collapsible:!0,children:t.jsx($e,{...a,ref:o})})})}),[Zt,Z]=X(O),$e=I.forwardRef((e,o)=>{const{__scopeAccordion:n,disabled:r,dir:s,orientation:a="vertical",...c}=e,u=I.useRef(null),d=k(u,o),m=Gt(n),f=Re(s)==="ltr",y=E(e.onKeyDown,N=>{if(!Bt.includes(N.key))return;const p=N.target,x=m().filter(P=>!P.ref.current?.disabled),h=x.findIndex(P=>P.ref.current===p),C=x.length;if(h===-1)return;N.preventDefault();let g=h;const v=0,w=C-1,b=()=>{g=h+1,g>w&&(g=v)},R=()=>{g=h-1,g<v&&(g=w)};switch(N.key){case"Home":g=v;break;case"End":g=w;break;case"ArrowRight":a==="horizontal"&&(f?b():R());break;case"ArrowDown":a==="vertical"&&b();break;case"ArrowLeft":a==="horizontal"&&(f?R():b());break;case"ArrowUp":a==="vertical"&&R();break}const _=g%C;x[_].ref.current?.focus()});return t.jsx(Zt,{scope:n,disabled:r,direction:s,orientation:a,children:t.jsx(ue.Slot,{scope:n,children:t.jsx(A.div,{...c,"data-orientation":a,ref:d,onKeyDown:r?void 0:y})})})}),U="AccordionItem",[Jt,me]=X(U),Ke=I.forwardRef((e,o)=>{const{__scopeAccordion:n,value:r,...s}=e,a=Z(U,n),c=Wt(U,n),u=fe(n),d=Y(),m=r&&c.value.includes(r)||!1,l=a.disabled||e.disabled;return t.jsx(Jt,{scope:n,open:m,disabled:l,triggerId:d,children:t.jsx(Kt,{"data-orientation":a.orientation,"data-state":We(m),...u,...s,ref:o,disabled:l,open:m,onOpenChange:f=>{f?c.onItemOpen(r):c.onItemClose(r)}})})});Ke.displayName=U;var ze="AccordionHeader",He=I.forwardRef((e,o)=>{const{__scopeAccordion:n,...r}=e,s=Z(O,n),a=me(ze,n);return t.jsx(A.h3,{"data-orientation":s.orientation,"data-state":We(a.open),"data-disabled":a.disabled?"":void 0,...r,ref:o})});He.displayName=ze;var Q="AccordionTrigger",Be=I.forwardRef((e,o)=>{const{__scopeAccordion:n,...r}=e,s=Z(O,n),a=me(Q,n),c=qt(Q,n),u=fe(n);return t.jsx(ue.ItemSlot,{scope:n,children:t.jsx(zt,{"aria-disabled":a.open&&!c.collapsible||void 0,"data-orientation":s.orientation,id:a.triggerId,...u,...r,ref:o})})});Be.displayName=Q;var Ge="AccordionContent",Ue=I.forwardRef((e,o)=>{const{__scopeAccordion:n,...r}=e,s=Z(O,n),a=me(Ge,n),c=fe(n);return t.jsx(Ht,{role:"region","aria-labelledby":a.triggerId,"data-orientation":s.orientation,...c,...r,ref:o,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});Ue.displayName=Ge;function We(e){return e?"open":"closed"}var Qt=Le,eo=Ke,to=He,qe=Be,Ye=Ue;const oo=Qt,ee=i.forwardRef(({className:e,...o},n)=>t.jsx(eo,{ref:n,className:j("border-b",e),...o}));ee.displayName="AccordionItem";const te=i.forwardRef(({className:e,children:o,...n},r)=>t.jsx(to,{className:"flex",children:t.jsxs(qe,{ref:r,className:j("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[o,t.jsx(je,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));te.displayName=qe.displayName;const no=i.forwardRef(({className:e,children:o,...n},r)=>t.jsx(Ye,{ref:r,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:t.jsx("div",{className:j("pb-4 pt-0",e),children:o})}));no.displayName=Ye.displayName;function ro(e){const o=i.useRef({value:e,previous:e});return i.useMemo(()=>(o.current.value!==e&&(o.current.previous=o.current.value,o.current.value=e),o.current.previous),[e])}var ao="VisuallyHidden",Xe=i.forwardRef((e,o)=>t.jsx(A.span,{...e,ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Xe.displayName=ao;var so=Xe,V="NavigationMenu",[pe,Ze,io]=se(V),[oe,co,lo]=se(V),[ve,Fo]=q(V,[io,lo]),[uo,T]=ve(V),[fo,mo]=ve(V),Je=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:s,defaultValue:a,delayDuration:c=200,skipDelayDuration:u=300,orientation:d="horizontal",dir:m,...l}=e,[f,y]=i.useState(null),N=k(o,M=>y(M)),p=Re(m),x=i.useRef(0),h=i.useRef(0),C=i.useRef(0),[g,v]=i.useState(!0),[w="",b]=K({prop:r,onChange:M=>{const D=M!=="",J=u>0;D?(window.clearTimeout(C.current),J&&v(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>v(!0),u)),s?.(M)},defaultProp:a}),R=i.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>b(""),150)},[b]),_=i.useCallback(M=>{window.clearTimeout(h.current),b(M)},[b]),P=i.useCallback(M=>{w===M?window.clearTimeout(h.current):x.current=window.setTimeout(()=>{window.clearTimeout(h.current),b(M)},c)},[w,b,c]);return i.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(h.current),window.clearTimeout(C.current)},[]),t.jsx(et,{scope:n,isRootMenu:!0,value:w,dir:p,orientation:d,rootNavigationMenu:f,onTriggerEnter:M=>{window.clearTimeout(x.current),g?P(M):_(M)},onTriggerLeave:()=>{window.clearTimeout(x.current),R()},onContentEnter:()=>window.clearTimeout(h.current),onContentLeave:R,onItemSelect:M=>{b(D=>D===M?"":M)},onItemDismiss:()=>b(""),children:t.jsx(A.nav,{"aria-label":"Main","data-orientation":d,dir:p,...l,ref:N})})});Je.displayName=V;var Qe="NavigationMenuSub",po=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:s,defaultValue:a,orientation:c="horizontal",...u}=e,d=T(Qe,n),[m="",l]=K({prop:r,onChange:s,defaultProp:a});return t.jsx(et,{scope:n,isRootMenu:!1,value:m,dir:d.dir,orientation:c,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:f=>l(f),onItemSelect:f=>l(f),onItemDismiss:()=>l(""),children:t.jsx(A.div,{"data-orientation":c,...u,ref:o})})});po.displayName=Qe;var et=e=>{const{scope:o,isRootMenu:n,rootNavigationMenu:r,dir:s,orientation:a,children:c,value:u,onItemSelect:d,onItemDismiss:m,onTriggerEnter:l,onTriggerLeave:f,onContentEnter:y,onContentLeave:N}=e,[p,x]=i.useState(null),[h,C]=i.useState(new Map),[g,v]=i.useState(null);return t.jsx(uo,{scope:o,isRootMenu:n,rootNavigationMenu:r,value:u,previousValue:ro(u),baseId:Y(),dir:s,orientation:a,viewport:p,onViewportChange:x,indicatorTrack:g,onIndicatorTrackChange:v,onTriggerEnter:L(l),onTriggerLeave:L(f),onContentEnter:L(y),onContentLeave:L(N),onItemSelect:L(d),onItemDismiss:L(m),onViewportContentChange:i.useCallback((w,b)=>{C(R=>(R.set(w,b),new Map(R)))},[]),onViewportContentRemove:i.useCallback(w=>{C(b=>b.has(w)?(b.delete(w),new Map(b)):b)},[]),children:t.jsx(pe.Provider,{scope:o,children:t.jsx(fo,{scope:o,items:h,children:c})})})},tt="NavigationMenuList",ot=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,...r}=e,s=T(tt,n),a=t.jsx(A.ul,{"data-orientation":s.orientation,...r,ref:o});return t.jsx(A.div,{style:{position:"relative"},ref:s.onIndicatorTrackChange,children:t.jsx(pe.Slot,{scope:n,children:s.isRootMenu?t.jsx(dt,{asChild:!0,children:a}):a})})});ot.displayName=tt;var nt="NavigationMenuItem",[vo,rt]=ve(nt),go=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,value:r,...s}=e,a=Y(),c=r||a||"LEGACY_REACT_AUTO_VALUE",u=i.useRef(null),d=i.useRef(null),m=i.useRef(null),l=i.useRef(()=>{}),f=i.useRef(!1),y=i.useCallback((p="start")=>{if(u.current){l.current();const x=re(u.current);x.length&&he(p==="start"?x:x.reverse())}},[]),N=i.useCallback(()=>{if(u.current){const p=re(u.current);p.length&&(l.current=Ro(p))}},[]);return t.jsx(vo,{scope:n,value:c,triggerRef:d,contentRef:u,focusProxyRef:m,wasEscapeCloseRef:f,onEntryKeyDown:y,onFocusProxyEnter:y,onRootContentClose:N,onContentFocusOutside:N,children:t.jsx(A.li,{...s,ref:o})})});go.displayName=nt;var ne="NavigationMenuTrigger",at=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,disabled:r,...s}=e,a=T(ne,e.__scopeNavigationMenu),c=rt(ne,e.__scopeNavigationMenu),u=i.useRef(null),d=k(u,c.triggerRef,o),m=ft(a.baseId,c.value),l=mt(a.baseId,c.value),f=i.useRef(!1),y=i.useRef(!1),N=c.value===a.value;return t.jsxs(t.Fragment,{children:[t.jsx(pe.ItemSlot,{scope:n,value:c.value,children:t.jsx(ut,{asChild:!0,children:t.jsx(A.button,{id:m,disabled:r,"data-disabled":r?"":void 0,"data-state":we(N),"aria-expanded":N,"aria-controls":l,...s,ref:d,onPointerEnter:E(e.onPointerEnter,()=>{y.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:E(e.onPointerMove,W(()=>{r||y.current||c.wasEscapeCloseRef.current||f.current||(a.onTriggerEnter(c.value),f.current=!0)})),onPointerLeave:E(e.onPointerLeave,W(()=>{r||(a.onTriggerLeave(),f.current=!1)})),onClick:E(e.onClick,()=>{a.onItemSelect(c.value),y.current=N}),onKeyDown:E(e.onKeyDown,p=>{const h={horizontal:"ArrowDown",vertical:a.dir==="rtl"?"ArrowLeft":"ArrowRight"}[a.orientation];N&&p.key===h&&(c.onEntryKeyDown(),p.preventDefault())})})})}),N&&t.jsxs(t.Fragment,{children:[t.jsx(so,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:p=>{const x=c.contentRef.current,h=p.relatedTarget,C=h===u.current,g=x?.contains(h);(C||!g)&&c.onFocusProxyEnter(C?"start":"end")}}),a.viewport&&t.jsx("span",{"aria-owns":l})]})]})});at.displayName=ne;var xo="NavigationMenuLink",be="navigationMenu.linkSelect",ho=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,active:r,onSelect:s,...a}=e;return t.jsx(ut,{asChild:!0,children:t.jsx(A.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...a,ref:o,onClick:E(e.onClick,c=>{const u=c.target,d=new CustomEvent(be,{bubbles:!0,cancelable:!0});if(u.addEventListener(be,m=>s?.(m),{once:!0}),Ce(u,d),!d.defaultPrevented&&!c.metaKey){const m=new CustomEvent(H,{bubbles:!0,cancelable:!0});Ce(u,m)}},{checkForDefaultPrevented:!1})})})});ho.displayName=xo;var ge="NavigationMenuIndicator",st=i.forwardRef((e,o)=>{const{forceMount:n,...r}=e,s=T(ge,e.__scopeNavigationMenu),a=!!s.value;return s.indicatorTrack?_t.createPortal(t.jsx(z,{present:n||a,children:t.jsx(wo,{...r,ref:o})}),s.indicatorTrack):null});st.displayName=ge;var wo=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,...r}=e,s=T(ge,n),a=Ze(n),[c,u]=i.useState(null),[d,m]=i.useState(null),l=s.orientation==="horizontal",f=!!s.value;i.useEffect(()=>{const p=a().find(x=>x.value===s.value)?.ref.current;p&&u(p)},[a,s.value]);const y=()=>{c&&m({size:l?c.offsetWidth:c.offsetHeight,offset:l?c.offsetLeft:c.offsetTop})};return ae(c,y),ae(s.indicatorTrack,y),d?t.jsx(A.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":s.orientation,...r,ref:o,style:{position:"absolute",...l?{left:0,width:d.size+"px",transform:`translateX(${d.offset}px)`}:{top:0,height:d.size+"px",transform:`translateY(${d.offset}px)`},...r.style}}):null}),F="NavigationMenuContent",it=i.forwardRef((e,o)=>{const{forceMount:n,...r}=e,s=T(F,e.__scopeNavigationMenu),a=rt(F,e.__scopeNavigationMenu),c=k(a.contentRef,o),u=a.value===s.value,d={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...r};return s.viewport?t.jsx(No,{forceMount:n,...d,ref:c}):t.jsx(z,{present:n||u,children:t.jsx(ct,{"data-state":we(u),...d,ref:c,onPointerEnter:E(e.onPointerEnter,s.onContentEnter),onPointerLeave:E(e.onPointerLeave,W(s.onContentLeave)),style:{pointerEvents:!u&&s.isRootMenu?"none":void 0,...d.style}})})});it.displayName=F;var No=i.forwardRef((e,o)=>{const n=T(F,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:s}=n;return G(()=>{r(e.value,{ref:o,...e})},[e,o,r]),G(()=>()=>s(e.value),[e.value,s]),null}),H="navigationMenu.rootContentDismiss",ct=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:s,focusProxyRef:a,wasEscapeCloseRef:c,onRootContentClose:u,onContentFocusOutside:d,...m}=e,l=T(F,n),f=i.useRef(null),y=k(f,o),N=ft(l.baseId,r),p=mt(l.baseId,r),x=Ze(n),h=i.useRef(null),{onItemDismiss:C}=l;i.useEffect(()=>{const v=f.current;if(l.isRootMenu&&v){const w=()=>{C(),u(),v.contains(document.activeElement)&&s.current?.focus()};return v.addEventListener(H,w),()=>v.removeEventListener(H,w)}},[l.isRootMenu,e.value,s,C,u]);const g=i.useMemo(()=>{const w=x().map(D=>D.value);l.dir==="rtl"&&w.reverse();const b=w.indexOf(l.value),R=w.indexOf(l.previousValue),_=r===l.value,P=R===w.indexOf(r);if(!_&&!P)return h.current;const M=(()=>{if(b!==R){if(_&&R!==-1)return b>R?"from-end":"from-start";if(P&&b!==-1)return b>R?"to-start":"to-end"}return null})();return h.current=M,M},[l.previousValue,l.value,l.dir,x,r]);return t.jsx(dt,{asChild:!0,children:t.jsx(jt,{id:p,"aria-labelledby":N,"data-motion":g,"data-orientation":l.orientation,...m,ref:y,disableOutsidePointerEvents:!1,onDismiss:()=>{const v=new Event(H,{bubbles:!0,cancelable:!0});f.current?.dispatchEvent(v)},onFocusOutside:E(e.onFocusOutside,v=>{d();const w=v.target;l.rootNavigationMenu?.contains(w)&&v.preventDefault()}),onPointerDownOutside:E(e.onPointerDownOutside,v=>{const w=v.target,b=x().some(_=>_.ref.current?.contains(w)),R=l.isRootMenu&&l.viewport?.contains(w);(b||R||!l.isRootMenu)&&v.preventDefault()}),onKeyDown:E(e.onKeyDown,v=>{const w=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!w){const R=re(v.currentTarget),_=document.activeElement,P=R.findIndex(J=>J===_),D=v.shiftKey?R.slice(0,P).reverse():R.slice(P+1,R.length);he(D)?v.preventDefault():a.current?.focus()}}),onEscapeKeyDown:E(e.onEscapeKeyDown,v=>{c.current=!0})})})}),xe="NavigationMenuViewport",lt=i.forwardRef((e,o)=>{const{forceMount:n,...r}=e,a=!!T(xe,e.__scopeNavigationMenu).value;return t.jsx(z,{present:n||a,children:t.jsx(Co,{...r,ref:o})})});lt.displayName=xe;var Co=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,children:r,...s}=e,a=T(xe,n),c=k(o,a.onViewportChange),u=mo(F,e.__scopeNavigationMenu),[d,m]=i.useState(null),[l,f]=i.useState(null),y=d?d?.width+"px":void 0,N=d?d?.height+"px":void 0,p=!!a.value,x=p?a.value:a.previousValue;return ae(l,()=>{l&&m({width:l.offsetWidth,height:l.offsetHeight})}),t.jsx(A.div,{"data-state":we(p),"data-orientation":a.orientation,...s,ref:c,style:{pointerEvents:!p&&a.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":N,...s.style},onPointerEnter:E(e.onPointerEnter,a.onContentEnter),onPointerLeave:E(e.onPointerLeave,W(a.onContentLeave)),children:Array.from(u.items).map(([C,{ref:g,forceMount:v,...w}])=>{const b=x===C;return t.jsx(z,{present:v||b,children:t.jsx(ct,{...w,ref:Mt(g,R=>{b&&R&&f(R)})})},C)})})}),bo="FocusGroup",dt=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,...r}=e,s=T(bo,n);return t.jsx(oe.Provider,{scope:n,children:t.jsx(oe.Slot,{scope:n,children:t.jsx(A.div,{dir:s.dir,...r,ref:o})})})}),ye=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],yo="FocusGroupItem",ut=i.forwardRef((e,o)=>{const{__scopeNavigationMenu:n,...r}=e,s=co(n),a=T(yo,n);return t.jsx(oe.ItemSlot,{scope:n,children:t.jsx(A.button,{...r,ref:o,onKeyDown:E(e.onKeyDown,c=>{if(["Home","End",...ye].includes(c.key)){let d=s().map(f=>f.ref.current);if([a.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&d.reverse(),ye.includes(c.key)){const f=d.indexOf(c.currentTarget);d=d.slice(f+1)}setTimeout(()=>he(d)),c.preventDefault()}})})})});function re(e){const o=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o}function he(e){const o=document.activeElement;return e.some(n=>n===o?!0:(n.focus(),document.activeElement!==o))}function Ro(e){return e.forEach(o=>{o.dataset.tabindex=o.getAttribute("tabindex")||"",o.setAttribute("tabindex","-1")}),()=>{e.forEach(o=>{const n=o.dataset.tabindex;o.setAttribute("tabindex",n)})}}function ae(e,o){const n=L(o);G(()=>{let r=0;if(e){const s=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return s.observe(e),()=>{window.cancelAnimationFrame(r),s.unobserve(e)}}},[e,n])}function we(e){return e?"open":"closed"}function ft(e,o){return`${e}-trigger-${o}`}function mt(e,o){return`${e}-content-${o}`}function W(e){return o=>o.pointerType==="mouse"?e(o):void 0}var pt=Je,vt=ot,gt=at,xt=st,ht=it,wt=lt;const jo=i.forwardRef(({className:e,children:o,...n},r)=>t.jsxs(pt,{ref:r,className:j("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...n,children:[o,t.jsx(Nt,{})]}));jo.displayName=pt.displayName;const Mo=i.forwardRef(({className:e,...o},n)=>t.jsx(vt,{ref:n,className:j("group flex flex-1 list-none items-center justify-center space-x-1",e),...o}));Mo.displayName=vt.displayName;const B=Me("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),Io=i.forwardRef(({className:e,children:o,...n},r)=>t.jsxs(gt,{ref:r,className:j(B(),"group",e),...n,children:[o," ",t.jsx(je,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));Io.displayName=gt.displayName;const Eo=i.forwardRef(({className:e,...o},n)=>t.jsx(ht,{ref:n,className:j("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",e),...o}));Eo.displayName=ht.displayName;const Nt=i.forwardRef(({className:e,...o},n)=>t.jsx("div",{className:j("absolute left-0 top-full flex justify-center"),children:t.jsx(wt,{className:j("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:n,...o})}));Nt.displayName=wt.displayName;const Ao=i.forwardRef(({className:e,...o},n)=>t.jsx(xt,{ref:n,className:j("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...o,children:t.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}));Ao.displayName=xt.displayName;const To=Tt,Po=Pt,_o=At,Ct=i.forwardRef(({className:e,...o},n)=>t.jsx(Ie,{className:j("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...o,ref:n}));Ct.displayName=Ie.displayName;const So=Me("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),bt=i.forwardRef(({side:e="right",className:o,children:n,...r},s)=>t.jsxs(_o,{children:[t.jsx(Ct,{}),t.jsxs(Ee,{ref:s,className:j(So({side:e}),o),...r,children:[t.jsxs(It,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[t.jsx(Et,{className:"h-4 w-4"}),t.jsx("span",{className:"sr-only",children:"Close"})]}),n]})]}));bt.displayName=Ee.displayName;const yt=({className:e,...o})=>t.jsx("div",{className:j("flex flex-col space-y-2 text-center sm:text-left",e),...o});yt.displayName="SheetHeader";const Rt=i.forwardRef(({className:e,...o},n)=>t.jsx(Ae,{ref:n,className:j("text-lg font-semibold text-foreground",e),...o}));Rt.displayName=Ae.displayName;const ko=i.forwardRef(({className:e,...o},n)=>t.jsx(Te,{ref:n,className:j("text-sm text-muted-foreground",e),...o}));ko.displayName=Te.displayName;const Vo=()=>{const[e,o]=i.useState(!1);return t.jsx("section",{className:"py-4 border-b border-gray-100 shadow sticky top-0 z-10 backdrop-blur-sm bg-opacity-50 bg-gray-50",children:t.jsxs("div",{className:"container relative",children:[t.jsxs("nav",{className:"hidden justify-between lg:flex",children:[t.jsxs("div",{className:"flex items-center gap-6",children:[t.jsxs("a",{href:"/",className:"flex items-center gap-2",children:[t.jsx("img",{src:"https://www.shadcnblocks.com/images/block/block-1.svg",className:"w-8",alt:"logo"}),t.jsx("span",{className:"text-xl font-bold",children:"Shadcn Blocks"})]}),t.jsxs("div",{className:"flex items-center",children:[t.jsx("a",{className:j("text-muted-foreground",B,S({variant:"ghost"})),href:"/","data-astro-prefetch":!0,children:"Home"}),t.jsx("a",{className:j("text-muted-foreground",B,S({variant:"ghost"})),href:"#",children:"Pricing"}),t.jsx("a",{className:j("text-muted-foreground",B,S({variant:"ghost"})),href:"/blog","data-astro-prefetch":!0,children:"Blog"})]})]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx($,{variant:"outline",children:"Log in"}),t.jsx($,{children:"Sign up"})]})]}),t.jsx("div",{className:"block lg:hidden",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("a",{href:"/",className:"flex items-center gap-2",children:[t.jsx("img",{src:"https://www.shadcnblocks.com/images/block/block-1.svg",className:"w-8",alt:"logo"}),t.jsx("span",{className:"text-xl font-bold",children:"Shadcn Blocks"})]}),t.jsxs(To,{open:e,onOpenChange:o,children:[t.jsx(Po,{asChild:!0,children:t.jsx($,{variant:"outline",size:"icon",onClick:()=>o(!e),children:t.jsx(Lt,{className:"size-4"})})}),t.jsxs(bt,{className:"overflow-y-auto",children:[t.jsx(yt,{children:t.jsx(Rt,{children:t.jsxs("a",{href:"/","data-astro-prefetch":!0,className:"flex items-center gap-2",children:[t.jsx("img",{src:"https://www.shadcnblocks.com/images/block/block-1.svg",className:"w-8",alt:"logo"}),t.jsx("span",{className:"text-xl font-bold",children:"Shadcn Blocks"})]})})}),t.jsxs("div",{className:"my-8 flex flex-col gap-4",children:[t.jsx("a",{href:"/",className:"font-semibold",children:"Home"}),t.jsxs(oo,{type:"single",collapsible:!0,className:"w-full",children:[t.jsx(ee,{value:"products",className:"border-b-0",children:t.jsx(te,{className:"mb-4 py-0 font-semibold hover:no-underline",children:"Products"})}),t.jsx(ee,{value:"resources",className:"border-b-0",children:t.jsx(te,{className:"py-0 font-semibold hover:no-underline",children:"Resources"})})]}),t.jsx("a",{href:"#",className:"font-semibold",children:"Pricing"}),t.jsx("a",{href:"/blog","data-astro-prefetch":!0,className:"font-semibold",children:"Blog"})]}),t.jsxs("div",{className:"border-t pt-4",children:[t.jsxs("div",{className:"grid grid-cols-2 justify-start",children:[t.jsx("a",{className:j(S({variant:"ghost"}),"justify-start text-muted-foreground"),href:"#",children:"Press"}),t.jsx("a",{className:j(S({variant:"ghost"}),"justify-start text-muted-foreground"),href:"#",children:"Contact"}),t.jsx("a",{className:j(S({variant:"ghost"}),"justify-start text-muted-foreground"),href:"#",children:"Imprint"}),t.jsx("a",{className:j(S({variant:"ghost"}),"justify-start text-muted-foreground"),href:"#",children:"Sitemap"}),t.jsx("a",{className:j(S({variant:"ghost"}),"justify-start text-muted-foreground"),href:"#",children:"Legal"}),t.jsx("a",{className:j(S({variant:"ghost"}),"justify-start text-muted-foreground"),href:"#",children:"Cookie Settings"})]}),t.jsxs("div",{className:"mt-2 flex flex-col gap-3",children:[t.jsx($,{variant:"outline",children:"Log in"}),t.jsx($,{children:"Sign up"})]})]})]})]})]})})]})})};export{Vo as default};
