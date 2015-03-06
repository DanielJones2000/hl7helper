'use strict';

/**
 * 描述/Description:
 * CHS:将hl7对象转换为自定义的json格式
 * EN:The HL7 object is converted to a custom JSON format
 */
function serializeJson(jsonModel, hl7Obj) {
    var jsonHl7 = {};
    hl7Obj.forEach(function (line) {
        jsonHl7[line[0]] = line;
    });
    var jsonModelObj = clone(jsonModel);
    for (var key in jsonModel) {
        try {
            jsonModelObj[key] = jsonHl7[jsonModelObj[key][0]][jsonModelObj[key][1]];
        } catch (e) {
            jsonModelObj[key] = null;
        }
    }
    return jsonModelObj;
}

function clone(myObj) {
    if (typeof(myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
        myNewObj[i] = clone(myObj[i]);
    return myNewObj;
}

module.exports = {
    serializeJson: serializeJson
};