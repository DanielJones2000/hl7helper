'use strict';
var hl7Helper = require('../index');

var jsonModel = {
    id: ['PID', 2],
    msg: ['EVN', 2]
}

var jsonModelData = { id: [
    [ '140202199201305536', '', '', '', '01' ],
    [ '', '', '', '', '110119120' ]
],
    msg: [
        [ '20150126113255' ]
    ] };

var msh = [ 'MSH',
    '|',
    '^~\\&',
    [
        [ 'HIS' ]
    ],
    [
        [ '010101' ]
    ],
    [
        [ 'CDR' ]
    ],
    [
        [ '010101' ]
    ],
    [
        [ '20150126113255.883+0800' ]
    ],
    [
        [ '' ]
    ],
    [
        [ 'ADT', 'A02', 'ADT_A02' ]
    ],
    [
        [ 'HL715012600054' ]
    ],
    [
        [ 'P' ]
    ],
    [
        [ '2.6' ]
    ],
    [
        [ '' ]
    ],
    [
        [ '' ]
    ],
    [
        [ '' ]
    ],
    [
        [ '' ]
    ],
    [
        [ 'CHN' ]
    ],
    [
        [ 'UNICODE' ]
    ] ];
hl7Helper.setMsh(msh);
var hl7Obj = hl7Helper.translateObject(jsonModel, jsonModelData);
var hl7String = hl7Helper.parseString(hl7Obj);
console.log(hl7String);
/**
 * result/结果
 */
//MSH|^~\&|HIS|010101|CDR|010101|20150126113255.883+0800||ADT^A02^ADT_A02|HL715012600054|P|2.6|||||CHN|UNICODE
//PID|140202199201305536^^^^01~^^^^110119120
//EVN|20150126113255