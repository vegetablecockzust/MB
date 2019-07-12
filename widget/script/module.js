window.MB = function MB() {
  this.UImoduleState = {
    slipList: {
      on_off: false
    },
    calendar: {
      on_off: false
    },
    perCenter: {
      on_off: false
    },
    contactList: {
      on_off: false
    },
    tabBar: {
      on_off: false
    }
  }
}
MB.prototype.init = function () {
  this.winHeight = api.winHeight
  this.winWidth = api.winWidth
  this.slipList = api.require("slipList")
  this.calendar = api.require("UICalendar")
  this.perCenter = api.require("personalCenter")
  this.contactList = api.require("UIListContactsSelect")
  this.tabBar = api.require("NVTabBar")
  return this
}
MB.prototype.open_slipList = function (params, fn) {
  if (this.UImoduleState.slipList.on_off) {
    return;
  }
  var params = params || {}
  this.UImoduleState.slipList.params = params
  this.UImoduleState.slipList.fn = fn
  this.slipList.open({
    x: params.x || 0,
    // 类型:数字
    // 默认值:0
    // 描述:列表视图的左上角点的坐标，可为空
    y: params.y || this.UImoduleState.calendar.position.y + this.UImoduleState.calendar.position.h,
    // 类型:数字
    // 默认值:64
    // 描述:列表视图的左上角点的坐标，可为空
    w: params.w || api.winWidth,
    // 类型:数字
    // 默认值:当前设备屏幕宽度
    // 描述:列表视图的宽，可为空  
    h: params.h || api.winHeight - (params.y || this.UImoduleState.calendar.position.y + this.UImoduleState.calendar.position.h) - this.UImoduleState.tabBar.position.h,
    // 类型:数字
    // 默认值:w+100
    // 描述:列表视图的高，可为空
    leftBtn: params.leftBtn || [],
    // 类型:数组对象
    // 默认值:无
    // 描述:往右滑动 item 露出的按钮组成的数组，可为空，为空时则表示 item 不可向右滑动
    // 内部字段:
    // [{
    //     bg:             //按钮背景色，支持 rgb，rgba，#，默认#ee8262，可为空
    //     title:         //按钮名字，字符串类型，默认‘按钮’，可为空
    //     titleSize:      //按钮标题大小，数字类型，默认13，可为空
    //     titleColor:     //按钮标题颜色，支持 rgb，rgba，#，默认#ffffff，可为空
    //     selectedColor//按钮选中时候的颜色值,支持 rgb，rgba，#，可为空,为空则无选中变化
    // }]
    leftBg: params.leftBg || "#5cacee",
    // 类型:字符串
    // 默认值:#5cacee
    // 描述:往右滑动item露出的视图的背景色，支持 rgb，rgba，#，可为空
    rightBtn: params.leftBtn || [{
      title: "按钮1"
    }, {
      title: "按钮2"
    }],
    // 类型:数组对象
    // 默认值:无
    // 描述:往左滑动item露出的按钮组成的数字，可为空，为空时则表示item不可向左滑动
    // 内部字段:
    // [{
    //     bg:             //按钮背景色，支持 rgb，rgba，#，默认#388e8e，可为空
    //     title:         //按钮名字，字符串类型，默认‘按钮’，可为空
    //     titleColor:     //按钮标题颜色，支持 rgb，rgba，#，默认#ffffff，可为空
    //     selectedColor//按钮选中时候的颜色值,支持 rgb，rgba，#，可为空,为空则无选中变化
    // }]
    rightBg: params.rightBg || "#6c7b8b",
    // 类型:字符串
    // 默认值:#6c7b8b
    // 描述:往左滑动item露出的视图的背景色，支持 rgb，rgba，#，可为空
    itemStyle: {},
    // 类型:JSON 对象
    // 默认值:见内部字段
    // 描述:item样式配置，可为空
    // 内部字段:
    // {
    //     borderColor:  //item间分割线颜色，支持 rgb，rgba，#，默认#696969，可为空
    //     bgColor:     //item背景色，支持 rgb，rgba，#，默认#AFEEEE，可为空
    //     selectedColor//item背景选中色,支持 rgb，rgba，#，默认#f5f5f5可为空
    //     height:       //一条item的高度，数字类型，默认55，可为空
    //     avatarH://头像（上下居中）的高(不可超过height)，数字类型，默认45，可为空
    //     avatarW:     //头像（距左边框距离和上下相等）的宽，数字类型，默认45，可为空
    //     placeholderImg//头像为网络资源时的占位图,仅支持本地路径协议,有默认图标，可为空
    //     titleSize://标题字体大小，数字类型，默认10，可为空
    //     titleColor     //标题字体颜色，支持 rgb,rgba,#，默认:#696969,可为空
    //     headlineSize://大标题字体大小，数字类型，默认15，可为空
    //     headlineColor //大标题字体颜色，支持 rgb,rgba,#，默认:#388e8e,可为空
    //     subTitleSize   //子标题字体大小，数字类型，默认13，可为空
    //     subTitleColor  //子标题字体颜色，支持 rgb,rgba,#，默认:#000000,可为空
    //     remarkSize:   //备注字体的大学，数字类型，默认15，可为空
    //     remarkColor:  //备注字体的颜色，支持 rgb,rgba,#,默认#696969，可为空
    //     remarkMargin //备注距离右边的边距，数字类型，默认10，可为空
    // }
    datas: [{
      title: "hha"
    }, {
      title: "hha",
      remark: "remark"
    }, {
      title: "hha"
    }],
    // 类型:数组对象
    // 默认值:无
    // 描述:数据源，可为空
    // 内部字段:
    // [{
    //     img:"",       //头像图片路径,支持本地和网络路径资源,网络图片会被缓存到本地,可为空若为空，则item内其余内容占位(与边框距离和remarkMargin一致)显示
    //     title: "title",      //标题，字符串类型，可为空，为空时不显示
    //     headline:"headline",   //大标题，可为空，为空时不显示,且subTitleIcon和sutTitle占位显示
    //     subTitle:"subTitle",//子标题，字符串类型，可为空，为空时不显示
    //     remark:"remark",//备注，字符串类型，可为空，为空时不显示
    //     titleIcon:"",   //标题icon图片路径,仅支持本地协议,可为空,为空则不显示且title占位显示
    //     subTitleIcon:""//小标题icon图片路径,本地路径,可为空,若空不显示且subTitle占位显示
    // }],
    fixedOn: "",
    // 类型:字符串类型
    // 描述:（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
    // 默认:模块依附于当前 window
    fixed: true,
    // 类型:布尔
    // 默认值:true
    // 描述:是否将模块视图固定到窗口上，不跟随窗口上下滚动，可为空
  }, fn)
  this.UImoduleState.slipList.position = {
    x: params.x || 0,
    y: params.y || this.UImoduleState.calendar.position.y + this.UImoduleState.calendar.position.h,
    w: params.w || api.winWidth,
    h: params.h || api.winHeight - (params.y || this.UImoduleState.calendar.position.y + this.UImoduleState.calendar.position.h) - this.UImoduleState.tabBar.position.h
  }
  this.UImoduleState.slipList.on_off = true
}
MB.prototype.open_calendar = function (params, fn) {
  if (this.UImoduleState.calendar.on_off) {
    return;
  }
  var params = params || {}
  if (!params.hasOwnProperty("styles")) {
    params.styles = {
      week: {},
      date: {},
      today: {},
      specialDate: {}
    }
  } else {
    if (!params.hasOwnProperty("week")) {
      params.week = {}
    }
    if (!params.hasOwnProperty("date")) {
      params.date = {}
    }
    if (!params.hasOwnProperty("today")) {
      params.today = {}
    }
    if (!params.hasOwnProperty("specialDate")) {
      params.specialDate = {}
    }
  }
  if (!params.hasOwnProperty("rect")) {
    params.rect = {}
  }
  this.UImoduleState.calendar.params = params
  this.UImoduleState.calendar.fn = fn
  this.calendar.open({
    multipleSelect: params.multipleSelect || false, //是否可以多选日期
    rect: {
      x: params.rect.x || 0, //（可选项）数字类型；模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；默认:0
      y: params.rect.y || 0, //（可选项）数字类型；模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认:0
      w: params.rect.w || api.winWidth, //（可选项）数字类型；仅iOS支持设置'auto'；模块的宽度；默认:所属的 Window 或 Frame 的宽度
      h: params.rect.h || 250 //（可选项）数字类型；仅iOS支持设置'auto'；模块的高度；默认:220
    },
    styles: {
      bg: params.styles.bg || 'rgba(0,0,0,0)', //（可选项）字符串类型；日历整体背景，支持 rgb、rgba、#、图片路径，要求本地路径（fs://、widget://）；默认:'rgba(0,0,0,0)'
      week: { //（可选项）JSON对象，星期的样式
        weekdayColor: params.styles.week.weekdayColor || '#3b3b3b', //（可选项）字符串类型；平日文字的颜色，支持 rgb、rgba、#；默认:'#3b3b3b'
        weekendColor: params.styles.week.weekendColor || '#a8d400', //（可选项）字符串类型；周末文字的颜色，支持 rgb、rgba、#；默认:'#a8d400'
        size: params.styles.week.size || 24 //（可选项）数字类型；星期文字的大小；默认:24
      },
      date: { //（可选项）JSON对象，普通日期的样式
        color: params.styles.date.color || '#3b3b3b', //（可选项）字符串类型；普通日期文字的颜色；支持 rgb、rgba、#；默认:'#3b3b3b'
        selectedColor: params.styles.date.selectedColor || '#fff', //（可选项）字符串类型；普通日期选中后的文字颜色，支持 rgb、rgba、#；默认:'#fff'
        selectedBg: params.styles.date.selectedBg || '#a8d500', //（可选项）字符串类型；普通日期选中后的背景，支持 rgb、rgba、#，图片路径，要求本地路径（fs://、widget://）；默认:'#a8d500'
        size: params.styles.date.size || 24 //（可选项）数字类型；普通日期文字的大小；默认:24
      },
      today: { //（可选项）JSON对象，设备当前日期的样式
        color: params.styles.today.color || '#a8d500', //（可选项）字符串类型；当前日期的文字颜色，支持 rgb、rgba、#；默认:'#a8d500'
        bg: params.styles.today.bg || 'widget://' //（可选项）字符串类型；当前日期的背景，支持 rgb、rgba、#，图片路径，要求本地路径（fs://、widget://）
      },
      specialDate: { //（可选项）JSON对象，需要标记的特殊日期的通用样式                  
        color: params.styles.specialDate.color || '#3b3b3b', //（可选项）字符串类型；文字颜色，支持 rgb、rgba、#；默认:与普通日期文字颜色一致
        bg: params.styles.specialDate.bg || 'widget://' //（可选项）字符串类型；支持 rgb、rgba、#，图片路径，要求本地路径（fs://、widget://）；默认:与普通日期选中后的背景一致
      }
    },
    specialDate: params.specialDate || [], //需要标记的特殊日期数组
    // {
    //   date: '2015-07-27',          //字符串类型；日期字符串，格式为:yyyy-MM-dd
    //   color: '#3b3b3b',           //（可选项）字符串类型；文字颜色，支持 rgb、rgba、#；默认:与 styles->specialDate->color 一致
    //   bg: 'widget://'             //（可选项）字符串类型；支持 rgb、rgba、#，图片路径，要求本地路径（fs://、widget://）；默认:与 styles->specialDate->bg 一致
    // }
    switchMode: params.switchMode || "horizontal", //vertical（上下切换）horizontal（左右切换）none（不支持通过手势切换月份）
    isBefore: params.isBefore || false, //今天以前的日期是否置灰不可选
    isAfter: params.isAfter || false, //今天以后的日期是否置灰不可选
    showTodayStyle: params.showTodayStyle || true, //当天日期是否使用特殊格式显示（仅android有效）
    //fixedOn:模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
    fixed: params.fixed || true //模块是否随所属 window 或 frame 滚动
  }, fn)
  this.UImoduleState.calendar.position = {
    x: params.rect.x || 0,
    y: params.rect.y || 0,
    w: params.rect.w || api.winWidth,
    h: params.rect.h || 250
  }
  this.UImoduleState.calendar.on_off = true
}
MB.prototype.open_perCenter = function (params, fn) {
  var params = params || {}
  var _position = {
    y: 0,
    h: 250
  }
  if (this.UImoduleState.perCenter.on_off) {
    return;
  }
  this.perCenter.open({
    y: params.y || _position.y, // 类型:数字
    // 描述:（可选项）个人中心视图上边距屏幕位置
    // 默认值:0

    h: 250, // 类型:数字
    // 描述:（可选项）视图的高，不可小于220
    // 默认值:220
    imgPath: "",
    // 类型:字符串
    // 描述:头像图片的路径（如果为网络路径,图片会被缓存到本地），支持http，https，widget，file，fs协议
    placeholderImg: "",
    // 类型:字符串
    // 描述:（可选项）头像占位图片的路径，支持仅widget，file，fs本地协议
    userName: "heihei",
    // 类型:字符串
    // 描述:（可选项）用户名
    userNameSize: 13,
    // 类型:数字类型
    // 描述:（可选项）用户名字体大小
    // 默认值:13
    userColor: "#FFFFFF",
    // 类型:字符串
    // 描述:（可选项）用户名和积分字体颜色
    // 默认值:#FFFFFF
    subTitle: "小标题",
    // 类型:字符串
    // 描述:（可选项）用户名下边的小标题
    subTitleSize: "12",
    // 类型:字符串
    // 描述:（可选项）用户名下边的小标题字体大小
    // 默认值:13
    subTitleColor: "#FFFFFF",
    // 类型:字符串
    // 描述:（可选项）用户名下边的小标题字体颜色
    // 默认值:#FFFFFF
    showLeftBtn: true,
    // 类型:布尔值
    // 描述:（可选项）是否显示左上交修改按钮
    // 默认值:true
    showRightBtn: true,
    // 类型:布尔值
    // 描述:（可选项）是否显示右上角设置按钮
    // 默认值:true
    buttonTitle: {
      left: "修改", //（可选项）字符串类型；左边按钮的标题文字；默认:‘修改’
      right: "设置" //（可选项）字符串类型；右边按钮的标题文字；默认:'设置'
    },
    // 类型:JSON 对象
    // 描述:（可选项）顶部两边按钮的标题文字，当 showLeftBtn、showRightBtn 为 true 时本参数有效
    // 默认:参考内部字段
    modButton: {
      bgImg: "", //字符串类型；按钮背景图片，要求本地路径（widget://、fs://）
      lightImg: "" //（可选项）字符串类型；按钮点击效果图路径，要求本地路径（widget://、fs://）
    },
    // 类型:JSON 对象
    // 描述:（可选项）修改按钮参数
    // 备注:若不传则不显示修改按钮
    // 内部字段:

    btnArray: [{
      bgImg: "", //字符串类型；按钮背景图片，要求本地路径（widget://、fs://）
      selectedImg: "", //（可选项）字符串类型；按钮选中后图片，要求本地路径（widget://、fs://）
      lightImg: "", //（可选项）字符串类型；按钮点击图片，要求本地路径（widget://、fs://）
      title: "用户头像", //（可选项）字符串类型；按钮上的标题
      count: "hei", //（可选项）字符串类型；按钮上的数据
      titleColor: "#AAAAAA", //（可选项）字符串类型；按钮上的标题颜色，支持 rgb、rgba、#；默认:#AAAAAA
      titleLightColor: "#A4D3EE", //（可选项）字符串类型；按钮选中标题的颜色，支持 rgb、rgba、#；默认:#A4D3EE
      countColor: "#FFFFFF", //（可选项）字符串类型；按钮上数字颜色，支持 rgb、rgba、#；默认:#FFFFFF
      countLightColor: "#A4D3EE", //（可选项）字符串类型；按钮上数字选中颜色，支持 rgb、rgba、#；默认:#A4D3EE
    }],
    // 类型:数组
    // 默认值:默认按钮
    // 描述:（可选项）下边按钮的参数信息
    clearBtn: false,
    // 类型:布尔值
    // 描述:（可选项）是否将个人中心下边按钮清除
    // 默认值:false
    fixedOn: "",
    // 类型:字符串类型
    // 描述:（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
    // 默认:模块依附于当前 window
    fixed: true,
    // 类型:布尔
    // 描述:（可选项）模块是否随所属 window 或 frame 滚动
    // 默认值:true（不随之滚动）
  }, fn)
}
MB.prototype.open_contactList = function (params, fn) {
  if (this.UImoduleState.contactList.on_off) {
    return;
  }
  this.contactList.open({

  }, fn)
  this.UImoduleState.contactList.on_off = true
}
MB.prototype.open_tabBar = function (fn) {
  if (this.UImoduleState.tabBar.on_off) {
    return;
  }
  var _position = {
    h: 50
  }
  this.UImoduleState.tabBar.fn = fn
  this.tabBar.open({
    styles: {
      bg: '#fff', //（可选项）字符串类型；模块背景，支持 rgb、rgba、#、img；默认:#ffffff
      h: _position.h, //（可选项）数字类型；模块的高度（含分割线）；默认:50
      dividingLine: { //（可选项）JSON对象；模块顶部的分割线配置
        width: 0.5, //（可选项）数字类型；分割线粗细；默认:0.5
        color: '#000' //（可选项）字符串类型；分割线颜色；默认:#000
      },
      badge: { //（可选项）JSON对象；徽章样式配置；若不传则去内部字段默认值
        bgColor: '#ff0', //（可选项）字符串类型；徽章背景色，支持rgb、rgba、#；默认:#ff0
        numColor: '#fff', //（可选项）字符串类型；徽章数字字体颜色，支持rgb、rgba、#；默认:#fff
        size: 18.0, //（可选项）数字类型；徽章半径大小；默认值:6.0
        fontSize: 10, // (可选项) 数字类型;设置徽章字体大小;默认值: 10 ;注意:仅支持iOS。
        centerX: 6.0, //（可选项）数字类型；徽章中心点坐标（相对于所属item的背景面板坐标系）；默认值:icon图标的右上角
        centerY: 6.0 //（可选项）数字类型；徽章中心点坐标（相对于所属item的背景面板坐标系）；默认值:icon图标的右上角
      }
    },
    items: [{
      w: api.winWidth / 5.0, //（可选项）数字类型；子项的宽度（识别点击事件的区域宽度）；默认:api.winWidth/items子项总数
      bg: { //（可选项）JSON对象；子项背景配置，若不传则取内部字段默认值
        marginB: 0, //（可选项）数字类型；子项背景距离模块底部的距离，设置大于0的数字可实现凸起效果；默认:0
        image: 'rgba(0,0,0,0)', //（可选项）字符串类型；子项的背景，支持rgb、rgba、#、img（仅支持本地图片路径fs://、widget://）；默认:rgba(0,0,0,0)
      },
      iconRect: { //（可选项）JSON对象；子项按钮图标的大小配置，位置居中显示；默认值见内部字段
        w: 25.0, //（可选项）数字类型；子项按钮图标的宽度；默认:25.0
        h: 25.0, //（可选项）数字类型；子项按钮图标的高度；默认:25.0
      },
      icon: { // JSON对象；子项按钮图标配置
        normal: '', // 字符串类型；子项按钮常态下的背景图片路径，要求本地路径（fs://、widget://）
        highlight: '', //（可选项）字符串类型；子项按钮高亮态下的背景图片路径，要求本地路径（fs://、widget://），若不传或传空则无按钮高亮效果
        selected: '' //（可选项）字符串类型；子项按钮按钮选中后的背景图片路径，要求本地路径（fs://、widget://），若不传或传空则无选中后效果
      },
      title: { //（可选项）JSON对象；子项标题配置，若不传则不显示
        text: '日历', //（可选项）字符串类型；子项按钮下面的标题文字，若不传或传空则不显示
        size: 12.0, //（可选项）数字类型；子项标题文字大小；默认:12.0  
        normal: '#696969', //（可选项）字符串类型；子项标题文字常态颜色；默认:#696969
        selected: '#ff0', //（可选项）字符串类型；子项标题文字选中后颜色；默认:#ff0
        marginB: 6.0, //（可选项）数字类型；子项标题距离模块下边缘的距离；默认:6.0
        ttf: 'Alkatip Basma Tom' //（可选项）字符串类型；默认值:当前系统字体；本参数在 iOS 平台上表示字体名称 （必须已在 config 文件内配置 ttf 文件(//docs.apicloud.com/Dev-Guide/app-config-manual#14-1)，并在 widget 包内包含该 ttf 文件）；本参数在 android 平台上表示 ttf 文件路径，要求本地路径（fs://、widget://）
      }
    }, {
      w: api.winWidth / 5.0,
      bg: {
        marginB: 0,
        image: 'rgba(0,0,0,0)',
      },
      iconRect: {
        w: 25.0,
        h: 25.0,
      },
      icon: {
        normal: '',
        highlight: '',
        selected: ''
      },
      title: {
        text: '组织',
        size: 12.0,
        normal: '#696969',
        selected: '#ff0',
        marginB: 6.0,
        ttf: 'Alkatip Basma Tom'
      }
    }, {
      w: api.winWidth / 5.0,
      bg: {
        marginB: 10,
        image: 'rgba(255,255,0,1)',
      },
      iconRect: {
        w: 25.0,
        h: 25.0,
      },
      icon: {
        normal: '',
        highlight: '',
        selected: ''
      },
      title: {
        text: '+',
        size: 12.0,
        normal: '#696969',
        selected: '#000',
        marginB: 6.0,
        ttf: 'Alkatip Basma Tom'
      }
    }, {
      w: api.winWidth / 5.0,
      bg: {
        marginB: 0,
        image: 'rgba(0,0,0,0)',
      },
      iconRect: {
        w: 25.0,
        h: 25.0,
      },
      icon: {
        normal: '',
        highlight: '',
        selected: ''
      },
      title: {
        text: '联系人',
        size: 12.0,
        normal: '#696969',
        selected: '#ff0',
        marginB: 6.0,
        ttf: 'Alkatip Basma Tom'
      }
    }, {
      w: api.winWidth / 5.0,
      bg: {
        marginB: 0,
        image: 'rgba(0,0,0,0)',
      },
      iconRect: {
        w: 25.0,
        h: 25.0,
      },
      icon: {
        normal: '',
        highlight: '',
        selected: ''
      },
      title: {
        text: '我的',
        size: 12.0,
        normal: '#696969',
        selected: '#ff0',
        marginB: 6.0,
        ttf: 'Alkatip Basma Tom'
      }
    }],
    cursorInOptions: {
      width: 10, //游标的宽
      height: 10, //游标的高
      color: 'rgba(0,0,0,0)' //游标的颜色，支持图片
    },
    selectedIndex: 3, //默认值为选中状态的按钮的索引，若不传则默认无选中项
    enableDoubleClick: false //使能双击事件，默认:false
  }, fn)
  // {
  //   eventType: 'show',      //字符串类型；交互事件类型，取值范围如下：
  //                           //show：打开模块并显示事件
  //                           //click：用户点击模块内子按钮事件
  //                           //doubleClick：用户双击模块内子按钮事件，只有enableDoubleClick为true且触发双击时回调
  //   index:0                 //数字类型；用户点击按钮的索引，仅当 eventType 为 click和doubleClick 时有值
  // })
  this.UImoduleState.tabBar.position = _position
  this.UImoduleState.tabBar.on_off = true
}

function personalCenter_open() {
  var personalCenter = api.require('personalCenter');
  personalCenter.open({
    y: 0, // 类型:数字
    // 描述:（可选项）个人中心视图上边距屏幕位置
    // 默认值:0

    h: 220, // 类型:数字
    // 描述:（可选项）视图的高，不可小于220
    // 默认值:220
    imgPath: "",
    // 类型:字符串
    // 描述:头像图片的路径（如果为网络路径,图片会被缓存到本地），支持http，https，widget，file，fs协议
    placeholderImg: "",
    // 类型:字符串
    // 描述:（可选项）头像占位图片的路径，支持仅widget，file，fs本地协议
    userName: "heihei",
    // 类型:字符串
    // 描述:（可选项）用户名
    userNameSize: 13,
    // 类型:数字类型
    // 描述:（可选项）用户名字体大小
    // 默认值:13
    userColor: "#FFFFFF",
    // 类型:字符串
    // 描述:（可选项）用户名和积分字体颜色
    // 默认值:#FFFFFF
    subTitle: "小标题",
    // 类型:字符串
    // 描述:（可选项）用户名下边的小标题
    subTitleSize: "12",
    // 类型:字符串
    // 描述:（可选项）用户名下边的小标题字体大小
    // 默认值:13
    subTitleColor: "#FFFFFF",
    // 类型:字符串
    // 描述:（可选项）用户名下边的小标题字体颜色
    // 默认值:#FFFFFF
    showLeftBtn: true,
    // 类型:布尔值
    // 描述:（可选项）是否显示左上交修改按钮
    // 默认值:true
    showRightBtn: true,
    // 类型:布尔值
    // 描述:（可选项）是否显示右上角设置按钮
    // 默认值:true
    buttonTitle: {
      left: "修改", //（可选项）字符串类型；左边按钮的标题文字；默认:‘修改’
      right: "设置" //（可选项）字符串类型；右边按钮的标题文字；默认:'设置'
    },
    // 类型:JSON 对象
    // 描述:（可选项）顶部两边按钮的标题文字，当 showLeftBtn、showRightBtn 为 true 时本参数有效
    // 默认:参考内部字段
    modButton: {
      bgImg: "", //字符串类型；按钮背景图片，要求本地路径（widget://、fs://）
      lightImg: "" //（可选项）字符串类型；按钮点击效果图路径，要求本地路径（widget://、fs://）
    },
    // 类型:JSON 对象
    // 描述:（可选项）修改按钮参数
    // 备注:若不传则不显示修改按钮
    // 内部字段:

    btnArray: [{
      bgImg: "", //字符串类型；按钮背景图片，要求本地路径（widget://、fs://）
      selectedImg: "", //（可选项）字符串类型；按钮选中后图片，要求本地路径（widget://、fs://）
      lightImg: "", //（可选项）字符串类型；按钮点击图片，要求本地路径（widget://、fs://）
      title: "用户头像", //（可选项）字符串类型；按钮上的标题
      count: "hei", //（可选项）字符串类型；按钮上的数据
      titleColor: "#AAAAAA", //（可选项）字符串类型；按钮上的标题颜色，支持 rgb、rgba、#；默认:#AAAAAA
      titleLightColor: "#A4D3EE", //（可选项）字符串类型；按钮选中标题的颜色，支持 rgb、rgba、#；默认:#A4D3EE
      countColor: "#FFFFFF", //（可选项）字符串类型；按钮上数字颜色，支持 rgb、rgba、#；默认:#FFFFFF
      countLightColor: "#A4D3EE", //（可选项）字符串类型；按钮上数字选中颜色，支持 rgb、rgba、#；默认:#A4D3EE
    }],
    // 类型:数组
    // 默认值:默认按钮
    // 描述:（可选项）下边按钮的参数信息
    clearBtn: false,
    // 类型:布尔值
    // 描述:（可选项）是否将个人中心下边按钮清除
    // 默认值:false
    fixedOn: "",
    // 类型:字符串类型
    // 描述:（可选项）模块视图添加到指定 frame 的名字（只指 frame，传 window 无效）
    // 默认:模块依附于当前 window
    fixed: true,
    // 类型:布尔
    // 描述:（可选项）模块是否随所属 window 或 frame 滚动
    // 默认值:true（不随之滚动）
  }, function (ret, err) {
    // {
    //     click:          // 所点击的按钮的索引
    //                     // 如果存在修改按钮，则其index是按钮数组总下标加一
    //                     // 若存在左上角按钮，则其index是按钮数组总下标加二
    //                     // 若存在右上角按钮，则其inidex是按钮数组总下标加三
    // }
  })
}

function UIListContactsSelect_open() {
  if (window.UIListContactsSelect) {
    console.log("UIListContactsSelect has already existed!")
    return
  }
  var UIListContactsSelect = api.require('UIListContactsSelect');
  UIListContactsSelect.open({
    rect: {
      x: 0, //（可选项）数字类型；模块左上角的 x 坐标（相对于所属的 Window 或 Frame）；默认:0
      y: 0, //（可选项）数字类型；模块左上角的 y 坐标（相对于所属的 Window 或 Frame）；默认:0
      w: api.winWidth, //（可选项）数字类型；模块的宽度，支持设置'auto'；默认:所属的 Window 或 Frame 的宽度
      h: api.winHeight - 50 //（可选项）数字类型；模块的高度，支持设置'auto'；默认:w * 2.0/3.0
    },
    specialGroupTitle: "密友",
    categarys: [{
      path: '', // 字符串；item 路径；支持 fs | widget 
      text: '????' // 字符串；item 文本
    }, {
      path: '', // 字符串；item 路径；支持 fs | widget 
      text: '???' // 字符串；item 文本
    }, {
      path: '', // 字符串；item 路径；支持 fs | widget 
      text: '?????' // 字符串；item 文本
    }],
    contacts: [{
      imgPath: '', //（可选项）字符串类型；列表项的配图路径，支持http://、https://、widget://、fs://等协议，网络图片会被缓存到本地 
      imgTitle: '张涛', //（可选项）字符串类型；列表项配图位置可传入的文字；若imgTitle和imgPath都传则显示图片
      imgBackgroundColor: '#fff', //（可选项）字符串类型；列表项配图位置传入文字的背景颜色，支持 rgb、rgba、#；默认:'#fff'         
      title: '艾雪瑞', //字符串类型；条目的标题，不传则不显示
      subTitle: '创达集团', //字符串类型；条目的子标题，不传则不显示
      phonetic: '', //(可选项)字符串类型; title汉字拼音
      rightBtns: [{ //rightBtns有值时，将会忽略下面的rightBtns参数
        bgColor: '#388e8e', //（可选项）字符串类型；按钮背景色，支持 rgb、rgba、#；默认:'#388e8e'
        title: '', //（可选项）字符串类型；按钮标题，水平、垂直居中
        titleSize: 15 //（可选项）字符串类型；按钮标题的大小，默认:15
      }],
      isInSpecialGroup: true, // (可选项)布尔类型；是否进入特殊分组'
      checkBoxSelected: true, // 布尔类型；是否默认选中（当为单选(即singleSelect=true)时，注意所有数据项仅有一项为checkBoxSelected=true, 只有在选择模式下有效，即showListSelect({selected:true})
    }],
    rightBtns: [ //列表项向左滑动露出的按钮组
      {
        bgColor: '#388e8e', //（可选项）字符串类型；按钮背景色，支持 rgb、rgba、#；默认:'#388e8e'
        title: '', //（可选项）字符串类型；按钮标题，水平、垂直居中
        titleSize: 15 //（可选项）字符串类型；按钮标题的大小，默认:15
      }
    ],
    styles: {
      alphabetColor: '#000', //(可选项)字符串类型；右侧字母索引的颜色，支持rgb、rgba、#；默认:'#000',
      alphabetFont: 12, //(可选项)数字类型；右侧字母索引的字母大小；默认:12 **注意:iOS不支持此参数**
      leftAlphabetColor: '#000', //(可选项)字符串类型；左侧字母索引的颜色，支持rgb、rgba、#；默认:'#000'
      leftAlphabetFont: 12, //(可选项)数字类型；左侧字母索引的字母大小；默认:12 **注意:该参数不能大于20，否则将显示不完全**
      sectionIndexBgColor: 'rgba(0,0,0,0)', //(可选项)字符串类型；右侧索引的背景颜色，支持rgb、rgba、#；默认:'rgba(0,0,0,0)'
      sectionIndexTrackingBgColor: 'rgba(0,0,0,0)', //(可选项)字符串类型；选中时，右侧索引的背景颜色，支持rgb、rgba、#；默认:'rgba(0,0,0,0)'
      alphabetBg: '"#e1e1e1', //(可选项)字符串类型；横向字母索引的背景颜色，支持rgb、rgba、#；默认:'#e1e1e1'
      isLastLineHide: false, //(可选项)字符串类型；每一组最后一条线是否隐藏，默认:'false'
      isHideGroupHeader: false, //(可选项)布尔类型；是否显示分组header；默认:false
      inputBar: { //(可选项) JSON对象；输入框配置 
        imagePath: 'widget://image/search.png', // 字符串；图片路径；支持 fs | widget
        marginTop: 10, // 数字类型；面板上（距离模块顶部）边距；默认:10
        marginLeft: 20, // 数字类型；面板左边距；默认:20
        marginRight: 20, // 数字类型；面板右边距；默认:20
        height: 44, //（可选项）数字类型；头部视图的高度；默认:44
      },
      categaryPanel: { // JSON对象；类别面板配置
        bgColor: '#FFF', // 字符串；面板背景色；默认:#FFF
        marginLeft: 20, // 数字类型；面板左边距；默认:20
        marginRight: 20, // 数字类型；面板右边距；默认:20
        marginTop: 10, // 数字类型；面板上（距离inputBar）边距；默认:10
        icon: { // JSON对象；icon配置
          size: 40, // 数字类型；icon大小；默认:40
        },
        text: { // JSON对象；文本设置；
          marginTop: 10, // 数字类型；距离顶部的距离；默认:10
          color: "#000", // 字符串类型；文本的颜色；默认:#000
          size: 12, // 数字类型；文本字体大小；默认:12
        }
      },
      checkBoxBtn: { //(可选项)JSON对象；复选框样式，若不传则不显示
        marginRight: 10, //(可选项)数字类型；复选框的右边距，默认:10
        size: 30, //(可选项)数字类型；复选框的大小，默认:30
        normalImg: '', //(可选项)字符串类型；未选中图标路径（本地路径，支持fs://、widget://)
        selectedImg: '' //(可选项)字符串类型；选中图片的路径（本地路径，支持fs://、widget://)
      },
      indexer: { //（可选项）设置索引条的上下边距（该参数仅支持android）
        marginTop: 100, //（可选项）数字类型；索引上边距；默认:0
        marginBottom: 100 //（可选项）数字类型；索引下边距；默认:0
      },
      item: { //（可选项）JSON对象；列表项的样式
        dividingLine: { //(可选项)JSON对象；分割线样式
          leftMargin: 10, //(可选项)数字类型；分割线的宽度，默认:和文字的左边对齐
          lineHeight: 0.5, //(可选项)数字类型；分割线的高度，默认:0.5
          lineColor: '#e4e4e4', //(可选项)字符串类型；分割线的颜色，默认:'#e4e4e4'
        },
        bgColor: '#AFEEEE', //（可选项）字符串类型；列表项的背景色，支持 rgb、rgba、#；默认:'#AFEEEE'
        activeBgColor: '#F5F5F5', //（可选项）字符串类型；列表项按下时的背景色，支持 rgb、rgba、#；默认:'#F5F5F5'
        height: 55, //（可选项）数字类型；列表项的高度；默认:55
        imgMarginLeft: 10, //（可选项）数字类型；列表项的图片的左边距；默认:10
        imgMarginRight: 10, //（可选项）数字类型；列表项的图片的右边距；默认:10
        imgTitleSize: 14, // (可选项) 数字类型；列表项的图片位置传入的文字大小，默认14
        imgTitleColor: '#f00', //（可选项）字符串类型；列表项的的图片位置传入文字的颜色，支持 rgb、rgba、#；默认:'#f00'
        imgWidth: 40, //（可选项）数字类型；列表项配图的宽度；默认:列表项的高度减去10px
        imgHeight: 40, //（可选项）数字类型；列表项配图的高度；默认:列表项的高度减去10px
        imgCorner: 20, //（可选项）数字类型；列表项配图的圆角大小；默认:20
        titleMarginTop: 5, //（可选项）数字类型；列表项的标题的上边距；默认:5
        titleSize: 12, //（可选项）数字类型；列表项标题文字大小；默认:12
        titleColor: '#000', //（可选项）字符串类型；列表项标题文字颜色，支持 rgb，rgba，#；默认:'#000000'
        titleWidth: 100, //（可选项）数字类型；列表项标题文字的宽度；默认:100
        subTitleMarginBottom: 5, //（可选项）数字类型；列表项的子标题的下边距；默认:5
        subTitleSize: 12, //（可选项）数字类型；列表项子标题文字大小；默认:12
        subTitleColor: '#000', //（可选项）字符串类型:列表项子标题文字颜色，支持 rgb、rgba、#；默认:'#000000' 
        subTitleWidth: 100, //（可选项）数字类型；列表项子标题文字的宽度；默认:100
      }
    }

  }, function () {

  })
}