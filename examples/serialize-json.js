'use strict';
var hl7Helper = require('../index');

var jsonModel = {
    id:['PID',3],
    msg:['EVN',2]
}

var hl7String =
    "MSH|^~\\&|HIS|010101|CDR|010101|20150126113255.883+0800||ADT^A02^ADT_A02|HL715012600054|P|2.6|||||CHN|UNICODE\n"+
        "EVN||20150126113255|||^^^^^^^^^^^^00680\n"+
        "PID|||140202199201305536^^^^01~^^^^110119120||^李\n"+
        "PV1||03|01020202^022102^^^^^010101|||01020201^^sny20^^^^020101|||||||||||||^^^^I15012600283\n";
var hl7Obj = hl7Helper.parseArray(hl7String);

var jsonModelData = hl7Helper.serializeJson(jsonModel,hl7Obj);
console.log(jsonModelData);
/**
 * result/结果
 */
//{ id:
//    [ [ '140202199201305536', '', '', '', '01' ],
//        [ '', '', '', '', '110119120' ] ],
//        msg: [ [ '20150126113255' ] ] }