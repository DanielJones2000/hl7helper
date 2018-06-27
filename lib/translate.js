'use strict';

var MSH = null;

function setMsh(mshObj) {
    MSH = mshObj;
}

/**
 * 将自定义的json格式转换为hl7对象
 * 
 * @param jsonModel
 * @param jsonModelData
 * return Array
 */
function translateObject(jsonModel, jsonModelData) {
    var result = {};
    var array = [];
    for (var key in jsonModel) {
        var segment = jsonModel[key][0];
        if (typeof(result[segment]) === 'undefined')
            result[segment] = [segment];
        result[segment].push(jsonModelData[key]);
    }
    array.push(MSH);
    for(var segKey in result){
        array.push(result[segKey]);
    }
    return array;
}

module.exports = {
    setMsh: setMsh,
    translateObject: translateObject
};
