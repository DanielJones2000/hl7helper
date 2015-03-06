'use strict';
var hl7Helper = require('../index');
var hl7String =
    "MSH|^~\\&|HIS|010101|CDR|010101|20150126113255.883+0800||ADT^A02^ADT_A02|HL715012600054|P|2.6|||||CHN|UNICODE\n"+
    "EVN||20150126113255|||^^^^^^^^^^^^00680\n"+
    "PID|||140202199201305536^^^^01~^^^^110119120||^李\n"+
    "PV1||03|01020202^022102^^^^^010101|||01020201^^sny20^^^^020101|||||||||||||^^^^I15012600283\n";
var hl7Array = hl7Helper.parseArray(hl7String);
console.log(hl7Array);
/**
 * result/结果
 */
//[ [ 'MSH',
//    '|',
//    '^~\\&',
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ],
//    [ [Object] ] ],
//    [ 'EVN',
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ] ],
//    [ 'PID',
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object], [Object] ],
//        [ [Object] ],
//        [ [Object] ] ],
//    [ 'PV1',
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ],
//        [ [Object] ] ] ]
