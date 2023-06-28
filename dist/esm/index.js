var v=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var o=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var S=o((st,T)=>{"use strict";function ze(t){return typeof t!="object"||Array.isArray(t)||t==null?!1:Object.keys(t).length>0}function k(t,e,i={}){for(let u in e)if(ze(e[u]))t[u]=t[u]||{},k(t[u],e[u],i);else{if(i.skipIfExist===!0&&t[u]!==void 0)continue;t[u]=e[u]}return t}T.exports=k});var A=o((ot,j)=>{"use strict";function Ie(t){return t===void 0||t===null?"":typeof t.toString=="function"?t:typeof t}j.exports=(t,e,i)=>t.replace(e,Ie(i))});var N=o((pt,w)=>{"use strict";w.exports={required:"The '{field}' field is required.",string:"The '{field}' field must be a string.",stringEmpty:"The '{field}' field must not be empty.",stringMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",stringMax:"The '{field}' field length must be less than or equal to {expected} characters long.",stringLength:"The '{field}' field length must be {expected} characters long.",stringPattern:"The '{field}' field fails to match the required pattern.",stringContains:"The '{field}' field must contain the '{expected}' text.",stringEnum:"The '{field}' field does not match any of the allowed values.",stringNumeric:"The '{field}' field must be a numeric string.",stringAlpha:"The '{field}' field must be an alphabetic string.",stringAlphanum:"The '{field}' field must be an alphanumeric string.",stringAlphadash:"The '{field}' field must be an alphadash string.",stringHex:"The '{field}' field must be a hex string.",stringSingleLine:"The '{field}' field must be a single line string.",stringBase64:"The '{field}' field must be a base64 string.",number:"The '{field}' field must be a number.",numberMin:"The '{field}' field must be greater than or equal to {expected}.",numberMax:"The '{field}' field must be less than or equal to {expected}.",numberEqual:"The '{field}' field must be equal to {expected}.",numberNotEqual:"The '{field}' field can't be equal to {expected}.",numberInteger:"The '{field}' field must be an integer.",numberPositive:"The '{field}' field must be a positive number.",numberNegative:"The '{field}' field must be a negative number.",array:"The '{field}' field must be an array.",arrayEmpty:"The '{field}' field must not be an empty array.",arrayMin:"The '{field}' field must contain at least {expected} items.",arrayMax:"The '{field}' field must contain less than or equal to {expected} items.",arrayLength:"The '{field}' field must contain {expected} items.",arrayContains:"The '{field}' field must contain the '{expected}' item.",arrayUnique:"The '{actual}' value in '{field}' field does not unique the '{expected}' values.",arrayEnum:"The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",tuple:"The '{field}' field must be an array.",tupleEmpty:"The '{field}' field must not be an empty array.",tupleLength:"The '{field}' field must contain {expected} items.",boolean:"The '{field}' field must be a boolean.",currency:"The '{field}' must be a valid currency format",date:"The '{field}' field must be a Date.",dateMin:"The '{field}' field must be greater than or equal to {expected}.",dateMax:"The '{field}' field must be less than or equal to {expected}.",enumValue:"The '{field}' field value '{expected}' does not match any of the allowed values.",equalValue:"The '{field}' field value must be equal to '{expected}'.",equalField:"The '{field}' field value must be equal to '{expected}' field value.",forbidden:"The '{field}' field is forbidden.",function:"The '{field}' field must be a function.",email:"The '{field}' field must be a valid e-mail.",emailEmpty:"The '{field}' field must not be empty.",emailMin:"The '{field}' field length must be greater than or equal to {expected} characters long.",emailMax:"The '{field}' field length must be less than or equal to {expected} characters long.",luhn:"The '{field}' field must be a valid checksum luhn.",mac:"The '{field}' field must be a valid MAC address.",object:"The '{field}' must be an Object.",objectStrict:"The object '{field}' contains forbidden keys: '{actual}'.",objectMinProps:"The object '{field}' must contain at least {expected} properties.",objectMaxProps:"The object '{field}' must contain {expected} properties at most.",url:"The '{field}' field must be a valid URL.",urlEmpty:"The '{field}' field must not be empty.",uuid:"The '{field}' field must be a valid UUID.",uuidVersion:"The '{field}' field must be a valid UUID version provided.",classInstanceOf:"The '{field}' field must be an instance of the '{expected}' class.",objectID:"The '{field}' field must be an valid ObjectID",record:"The '{field}' must be an Object."}});var R=o((ft,q)=>{"use strict";q.exports=function(){let t=[];return t.push(`
		return value;
	`),{source:t.join(`
`)}}});var V=o((ct,O)=>{"use strict";O.exports=function({schema:t,messages:e},i,u){let r=[],a=!1;if(t.convert===!0&&(a=!0,r.push(`
			if (!Array.isArray(value) && value != null) {
				value = [value];
			}
		`)),r.push(`
		if (!Array.isArray(value)) {
			${this.makeError({type:"array",actual:"value",messages:e})}
			return value;
		}

		var len = value.length;
	`),t.empty===!1&&r.push(`
			if (len === 0) {
				${this.makeError({type:"arrayEmpty",actual:"value",messages:e})}
			}
		`),t.min!=null&&r.push(`
			if (len < ${t.min}) {
				${this.makeError({type:"arrayMin",expected:t.min,actual:"len",messages:e})}
			}
		`),t.max!=null&&r.push(`
			if (len > ${t.max}) {
				${this.makeError({type:"arrayMax",expected:t.max,actual:"len",messages:e})}
			}
		`),t.length!=null&&r.push(`
			if (len !== ${t.length}) {
				${this.makeError({type:"arrayLength",expected:t.length,actual:"len",messages:e})}
			}
		`),t.contains!=null&&r.push(`
			if (value.indexOf(${JSON.stringify(t.contains)}) === -1) {
				${this.makeError({type:"arrayContains",expected:JSON.stringify(t.contains),actual:"value",messages:e})}
			}
		`),t.unique===!0&&r.push(`
			if(len > (new Set(value)).size) {
				${this.makeError({type:"arrayUnique",expected:"Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",actual:"value",messages:e})}
			}
		`),t.enum!=null){let n=JSON.stringify(t.enum);r.push(`
			for (var i = 0; i < value.length; i++) {
				if (${n}.indexOf(value[i]) === -1) {
					${this.makeError({type:"arrayEnum",expected:'"'+t.enum.join(", ")+'"',actual:"value[i]",messages:e})}
				}
			}
		`)}if(t.items!=null){r.push(`
			var arr = value;
			var parentField = field;
			for (var i = 0; i < arr.length; i++) {
				value = arr[i];
		`);let n=i+"[]",s=this.getRuleFromSchema(t.items),l=`arr[i] = ${u.async?"await ":""}context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)`;r.push(this.compileRule(s,u,n,l,"arr[i]")),r.push(`
			}
		`),r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{sanitized:a,source:r.join(`
`)}}});var C=o((dt,F)=>{"use strict";F.exports=function({schema:t,messages:e},i,u){let r=[],a=!1;return r.push(`
		var origValue = value;
	`),t.convert===!0&&(a=!0,r.push(`
			if (typeof value !== "boolean") {
				if (
				value === 1
				|| value === "true"
				|| value === "1"
				|| value === "on"
				) {
					value = true;
				} else if (
				value === 0
				|| value === "false"
				|| value === "0"
				|| value === "off"
				) {
					value = false;
				}
			}
		`)),r.push(`
		if (typeof value !== "boolean") {
			${this.makeError({type:"boolean",actual:"origValue",messages:e})}
		}
		
		return value;
	`),{sanitized:a,source:r.join(`
`)}}});var z=o((ht,P)=>{"use strict";P.exports=function({schema:t,messages:e,index:i},u,r){let a=[],n=t.instanceOf.name?t.instanceOf.name:"<UnknowClass>";return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		if (!(value instanceof context.customs[${i}].schema.instanceOf))
			${this.makeError({type:"classInstanceOf",actual:"value",expected:"'"+n+"'",messages:e})}
	`),a.push(`
		return value;
	`),{source:a.join(`
`)}}});var M=o((vt,I)=>{"use strict";I.exports=function({schema:t,messages:e,index:i},u,r){let a=[];return a.push(`
		${this.makeCustomValidator({fnName:"check",path:u,schema:t,messages:e,context:r,ruleIndex:i})}
		return value;
	`),{source:a.join(`
`)}}});var L=o((yt,D)=>{"use strict";var Me="(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$";D.exports=function({schema:t,messages:e},i,u){let r=t.currencySymbol||null,a=t.thousandSeparator||",",n=t.decimalSeparator||".",s=t.customRegex,l=!t.symbolOptional,p=Me.replace(/~1/g,r?`\\${r}${l?"":"?"}`:"").replace("~2",a).replace("~3",n),f=[];return f.push(`
		if (!value.match(${s||new RegExp(p)})) {
			${this.makeError({type:"currency",actual:"value",messages:e})}
			return value;
		}

		return value;
	`),{source:f.join(`
`)}}});var H=o((mt,_)=>{"use strict";_.exports=function({schema:t,messages:e},i,u){let r=[],a=!1;return r.push(`
		var origValue = value;
	`),t.convert===!0&&(a=!0,r.push(`
			if (!(value instanceof Date)) {
				value = new Date(value.length && !isNaN(+value) ? +value : value);
			}
		`)),r.push(`
		if (!(value instanceof Date) || isNaN(value.getTime()))
			${this.makeError({type:"date",actual:"origValue",messages:e})}

		return value;
	`),{sanitized:a,source:r.join(`
`)}}});var U=o((gt,J)=>{"use strict";var De=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Le=/^\S+@\S+\.\S+$/;J.exports=function({schema:t,messages:e},i,u){let r=[],a=t.mode=="precise"?De:Le,n=!1;return r.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}
	`),t.empty?r.push(`
			if (value.length === 0) return value;
		`):r.push(`
			if (value.length === 0) {
				${this.makeError({type:"emailEmpty",actual:"value",messages:e})}
				return value;
			}
		`),t.normalize&&(n=!0,r.push(`
			value = value.trim().toLowerCase();
		`)),t.min!=null&&r.push(`
			if (value.length < ${t.min}) {
				${this.makeError({type:"emailMin",expected:t.min,actual:"value.length",messages:e})}
			}
		`),t.max!=null&&r.push(`
			if (value.length > ${t.max}) {
				${this.makeError({type:"emailMax",expected:t.max,actual:"value.length",messages:e})}
			}
		`),r.push(`
		if (!${a.toString()}.test(value)) {
			${this.makeError({type:"email",actual:"value",messages:e})}
		}

		return value;
	`),{sanitized:n,source:r.join(`
`)}}});var X=o(($t,Z)=>{"use strict";Z.exports=function({schema:t,messages:e},i,u){return{source:`
			if (${JSON.stringify(t.values||[])}.indexOf(value) === -1)
				${this.makeError({type:"enumValue",expected:'"'+t.values.join(", ")+'"',actual:"value",messages:e})}
			
			return value;
		`}}});var K=o((bt,Y)=>{"use strict";Y.exports=function({schema:t,messages:e},i,u){let r=[];return t.field?(t.strict?r.push(`
				if (value !== parent["${t.field}"])
			`):r.push(`
				if (value != parent["${t.field}"])
			`),r.push(`
				${this.makeError({type:"equalField",actual:"value",expected:JSON.stringify(t.field),messages:e})}
		`)):(t.strict?r.push(`
				if (value !== ${JSON.stringify(t.value)})
			`):r.push(`
				if (value != ${JSON.stringify(t.value)})
			`),r.push(`
				${this.makeError({type:"equalValue",actual:"value",expected:JSON.stringify(t.value),messages:e})}
		`)),r.push(`
		return value;
	`),{source:r.join(`
`)}}});var B=o((xt,W)=>{"use strict";W.exports=function({schema:e,messages:i},u,r){let a=[];return a.push(`
		if (value !== null && value !== undefined) {
	`),e.remove?a.push(`
			return undefined;
		`):a.push(`
			${this.makeError({type:"forbidden",actual:"value",messages:i})}
		`),a.push(`
		}

		return value;
	`),{source:a.join(`
`)}}});var Q=o((Et,G)=>{"use strict";G.exports=function({schema:t,messages:e},i,u){return{source:`
			if (typeof value !== "function")
				${this.makeError({type:"function",actual:"value",messages:e})}

			return value;
		`}}});var te=o((kt,ee)=>{"use strict";ee.exports=function({schema:t,messages:e},i,u){let r=[];r.push(`
		var hasValid = false;
		var newVal = value;
		var checkErrors = [];
		var errorsSize = errors.length;
	`);for(let a=0;a<t.rules.length;a++){r.push(`
			if (!hasValid) {
				var _errors = [];
		`);let n=this.getRuleFromSchema(t.rules[a]);r.push(this.compileRule(n,u,i,`var tmpVal = ${u.async?"await ":""}context.fn[%%INDEX%%](value, field, parent, _errors, context);`,"tmpVal")),r.push(`
				if (errors.length == errorsSize && _errors.length == 0) {
					hasValid = true;
					newVal = tmpVal;
				} else {
					Array.prototype.push.apply(checkErrors, [].concat(_errors, errors.splice(errorsSize)));
				}
			}
		`)}return r.push(`
		if (!hasValid) {
			Array.prototype.push.apply(errors, checkErrors);
		}

		return newVal;
	`),{source:r.join(`
`)}}});var ie=o((Tt,re)=>{"use strict";re.exports=function({schema:t,messages:e},i,u){let r=[];r.push(`
		var origValue = value;
	`);let a=!1;return t.convert===!0&&(a=!0,r.push(`
			if (typeof value !== "number") {
				value = Number(value);
			}
		`)),r.push(`
		if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
			${this.makeError({type:"number",actual:"origValue",messages:e})}
			return value;
		}
	`),t.min!=null&&r.push(`
			if (value < ${t.min}) {
				${this.makeError({type:"numberMin",expected:t.min,actual:"origValue",messages:e})}
			}
		`),t.max!=null&&r.push(`
			if (value > ${t.max}) {
				${this.makeError({type:"numberMax",expected:t.max,actual:"origValue",messages:e})}
			}
		`),t.equal!=null&&r.push(`
			if (value !== ${t.equal}) {
				${this.makeError({type:"numberEqual",expected:t.equal,actual:"origValue",messages:e})}
			}
		`),t.notEqual!=null&&r.push(`
			if (value === ${t.notEqual}) {
				${this.makeError({type:"numberNotEqual",expected:t.notEqual,actual:"origValue",messages:e})}
			}
		`),t.integer===!0&&r.push(`
			if (value % 1 !== 0) {
				${this.makeError({type:"numberInteger",actual:"origValue",messages:e})}
			}
		`),t.positive===!0&&r.push(`
			if (value <= 0) {
				${this.makeError({type:"numberPositive",actual:"origValue",messages:e})}
			}
		`),t.negative===!0&&r.push(`
			if (value >= 0) {
				${this.makeError({type:"numberNegative",actual:"origValue",messages:e})}
			}
		`),r.push(`
		return value;
	`),{sanitized:a,source:r.join(`
`)}}});var ue=o((St,ae)=>{"use strict";var _e=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,He=/["'\\\n\r\u2028\u2029]/g;function y(t){return t.replace(He,function(e){switch(e){case'"':case"'":case"\\":return"\\"+e;case`
`:return"\\n";case"\r":return"\\r";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}})}ae.exports=function({schema:t,messages:e},i,u){let r=[];r.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"object",actual:"value",messages:e})}
			return value;
		}
	`);let a=t.properties||t.props;if(a){r.push("var parentObj = value;"),r.push("var parentField = field;");let n=Object.keys(a);for(let s=0;s<n.length;s++){let l=n[s],p=y(l),f=_e.test(p)?`.${p}`:`['${p}']`,c=`parentObj${f}`,x=(i?i+".":"")+l,E=a[l].label,Fe=E?`'${y(E)}'`:void 0;r.push(`
// Field: ${y(x)}`),r.push(`field = parentField ? parentField + "${f}" : "${p}";`),r.push(`value = ${c};`),r.push(`label = ${Fe}`);let Ce=this.getRuleFromSchema(a[l]),Pe=`
				${c} = ${u.async?"await ":""}context.fn[%%INDEX%%](value, field, parentObj, errors, context, label);
			`;r.push(this.compileRule(Ce,u,x,Pe,c)),this.opts.haltOnFirstError===!0&&r.push("if (errors.length) return parentObj;")}if(t.strict){let s=Object.keys(a);r.push(`
				field = parentField;
				var invalidProps = [];
				var props = Object.keys(parentObj);

				for (let i = 0; i < props.length; i++) {
					if (${JSON.stringify(s)}.indexOf(props[i]) === -1) {
						invalidProps.push(props[i]);
					}
				}
				if (invalidProps.length) {
			`),t.strict==="remove"?(r.push(`
					if (errors.length === 0) {
				`),r.push(`
						invalidProps.forEach(function(field) {
							delete parentObj[field];
						});
				`),r.push(`
					}
				`)):r.push(`
					${this.makeError({type:"objectStrict",expected:'"'+s.join(", ")+'"',actual:"invalidProps.join(', ')",messages:e})}
				`),r.push(`
				}
			`)}}return(t.minProps!=null||t.maxProps!=null)&&(t.strict?r.push(`
				props = Object.keys(${a?"parentObj":"value"});
			`):r.push(`
				var props = Object.keys(${a?"parentObj":"value"});
				${a?"field = parentField;":""}
			`)),t.minProps!=null&&r.push(`
			if (props.length < ${t.minProps}) {
				${this.makeError({type:"objectMinProps",expected:t.minProps,actual:"props.length",messages:e})}
			}
		`),t.maxProps!=null&&r.push(`
			if (props.length > ${t.maxProps}) {
				${this.makeError({type:"objectMaxProps",expected:t.maxProps,actual:"props.length",messages:e})}
			}
		`),a?r.push(`
			return parentObj;
		`):r.push(`
			return value;
		`),{source:r.join(`
`)}}});var le=o((jt,ne)=>{"use strict";ne.exports=function({schema:t,messages:e,index:i},u,r){let a=[];return r.customs[i]?r.customs[i].schema=t:r.customs[i]={schema:t},a.push(`
		const ObjectID = context.customs[${i}].schema.ObjectID;
		if (!ObjectID.isValid(value)) {
			${this.makeError({type:"objectID",actual:"value",messages:e})}
			return;
		}
	`),t.convert===!0?a.push("return new ObjectID(value)"):t.convert==="hexString"?a.push("return value.toString()"):a.push("return value"),{source:a.join(`
`)}}});var oe=o((At,se)=>{"use strict";function Je(t){for(let e in t.messages)e.startsWith("string")&&(t.messages[e]=t.messages[e].replace(" field "," key "))}se.exports=function({schema:e,messages:i},u,r){let a=[];a.push(`
		if (typeof value !== "object" || value === null || Array.isArray(value)) {
			${this.makeError({type:"record",actual:"value",messages:i})}
			return value;
		}
	`);let n=e.key||"string",s=e.value||"any";a.push(`
		const record = value;
		let sanitizedKey, sanitizedValue;
		const result = {};
		for (let key in value) {
	`),a.push("sanitizedKey = value = key;");let l=this.getRuleFromSchema(n);Je(l);let p=`
		sanitizedKey = ${r.async?"await ":""}context.fn[%%INDEX%%](key, field ? field + "." + key : key, record, errors, context);
	`;a.push(this.compileRule(l,r,null,p,"sanitizedKey")),a.push("sanitizedValue = value = record[key];");let f=this.getRuleFromSchema(s),c=`
		sanitizedValue = ${r.async?"await ":""}context.fn[%%INDEX%%](value, field ? field + "." + key : key, record, errors, context);
	`;return a.push(this.compileRule(f,r,`${u}[key]`,c,"sanitizedValue")),a.push("result[sanitizedKey] = sanitizedValue;"),a.push(`
		}
	`),a.push("return result;"),{source:a.join(`
`)}}});var fe=o((wt,pe)=>{"use strict";var Ue=/^-?[0-9]\d*(\.\d+)?$/,Ze=/^[a-zA-Z]+$/,Xe=/^[a-zA-Z0-9]+$/,Ye=/^[a-zA-Z0-9_-]+$/,Ke=/^[0-9a-fA-F]+$/,We=/^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;pe.exports=function({schema:e,messages:i},u,r){let a=[],n=!1;if(e.convert===!0&&(n=!0,a.push(`
			if (typeof value !== "string") {
				value = String(value);
			}
		`)),a.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:i})}
			return value;
		}

		var origValue = value;
	`),e.trim&&(n=!0,a.push(`
			value = value.trim();
		`)),e.trimLeft&&(n=!0,a.push(`
			value = value.trimLeft();
		`)),e.trimRight&&(n=!0,a.push(`
			value = value.trimRight();
		`)),e.padStart){n=!0;let s=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padStart(${e.padStart}, ${JSON.stringify(s)});
		`)}if(e.padEnd){n=!0;let s=e.padChar!=null?e.padChar:" ";a.push(`
			value = value.padEnd(${e.padEnd}, ${JSON.stringify(s)});
		`)}if(e.lowercase&&(n=!0,a.push(`
			value = value.toLowerCase();
		`)),e.uppercase&&(n=!0,a.push(`
			value = value.toUpperCase();
		`)),e.localeLowercase&&(n=!0,a.push(`
			value = value.toLocaleLowerCase();
		`)),e.localeUppercase&&(n=!0,a.push(`
			value = value.toLocaleUpperCase();
		`)),a.push(`
			var len = value.length;
	`),e.empty===!1?a.push(`
			if (len === 0) {
				${this.makeError({type:"stringEmpty",actual:"value",messages:i})}
			}
		`):e.empty===!0&&a.push(`
			if (len === 0) {
				return value;
			}
		`),e.min!=null&&a.push(`
			if (len < ${e.min}) {
				${this.makeError({type:"stringMin",expected:e.min,actual:"len",messages:i})}
			}
		`),e.max!=null&&a.push(`
			if (len > ${e.max}) {
				${this.makeError({type:"stringMax",expected:e.max,actual:"len",messages:i})}
			}
		`),e.length!=null&&a.push(`
			if (len !== ${e.length}) {
				${this.makeError({type:"stringLength",expected:e.length,actual:"len",messages:i})}
			}
		`),e.pattern!=null){let s=e.pattern;typeof e.pattern=="string"&&(s=new RegExp(e.pattern,e.patternFlags)),a.push(`
			if (!${s.toString()}.test(value)) {
				${this.makeError({type:"stringPattern",expected:`"${s.toString().replace(/"/g,"\\$&")}"`,actual:"origValue",messages:i})}
			}
		`)}if(e.contains!=null&&a.push(`
			if (value.indexOf("${e.contains}") === -1) {
				${this.makeError({type:"stringContains",expected:'"'+e.contains+'"',actual:"origValue",messages:i})}
			}
		`),e.enum!=null){let s=JSON.stringify(e.enum);a.push(`
			if (${s}.indexOf(value) === -1) {
				${this.makeError({type:"stringEnum",expected:'"'+e.enum.join(", ")+'"',actual:"origValue",messages:i})}
			}
		`)}return e.numeric===!0&&a.push(`
			if (!${Ue.toString()}.test(value) ) {
				${this.makeError({type:"stringNumeric",actual:"origValue",messages:i})}
			}
		`),e.alpha===!0&&a.push(`
			if(!${Ze.toString()}.test(value)) {
				${this.makeError({type:"stringAlpha",actual:"origValue",messages:i})}
			}
		`),e.alphanum===!0&&a.push(`
			if(!${Xe.toString()}.test(value)) {
				${this.makeError({type:"stringAlphanum",actual:"origValue",messages:i})}
			}
		`),e.alphadash===!0&&a.push(`
			if(!${Ye.toString()}.test(value)) {
				${this.makeError({type:"stringAlphadash",actual:"origValue",messages:i})}
			}
		`),e.hex===!0&&a.push(`
			if(value.length % 2 !== 0 || !${Ke.toString()}.test(value)) {
				${this.makeError({type:"stringHex",actual:"origValue",messages:i})}
			}
		`),e.singleLine===!0&&a.push(`
			if(value.includes("\\n")) {
				${this.makeError({type:"stringSingleLine",messages:i})}
			}
		`),e.base64===!0&&a.push(`
			if(!${We.toString()}.test(value)) {
				${this.makeError({type:"stringBase64",actual:"origValue",messages:i})}
			}
		`),a.push(`
		return value;
	`),{sanitized:n,source:a.join(`
`)}}});var de=o((Nt,ce)=>{"use strict";ce.exports=function({schema:t,messages:e},i,u){let r=[];if(t.items!=null){if(!Array.isArray(t.items))throw new Error(`Invalid '${t.type}' schema. The 'items' field must be an array.`);if(t.items.length===0)throw new Error(`Invalid '${t.type}' schema. The 'items' field must not be an empty array.`)}if(r.push(`
		if (!Array.isArray(value)) {
			${this.makeError({type:"tuple",actual:"value",messages:e})}
			return value;
		}

		var len = value.length;
	`),t.empty===!1&&r.push(`
			if (len === 0) {
				${this.makeError({type:"tupleEmpty",actual:"value",messages:e})}
				return value;
			}
		`),t.items!=null){r.push(`
			if (${t.empty} !== false && len === 0) {
				return value;
			}

			if (len !== ${t.items.length}) {
				${this.makeError({type:"tupleLength",expected:t.items.length,actual:"len",messages:e})}
				return value;
			}
		`),r.push(`
			var arr = value;
			var parentField = field;
		`);for(let a=0;a<t.items.length;a++){r.push(`
			value = arr[${a}];
		`);let n=`${i}[${a}]`,s=this.getRuleFromSchema(t.items[a]),l=`
			arr[${a}] = ${u.async?"await ":""}context.fn[%%INDEX%%](arr[${a}], (parentField ? parentField : "") + "[" + ${a} + "]", parent, errors, context);
		`;r.push(this.compileRule(s,u,n,l,`arr[${a}]`))}r.push(`
		return arr;
	`)}else r.push(`
		return value;
	`);return{source:r.join(`
`)}}});var ve=o((qt,he)=>{"use strict";var Be=/^https?:\/\/\S+/;he.exports=function({schema:t,messages:e},i,u){let r=[];return r.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}
	`),t.empty?r.push(`
			if (value.length === 0) return value;
		`):r.push(`
			if (value.length === 0) {
				${this.makeError({type:"urlEmpty",actual:"value",messages:e})}
				return value;
			}
		`),r.push(`
		if (!${Be.toString()}.test(value)) {
			${this.makeError({type:"url",actual:"value",messages:e})}
		}

		return value;
	`),{source:r.join(`
`)}}});var me=o((Rt,ye)=>{"use strict";var Ge=/^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;ye.exports=function({schema:t,messages:e},i){let u=[];return u.push(`
		if (typeof value !== "string") {
			${this.makeError({type:"string",actual:"value",messages:e})}
			return value;
		}

		var val = value.toLowerCase();
		if (!${Ge.toString()}.test(val)) {
			${this.makeError({type:"uuid",actual:"value",messages:e})}
			return value;
		}

		const version = val.charAt(14) | 0;
	`),parseInt(t.version)<7&&u.push(`
			if (${t.version} !== version) {
				${this.makeError({type:"uuidVersion",expected:t.version,actual:"version",messages:e})}
				return value;
			}
		`),u.push(`
		switch (version) {
		case 0:
		case 1:
		case 2:
		case 6:
			break;
		case 3:
		case 4:
		case 5:
			if (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {
				${this.makeError({type:"uuid",actual:"value",messages:e})}
			}
		}

		return value;
	`),{source:u.join(`
`)}}});var $e=o((Ot,ge)=>{"use strict";var Qe=/^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;ge.exports=function({schema:t,messages:e},i,u){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			var v = value.toLowerCase();
			if (!${Qe.toString()}.test(v)) {
				${this.makeError({type:"mac",actual:"value",messages:e})}
			}
			
			return value;
		`}}});var xe=o((Vt,be)=>{"use strict";be.exports=function({schema:t,messages:e},i,u){return{source:`
			if (typeof value !== "string") {
				${this.makeError({type:"string",actual:"value",messages:e})}
				return value;
			}

			if (typeof value !== "string")
				value = String(value);

			val = value.replace(/\\D+/g, "");

			var array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
			var len = val ? val.length : 0,
				bit = 1,
				sum = 0;
			while (len--) {
				sum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];
			}

			if (!(sum % 10 === 0 && sum > 0)) {
				${this.makeError({type:"luhn",actual:"value",messages:e})}
			}

			return value;
		`}}});var Se=o((Ft,Te)=>{"use strict";var m,Ee,g,ke,et="prettier",tt="cli-highlight";Te.exports=function(t){m||(m=v(et),Ee={parser:"babel",useTabs:!1,printWidth:120,trailingComma:"none",tabWidth:4,singleQuote:!1,semi:!0,bracketSpacing:!0},g=v(tt),ke={language:"js",theme:g.fromJson({keyword:["white","bold"],built_in:"magenta",literal:"cyan",number:"magenta",regexp:"red",string:["yellow","bold"],symbol:"plain",class:"blue",attr:"plain",function:["white","bold"],title:"plain",params:"green",comment:"grey"})});let e=m.format(t,Ee);return g.highlight(e,ke)}});var Ae=o((Pt,je)=>{"use strict";var h;try{h=new Function("return Object.getPrototypeOf(async function(){}).constructor")()}catch{}var d=S(),rt=A();function it(){return Object.assign({},N())}function at(){return{any:R(),array:V(),boolean:C(),class:z(),custom:M(),currency:L(),date:H(),email:U(),enum:X(),equal:K(),forbidden:B(),function:Q(),multi:te(),number:ie(),object:ue(),objectID:le(),record:oe(),string:fe(),tuple:de(),url:ve(),uuid:me(),mac:$e(),luhn:xe()}}var $=class{constructor(e){if(this.opts={},this.defaults={},this.messages=it(),this.rules=at(),this.aliases={},this.cache=new Map,e){if(d(this.opts,e),e.defaults&&d(this.defaults,e.defaults),e.messages)for(let i in e.messages)this.addMessage(i,e.messages[i]);if(e.aliases)for(let i in e.aliases)this.alias(i,e.aliases[i]);if(e.customRules)for(let i in e.customRules)this.add(i,e.customRules[i]);if(e.plugins){let i=e.plugins;if(!Array.isArray(i))throw new Error("Plugins type must be array");i.forEach(this.plugin.bind(this))}if(this.opts.debug){let i=function(u){return u};typeof window>"u"&&(i=Se()),this._formatter=i}}}validate(e,i){return this.compile(i)(e)}wrapRequiredCheckSourceCode(e,i,u,r){let a=[],{considerNullAsAValue:n=!1}=this.opts,s,l=e.schema.optional===!0||e.schema.type==="forbidden",p=n?e.schema.nullable!==!1||e.schema.type==="forbidden":e.schema.optional===!0||e.schema.nullable===!0||e.schema.type==="forbidden";if(n?e.schema.default!=null&&e.schema.default!=null:e.schema.default!=null){l=!1,n?e.schema.nullable===!1&&(p=!1):e.schema.nullable!==!0&&(p=!1);let c;typeof e.schema.default=="function"?(u.customs[e.index]||(u.customs[e.index]={}),u.customs[e.index].defaultFn=e.schema.default,c=`context.customs[${e.index}].defaultFn.call(this, context.rules[${e.index}].schema, field, parent, context)`):c=JSON.stringify(e.schema.default),s=`
				value = ${c};
				${r} = value;
			`}else s=this.makeError({type:"required",actual:"value",messages:e.messages});return a.push(`
			${`if (value === undefined) { ${l?`
// allow undefined
`:s} }`}
			${`else if (value === null) { ${p?`
// allow null
`:s} }`}
			${i?`else { ${i} }`:""}
		`),a.join(`
`)}compile(e){if(e===null||typeof e!="object")throw new Error("Invalid schema.");let i=this,u={index:0,async:e.$$async===!0,rules:[],fn:[],customs:{},utils:{replace:rt}};if(this.cache.clear(),delete e.$$async,u.async&&!h)throw new Error("Asynchronous mode is not supported.");if(e.$$root!==!0)if(Array.isArray(e))e=this.getRuleFromSchema(e).schema;else{let f=Object.assign({},e);e={type:"object",strict:f.$$strict,properties:f},delete f.$$strict}let r=["var errors = [];","var field;","var parent = null;",`var label = ${e.label?'"'+e.label+'"':"null"};`],a=this.getRuleFromSchema(e);r.push(this.compileRule(a,u,null,`${u.async?"await ":""}context.fn[%%INDEX%%](value, field, null, errors, context, label);`,"value")),r.push("if (errors.length) {"),r.push(`
			return errors.map(err => {
				if (err.message) {
					err.message = context.utils.replace(err.message, /\\{field\\}/g, err.label || err.field);
					err.message = context.utils.replace(err.message, /\\{expected\\}/g, err.expected);
					err.message = context.utils.replace(err.message, /\\{actual\\}/g, err.actual);
				}
				if(!err.label) delete err.label
				return err;
			});
		`),r.push("}"),r.push("return true;");let n=r.join(`
`),s=u.async?h:Function,l=new s("value","context",n);this.opts.debug&&console.log(this._formatter(`// Main check function
`+l.toString())),this.cache.clear();let p=function(f,c){return u.data=f,c&&c.meta&&(u.meta=c.meta),l.call(i,f,u)};return p.async=u.async,p}compileRule(e,i,u,r,a){let n=[],s=this.cache.get(e.schema);if(s)e=s,e.cycle=!0,e.cycleStack=[],n.push(this.wrapRequiredCheckSourceCode(e,`
				var rule = context.rules[${e.index}];
				if (rule.cycleStack.indexOf(value) === -1) {
					rule.cycleStack.push(value);
					${r.replace(/%%INDEX%%/g,e.index)}
					rule.cycleStack.pop(value);
				}
			`,i,a));else{this.cache.set(e.schema,e),e.index=i.index,i.rules[i.index]=e;let l=u??"$$root";i.index++;let p=e.ruleFunction.call(this,e,u,i);p.source=p.source.replace(/%%INDEX%%/g,e.index);let f=i.async?h:Function,c=new f("value","field","parent","errors","context","label",p.source);i.fn[e.index]=c.bind(this),n.push(this.wrapRequiredCheckSourceCode(e,r.replace(/%%INDEX%%/g,e.index),i,a)),n.push(this.makeCustomValidator({vName:a,path:l,schema:e.schema,context:i,messages:e.messages,ruleIndex:e.index})),this.opts.debug&&console.log(this._formatter(`// Context.fn[${e.index}]
`+c.toString()))}return n.join(`
`)}getRuleFromSchema(e){e=this.resolveType(e);let i=this.aliases[e.type];i&&(delete e.type,e=d(e,i,{skipIfExist:!0}));let u=this.rules[e.type];if(!u)throw new Error("Invalid '"+e.type+"' type in validator schema.");return{messages:Object.assign({},this.messages,e.messages),schema:d(e,this.defaults[e.type],{skipIfExist:!0}),ruleFunction:u}}parseShortHand(e){let i=e.split("|").map(a=>a.trim()),u=i[0],r;return u.endsWith("[]")?r=this.getRuleFromSchema({type:"array",items:u.slice(0,-2)}).schema:r={type:i[0]},i.slice(1).map(a=>{let n=a.indexOf(":");if(n!==-1){let s=a.substr(0,n).trim(),l=a.substr(n+1).trim();l==="true"||l==="false"?l=l==="true":Number.isNaN(Number(l))||(l=Number(l)),r[s]=l}else a.startsWith("no-")?r[a.slice(3)]=!1:r[a]=!0}),r}makeError({type:e,field:i,expected:u,actual:r,messages:a}){let n={type:`"${e}"`,message:`"${a[e]}"`};return i?n.field=`"${i}"`:n.field="field",u!=null&&(n.expected=u),r!=null&&(n.actual=r),n.label="label",`errors.push({ ${Object.keys(n).map(l=>`${l}: ${n[l]}`).join(", ")} });`}makeCustomValidator({vName:e="value",fnName:i="custom",ruleIndex:u,path:r,schema:a,context:n,messages:s}){let l="rule"+u,p="fnCustomErrors"+u;if(typeof a[i]=="function"){if(n.customs[u]?(n.customs[u].messages=s,n.customs[u].schema=a):n.customs[u]={messages:s,schema:a},this.opts.useNewCustomCheckerFunction)return`
               		const ${l} = context.customs[${u}];
					const ${p} = [];
					${e} = ${n.async?"await ":""}${l}.schema.${i}.call(this, ${e}, ${p} , ${l}.schema, "${r}", parent, context);
					if (Array.isArray(${p} )) {
                  		${p} .forEach(err => errors.push(Object.assign({ message: ${l}.messages[err.type], field }, err)));
					}
				`;let f="res_"+l;return`
				const ${l} = context.customs[${u}];
				const ${f} = ${n.async?"await ":""}${l}.schema.${i}.call(this, ${e}, ${l}.schema, "${r}", parent, context);
				if (Array.isArray(${f})) {
					${f}.forEach(err => errors.push(Object.assign({ message: ${l}.messages[err.type], field }, err)));
				}
		`}return""}add(e,i){this.rules[e]=i}addMessage(e,i){this.messages[e]=i}alias(e,i){if(this.rules[e])throw new Error("Alias name must not be a rule name");this.aliases[e]=i}plugin(e){if(typeof e!="function")throw new Error("Plugin fn type must be function");return e(this)}resolveType(e){if(typeof e=="string")e=this.parseShortHand(e);else if(Array.isArray(e)){if(e.length===0)throw new Error("Invalid schema.");e={type:"multi",rules:e},e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.optional===!0)&&(e.optional=!0);let u=!this.opts.considerNullAsAValue;e.rules.map(a=>this.getRuleFromSchema(a)).every(a=>a.schema.nullable===u)&&(e.nullable=u)}if(e.$$type){let i=e.$$type,u=this.getRuleFromSchema(i).schema;delete e.$$type;let r=Object.assign({},e);for(let a in e)delete e[a];d(e,u,{skipIfExist:!0}),e.props=r}return e}normalize(e){let i=this.resolveType(e);if(this.aliases[i.type]&&(i=d(i,this.normalize(this.aliases[i.type]),{skipIfExists:!0})),i=d(i,this.defaults[i.type],{skipIfExist:!0}),i.type==="multi")return i.rules=i.rules.map(u=>this.normalize(u)),i.optional=i.rules.every(u=>u.optional===!0),i;if(i.type==="array")return i.items=this.normalize(i.items),i;if(i.type==="object"&&i.props&&Object.entries(i.props).forEach(([u,r])=>i.props[u]=this.normalize(r)),typeof e=="object")if(e.type){let u=this.normalize(e.type);d(i,u,{skipIfExists:!0})}else Object.entries(e).forEach(([u,r])=>i[u]=this.normalize(r));return i}};je.exports=$});var Ne=o((zt,we)=>{"use strict";we.exports=Ae()});function qe(t){let e=Ne(),u=new e().compile(t);return{validate:r=>{let a=u(r);if(Array.isArray(a))throw new Error(a[0],{cause:new Error(a.map(n=>n.message).join(","))});return a}}}function Re(t){return{validate:e=>{let{error:i,warning:u}=t.validate(e);if(i)throw i;if(u)throw u;return!0}}}function Oe(t){return{validate:e=>t.validateSync(e)}}function Ve(t){return{validate:e=>t.parse(e)}}function b(t,e){switch(t){case"Yup":return Oe(e);case"FastestValidator":return qe(e);case"Joi":return Re(e);case"Zod":return Ve(e);default:throw new Error(`Does not support ${t} validation yet!`)}}var ut=(t,e)=>{switch(e){case"headers":return t.headers;case"body":return t.body;case"query":default:return t.nextUrl.searchParams}};function Yt(t,e){try{return e.forEach(i=>{b(i.type,i.schema).validate(ut(t,i.mode))}),[]}catch(i){return i}}function Kt({type:t,schema:e,mode:i="query"}){return nt([{type:t,schema:e,mode:i}])}function nt(t){return e=>async(i,u,r)=>{try{if(t.forEach(a=>{b(a.type,a.schema).validate(i[a.mode||"query"])}),r)return r();if(e)return e(i,u);u.status(404).end()}catch(a){u.status(400).send(a)}}}export{Yt as plainValidations,Kt as withValidation,nt as withValidations};
//# sourceMappingURL=index.js.map