'use strict';
/**
 * 描述/Description:
 * LINESYMBOL(CHS:换行符;EN:line break;)
 * PIPE(CHS:字段分隔符;EN:field separator;)
 * HAT(CHS:组件分隔符;EN:The component separator;)
 * SEGMENTREPEAT(CHS:字段重复分隔符;EN:Field Repeating Delimiter;)
 * ESC(CHS:转义字符;EN:Escape character)
 * SUBCOMPONENT(CHS:子组件分隔符;EN:A subcomponent delimiter)
 */
var LINESYMBOL = '\r';
var PIPE = '|';
var HAT = '^';
var SEGMENTREPEAT = '~';
var ESC = '\\';
var SUBCOMPONENT = '&';

/**
 * 方法描述/Function Description:
 * CHS:将HL7格式字符串转换为对象
 * EN:HL7 format will be converted to a string object
 * @param data
 * @returns Array Or Null
 */
function parseArray(data) {
    if (!data || typeof (data) !== "string")
        return null;
    else
       data = data.split('\n').join(LINESYMBOL);
    //CHS:检测是否包含消息头MSH
    //EN:Check whether contains MSH
    if (data.substr(0, 3) !== 'MSH')
        return null;
    //CHS:设置HL7消息中默认的信息
    //EN:Set default information from HL7 MSH
    PIPE = data[3];
    HAT = data[4];
    SEGMENTREPEAT = data[5];
    ESC = data[6];
    SUBCOMPONENT = data[7];

    var array = [];

    var lines = data.split(LINESYMBOL);

    lines.forEach(function (line) {
        if (line != "")
            array.push(parseLine(line));
    });

    return array;
}

/**
 * 方法描述/Function Description:
 * CHS:解析每一行的数据
 * EN:The analytical data of each row
 * @param line
 * @returns Array
 */
function parseLine(line) {
    var array = [];
    var start = 0;
    var pipes = line.split(PIPE);
    if (pipes[0] === 'MSH') {
        //CHS:补全结构体中的内容
        //EN:Improve the structure
        pipes.splice(1, 0, PIPE);

        array.push(pipes[0]);
        array.push(pipes[1]);
        array.push(pipes[2]);
        start = 3;
    } else {
        array.push(pipes[0]);
        start = 1;
    }

    var pipesLen = pipes.length;
    for (var i = start; i < pipesLen; i++) {
        array.push(parseSegmentRepeat(pipes[i]));
    }
    return array;
}

/**
 * 方法描述/Function Description:
 * CHS:处理重复的段
 * EN:Treatment of repeating segments
 * @param pipe
 * @returns Array
 */
function parseSegmentRepeat(pipe) {
    var array = [];
    var segments = pipe.split(SEGMENTREPEAT);

    segments.forEach(function (segment) {
        array.push(parseHat(segment));
    });
    return array;
}

/**
 * 方法描述/Function Description:
 * CHS:组件处理
 * EN:HAT processing
 * @param segment
 * @returns Array
 */
function parseHat(segment) {
    var array = [];
    var hats = segment.split(HAT);
    hats.forEach(function (hat) {
        array.push(parseSubcomponent(hat));
    });
    return array;
}

/**
 * 方法描述/Function Description:
 * CHS:子组件处理
 * EN:Subcomponent processing
 * @param segment
 * @returns Array
 */
function parseSubcomponent(hat) {
    var array = [];
    var subComponents = hat.split(SUBCOMPONENT);
    var subComponentsLen = subComponents.length;
    if (subComponentsLen === 1) {
        return subComponents[0];
    } else {
        for (var i = 0; i < subComponentsLen; i++) {
            array.push(subComponents[i]);
        }
        return array;
    }
}

module.exports = {
    parseArray: parseArray
};