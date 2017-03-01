// ==UserScript==
// @name        Fix
// @namespace   zcyzcy88
// @include     *
// @grant       none
// ==/UserScript==

// Copy from http://qiita.com/cyokodog@github/items/2e66410c3a61ebd8670e
Element.prototype.prependChild = function (el) {
    this.insertBefore(el, this.firstChild)
}

var css = ''
css += 'abbr[title]{border-bottom:0;text-decoration:underline;text-decoration:underline dotted}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}fieldset{border:1.5px solid silver;margin:0 2px;padding:.35em .625em .75em}'
css += 'body{overflow-x:hidden !important}body,button,input,optgroup,select,textarea{margin:0;font-size:1em;font-family:sans-serif;line-height:1.15}code,kbd,pre,samp,var{font-size:1em;font-family:Consolas,monospace,sans-serif!important}'
css += '::selection{color:#000!important;background:#9cf!important}a::selection{color:#00c!important}img{transition:box-shadow .2s cubic-bezier(.4,0,.2,1)}img:hover{box-shadow:0 3px 8px 0 rgba(0,0,0,.3)}#goog-gt-tt .original-text{text-align:start!important}#goog-gt-tt>div:first-child{display:none}'

var x = document.createElement('style')
x.innerHTML = css
document.head.prependChild(x)

document.addEventListener('mousedown', e => e.preventDefault())
