!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){t.exports=o(1)},1:function(t,e,o){"use strict";o(2),o(16)},2:function(t,e){},16:function(t,e,o){(function(e){t.exports=e.OnBoarding=o(17)}).call(e,function(){return this}())},17:function(t,e){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);n=!0);}catch(t){i=!0,r=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),r=function(){function t(e,n,i,r,s){o(this,t),this.currentStep=e,this.steps=n,this.isShutDown=i,this.apiLocation=r,this.baseAdminDir=s,this.templates=[]}return i(t,[{key:"addTemplate",value:function(t,e){this.templates[t]=e}},{key:"showCurrentStep",value:function(){$(".onboarding-navbar").toggleClass("displayed",this.isShutDown),$(".onboarding-advancement").toggle(this.isShutDown===!1),$(".onboarding-popup").remove(),$(".onboarding-tooltip").remove();var e=$(".onboarding-navbar.displayed").innerHeight();if($("#nav-sidebar").length?$("#nav-sidebar").css("padding-bottom",e+50+"px"):$("nav.nav-bar ul.main-menu").css("margin-bottom",e+"px"),!this.isShutDown){var o=this.getStep(this.currentStep);t.isCurrentPage(o.page)?(this.prependTemplate(o.type,o.text),"tooltip"===o.type&&this.placeToolTip(o),$(".onboarding-advancement").toggle($.inArray("hideFooter",o.options)===-1),this.updateAdvancement()):($(".onboarding-advancement").toggle(!1),this.setShutDown(!0))}}},{key:"prependTemplate",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=$(this.templates[t]);""!==e&&o.find(".content").html(e),$("body").prepend(o)}},{key:"gotoNextStep",value:function(){this.gotoStep(this.currentStep+1)}},{key:"gotoStep",value:function(e){var o=this;this.save({action:"setCurrentStep",value:e},function(n){if(!n){var i=o.getStep(o.currentStep),r=o.getStep(e);if(!r)return $(".onboarding-popup").remove(),$(".onboarding-navbar").remove(),void $(".onboarding-tooltip").remove();i.action?$(i.action.selector)[i.action.action]():(o.currentStep+=1,t.isCurrentPage(r.page)?o.showCurrentStep():window.location.href=o.getRedirectUrl(r))}})}},{key:"getTokenAsString",value:function(e){var o=void 0;o=e.indexOf("?")!==-1?"&":"?";var n=window.location.search.substr(1),i=t.getSecurityTokens(n),r=o;return void 0!==i._token&&(r=r+"&_token="+i._token),r}},{key:"getRedirectUrl",value:function(t){var e=void 0;if(Array.isArray(t.page)){var o=n(t.page,1);e=o[0]}else e=t.page;return e+this.getTokenAsString(e)}},{key:"stop",value:function(){this.save({action:"setCurrentStep",value:this.getTotalSteps()},function(t){t||($(".onboarding-advancement").remove(),$(".onboarding-navbar").remove(),$(".onboarding-popup").remove(),$(".onboarding-tooltip").remove())})}},{key:"gotoLastSavePoint",value:function(){var t=this,e=0,o=0;this.steps.groups.forEach(function(n){n.steps.forEach(function(n){o<=t.currentStep&&$.inArray("savepoint",n.options)!==-1&&(e=o),o+=1})}),this.gotoStep(e)}},{key:"getGroupForStep",value:function(t){return this.getElementForStep(t,"group")}},{key:"getCurrentGroupID",value:function(){var t=this,e=0,o=0,n=0;return this.steps.groups.forEach(function(i){i.steps.forEach(function(){o===t.currentStep&&(n=e),o+=1}),e+=1}),n}},{key:"getCurrentStepIDOnGroup",value:function(){var t=this,e=0,o=0,n=0;return this.steps.groups.forEach(function(i){n=0,i.steps.forEach(function(){e===t.currentStep&&(o=n),n+=1,e+=1})}),o}},{key:"getStep",value:function(t){return this.getElementForStep(t,"step")}},{key:"getElementForStep",value:function(t,e){var o=0,n=null;return this.steps.groups.forEach(function(i){i.steps.forEach(function(r){o===t&&("step"===e?n=r:"group"===e&&(n=i)),o+=1})}),n}},{key:"save",value:function(t,e){$.ajax({method:"POST",url:this.apiLocation,data:t}).done(function(t){e("0"!==t)}).fail(function(){e(!0)})}},{key:"updateAdvancement",value:function(){var t=this,e=$(".onboarding-advancement"),o=$(".onboarding-navbar"),n=0;this.steps.groups.forEach(function(o,i){var r=Math.min(t.currentStep+1-n,o.steps.length);if(e.find(".group-"+i+" .advancement").css("width",r/o.steps.length*100+"%"),n+=o.steps.length,r===o.steps.length){var s=e.find(".group-"+i+" .id");s.hasClass("-done")||s.addClass("-done")}}),e.find(".group-title").html(this.getCurrentGroupID()+1+"/"+this.getTotalGroups()+" - "+this.getGroupForStep(this.currentStep).title),this.getGroupForStep(this.currentStep).subtitle&&(this.getGroupForStep(this.currentStep).subtitle[1]&&e.find(".step-title-1").html('<i class="material-icons">check</i> '+this.getGroupForStep(this.currentStep).subtitle[1]),this.getGroupForStep(this.currentStep).subtitle[2]&&e.find(".step-title-2").html('<i class="material-icons">check</i> '+this.getGroupForStep(this.currentStep).subtitle[2]));var i=this.currentStep/this.getTotalSteps();o.find(".text").find(".text-right").html(Math.floor(100*i)+"%"),o.find(".progress-bar").width(100*i+"%")}},{key:"getTotalSteps",value:function(){var t=0;return this.steps.groups.forEach(function(e){t+=e.steps.length}),t}},{key:"getTotalGroups",value:function(){return this.steps.groups.length}},{key:"setShutDown",value:function(e){var o=this;this.isShutDown=e?1:0,1===this.isShutDown&&($(".onboarding-advancement").toggle(!1),$(".onboarding-navbar").toggleClass("displayed",!0),$(".onboarding-popup").remove(),$(".onboarding-tooltip").remove()),this.save({action:"setShutDown",value:this.isShutDown},function(e){e||0===o.isShutDown&&(t.isCurrentPage(o.getStep(o.currentStep).page)?o.showCurrentStep():o.gotoLastSavePoint())})}},{key:"placeToolTip",value:function(t){var e=this;if(this.tooltipElement=$(t.selector),this.tooltip=$(".onboarding-tooltip"),this.tooltip.hide(),!this.tooltipElement.is(":visible"))return setTimeout(function(){e.placeToolTip(t)},100),void(void 0!==this.tooltipPlacementInterval&&clearInterval(this.tooltipPlacementInterval));this.tooltipPlacementInterval=setInterval(function(){e.updateToolTipPosition(t)},100),this.tooltip.show(),this.tooltip.addClass("-"+t.position),this.tooltip.data("position",t.position);var o=this.getCurrentStepIDOnGroup(),n=this.getGroupForStep(this.currentStep).steps.length;this.tooltip.find(".count").html(o+1+"/"+n);for(var i=this.tooltip.find(".bulls"),r=0;r<n;r+=1){var s=$("<div></div>").addClass("bull");r<o&&s.addClass("-done"),r===o&&s.addClass("-current"),i.append(s)}setTimeout(function(){e.tooltipElement.offset().top>window.screen.height/2-200&&window.scrollTo(0,e.tooltipElement.offset().top-(window.screen.height/2-200))},200),this.updateToolTipPosition()}},{key:"updateToolTipPosition",value:function(){var t=this.tooltipElement.offset().top-this.tooltipElement.outerHeight()/2-this.tooltip.outerHeight()/2,e=this.tooltipElement.offset().top+this.tooltipElement.outerHeight()/2-this.tooltip.outerHeight()/2,o=this.tooltipElement.offset().top+this.tooltipElement.outerHeight()/2-this.tooltip.outerHeight()/2,n=this.tooltipElement.offset().left-this.tooltip.outerWidth(),i=this.tooltipElement.offset().left+this.tooltipElement.outerWidth();switch(this.tooltip.data("position")){case"right":this.tooltip.css({left:i,top:e});break;case"left":this.tooltip.css({left:n,top:e});break;case"top":this.tooltip.css({left:t,top:o})}}}],[{key:"parseQueryString",value:function(t){var e=t.split("&"),o={},i=void 0,r=void 0,s=void 0,a=void 0;for(r=0;r<e.length;r+=1){i=e[r].split("=");var u=i,p=n(u,2);s=p[0],a=p[1],o[s]=a}return o}},{key:"getSecurityTokens",value:function(e){var o=t.parseQueryString(e),n={};return"undefined"!=typeof o._token&&(n._token=o._token),n}},{key:"isCurrentPage",value:function(t){var e=window.location.href,o=void 0;o=$.isArray(t)?t:[String(t)];var n=!1;return o.forEach(function(t){var o=t.replace(/[\?\$]/g,"\\$&"),i=new RegExp(o,"i");i.test(e)&&(n=!0)}),n}}]),t}();t.exports=r}});