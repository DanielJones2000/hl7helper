# hl7helper
###HL7 卫生信息交换标准（Health Level 7）
  标准化的卫生信息传输协议，是医疗领域不同应用之间电子传输的协议。HL7汇集了不同厂商用来设计应用软件之间接口的标准格式，它将允许各个医疗机构在异构系统之间，进行数据交互。
HL7的主要应用领域是HIS/RIS，主要是规范HIS/RIS系统及其设备之间的通信，它涉及到病房和病人信息管理、化验系统、药房系统、放射系统、收费系统等各个方面。HL7的宗旨是开发和研制医院数据信息传输协议和标准，规范临床医学和管理信息格式，降低医院信息系统互连的成本，提高医院信息系统之间数据信息共享的程度。

###HL7 health information exchange standard (Health Level 7)
  Health information transmission protocol standard, is the medical field between different applications of electronic transmission protocol. HL7 brings together the standard format of different manufacturers to interface between the application software design, it will allow all medical institutions between heterogeneous systems, data exchange.
The main application field of HL7 is HIS/RIS, is mainly the communication specification between HIS/RIS system and its equipment, it relates to each unit and patient information management system, laboratory, pharmacy system, radiation system, charging system etc.. The purpose of the HL7 is the development and the development of hospital data information transmission protocol and the standard, specification of clinical medicine and management information format, reduce the interconnection of hospital information system cost, improve data sharing information between the degree of hospital information system.

##hl7helper methods to introduce / hl7helper方法介绍

  1>parseString
  
    CHS:将HL7对象转换为字符串
    
    EN:The HL7 object is converted to a string
    
  2>parseArray
  
    CHS:将HL7字符串转换为对象
    
    EN:The HL7 string is converted to a object
    
  3>serializeJson
  
    CHS:将HL7对象转换为自定义JSON格式
    
    EN:The HL7 object will be converted to a custom JSON format
    
  4>translateObject,setMsh
  
    CHS:将自定义字符串转换为HL7对象
    
    EN:The custom JSON format will be converted to a HL7 object
    
