(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{396:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return _default});__webpack_require__(0),__webpack_require__(83),__webpack_require__(165),__webpack_require__(103);var axios__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(28),axios__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__),_static_js_vendor_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(53),_content_search_content_search_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(34),_helpers_request__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(39);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var _default=function(){function _default(element){!function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,_default),this.element=element,this.modal=new _static_js_vendor_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.a.Modal(this.element),this.title=this.element.querySelector(".h3"),this.form=this.element.querySelector(".js-review-modal-form"),this.formStatus=this.element.querySelector(".js-review-modal-status"),this.formHiddenType=this.element.querySelector('[name="type"]'),this.formBuildingPlace=this.element.querySelector('[name="new_building_place"]'),this.formPhone=this.element.querySelector('[name="phone"]'),this.formEmail=this.element.querySelector('[name="email"]'),this.formSubmitButton=this.form.querySelector('[type="submit"]'),this.errorsContainer=document.createElement("div"),this.errorsContainer.className="modal-review__errors",this.url=this.form.getAttribute("action"),this.bindEvents()}var Constructor,protoProps,staticProps;return Constructor=_default,(protoProps=[{key:"bindEvents",value:function(){var _this=this;this.element.addEventListener("show.bs.modal-n-2",function(){var modalTrigger=_this.element.modalTrigger;if(modalTrigger.hasAttribute("data-form")){var dataForm=modalTrigger.getAttribute("data-form");_this.formHiddenType.value=dataForm,"review"===dataForm?(_this.formBuildingPlace.removeAttribute("required"),_this.formBuildingPlace.closest(".form__control").classList.add("hidden-n-2"),_this.formPhone.removeAttribute("required"),_this.formPhone.closest(".form__control").classList.add("hidden-n-2"),_this.formEmail.removeAttribute("required"),_this.formEmail.closest(".form__control").querySelector(".labeled-input__meta").innerText="после съемки авторского обзора мы оповестим Вас по почте"):_this.formEmail.closest(".form__control").querySelector(".labeled-input__meta").innerText="после выполнения задания вышлем видео Вам на почту"}modalTrigger.hasAttribute("data-form-title")&&(_this.title.innerText=modalTrigger.getAttribute("data-form-title")),_this.recaptchaLoaded||_this.loadRecaptcha()}),this.form.addEventListener("submit",function(e){return e.preventDefault(),_this.formSubmitButton.disabled=!0,_this.request()})}},{key:"request",value:function(){var _this2=this,onValidateError=function(data){_this2.errorsContainer.parentNode&&_this2.errorsContainer.parentNode.removeChild(_this2.errorsContainer),_this2.errorsContainer.innerHTML=data,_this2.formSubmitButton.parentNode.insertBefore(_this2.errorsContainer,_this2.formSubmitButton)};return this.setSpinnerState(!0),axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(this.url,Object(_helpers_request__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_content_search_content_search_helpers__WEBPACK_IMPORTED_MODULE_6__.c)(this.form,{hash:!0}))).then(function(response){var data=response.data;"success"===data.trim()?(_this2.formStatus.innerText="Спасибо, ваша ".concat(_this2.title.innerText.toLowerCase()," отправлена, мы свяжемся с вами в ближайшее время"),_this2.form.style.display="none",setTimeout(function(){_this2.modal.hide()},5e3)):"captcha"===data.trim()?onValidateError("Проверьте правильность ввода капчи"):onValidateError(data)}).catch(function(){return _this2.formStatus.innerText="Ошибка при отправке, свяжитесь с нами по телефону +7 (495) 662-97-55",void(_this2.form.style.display="none")}).finally(function(){window.grecaptcha&&window.grecaptcha.reset(),_this2.setSpinnerState(!1),_this2.formSubmitButton.disabled=!1})}},{key:"setSpinnerState",value:function(isVisible){if(isVisible){var spinner=document.createElement("span");spinner.classList.add("spinner"),spinner.classList.add("spinner_ignore-content"),this.formSubmitButton.innerHTML="",this.formSubmitButton.appendChild(spinner)}else this.formSubmitButton.innerHTML="Отправить"}},{key:"loadRecaptcha",value:function(){var script=document.createElement("script");script.async=!0,script.src="//www.google.com/recaptcha/api.js",document.body.appendChild(script),this.recaptchaLoaded=!0}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),_default}()}}]);