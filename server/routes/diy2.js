const router = require('koa-router')()

router.prefix('/epimetheus/api/diy/')



//数据源
router.post('/report/selectData', async (ctx, next) => {

  let code = ctx.request.body.diyCoreCode;
  let pageSize = ctx.request.body.pageSize;
  let data = {}

  //雅诗兰黛 二维表
  if(code==="InventoryReportByWarehouse"){
    data = [{"TotalUseVolume":510,"TotalVolume":1000,"TotalAvailability":"51%"}]
  }else if(code==="InventoryReportByShelf"){
    if(pageSize){
      data = {
        "recordList":[{
          date: '2016-05-02',
          name: '王小虎1：' + Math.random(10),
          address: '上海市普陀区金沙江路 1518 弄',
          age:12
        }, {
          date: '2016-05-04',
          name: '王小虎2：'+ Math.random(10),
          address: '上海市普陀区金沙江路 1517 弄',
          age:13
        }],
        "recordCount": 60
      }
    }else{
      data = [{
        date: '2016-05-02',
        name: '王小虎1：' + Math.random(10),
        address: '上海市普陀区金沙江路 1518 弄',
        age:12,
      }, {
        date: '2016-05-04',
        name: '王小虎2：'+ Math.random(10),
        address: '上海市普陀区金沙江路 1517 弄',
        age:13
      }]
    }
  }else if(code==="InventoryReportByBin"){
    if(pageSize){
      data = {
        "recordList":[{
          date: '2016-05-02',
          name: '王小虎1：' + Math.random(10),
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2：'+ Math.random(10),
          address: '上海市普陀区金沙江路 1517 弄'
        }],
        "recordCount": 600
      }
    }else{
      data = [{
        date: '2016-05-02',
        name: '王小虎1：' + Math.random(10),
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2：'+ Math.random(10),
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  }else if(code==="SkuHot"){
    if(pageSize){
      data = {
        "recordList":[{
          date: '2016-05-02',
          name: '雷欧：' + Math.random(10),
          address: 'M77'
        }, {
          date: '2016-05-04',
          name: '爱迪：'+ Math.random(10),
          address: 'M87'
        }],
        "recordCount": 600
      }
    }else{
      data = [{
        date: '2016-05-02',
        name: '雷欧：' + Math.random(10),
        address: 'M77'
      }, {
        date: '2016-05-04',
        name: '爱迪：'+ Math.random(10),
        address: 'M87'
      }]
    }
  }else if(code==="asyncExport"){
    data = {
      "recordList":[{
        a: '绍兴仓库',
        b: '某类型',
        c: '某状态',
        d: '000001',
        e: '2019-01-01',
        f: '2010-01-02',
        downloadUrl:'#/index/dashboard',
        'creator_user': '兰陵王',
      }],
      "recordCount": 333
    }
  }else{
    if(pageSize){
      data = {
        "recordList":[{
          date: '2016-05-02',
          name: '王小虎1：' + Math.random(10),
          address: "Without you?I'd be a soul without a purpose.Without you?I'd be an emotion without a heartI'm a face without expression,A heart with no beat."
        }, {
          date: '2016-05-04',
          name: '王小虎2：'+ Math.random(10),
          address: '上海市普陀区金沙江路 1517 弄'
        }],
        "recordCount": 600
      }
    }else{
      data = [{
        date: '2016-05-02',
        name: '王小虎1：' + Math.random(10),
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎2：'+ Math.random(10),
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  }

  //利丰大屏幕 - 卡片
  if(
    code==="lifeng-BinUseA" ||
    code==="lifeng-BinUseB" ||
    code==="lifeng-ShelfUseA" ||
    code==="lifeng-ShelfUseB" 
  ){
    data = [{
      '总数':100000,
      '使用量':50000,
      '未使用':50000,
    }]
  }
  if(code==="lifeng-BinUseA2"){
    data = [{
      '身高':43,
      '体重':20,
      '飞行':30,
      '奔跑':90,
      '年龄':60,
      '攻击力':99,
    }]
  }

  if(code==="lifeng-InventoryPool"){
    data = [{
      '总数':10000,
      '可用':1000,
      '已分配':1000,
      '已冻结':1000,
    }]
  }
  if(code==="lifeng-SKUPool"){
    data = [{
      '总数':9999999,
    }]
  }


  if(
    code==="lifeng-ReceiptIn" ||
    code==="lifeng-ReceiptCopleted" ||
    code==="lifeng-ReceiptWorking" ||
    code==="lifeng-ReceiptNotStart" 
  ){
    data = [{
      '入库单':10000,
      'Qty':1000,
    }]
  }
  if(
    code==="lifeng-OutOrderIn" ||
    code==="lifeng-OutOrderComplete" ||
    code==="lifeng-OutOrderAllocated" ||
    code==="lifeng-OutOrderLack" 
  ){
    data = [{
      '出库单':9000,
      'Qty':999,
    }]
  }

  //利丰大屏幕 - 饼图
  if(
    code==="lifeng-BinUseScaleA" ||
    code==="lifeng-BinUseScaleB" ||
    code==="lifeng-ShelfUseScaleA" ||
    code==="lifeng-ShelfUseScaleB" 
  ){
    // data = [{
    //   percent:0.55,
    // }]
    data = [{占用率: 0.6}]
  }
  if(code==="lifeng-BinUseScaleA2"){
    data = [{占用率: 0.131415}]
  }



  if(code==="lifeng-robot"){
    data = [{
      '工作中':900,
      '异常':100,
      '空闲':100,
      '充电中':100,
    }]
  }
  if(code==="lifeng-robot2"){
    data = [{
      '已完成':200,
      '未完成':100
    }]
  }

  //利丰大屏幕 - 柱状图
  if(
    code==="lifeng-HistogramOutOrder" ||
    code==="lifeng-HistogramOutOrderCompleted" ||
    code==="lifeng-HistogramOutOrderAllocated" ||
    code==="lifeng-HistogramOutOrderLack" 
  ){
    data = data = [
      {"Order":1,"Qty":4,"type":"JIT"},
      {"Order":2,"Qty":5,"type":"B2C"},
      {"Order":3,"Qty":6,"type":"B2B"}
    ]
  }

  //new_bar 的测试用的 code数据。
  if(code==="lifeng-HistogramOutOrder2"){
    data = [
      {"Order":1,"Qty":4,"入库单":4,"type":"JIT"},
      {"Order":2,"Qty":5,"入库单":4,"type":"B2C"},
      {"Order":3,"Qty":6,"入库单":4,"type":"B2B"}
    ]
  }
  if(code==="lifeng-HistogramOutOrder3"){
    data = [
      {"Order":1,"Qty":4,"入库单":4,"bin":2,"type":"JIT"},
      {"Order":2,"Qty":5,"入库单":2,"bin":1,"type":"B2C"},
      {"Order":3,"Qty":6,"入库单":4,"bin":2,"type":"B2B"}
    ]
  }

  if(code==="lifeng-robotTote"){
    data = "[{'总数':999}]"
  }
  if(code==="lifeng-robotTote2"){
    data = [{
      '数据':3.1415926,
    }]
  }

  if(code==="YH-card"){
    data = [{
      'E数':888,
      'Qty':888,
    }]
  }
  if(code==="YH-card2"){
    data = [{
      '数据1':1292,
      '数据2':812320,
      '数据3':3,
    }]
  }
  if(code==="YH-card3"){
    data = [{
      '总数':99
    }]
  }

  //注意，这个line组件的数据，还尚未和后端确定，所以就这个格式走，未来有调整再说。
  if(code==="demo_line2"){
    data=data = [
      {"拣货":100,"上架":200,"type":"00:00"},
      {"拣货":200,"上架":400,"type":"01:00"},
      {"拣货":370,"上架":1000,"type":"02:00"},
      {"拣货":270,"上架":800,"type":"03:00"},
    ]
  }
  if(code==="demo_line"){
    data = [
      {"拣货":100,"type":"00:00"},
      {"拣货":200,"type":"01:00"},
      {"拣货":370,"type":"02:00"},
      {"拣货":270,"type":"03:00"},
    ]
  }

  if(code==="yonghui_shops"){
    data = [];
    let shop={
      "门店代码":"ABCDE12345",
      "门店名":"上海静安店",
      "周转箱数":"8888",
      "进度":"已完成",
    }
    for(let i=0;i<34;i++){
      data.push(JSON.parse(JSON.stringify(shop)));
    }
    data[1]["周转箱数"] = 999999999;
    data[2]["进度"] = "好像真的没有完成哦";
  }

  //利丰新版的mock数据
  if(code==="YH-PickOverallProgress"){data = [{总体进度: 0.5}]}
  else if(
    code==="YH-PickTotalTasks"
    || code==="YH-PickCompleted"
    || code==="YH-PickUnfinished"
    || code==="YH-PickAbnormal"
    || code==="YH-ReceiptTotalTasks"
    || code==="YH-ReceiptCompleted"
    || code==="YH-ReceiptUnfinished"
    || code==="YH-ReceiptTotalTasks"
  ){data = [{E数: 457, SKU: 66}]}
  else if(code==="YH-PickSkuCompleted"){data = [{"SKU(已完成 / 总数)": "0 / 66"}]}
  else if(code==="YH-PickNumCompleted"){data = [{"E数(已完成 / 总数)": "0 / 457"}]}
  else if(code==="YH-PickShopCompleted"){data = [{"门店数(已完成 / 总数)": "0 / 1"}]}
  else if(code==="YH-PickSkuPercentage"){data = [{"进度 (SKU)": 9}]}
  else if(code==="YH-PickPieChart"){data = [{"未完成": 50, "已完成": 30, "异常": 20}]}
  else if(code==="YH-PickLineChart"){data = [{"拣货量":20,"type":"00:00"},{"拣货量":60,"type":"01:00"},{"拣货量":150,"type":"02:00"}]}
  else if(code==="YH-PickHistogram"){data = [{"type":1,"拣货量":120},{"type":2,"拣货量":250},{"type":3,"拣货量":150},{"type":4,"拣货量":400}]}
  else if(code==="YH-PickLineInfo"){
    data = [
      {"门店列表":"上海A,南京店B,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店A,北京店C","进度 (SKU)":"10%","E数 (已完成 / 总数)":"1 / 457","线路":96,"SKU (已完成 / 总数)":"0 / 66","门店数 (已完成 / 总数)":"0 / 1"},
      {"门店列表":"上海A,南京店B,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店A,北京店C","进度 (SKU)":"10%","E数 (已完成 / 总数)":"1 / 457","线路":96,"SKU (已完成 / 总数)":"0 / 66","门店数 (已完成 / 总数)":"0 / 1"},
      {"门店列表":"上海A,南京店B,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店C,北京店A,北京店C","进度 (SKU)":"10%","E数 (已完成 / 总数)":"1 / 457","线路":96,"SKU (已完成 / 总数)":"0 / 66","门店数 (已完成 / 总数)":"0 / 1"},
    ]
  }
  else if(code==="YH-PickContainerNum"){data = [{"周转箱总数": 9}]}
  else if(code==="YH-PickShopInfo"){
    data = []
    for(let i=0;i<32;i++){
      data.push({"门店名":"永辉徐汇区上中西路会员店","进度":10.00,"周转箱数":i,"门店代码":"YH9D32"});
    }
  }

  //DSV
  if(code==="DSV"){
    data = []
    for(let i=0;i<7;i++){
      data.push({
        index:i,
        data0:'08/01',
        'Pending for Replenishment order lines':99999999,
        data2:8888,
        data3:8888,
        data4:8888,
        data5:8888,
        data6:8888,
        data7:8888,
        data8:8888,
        data9:8888,
        data10:8888,
      });
    }
  }

  //迪卡侬
  if(code==="dkn_barLine" || code==="dkn_16"){
    data = [
      {
        "finish": 80,
        "unfinish": 120,
        "type": "CYCLE"
      },
      {
        "finish": 40,
        "unfinish": 40,
        "type": "WALKING"
      },
      {
        "finish": 100,
        "unfinish": 0,
        "type": "JOGGING MAN"
      },
      {
        "finish": 0,
        "unfinish": 0,
        "type": "JOGGING WOMAN ACC"
      },
      {
        "finish": 350,
        "unfinish": 200,
        "type": "GOLF"
      },
      {
        "finish": 600,
        "unfinish": 170,
        "type": "H&D"
      },
      {
        "finish": 750,
        "unfinish": 300,
        "type": "RACKKET SPORTS"
      },
      {
        "finish": 710,
        "unfinish": 150,
        "type": "WORKSHOP"
      },
      {
        "finish": 800,
        "unfinish": 80,
        "type": "RUNNING"
      }
    ]
  }else if(code==="dkn_card"){
    data = [{
      "Total Order":38868
    }]
  }else if(code==="dkn_card2"){
    data = [{
      "JOGGING\nWOMAN\nACC":326
    }]
  }

  //重庆商委
  if(
    code==="CQSW-total" ||
    code==="CQSW-pick" ||
    code==="CQSW-outorder" ||
    code==="CQSW-toCancel" ||
    code==="CQSW-lastOrder" ||
    code==="CQSW-dayOrder" ||
    code==="CQSW-ShortOrder" ||
    code==="CQSW-collectOrder" ||
    code==="CQSW-toPickOrder" ||
    code==="CQSW-toPack" ||
    code==="CQSW-DictpOrder" ||
    code==="CQSW-onDict"
  ){
    data = [{总单量: 9999}]
  }

  //DSV效率、DSV出库
  if(
    code==="DSV-Completedoutboundorderlinesofyesterday" ||
    code==="DSV-Binoccupancy" ||
    code==="DSV-Completedordersofyesterday" ||
    code==="DSV-Completedpcsofyesterday" ||
    code==="DSV-Putawayordersoftoday" ||
    code==="DSV-Putawaypcsoftoday" ||
    code==="DSV-Putawayordersinprogress" ||
    code==="DSV-Putawaypcsinprogress" ||
    code==="DSV-Completepcsoftoday" ||
    code==="DSV-Completeordersoftoday" ||
    code==="DSV-Completedoutboundorderlinesofyesterday" 
  ){
    data = [{'已占用货位|Bin occupancy': 8888}]
  }
  if(code==="DSV-Robotaveragetraveldistancepertask"){
    data = [
      {"拣货":100,"type":"09/08"},
      {"拣货":200,"type":"10/08"},
      {"拣货":370,"type":"11/08"},
      {"拣货":270,"type":"12/08"},
    ]
  }
  if(code==="DSV-Pickingproductivityperworkstation"){
    data = [
      {"Time":"10/08/2019","Workstation1 order lines":888,"Workstation2 order lines":888,"Workstation3 order lines":888,"Workstation4 order lines":888,"Workstation5 order lines":888,"Workstation6 order lines":888,"Workstation7 order lines":888,"Workstation8 order lines":888,"Workstation9 order lines":888,"Workstation10 order lines":888,"Workstation11 order lines":888,"Workstation12 order lines":888,"Workstation13 order lines":888,"Workstation14 order lines":888,"Workstation15 order lines":888,"Workstation16 order lines":888,"Workstation17 order lines":888,"Workstation18 order lines":888,"Workstation19 order lines":888,"Workstation20 order lines":888,},
      {"Time":"11/08/2019","Workstation1 order lines":888,"Workstation2 order lines":888,"Workstation3 order lines":888,"Workstation4 order lines":888,"Workstation5 order lines":888,"Workstation6 order lines":888,"Workstation7 order lines":888,"Workstation8 order lines":888,"Workstation9 order lines":888,"Workstation10 order lines":888,"Workstation11 order lines":888,"Workstation12 order lines":888,"Workstation13 order lines":888,"Workstation14 order lines":888,"Workstation15 order lines":888,"Workstation16 order lines":888,"Workstation17 order lines":888,"Workstation18 order lines":888,"Workstation19 order lines":888,"Workstation20 order lines":888,},
      {"Time":"12/08/2019","Workstation1 order lines":888,"Workstation2 order lines":888,"Workstation3 order lines":888,"Workstation4 order lines":888,"Workstation5 order lines":888,"Workstation6 order lines":888,"Workstation7 order lines":888,"Workstation8 order lines":888,"Workstation9 order lines":888,"Workstation10 order lines":888,"Workstation11 order lines":888,"Workstation12 order lines":888,"Workstation13 order lines":888,"Workstation14 order lines":888,"Workstation15 order lines":888,"Workstation16 order lines":888,"Workstation17 order lines":888,"Workstation18 order lines":888,"Workstation19 order lines":888,"Workstation20 order lines":888,},
    ]
  }
  if(
    code==="DSV-outboundOrder-3" || 
    code==="DSV-outboundOrder-2" || 
    code==="DSV-outboundOrder-1" || 
    code==="DSV-outboundOrder0" || 
    code==="DSV-outboundOrder+1" || 
    code==="DSV-outboundOrder+2" || 
    code==="DSV-outboundOrder+3"
  ){
    data = [{"Total order lines":888,"Replenish HU":123,"Pending to put wall order lines":0,"Picking HU":0,"Picked order lines":0,"Pending for Replenishment order lines":0,"Picking order lines":0,"Picked HU":0,"Total HU":0,"desv":"10","time":"2019-09-10","Pending HU":0}]
  }

  //迪卡侬
  if(
    code==="dkn_1" ||
    code==="dkn_2" ||
    code==="dkn_3" ||
    code==="dkn_4" ||
    code==="dkn_5" ||
    code==="dkn_6" ||
    code==="dkn_7" ||
    code==="dkn_8" ||
    code==="dkn_9" ||
    code==="dkn_10" ||
    code==="dkn_11" ||
    code==="dkn_12" ||
    code==="dkn_13" ||
    code==="dkn_14" ||
    code==="dkn_15"
  ){
    data = [{'JOGGING WOMAN ACC': 38868}]
  }




  ctx.body = {
    data: data,
  }
})











module.exports = router
