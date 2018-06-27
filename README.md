# hl7helper
###HL7 卫生信息交换标准（Health Level 7）
  标准化的卫生信息传输协议，是医疗领域不同应用之间电子传输的协议。HL7汇集了不同厂商用来设计应用软件之间接口的标准格式，它将允许各个医疗机构在异构系统之间，进行数据交互。
HL7的主要应用领域是HIS/RIS，主要是规范HIS/RIS系统及其设备之间的通信，它涉及到病房和病人信息管理、化验系统、药房系统、放射系统、收费系统等各个方面。HL7的宗旨是开发和研制医院数据信息传输协议和标准，规范临床医学和管理信息格式，降低医院信息系统互连的成本，提高医院信息系统之间数据信息共享的程度。


##hl7helper方法介绍

  1>parseString
  
    将HL7对象转换为字符串
    
    Parameters:
    
      data : HL7标准格式字符串
     
  2>parseArray
  
    将HL7字符串转换为对象
    
    Parameters:
    
      data : Hl7标准格式对象
    
  3>serializeJson
  
    将HL7对象转换为自定义JSON格式
    
    Parameters:
    
      jsonModel : 自定义json模型
      
      hl7Obj : HL7标准对象
    
  4>translateObject,setMsh
  
    将自定义字符串转换为HL7对象
    
    Description:
       
       使用此方法时需要预先调用setMsh方法设置Hl7的头部信息
       
      setMsh：
         
         Parameters:
         
             mshObj : MSH对象
             
      translateObject:
          
          Parameters:
          
            jsonModel :　自定义json模型
            
            jsonModelData: json数据集合
    
