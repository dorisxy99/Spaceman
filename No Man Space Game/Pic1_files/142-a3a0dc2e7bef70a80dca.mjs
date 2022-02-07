(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[142],{"7vSn":function(e,t,i){},e3KR:function(e,t,i){i.d(t,"d",(function(){return q})),i.d(t,"b",(function(){return Q})),i.d(t,"c",(function(){return Y})),i.d(t,"a",(function(){return K}));var o=i("q1tI"),r=i("/MKj"),n=(i("7vSn"),i("n6mq")),s=i("nKUr");var a=({image_url:e,naturalHeight:t,naturalWidth:i})=>Object(s.jsx)(n.f,{"aria-hidden":"true",marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,height:48,children:Object(s.jsx)(n.D,{wash:!0,width:48,height:48,rounding:2,children:Object(s.jsx)(n.y,{src:e,alt:"",naturalHeight:t,naturalWidth:i})})}),c=i("yweb");function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class l extends o.Component{constructor(...e){super(...e),d(this,"state",{hovered:!1}),d(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),d(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),d(this,"handleTouch",()=>{const{board:e,onClick:t,section:i}=this.props;t(i,e)}),d(this,"handleButtonClick",({event:e})=>{const{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),d(this,"tapAreaRef",Object(o.createRef)())}focus(){const e=this.tapAreaRef.current;e&&e.focus()}render(){var e,t,i,o,r,c;const{hovered:d}=this.state,{buttonText:l,section:h,showSectionSaveButton:u,useLegoLayout:b}=this.props;return Object(s.jsx)(n.bb,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,ref:this.tapAreaRef,children:Object(s.jsxs)(n.f,{color:d?"lightGray":"white","data-test-id":"section-row-"+(h.title||""),display:"flex",alignItems:"center",height:b?64:52,marginStart:b?2:0,marginEnd:b?2:0,padding:b?2:0,marginTop:b?0:1,rounding:3,dangerouslySetInlineStyle:{__style:b?{}:{marginLeft:53,marginRight:11}},children:[b&&!(null===(e=h.preview_pins)||void 0===e||!e.length)&&Object(s.jsx)(a,{image_url:null!==(t=h.preview_pins[0].image_square_url)&&void 0!==t?t:"",naturalHeight:null!==(i=null===(o=h.preview_pins[0].image_square_size_pixels)||void 0===o?void 0:o.height)&&void 0!==i?i:1,naturalWidth:null!==(r=null===(c=h.preview_pins[0].image_square_size_pixels)||void 0===c?void 0:c.width)&&void 0!==r?r:1}),Object(s.jsx)(n.f,{flex:"grow",paddingY:1,marginStart:b?0:4,children:Object(s.jsx)(n.cb,{lineClamp:1,weight:b?"bold":"normal",children:h.title})}),d&&u&&Object(s.jsx)(n.f,{marginEnd:b?0:2,flex:"none",children:Object(s.jsx)(n.g,{accessibilityLabel:"save button",color:"red",text:l||this.props.i18n._("Save","save button","save button"),onClick:this.handleButtonClick})})]})})}}function h(e){const t=Object(c.c)();return Object(s.jsx)(l,{...e,i18n:t})}d(l,"defaultProps",{showSectionSaveButton:!0});var u=i("w70y");function b(e){const t=Object(c.c)(),{board:i,buttonText:o,onClick:r,onButtonClick:a,showSectionSaveButton:d,useLegoLayout:l}=e,b=Object(u.a)({name:"BoardSectionsRepinResource",options:{board_id:i.id},noCache:!0}),g=b&&b.data||[];return Object(s.jsxs)(n.f,{children:[!b.isLoaded&&Object(s.jsx)(n.u,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:"100%",children:Object(s.jsx)(n.U,{accessibilityLabel:t._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})}),b.isLoaded&&Object(s.jsxs)(n.f,{children:[l&&Object(s.jsx)(n.f,{marginStart:4,marginTop:2,paddingY:1,children:Object(s.jsx)(n.cb,{size:"sm",children:t._("Section","PinBetterSave.BoardFlyout.SectionPlaceholderText","section list title")})}),g.map(e=>Object(s.jsx)(h,{board:i,buttonText:o,onButtonClick:a,onClick:r,section:e,showSectionSaveButton:d,useLegoLayout:l},e.id))]})]})}function g({isBoardCreate:e,onCreateBoardClick:t,useLegoLayout:i}){const r=Object(c.c)(),[a,d]=Object(o.useState)(!1);return Object(s.jsx)(n.f,{"data-test-id":"create-board",height:"100%",display:"flex",children:Object(s.jsx)(n.bb,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onTap:t,rounding:2,children:Object(s.jsxs)(n.f,{display:"flex",alignItems:"center",padding:i?4:2,color:a?"lightGray":"white",width:"100%",height:"100%",children:[Object(s.jsx)(n.f,{rounding:i?2:0,dangerouslySetInlineStyle:{__style:i?{padding:"14px"}:{}},marginStart:i?0:4,marginEnd:i?2:5,color:i?"lightGray":"transparent",children:Object(s.jsx)(n.w,{accessibilityLabel:"Add a board",size:i?20:28,icon:i?"add":"add-circle",color:i?"darkGray":"red"})}),e?Object(s.jsx)(n.cb,{align:"center",lineClamp:1,weight:"bold",children:r._("Create board")}):Object(s.jsx)(n.cb,{align:"center",lineClamp:1,weight:"bold",children:r._("Create section")})]})})})}var p=i("nKlH"),j=i("eOdZ"),f=i("Ofms"),x=i("xkL+");function O({onClick:e,title:t,showIcon:i}){const r=Object(c.c)(),[a,d]=Object(o.useState)(!1);return Object(s.jsx)(n.bb,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onTap:()=>{e({title:t})},children:Object(s.jsxs)(n.f,{color:a?"lightGray":"white",display:"flex",alignItems:"center",height:i?64:52,marginStart:3,marginEnd:3,marginBottom:1,rounding:3,children:[Object(s.jsx)(n.f,{flex:"none",marginBottom:1,marginStart:i?1:2,marginEnd:3,marginTop:1,overflow:"hidden",width:i?48:36,height:i?48:36,rounding:i?2:1,children:Object(s.jsx)(n.f,{alignItems:i?"center":void 0,color:"lightGray",display:i?"flex":void 0,height:"100%",justifyContent:i?"center":void 0,width:"100%",children:i&&Object(s.jsx)(n.w,{icon:"add",color:"darkGray",size:20,accessibilityLabel:r._("Create board icon","BoardSuggestionRow.AccessibilityLabel.Text","accessibility label text form add icon")})})}),Object(s.jsx)(n.f,{flex:"grow",paddingY:1,children:Object(s.jsx)(n.cb,{lineClamp:1,weight:"bold",children:t})}),a&&Object(s.jsx)(n.f,{marginEnd:2,children:Object(s.jsx)(n.g,{accessibilityLabel:"create button",color:"red",text:r._("Create","create button to create a new board","create button to create a new board")})})]})})}const y=e=>{const t=Object(c.c)(),{suggestionsResource:i,onClick:r,pinBuilderSuggestions:a,inWebRepinFlowExp:d}=e,l=a||i&&i.data||[],h=Object(s.jsxs)(o.Fragment,{children:[d&&Object(s.jsx)(n.f,{marginStart:4,marginTop:2,paddingY:1,children:Object(s.jsx)(n.cb,{size:"sm",children:t._("Suggestions","PinBetterSave.BoardFlyout.SectionPlaceholderText","section list title")})}),l.map((e,t)=>Object(s.jsx)(O,{title:e.title,onClick:r,showIcon:d},t))]});return Object(s.jsx)(o.Fragment,{children:l?h:Object(s.jsx)(n.u,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:"100%",children:Object(s.jsx)(n.U,{accessibilityLabel:t._("loading board suggestions","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})})})};var m=i("0BOE"),v=i("eUcp"),S=i("Wer7"),B=i("U4JR"),w=i("8cMa"),_=i("s7xj");const C=({collaborator_count:e,useLegoLayout:t,type:i})=>t?Object(s.jsx)(n.f,{marginEnd:e?2:0,children:Object(s.jsx)(w.a,{type:i})}):Object(s.jsx)(w.a,{type:i});var L=({board:e,showCollaborativeIcon:t,showPrivateIcon:i,showProtectedIcon:o,showSectionsIcon:r,useLegoLayout:a})=>{var c;const d=(null==e||null===(c=e.collaborating_users)||void 0===c?void 0:c.length)||0;return t||i||o||r?Object(s.jsxs)(n.f,{display:"flex",direction:"row",marginEnd:a?0:5,dangerouslySetInlineStyle:{__style:{paddingLeft:8}},alignItems:"center",children:[i&&Object(s.jsx)(C,{collaborator_count:d,useLegoLayout:a,type:"secret"}),o&&Object(s.jsx)(C,{collaborator_count:d,useLegoLayout:a,type:"protected"}),t&&(a?Object(s.jsx)(_.a,{board:e,isCompact:!0,ownerOnly:!1}):Object(s.jsx)(w.a,{type:"group"})),r&&Object(s.jsx)(w.a,{type:"sections"})]}):null},k=i("JW66");function T(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class I extends o.Component{constructor(...e){super(...e),T(this,"state",{hovered:!1}),T(this,"handleMouseEnter",()=>{this.setState({hovered:!0})}),T(this,"handleMouseLeave",()=>{this.setState({hovered:!1})}),T(this,"handleTouch",()=>{const{board:e,onClick:t}=this.props;t(e)}),T(this,"handleButtonClick",({event:e})=>{const{onButtonClick:t}=this.props;this.handleTouch(),t&&t(),e.stopPropagation()}),T(this,"tapAreaRef",Object(o.createRef)())}focus(){const e=this.tapAreaRef.current;e&&e.focus()}render(){const{hovered:e}=this.state,{board:t,buttonText:i,isSectionOpen:o,shouldOpenSections:r,showSaveToProfile:a,showFlyoutSaveButton:c,useLegoLayout:d}=this.props,l=!!t.section_count&&t.section_count>0,h=l?"boardWithSection":"boardWithoutSection",u=t.image_cover_url;return Object(s.jsx)(f.a,{id:h,children:Object(s.jsx)(n.bb,{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTap:this.handleTouch,ref:this.tapAreaRef,children:Object(s.jsxs)(n.f,{alignItems:"center",color:e?"lightGray":"white","data-test-id":"board-row-"+(t.name||""),display:"flex",height:d?64:52,marginStart:d?2:3,marginEnd:d?2:3,marginBottom:d?0:1,marginTop:d?0:1,padding:d?2:0,rounding:3,children:[Object(s.jsxs)(n.f,{"aria-hidden":"true",flex:"none",height:d?48:36,marginBottom:d?0:1,marginStart:d?0:2,marginEnd:d?2:3,marginTop:d?0:1,overflow:"hidden",width:d?48:36,children:[a&&"boardless"===t.type&&Object(s.jsx)(n.D,{rounding:2,width:48,height:48,children:Object(s.jsx)(n.f,{color:e?"white":"lightGray",display:"flex",height:"100%",width:"100%",children:Object(s.jsx)(n.f,{padding:3,children:Object(s.jsx)(n.w,{accessibilityLabel:this.props.i18n._("Save to profile icon","BoardRow.TapArea.Icon","Icon to indicate saving to profile."),color:"darkGray",icon:"history",size:24})})})}),u&&!r&&Object(s.jsx)(n.D,{height:d?48:36,rounding:2,wash:!0,width:d?48:36,children:Object(s.jsx)(n.y,{src:u,alt:"",naturalHeight:d?48:36,naturalWidth:d?48:36,fit:"cover"})}),u&&r?Object(s.jsx)(n.D,{rounding:2,wash:!0,width:d?48:36,height:d?48:36,children:Object(s.jsx)(n.y,{src:u,alt:"",naturalHeight:d?48:36,naturalWidth:d?48:36,fit:"cover"})}):Object(s.jsx)(n.f,{color:r?"lightGray":"transparent",width:"100%",height:"100%"})]}),Object(s.jsx)(n.f,{flex:"grow",paddingY:1,overflow:"hidden",marginStart:d?0:1,children:Object(s.jsx)(n.cb,{lineClamp:1,weight:r||!r?"bold":"normal",children:t.name})}),t&&(!e||e&&l&&!o)?Object(s.jsx)(n.f,{children:Object(s.jsx)(L,{board:t,isOpen:t.isOpen,showCollaborativeIcon:!!t.is_collaborative,showPrivateIcon:t.privacy===k.a.BoardPrivacy.SECRET,showProtectedIcon:t.privacy===k.a.BoardPrivacy.PROTECTED,showSectionsIcon:l&&r,useLegoLayout:d})}):null,e&&(0===t.section_count||!r)&&c&&Object(s.jsx)(n.f,{marginEnd:d?0:2,flex:"none",children:Object(s.jsx)(n.g,{accessibilityLabel:"save button",color:"red",onClick:this.handleButtonClick,text:i||this.props.i18n._("Save","save button","save button")})})]})})})}}T(I,"defaultProps",{shouldOpenSections:!0,showFlyoutSaveButton:!0});var R=Object(o.forwardRef)((e,t)=>{const i=Object(c.c)();return Object(s.jsx)(I,{...e,ref:t,i18n:i})}),P=i("QO9Q"),A=i("pLLR"),E=i("seP0");function H(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const F=e=>e?498:439,M=360,W=e=>e?80:52;class U extends o.PureComponent{constructor(...e){var t;super(...e),t=this,H(this,"state",{boardSuggestions:[],isSectionOpen:null,selectedBoardId:"",selectedBoardCategory:"",searchQuery:"",searchBoxFocused:!0}),H(this,"getItems",e=>{const{boardResource:t,changeBoardModal:i,showSaveToProfile:o}=this.props;if(null==t||!t.data)return[];const{all_boards:r}=t.data,n=[{boardId:"",image_cover_url:"",is_collaborative:!1,isOpen:!1,name:this.props.i18n._("Profile","pinBetterSave.initialSelection.boardlessPinsOption","Option to save to profile without a board."),privacy:"public",section_count:0,type:"boardless",url:"/me/"}],s=this.getAllBoards().map(e=>this.mapBoards(e,"allBoards",0)),a=this.getShortlist().map((e,t)=>this.mapBoards(e,"shortlist",t+1)),c=o&&!i&&r.length>=3?[...n,...a.slice(0,2)]:a,{searchQuery:d}=this.state;return d.length>=2?[...Object(m.a)(s,d)]:[...r.length<3&&o?[{type:"header",title:this.props.i18n._("Quick save and organize later","BoardFlyout.inPinBetterSaveAndLessThanThreeBoards.boardlessPinsTitle","Header saving to profile")},...n]:[],...r.length>3&&c&&c.length?[{type:"header",title:e?this.props.i18n._("Top choices","PinBetterSave.BoardFlyout.TopChoicesSectionTitle","Header for top suggestions in board picker"):this.props.i18n._("Top board suggestions","Header for top suggesions in board picker","Header for top suggesions in board picker")},...c]:[],...r.length>0?[{type:"header",title:r.length<3&&o?this.props.i18n._("Save to board","BoardFlyout.inPinBetterSaveAndLessThanThreeBoards.saveToBoardTitle","Header for boards when there are less than 3 boards in board picker"):this.props.i18n._("All boards","Header for all boards in board picker","Header for all boards in board picker")},...s]:[]]}),H(this,"mapBoards",(e,t,i)=>{const{selectedBoardId:o,selectedBoardCategory:r}=this.state,n=e.id===o&&t===r;return{...e,category:t,isOpen:n,gridIndex:i}}),H(this,"handleBack",()=>{const{setBoardWithSection:e}=this.props;this.setState({isSectionOpen:!1,selectedBoardId:"",selectedBoardCategory:""}),e&&e(null)}),H(this,"handleSectionClick",(e,t)=>{const{onItemChosen:i}=this.props;Object(B.b)(101,{component:13282,element:36,objectId:t.id,view:91,grid_index:t.gridIndex}),i({boardId:t.id,url:e.slug?`${t.url}${e.slug}/`:t.url,sectionId:e.id,title:e.title||"",type:e.type,imageCoverUrl:t.image_cover_url})}),H(this,"getPinBuilderSuggestions",(async function(){const{pin:e}=t.props;if(e){var i;const o=j.d.create("BoardTitleSuggestionsResource",{pin_id:e.id}),r=await o.callGet({retries:1,showError:!1});if(null!==(i=r.resource_response)&&void 0!==i&&i.data){const e=r.resource_response.data.map(e=>({title:e.title}))||[];t.setState({boardSuggestions:e})}}})),H(this,"getAllBoards",()=>{var e;const{boardResource:t,advertiser_id:i}=this.props;return((null==t||null===(e=t.data)||void 0===e?void 0:e.all_boards)||[]).filter(e=>!i||"secret"!==e.privacy)}),H(this,"getShortlist",()=>{var e;const{suggestedBoardsShortListResource:t,displayShortlistMostRecentBoard:i,boardResource:o}=this.props,r=(null==o||null===(e=o.data)||void 0===e?void 0:e.boards_shortlist)||[];return i?r:(null==t?void 0:t.data)||[]}),H(this,"getBoards",e=>"allBoards"===e?this.getAllBoards():"shortlist"===e?this.getShortlist():[]),H(this,"handleBoardWithSectionsClick",e=>{const{setBoardWithSection:t}=this.props,{selectedBoardId:i,selectedBoardCategory:o}=this.state,r=this.getBoards(e.category).find(({id:t})=>t===e.id),n=i===e.id&&o===e.category;r&&t&&t(r),this.setState({isSectionOpen:!0,selectedBoardId:n?"":e.id,selectedBoardCategory:n?"":e.category})}),H(this,"handleBoardClick",({board:e,toggleSections:t})=>{const{onItemChosen:i}=this.props;this.setState({searchBoxFocused:!1}),t?this.handleBoardWithSectionsClick({id:e.id,category:e.category}):(Object(B.b)(101,{component:13282,element:36,objectId:e.id,view:91,grid_index:e.gridIndex}),i({boardId:e.id,url:e.url,title:e.name||"",type:e.type,imageCoverUrl:e.image_cover_url}))}),H(this,"handleSearchQueryUpdate",e=>{this.setState(t=>({...t,searchQuery:e}))}),H(this,"boardSectionsHeaderRef",Object(o.createRef)())}componentDidMount(){this.props.boardResource&&this.props.boardResource.isLoaded&&this.setPWTLoadingEnd(),this.props.setBoardWithSection&&this.props.setBoardWithSection(null)}componentDidUpdate(e,t){e.boardResource&&!e.boardResource.isLoaded&&this.props.boardResource&&this.props.boardResource.isLoaded&&this.setPWTLoadingEnd(),this.state.isSectionOpen&&!t.isSectionOpen&&this.boardSectionsHeaderRef.current&&this.boardSectionsHeaderRef.current.focus()}setPWTLoadingEnd(){const{boardResource:e,boardPickerStopwatch:t}=this.props;t&&(!e||e.error?t.error():t.stop())}render(){const{boardResource:e,buttonText:t,changeBoardModal:i,customItem:r,onBoardCreate:a,onButtonClick:c,paneHeight:d,paneWidth:l,showSaveToProfile:h,showCreateBoardButton:u,showFlyoutSaveButton:j,showSections:x,showSectionSaveButton:O,suggestedBoardsShortListResource:m,useStoryboardStyle:S,useLegoLayout:B}=this.props,{boardSuggestions:w,isSectionOpen:_,searchBoxFocused:C,searchQuery:L}=this.state;if(!e)return null;const{isLoaded:k,error:T}=e;let I=[];(k&&!T||m&&m.data&&!m.error)&&(I=this.getItems(!!B));const P=I.filter(e=>e&&"allBoards"===e.category).length;P<=3&&0===w.length&&this.getPinBuilderSuggestions();const A=S?200:322,E=S?214:334,H=d||290,U=null===_?"":"BoardsSlideRight",z=e=>Object(s.jsxs)(o.Fragment,{children:[!B&&Object(s.jsx)(n.q,{}),Object(s.jsx)(n.f,{overflow:"hidden",height:W(B),borderStyle:B&&P>=3&&I.length>1?"shadow":"none",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:8,borderBottomLeftRadius:8}},children:Object(s.jsx)(g,{onCreateBoardClick:()=>a({title:this.state.searchQuery}),isBoardCreate:e,useLegoLayout:B})})]});return Object(s.jsxs)(n.f,{width:B&&!i?"100%":l,rounding:2,overflow:"hidden",height:S||i?"100%":F(B),color:"white",zIndex:v.a,children:[k?null:Object(s.jsx)(n.u,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:200,width:B&&!i?M:l,children:Object(s.jsx)(n.U,{accessibilityLabel:this.props.i18n._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})}),Object(s.jsx)(n.u,{direction:"row",children:k&&Object(s.jsx)("div",{className:_?"BoardsSlideLeft":U,children:Object(s.jsx)(n.f,{position:"relative",children:Object(s.jsxs)(n.f,{display:"flex",direction:"row",width:B&&!i?720:2*(null!=l?l:0),zIndex:new n.t(0),children:[Object(s.jsxs)(n.u,{alignItems:"stretch",justifyContent:"start",direction:"column",width:B&&!i?M:l,children:[B&&!i&&Object(s.jsx)(n.u,{alignItems:"center",height:64,justifyContent:"center",children:Object(s.jsx)(n.cb,{align:"center",size:"lg",weight:"bold",children:h?this.props.i18n._("Save","PinBetterSave.BoardFlyout.SavePlaceholder","flyout header text to indicate save options"):this.props.i18n._("Save to board","PinBetterSave.BoardFlyout.SaveToBoardPlaceholder","flyout header text")})}),!i&&Object(s.jsx)(n.f,{padding:B?0:3,paddingX:B?4:3,height:B?64:"auto",children:Object(s.jsx)(p.a,{accessibilityLabel:this.props.i18n._("Search through your boards","search bar placeholder text","search bar placeholder text"),focused:C,id:"pickerSearchField",onChange:({value:e})=>this.handleSearchQueryUpdate(e),placeholder:this.props.i18n._("Search","search bar placeholder text","search bar placeholder text"),value:L})}),Object(s.jsxs)(n.f,{minHeight:B?290:A,maxHeight:B?H:A,overflow:"scrollY",children:[m&&!m.isLoaded?Object(s.jsx)(f.a,{id:"suggestedBoardsContainer",children:Object(s.jsx)(n.u,{alignItems:"center",height:"100%",justifyContent:"center",minHeight:128.5,width:"100%",children:Object(s.jsx)(n.U,{accessibilityLabel:this.props.i18n._("loading board picker","accessibility text for loading spinner","accessibility text for loading spinner"),show:!0})})}):null,r,I.map((e,i)=>"header"===e.type?Object(s.jsx)(n.f,{paddingX:B?4:3,paddingY:1,marginTop:i>0?2:1,children:Object(s.jsx)(n.cb,{size:B?"sm":"md",children:e.title})},e.title):Object(s.jsx)(n.f,{children:Object(s.jsx)(R,{board:e,buttonText:t,onClick:e=>{this.handleBoardClick({board:e,toggleSections:x&&!!e.section_count})},onButtonClick:c,shouldOpenSections:x,showFlyoutSaveButton:j,showSaveToProfile:h,useLegoLayout:B})},`${e.category}-${e.id}`)),P<=3&&Object(s.jsx)(y,{onClick:a,pinBuilderSuggestions:w,inWebRepinFlowExp:B})]}),u&&z(!0)]}),Object(s.jsxs)(n.f,{display:"flex",direction:"column",width:B&&!i?M:l,marginBottom:B?2:0,children:[Object(s.jsxs)(n.u,{alignContent:"center",alignItems:"center",direction:"row",justifyContent:"center",children:[Object(s.jsx)(n.m,{span:2,children:Object(s.jsx)(n.f,{display:"flex",justifyContent:"start",alignContent:"center",alignItems:"center",marginStart:3,children:Object(s.jsx)(n.x,{accessibilityLabel:"Back button",icon:"arrow-back",iconColor:"darkGray",onClick:this.handleBack,size:"sm"})})}),Object(s.jsx)(n.m,{span:8,children:Object(s.jsx)(n.u,{alignItems:"center",height:B?64:52,justifyContent:"center",children:Object(s.jsx)(n.cb,{weight:"bold",children:B?this.props.i18n._("Save Pin to","PinBetterSave.BoardFlyout.SectionHeader","Header for section header"):this.props.i18n._("Choose section","Header for section header","Header for section header")})})}),Object(s.jsx)(n.m,{span:2,children:Object(s.jsx)(n.f,{})})]}),!B&&Object(s.jsx)(n.q,{}),Object(s.jsx)(n.f,{minHeight:B?354:E,maxHeight:B?H:E,overflow:"scrollY",children:I?Object(s.jsx)(o.Fragment,{children:I&&I.map(e=>"header"===e.type?null:Object(s.jsx)(n.f,{children:e.isOpen&&Object(s.jsxs)(o.Fragment,{children:[B&&Object(s.jsx)(n.f,{marginStart:4,marginTop:2,paddingY:1,children:Object(s.jsx)(n.cb,{size:"sm",children:this.props.i18n._("Board","PinBetterSave.BoardFlyout.BoardPickerTitle","board title on section picker")})}),Object(s.jsx)(R,{board:e,buttonText:t,isSectionOpen:!0,onClick:e=>{this.handleBoardClick({board:e,toggleSections:!1})},onButtonClick:c,shouldOpenSections:!1,showFlyoutSaveButton:j,ref:this.boardSectionsHeaderRef,useLegoLayout:B}),Object(s.jsx)(b,{board:e,buttonText:t,onClick:this.handleSectionClick,onButtonClick:c,showSectionSaveButton:O,useLegoLayout:B})]})},`${e.category}-${e.id}`))}):null}),u&&!i&&z(!1)]})]})})})})]})}}function z(e){const t=Object(c.c)();return Object(s.jsx)(U,{...e,boardPickerStopwatch:Object(E.c)(),requestContext:Object(A.d)(),i18n:t})}function D(e,t,i){const{advertiser:o}=e;let r;if(i&&i.user&&i.user.username&&(r=i.user.username),t&&o){const i=e.advertiser;if(t.isAuth&&i.is_impersonation)return{hasMUA:!1,advertiser_id:i.id,username:i.owner_user_id};if(t.isAuth&&i.owner_user_id!==t.id)return{hasMUA:!0,advertiser_id:i.id,username:i.owner_user_id};if(t.isAuth&&i.owner_user_id===t.id)return{hasMUA:!1,advertiser_id:i.id,username:"me"}}return{advertiser_id:void 0,hasMUA:void 0,username:r}}function G(e){const{advertiser_id:t,hasMUA:i}=e;let{username:o}=e;return!e.useStoryboardStyle&&e.orbacActingAs&&e.orbacActingAs.user&&e.orbacActingAs.user.username&&(o=e.orbacActingAs.user.username),{field_set_key:"board_picker",filter:i?"protected":"all",...o?{username:o}:Object.freeze({}),...t?{advertiser_id:t}:{}}}function q(e,t){return(i,o)=>i(Object(S.f)("BoardPickerBoardsResource",G(D(o(),e,t))))}function Q(e){const t=Object(x.b)(),i={...e,...Object(r.useSelector)(e=>D(e,t))},o=Object(u.a)({name:"BoardPickerBoardsResource",options:G(i)});return Object(s.jsx)(z,{...i,boardResource:o})}function Y(e){const t=Object(P.a)();return Object(s.jsx)(Q,{...e,orbacActingAs:t})}function K(e){const t=Object(u.a)({name:"BoardPickerBoardsShortlistResource",options:{pin_id:e.pin.id,shortlist_length:3,num_shortlist_suggestions:3}});return Object(s.jsx)(z,{...e,suggestedBoardsShortListResource:t})}H(U,"defaultProps",{paneWidth:320,showCreateBoardButton:!0,showFlyoutSaveButton:!0,showSections:!0,showSectionSaveButton:!0,useLegoLayout:!0})},nKlH:function(e,t,i){i.d(t,"a",(function(){return s}));var o=i("q1tI"),r=i("n6mq"),n=i("nKUr");function s(e){const{accessibilityLabel:t,focused:i,id:s,onBlur:a,onChange:c,onFocus:d,placeholder:l,value:h,size:u="lg"}=e,b=Object(o.useRef)(null);return Object(o.useEffect)(()=>{if(i){const e=b.current;window.requestAnimationFrame(()=>{const t=e&&e.querySelector("input");t instanceof HTMLInputElement&&t.focus()})}},[i]),Object(n.jsx)(r.f,{ref:b,children:Object(n.jsx)(r.Q,{accessibilityLabel:t,id:s,onBlur:a,onChange:c,onFocus:d,placeholder:l,size:u,value:h})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/142-a3a0dc2e7bef70a80dca.mjs.map