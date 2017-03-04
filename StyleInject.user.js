// ==UserScript==
// @name        Sty leInject (User Style)
// @namespace   zcyzcy88
// @include     *
// @grant       none
// ==/UserScript==

var css = 'sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}fieldset{border:1.5px solid silver;margin:0 2px;padding:.35em .625em .75em}abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}body,button,input,optgroup,select,textarea{margin:0;font-size:1em;font-family:sans-serif;line-height:1.15}pre,code,kbd,samp,var{font-size:1em;font-family:Consolas,monospace,sans-serif!important}::selection{color:#000!important;background:#9cf!important}a::selection{color:#00c!important}img{transition:box-shadow 200ms cubic-bezier(0.4,0.0,0.2,1)}img:hover{box-shadow:0 3px 8px 0 rgba(0,0,0,0.3)}'

// Thanks http://qiita.com/cyokodog@github/items/2e66410c3a61ebd8670e
Element.prototype.prependChild = function (el) {
	this.insertBefore(el, this.firstChild)
}

var x = document.createElement('style')
x.innerHTML = css
document.head.prependChild(x)
