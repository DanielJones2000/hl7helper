'use strict';
/**
 * 描述/Description:
 * CHS:提供较为完善的Hl7标准格式转换方法
 * EN:Provide Hl7 standard format of perfect conversion method
 */
var parseArray = require('./lib/translate-array');
var parseString = require('./lib/translate-string');
var serialize = require('./lib/serialize');
var translate = require('./lib/translate');


module.exports = {
    parseString: parseString.parseString,
    parseArray: parseArray.parseArray,
    serializeJson: serialize.serializeJson,
    setMsh: translate.setMsh,
    translateObject: translate.translateObject
};