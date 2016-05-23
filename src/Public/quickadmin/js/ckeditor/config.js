/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'fa';
	config.allowedContent=true;
	config.removeFormatAttributes = '';
	for(var tag in CKEDITOR.dtd.$removeEmpty){
		CKEDITOR.dtd.$removeEmpty[tag] = false;
	}
	config.extraAllowedContent = 'span;ul;li;table;td;style;*[id];*(*);*{*}';
};
