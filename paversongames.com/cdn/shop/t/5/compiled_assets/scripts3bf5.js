(function(){var __sections__={};(function(){for(var i=0,s=document.getElementById("sections-script").getAttribute("data-sections").split(",");i<s.length;i++)__sections__[s[i]]=!0})(),function(){if(__sections__["main-article"])try{let loadFeaturedProducts2=function(){const contentProdsEl=document.querySelector(".content-products");if(!contentProdsEl)return;const prodEls=contentProdsEl.querySelectorAll("[data-lazy-product-handle]"),ratioSetting=theme.settings.prod_card_image_ratio;let ratioValue=ratioSetting;ratioSetting==="shortest"?ratioValue=0:ratioSetting==="tallest"&&(ratioValue=99),contentProdsEl.classList.add("is-loading");async function getProducts(){for(el of prodEls)await fetch(`/products/${el.dataset.lazyProductHandle}/?section_id=product-item`).then(response=>response.text()).then(responseText=>{const html=responseText,fetchedHTML=document.implementation.createHTMLDocument();if(fetchedHTML.documentElement.innerHTML=html,ratioSetting==="shortest"||ratioSetting==="tallest"){const imgMain=fetchedHTML.querySelector(".prod-image__main");if(imgMain){const paddingTop=imgMain.style.paddingTop,thisRatio=1/(Number(paddingTop.slice(0,-1))/100);ratioSetting==="shortest"?thisRatio>ratioValue&&(ratioValue=thisRatio):thisRatio<ratioValue&&(ratioValue=thisRatio)}}el.replaceWith(fetchedHTML.querySelector(".card"))}).catch(()=>{el.remove()});contentProdsEl.querySelectorAll(".prod-image__main").forEach(el2=>{el2.style.paddingTop=`${1/ratioValue*100}%`}),contentProdsEl.classList.remove("is-loading")}getProducts()};var loadFeaturedProducts=loadFeaturedProducts2;document.addEventListener("DOMContentLoaded",loadFeaturedProducts2),document.addEventListener("shopify:section:load",loadFeaturedProducts2)}catch(e){console.error(e)}}(),function(){if(!(!__sections__["product-recommendations"]&&!window.DesignMode))try{let loadProductRecommendations2=function(){const sprSection=document.querySelector(".product-recommendations"),{limit,url}=sprSection.dataset;fetch(sprSection.dataset.url).then(response=>{if(!response.ok)throw response;return response.text()}).then(html=>{const div=document.createElement("div"),colClass=new Map([["2","half"],["3","third"],["4","quarter"],["5","fifth"]]);div.innerHTML=html,div.querySelectorAll(".card").forEach(el2=>{el2.classList.remove("half","third","quarter","fifth"),el2.classList.add(colClass.get(limit))}),sprSection.parentElement.innerHTML=div.querySelector(".product-recommendations").innerHTML,window.theme.initAnimateOnScroll()}).catch(error=>{console.log(error)})};var loadProductRecommendations=loadProductRecommendations2;document.addEventListener("shopify:section:load",e=>{const sectionEl=document.querySelector(".product-recommendations");sectionEl&&sectionEl.dataset.sectionId===e.detail.sectionId&&loadProductRecommendations2()}),document.addEventListener("DOMContentLoaded",loadProductRecommendations2)}catch(e){console.error(e)}}(),function(){if(__sections__["react-app"])try{const reactRootElement=document.getElementById("DOGroot");installDOG(reactRootElement)}catch(e){console.error(e)}}()})();
//# sourceMappingURL=/cdn/shop/t/5/compiled_assets/scripts.js.map?1255=