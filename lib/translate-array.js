'use strict';
/**
 * LINESYMBOL(换行符)
 * PIPE(字段分隔符)
 * HAT(组件分隔符)
 * SEGMENTREPEAT(字段重复分隔符)
 * ESC(转义字符)
 * SUBCOMPONENT(子组件分隔符)
 */
var LINESYMBOL = '\r';
var PIPE = '|';
var HAT = '^';
var SEGMENTREPEAT = '~';
var ESC = '\\';
var SUBCOMPONENT = '&';

/**
 * 将HL7格式字符串转换为对象
 *
 * @param data
 * @returns Array Or Null
 */
function parseArray(data) {
    if (!data || typeof (data) !== "string")
        return null;
    else
       data = data.split('\n').join(LINESYMBOL);
    //检测是否包含消息头MSH
    if (data.substr(0, 3) !== 'MSH')
        return null;
    //设置HL7消息中默认的信息
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
 * 解析每一行的数据
 *
 * @param line
 * @returns Array
 */
function parseLine(line) {
    var array = [];
    var start = 0;
    var pipes = line.split(PIPE);
    if (pipes[0] === 'MSH') {
        //补全结构体中的内容
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
 * 处理重复的段
 *
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
 * 组件处理
 *
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
 * 子组件处理
 * 
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
