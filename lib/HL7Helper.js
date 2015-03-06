'use strict';
/**
 * 描述/Description:
 * CHS:提供较为完善的Hl7标准格式转换方法
 * EN:Provide Hl7 standard format of perfect conversion method
 */
var parseArray = require('./translate-array');
var parseString = require('./translate-string');
var serialize = require('./serialize');
var translate = require('./translate');


module.exports = {
    parseString: parseString.parseString,
    parseArray: parseArray.parseArray,
    serializeJson: serialize.serializeJson,
    setMsh: translate.setMsh,
    translateObject: translate.translateObject
};