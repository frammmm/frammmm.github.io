(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{234:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Tabs});__webpack_require__(3),__webpack_require__(4),__webpack_require__(7),__webpack_require__(36),__webpack_require__(8),__webpack_require__(1),__webpack_require__(0),__webpack_require__(83),__webpack_require__(2),__webpack_require__(5),__webpack_require__(6);var _tab_line_tab_line__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(64),gsap_TweenLite__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(9);function _toConsumableArray(arr){return function(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Tabs=function(){function Tabs(links,_ref){var linkClass=_ref.linkClass,tabsClass=_ref.tabsClass,_ref$callback=_ref.callback,callback=void 0===_ref$callback?function(f){return f}:_ref$callback,line=_ref.line,_ref$beforeChange=_ref.beforeChange,beforeChange=void 0===_ref$beforeChange?function(f){return f}:_ref$beforeChange,_ref$afterChange=_ref.afterChange,afterChange=void 0===_ref$afterChange?function(f){return f}:_ref$afterChange;!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Tabs),this.classes={heading:{active:"".concat(linkClass,"_is_active"),item:"".concat(linkClass)},content:{active:"".concat(tabsClass,"_is_active"),show:"".concat(tabsClass,"_is_show"),item:"".concat(tabsClass)}},this.state={activeLink:null,activeTab:null},this.links=links,this.line=line?new _tab_line_tab_line__WEBPACK_IMPORTED_MODULE_11__.a({line:line,buttons:this.links,bindClick:!0}):null,this.beforeChange=beforeChange,this.afterChange=afterChange,this.callback=callback}var Constructor,protoProps,staticProps;return Constructor=Tabs,(protoProps=[{key:"init",value:function(){this.handlers()}},{key:"handlers",value:function(){var _this=this;this.tabs=_toConsumableArray(this.links).reduce(function(acc,element){var tab=document.querySelector(element.getAttribute("href"));return tab&&acc.push(tab),element.addEventListener("click",function(event){event.preventDefault();var result=_this.beforeChange(element,tab);result?Promise.resolve(result).then(function(){_this.toggleTab(element,tab),_this.callback(element,tab)}):(_this.toggleTab(element,tab),_this.callback(element,tab))}),acc},[]),this.state.activeLink=this.links.find(function(link){return link.classList.contains(_this.classes.heading.active)}),this.state.activeTab=this.tabs.find(function(tab){return tab.classList.contains(_this.classes.content.active)})}},{key:"toggleTab",value:function(link,target){target&&(this.activeLink=link,this.activeTab=target)}},{key:"setActiveTab",value:function(tab){var _this2=this;this.state.activeTab=tab,this.state.activeTab.classList.add(this.classes.content.active),gsap_TweenLite__WEBPACK_IMPORTED_MODULE_12__.c.fromTo(this.state.activeTab,.25,{opacity:0,y:10},{opacity:1,y:0,onComplete:function(){_this2.state.activeTab.classList.add(_this2.classes.content.show)}})}},{key:"activeLink",set:function(link){this.state.activeLink&&this.state.activeLink.classList.remove(this.classes.heading.active),this.state.activeLink=link,this.state.activeLink.classList.add(this.classes.heading.active)},get:function(){return this.state.activeLink}},{key:"activeTab",set:function(tab){var _this3=this;this.state.activeTab?(this.state.activeTab.classList.remove(this.classes.content.show),gsap_TweenLite__WEBPACK_IMPORTED_MODULE_12__.c.to(this.state.activeTab,.3,{opacity:0,y:10,onComplete:function(){_this3.state.activeTab.classList.remove(_this3.classes.content.active),_this3.setActiveTab(tab),_this3.afterChange(tab)}})):this.setActiveTab(tab)},get:function(){return this.state.activeTab}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Tabs}()},256:function(module,__webpack_exports__,__webpack_require__){"use strict";function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}__webpack_require__.d(__webpack_exports__,"a",function(){return Draggable});var Draggable=function(){function Draggable(element){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Draggable),this.element=element,element.hasAttribute("data-draggable")||element.setAttribute("data-draggable",""),this.state={clicked:!1,clickX:0,startX:element.scrollLeft},this.bindHandlers()}var Constructor,protoProps,staticProps;return Constructor=Draggable,(protoProps=[{key:"bindHandlers",value:function(){var _this=this;this.element.addEventListener("mousemove",function(event){if(_this.state.clicked){var diff=_this.state.clickX-event.pageX;_this.scroll(diff)}}),this.element.addEventListener("mousedown",function(event){_this.state.clicked=!0,_this.state.clickX=event.pageX,_this.state.startX=_this.element.scrollLeft,_this.element.setAttribute("data-draggable","active")}),document.addEventListener("mouseup",function(){_this.state.clicked=!1,_this.element.setAttribute("data-draggable","")})}},{key:"scroll",value:function(diff){this.element.scrollLeft=this.state.startX+diff}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Draggable}()},404:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(3),__webpack_require__(4),__webpack_require__(7),__webpack_require__(36),__webpack_require__(8),__webpack_require__(1),__webpack_require__(13),__webpack_require__(0),__webpack_require__(2),__webpack_require__(5),__webpack_require__(6),__webpack_require__(21),__webpack_require__(55),__webpack_require__(37),__webpack_require__(106),__webpack_require__(54),__webpack_require__(83),__webpack_require__(10);var perfect_scrollbar_esm=__webpack_require__(57),zoom=__webpack_require__(110);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _toConsumableArray(arr){return function(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Points=[],infrastructure_map_InfrastructureMap=function(){function InfrastructureMap(element){var _this=this;if(function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InfrastructureMap),element){this.element=element,this.map=element.querySelector(".infrastructure-map__map"),this.infraCheckboxes=_toConsumableArray(element.querySelectorAll('#infrastructure input[type="checkbox"]')),this.ecoCheckboxes=_toConsumableArray(element.querySelectorAll('#ecology input[type="checkbox"]')),this.urlBase="localhost"===window.location.hostname?"":"/build-redesign/",this.switchesContainers=_toConsumableArray(document.querySelectorAll(".infrastructure-switches")),this.ps=[],this.state={psInited:!1},this.toggleSwitchesScroll=this.toggleSwitchesScroll.bind(this),this.toggleSwitchesScroll(),window.addEventListener("resize",this.toggleSwitchesScroll);var polygon=this.element.getAttribute("data-map-polygon");this.polygon=polygon?JSON.parse(polygon):[],this.ecoObjects={},this.urls={eco:this.element.getAttribute("data-eco-url"),infra:this.element.getAttribute("data-infrastructure-url")},this.yandexFirmsKey="81fd4d74-8f99-4223-b3a9-ced2137399e7",this.intersectionObserver=new IntersectionObserver(function(entries){return _this.handleIntersection(entries)},{rootMargin:"100px"}),this.intersectionObserver.observe(this.element)}}var Constructor,protoProps,staticProps;return Constructor=InfrastructureMap,(protoProps=[{key:"handleIntersection",value:function(entries){var _this2=this;entries.forEach(function(entry){if(entry.isIntersecting){if(_this2.intersectionObserver.unobserve(entry.target),!(document.querySelector('script[src*="api-maps.yandex"]')||!1)){var script=document.createElement("script");script.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=ymapsBroadcast",document.body.appendChild(script)}_this2.bindMapEvents()}})}},{key:"bindMapEvents",value:function(){var _this3=this;window.ymaps?(this.ymaps=window.ymaps,this.initMap()):window.ymapsObserver.subscribe(function(){_this3.ymaps=window.ymaps,_this3.initMap()})}},{key:"toggleSwitchesScroll",value:function(){document.documentElement.clientWidth<768?this.state.psInited||(this.ps=this.switchesContainers.map(function(el){return new perfect_scrollbar_esm.a(el,{wheelSpeed:.7})})):this.state.psInited&&(this.ps=this.ps.reduce(function(arr,ps){return ps.destroy(),arr},[]))}},{key:"initMap",value:function(){this.setIconUrls(),this.createHintLayouts();var zoomControl=Object(zoom.a)(this.ymaps,{bottom:"30px",right:"20px"});this.complexMap=new this.ymaps.Map(this.map,{center:[55.7156053517751,37.4754233558197],zoom:16,controls:[]},{maxZoom:16,minZoom:10}),this.complexMap.controls.add(zoomControl),this.complexMap.behaviors.disable("scrollZoom"),this.isMobile&&this.complexMap.behaviors.disable("drag"),this.infrastructureManager=new this.ymaps.ObjectManager({clusterize:!1,gridSize:32,viewportMargin:0}),this.ecoPointsManager=new this.ymaps.ObjectManager({clusterize:!1,gridSize:32,viewportMargin:0}),this.ecoManager=new this.ymaps.ObjectManager,this.initialData(),this.initHandlers()}},{key:"initialData",value:function(){var _this4=this;this.complexCollection=new this.ymaps.GeoObjectCollection;var name=this.element.getAttribute("data-complex-name");if(this.polygon.length){var myPolygon=new this.ymaps.GeoObject({geometry:{type:"Polygon",coordinates:this.polygon},properties:{name:name}},{fillColor:"#6064a0",strokeColor:"#fff",opacity:.5,hintLayout:this.HintLayout});this.complexCollection.add(myPolygon),this.complexMap.geoObjects.add(this.complexCollection),this.complexMap.setBounds(this.complexCollection.getBounds(),{checkZoomRange:!0,zoomMargin:10,zoom:16})}setTimeout(function(){var mapItems=window.map_items,mapCenter=_this4.complexMap.getCenter(),placeMark=new _this4.ymaps.Placemark(mapCenter,{name:name},{iconLayout:"default#image",iconImageHref:"".concat(_this4.urlBase,"static/img/minified-svg/ico-complex-on-map.svg"),iconImageSize:[32,43],iconImageOffset:[-15,-45],zIndex:9e3,id:"zoomMark",visible:!1,hintLayout:_this4.HintLayout});_this4.complexMap.geoObjects.add(placeMark),mapItems&&mapItems[0]&&mapItems[0].map_items.polygon?_this4.complexMap.events.add("boundschange",function(event){var newZoom=event.get("newZoom");placeMark.options.set("visible",newZoom<15)}):placeMark.options.set("visible",!0)},5e3)}},{key:"initHandlers",value:function(){var _this5=this;this.Objects={school:[],kindergarten:[],medicine:[],shopping:[],pharmacy:[],park:[],banks:[],industzones:[],thermalstations:[],industenterprises:[],incinerations:[],treatmentfacil:[],dump:[]},this.infraCheckboxes.map(function(input){input.addEventListener("change",_this5.onInfrastructureChange.bind(_this5))}),this.ecoCheckboxes.map(function(input){input.addEventListener("change",_this5.onEcoChange.bind(_this5))})}},{key:"onEcoChange",value:function(event){var target=event.currentTarget,type=target.value;target.checked?this.updateEcological():this.removeMapPolygons(type)}},{key:"onInfrastructureChange",value:function(event){var _this6=this,target=event.currentTarget,type=target.value;0===this.Objects[type].length?this.infRequest(type).then(function(data){if(data&&data.properties&&data.properties.ResponseMetaData&&data.properties.ResponseMetaData.SearchResponse&&data.properties.ResponseMetaData.SearchResponse.found){var features=data.features;for(var key in features)if(features.hasOwnProperty(key)){var feature=features[key];_this6.Objects[type].push({type:"Feature",id:feature.properties.CompanyMetaData.id,geometry:{type:"Point",coordinates:[feature.geometry.coordinates[1],feature.geometry.coordinates[0]]},options:{iconLayout:"default#image",iconImageSize:[38,38],iconImageHref:_this6.infrastructureIcon[type].iconImageHref,hintLayout:_this6.HintLayoutInfra},properties:{name:feature.properties.name},fillColor:"#6064a0",strokeColor:"#fff",opacity:.5})}}_this6.togglePoints(type,target.checked)}):this.togglePoints(type,target.checked)}},{key:"togglePoints",value:function(type,checked){checked?this.appendArray(Points,this.Objects[type]):(this.removeArray(Points,this.Objects[type]),this.infrastructureManager.remove(this.Objects[type])),this.infrastructureManager.add(Points),this.complexMap.geoObjects.add(this.infrastructureManager)}},{key:"ecoRequest",value:function(){var _this7=this;return fetch("".concat(this.urls.eco,"?coords=").concat(this.coords),{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(response){return response.json()}).then(function(_ref){var features=_ref.features;for(var key in features)if(features.hasOwnProperty(key)){var feature=features[key];_this7.ecoObjects[key]||(_this7.ecoObjects[key]=[]),_this7.appendArray(_this7.ecoObjects[key],feature)}})}},{key:"infRequest",value:function(type){var myCoords=this.polygon[0]&&this.polygon[0][0]?this.polygon[0][0]:[],url="".concat(this.urls.infra,"?apikey=").concat(this.yandexFirmsKey,"&lang=ru_RU&ll=").concat(myCoords.reverse().join(","),"&results=20&rspn=1&text=").concat(this.getInfRequest(type),"&type=biz");return fetch(url,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(response){return response.json()})}},{key:"appendArray",value:function(base,appender){appender.length&&"object"===_typeof(appender)&&appender.map(function(item){base.find(function(el){return item.id===el.id})||base.push(item)})}},{key:"removeArray",value:function(base,remover){remover.map(function(item){var index=base.indexOf(item);-1!==index&&base.splice(index,1)})}},{key:"updateEcological",value:function(){var _this8=this;this.ecoRequest().then(function(){_this8.ecoCheckboxes.filter(function(input){return input.checked}).map(function(el){return _this8.addMapPolygons(el.value)})})}},{key:"addMapPolygons",value:function(type){var _this9=this,objects=this.ecoObjects[type];objects&&objects.length&&(objects.map(function(item){item.options.hintLayout=_this9.HintLayoutEco,"Polygon"===item.geometry.type&&_this9.ecoPointsManager.add({type:"Feature",id:item.id,options:{hintLayout:_this9.HintLayoutEco,iconLayout:"default#image",iconImageSize:[30,40],iconImageOffset:[-12,-25],iconImageHref:item.options.iconImageHref},geometry:{type:"Point",coordinates:_this9.getPolygonCenter(item.geometry.coordinates[0])},properties:{name:item.properties.name,description:item.properties.description}})}),this.ecoManager.add(this.ecoObjects[type]),this.complexMap.geoObjects.add(this.ecoManager),this.complexMap.geoObjects.add(this.ecoPointsManager))}},{key:"removeMapPolygons",value:function(){var _this10=this,selected=this.ecoCheckboxes.filter(function(input){return input.checked});this.ecoPointsManager.removeAll(),this.ecoManager.removeAll(),this.infrastructureManager&&this.complexMap.geoObjects.add(this.infrastructureManager),selected.map(function(el){return _this10.addMapPolygons(el.value)})}},{key:"getPolygonCenter",value:function(coords){for(var mult,n=coords.length,xCoord=0,yCoord=0,space=0,i=0;i<n-1;i++)mult=coords[i][0]*coords[i+1][1]-coords[i+1][0]*coords[i][1],xCoord+=(coords[i][0]+coords[i+1][0])*mult,yCoord+=(coords[i][1]+coords[i+1][1])*mult,space+=mult;return[xCoord/=3*space,yCoord/=3*space]}},{key:"getInfRequest",value:function(type){switch(type){case"kindergarten":return"Детский сад";case"school":return"Школа";case"medicine":return"Больница";case"shopping":return"Магазин";case"banks":return"Банк";case"pharmacy":return"Аптека";case"park":return"Сквер"}}},{key:"createHintLayouts",value:function(){var ymaps=this.ymaps;this.HintLayout=ymaps.templateLayoutFactory.createClass('<div class="map-hint">\n        <div>{{ properties.name }}</div>\n      </div>',{getShape:function(){var el=this.getElement(),result=null;if(el){var firstChild=el.firstChild;result=new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[0,0],[firstChild.offsetWidth,firstChild.offsetHeight]]))}return result}}),this.HintLayoutInfra=ymaps.templateLayoutFactory.createClass('<div class="map-hint">\n        <div>{{ properties.name }}</div>\n      </div>',{getShape:function(){var el=this.getElement(),result=null;if(el){var firstChild=el.firstChild;result=new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[0,0],[firstChild.offsetWidth,firstChild.offsetHeight]]))}return result}}),this.HintLayoutEco=ymaps.templateLayoutFactory.createClass('<div class="map-hint">\n        <div>{{ properties.description }}</div>\n        <div>{{ properties.name }}</div>\n      </div>',{getShape:function(){var el=this.getElement(),result=null;if(el){var firstChild=el.firstChild;result=new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[0,0],[firstChild.offsetWidth,firstChild.offsetHeight]]))}return result}})}},{key:"setIconUrls",value:function(){this.infrastructureIcon={banks:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_banks-n-2.svg")},school:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_edu-n-2.svg")},kindergarten:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_garden-n-2.svg")},shopping:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_shop-n-2.svg")},pharmacy:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_pharmacy-n-2.svg")},park:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_park-n-2.svg")},medicine:{iconImageHref:"".concat(this.urlBase,"static/img/minified-svg/map-icon_medicine-n-2.svg")}}}},{key:"coords",get:function(){var myCoords=this.polygon[0]&&this.polygon[0][0]?this.polygon[0][0]:[],bounds=this.complexMap.getBounds();return bounds[1][1]-bounds[0][1]<.15&&(bounds[1][1]=myCoords[1]+.075,bounds[0][1]=myCoords[1]-.075,bounds[1][0]=myCoords[0]+.02,bounds[0][0]=myCoords[0]-.02),bounds.reduce(function(prev,current,i){return"".concat(prev).concat(i>0?",":"").concat(current[0],",").concat(current[1])},"")}},{key:"isMobile",get:function(){return document.body.clientWidth<1024}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),InfrastructureMap}(),tabs=__webpack_require__(234),draggable=__webpack_require__(256);function infrastructure_toConsumableArray(arr){return function(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}}(arr)||function(iter){if(Symbol.iterator in Object(iter)||"[object Arguments]"===Object.prototype.toString.call(iter))return Array.from(iter)}(arr)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function infrastructure_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function infrastructure_createClass(Constructor,protoProps,staticProps){return protoProps&&infrastructure_defineProperties(Constructor.prototype,protoProps),staticProps&&infrastructure_defineProperties(Constructor,staticProps),Constructor}__webpack_require__.d(__webpack_exports__,"default",function(){return infrastructure_Infrastructure});var infrastructure_Infrastructure=function(){function Infrastructure(element){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Infrastructure),this.element=element,this.tabsContainer=element.querySelector(".tabs-links"),this.tabsWrapper=element.querySelector(".tabs-links__wrapper"),this.tabs={links:infrastructure_toConsumableArray(element.querySelectorAll(".tabs-links__link")),line:element.querySelector(".tabs-links__line")},this.tabsController=new tabs.a(this.tabs.links,{line:this.tabs.line,linkClass:"tabs-links__link",tabsClass:"infrastructure-n-2-tabs__tab",callback:this.handleTabChange.bind(this)}),this.tabsController.init(),this.ps=new perfect_scrollbar_esm.a(this.tabsWrapper,{useBothWheelAxes:!0}),this.tabsContainer.classList.add("tabs-links_scrollable"),this.draggable=new draggable.a(this.tabsWrapper),this.map=element.querySelector(".infrastructure-map"),this.streetView=element.querySelector(".street-view"),this.infrastructureMap=new infrastructure_map_InfrastructureMap(this.map),this.switches={infrastructure:element.querySelector("#infrastructure"),ecology:element.querySelector("#ecology")},this.views=[{key:"streetview",node:element.querySelector("#streetview")},{key:"panorama",node:element.querySelector("#panorama")}],this.state={containerActive:this.map,activeWrap:this.tabsController.activeTab}}return infrastructure_createClass(Infrastructure,null,[{key:"init",value:function(){var map=document.querySelector(".infrastructure-n-2");return map?new Infrastructure(map):null}}]),infrastructure_createClass(Infrastructure,[{key:"handleTabChange",value:function(tab){if(tab){var type=tab.getAttribute("data-type");type&&this.beforeWrapperToggle(type)}}},{key:"beforeWrapperToggle",value:function(type){switch(type){case"infrastructure":case"ecology":this.toggleActiveWrapper("switches",type);break;case"streetview":case"panorama":this.toggleActiveWrapper("views",type)}}},{key:"toggleActiveWrapper",value:function(category,type){if(this.state.activeWrap.classList.remove("is-active"),"views"===category){this.map&&this.map.classList.add("is-hidden");var nextTab=this.views.find(function(view){return view.key===type}).node;nextTab&&this.streetView&&(nextTab.classList.add("is-active"),this.state.activeWrap=nextTab)}else"switches"===category&&this.map&&this.map.classList.remove("is-hidden");this.fireResizeEvent()}},{key:"fireResizeEvent",value:function(){var event=new CustomEvent("resize");window.dispatchEvent(event)}}]),Infrastructure}()}}]);