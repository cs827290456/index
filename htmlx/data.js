// 网站数据配置文件 - 集中管理所有官网数据
const websiteData = {
  // 网站基本配置
  site: {
    title: "科技创新有限公司 - 领先的AI和云计算技术服务商",
    description: "专注于人工智能、云计算、大数据、物联网等前沿技术，为企业提供专业的数字化转型解决方案。8年行业经验，服务500+企业客户。",
    keywords: "人工智能,AI,云计算,大数据,物联网,区块链,数字化转型,技术服务,企业解决方案",
    author: "科技创新有限公司",
    robots: "index,follow",
    canonical: "https://www.company.com",
    favicon: {
      ico: "/favicon.ico",
      appleTouchIcon: "/apple-touch-icon.png",
      favicon32: "/favicon-32x32.png",
      favicon16: "/favicon-16x16.png"
    },
    openGraph: {
      type: "website",
      url: "https://www.company.com/",
      title: "科技创新有限公司 - 领先的AI和云计算技术服务商",
      description: "专注于人工智能、云计算、大数据、物联网等前沿技术，为企业提供专业的数字化转型解决方案",
      image: "https://www.company.com/assets/og-image.jpg"
    },
    twitter: {
      card: "summary_large_image",
      url: "https://www.company.com/",
      title: "科技创新有限公司 - 领先的AI和云计算技术服务商",
      description: "专注于人工智能、云计算、大数据、物联网等前沿技术，为企业提供专业的数字化转型解决方案",
      image: "https://www.company.com/assets/twitter-image.jpg"
    }
  },

  // 页面加载器配置
  loader: {
    title: "正在加载...",
    subtitle: "即将为您呈现精彩内容"
  },

  // 公司基本信息
  company: {
    name: "长沙市源本信息科技有限公司",
    displayName: "科技创新2",
    slogan: "创新驱动未来，科技改变生活",
    description: "我们是一家专注于前沿技术研发的创新型企业，致力于为客户提供最优质的技术解决方案。",
    founded: "2015",
    employees: "40+",
    location: "湖南·长沙",
    logo: {
      // icon: "fas fa-microchip",
      icon: "",
      text: "长沙市源本信息科技有限公司"
    }
  },

  // 统计数据
  stats: [
    {
      icon: "fas fa-calendar-alt",
      iconColor: "text-primary",
      number: "2015",
      label: "成立年份",
      delay: 100
    },
    {
      icon: "fas fa-users",
      iconColor: "text-success",
      number: "40+",
      label: "团队成员",
      delay: 200
    },
    {
      icon: "fas fa-handshake",
      iconColor: "text-info",
      number: "500+",
      label: "服务客户",
      delay: 300
    },
    {
      icon: "fas fa-shield-alt",
      iconColor: "text-warning",
      number: "99.9%",
      label: "服务稳定性",
      delay: 400
    }
  ],

  // 页面导航提示
  navigation_hints: {
    scroll_indicator: {
      icon: "fas fa-mouse",
      text: "向下滚动了解更多"
    },
    skip_link: "跳转到主要内容"
  },

  // 导航菜单配置
  navigation: [
    { name: "首页", href: "#home" },
    { name: "关于我们", href: "#about" },
    { name: "解决方案", href: "#solutions" },
    { name: "成功案例", href: "#cases" },
    { name: "新闻动态", href: "#news" },
    { name: "联系我们", href: "#contact" }
  ],

  // 首页轮播横幅
  banners: [
    {
      title: "AI人工智能解决方案",
      subtitle: "让AI赋能您的业务，提升效率与创新能力，开启智能化新时代",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232563eb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231d4ed8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad1)'/%3E%3Ccircle cx='200' cy='150' r='80' fill='white' opacity='0.1'/%3E%3Ccircle cx='1000' cy='450' r='120' fill='white' opacity='0.08'/%3E%3Cpath d='M100,300 Q300,200 500,300 T900,300' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3Crect x='50' y='100' width='40' height='8' fill='white' opacity='0.2' rx='4'/%3E%3Crect x='1100' y='200' width='60' height='12' fill='white' opacity='0.15' rx='6'/%3E%3Ccircle cx='300' cy='500' r='6' fill='white' opacity='0.4'/%3E%3Ccircle cx='900' cy='150' r='8' fill='white' opacity='0.3'/%3E%3Ctext x='600' y='250' text-anchor='middle' fill='white' font-size='48' font-family='Arial, sans-serif'%3E🤖 AI智能%3C/text%3E%3Ctext x='600' y='320' text-anchor='middle' fill='white' font-size='24' font-family='Arial, sans-serif'%3E人工智能解决方案%3C/text%3E%3C/svg%3E",
      cta: "了解更多",
      link: "#solutions"
    },
    {
      title: "云计算服务平台",
      subtitle: "安全、稳定、高效的云端解决方案，助力企业数字化转型",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad2)'/%3E%3Cellipse cx='300' cy='200' rx='100' ry='60' fill='white' opacity='0.2'/%3E%3Cellipse cx='900' cy='400' rx='150' ry='80' fill='white' opacity='0.15'/%3E%3Cellipse cx='600' cy='100' rx='80' ry='40' fill='white' opacity='0.25'/%3E%3Crect x='100' y='400' width='20' height='30' fill='white' opacity='0.2' rx='3'/%3E%3Crect x='130' y='390' width='20' height='40' fill='white' opacity='0.25' rx='3'/%3E%3Crect x='160' y='395' width='20' height='35' fill='white' opacity='0.2' rx='3'/%3E%3Crect x='1000' y='100' width='25' height='40' fill='white' opacity='0.15' rx='4'/%3E%3Crect x='1030' y='90' width='25' height='50' fill='white' opacity='0.2' rx='4'/%3E%3Ctext x='600' y='250' text-anchor='middle' fill='white' font-size='48' font-family='Arial, sans-serif'%3E☁️ 云计算%3C/text%3E%3Ctext x='600' y='320' text-anchor='middle' fill='white' font-size='24' font-family='Arial, sans-serif'%3E云计算服务平台%3C/text%3E%3C/svg%3E",
      cta: "立即体验",
      link: "#solutions"
    },
    {
      title: "大数据分析系统",
      subtitle: "深度挖掘数据价值，助力智能决策，释放数据潜能",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d97706;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad3)'/%3E%3Crect x='150' y='300' width='80' height='200' fill='white' opacity='0.3'/%3E%3Crect x='280' y='250' width='80' height='250' fill='white' opacity='0.35'/%3E%3Crect x='410' y='200' width='80' height='300' fill='white' opacity='0.4'/%3E%3Crect x='540' y='220' width='80' height='280' fill='white' opacity='0.35'/%3E%3Crect x='670' y='180' width='80' height='320' fill='white' opacity='0.3'/%3E%3Crect x='800' y='240' width='80' height='260' fill='white' opacity='0.4'/%3E%3Crect x='930' y='280' width='80' height='220' fill='white' opacity='0.35'/%3E%3Cpath d='M50,50 Q200,30 350,60 T650,80 T950,50' stroke='white' stroke-width='2' fill='none' opacity='0.3'/%3E%3Cpath d='M80,520 Q300,500 500,530 T800,540 T1100,520' stroke='white' stroke-width='2' fill='none' opacity='0.2'/%3E%3Ccircle cx='200' cy='40' r='4' fill='white' opacity='0.5'/%3E%3Ccircle cx='500' cy='70' r='4' fill='white' opacity='0.4'/%3E%3Ccircle cx='800' cy='45' r='4' fill='white' opacity='0.6'/%3E%3Ctext x='600' y='250' text-anchor='middle' fill='white' font-size='48' font-family='Arial, sans-serif'%3E📊 大数据%3C/text%3E%3Ctext x='600' y='320' text-anchor='middle' fill='white' font-size='24' font-family='Arial, sans-serif'%3E大数据分析系统%3C/text%3E%3C/svg%3E",
      cta: "咨询方案",
      link: "#contact"
    },
    {
      title: "物联网智能平台",
      subtitle: "连接万物，智能管理，构建数字化智能生态系统",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239c27b0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237b1fa2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad4)'/%3E%3Ccircle cx='600' cy='300' r='8' fill='white' opacity='0.8'/%3E%3Ccircle cx='300' cy='200' r='6' fill='white' opacity='0.6'/%3E%3Ccircle cx='900' cy='400' r='5' fill='white' opacity='0.7'/%3E%3Ccircle cx='450' cy='450' r='4' fill='white' opacity='0.5'/%3E%3Ccircle cx='750' cy='150' r='7' fill='white' opacity='0.8'/%3E%3Cline x1='600' y1='300' x2='300' y2='200' stroke='white' stroke-width='2' opacity='0.4'/%3E%3Cline x1='600' y1='300' x2='900' y2='400' stroke='white' stroke-width='2' opacity='0.4'/%3E%3Cline x1='600' y1='300' x2='450' y2='450' stroke='white' stroke-width='2' opacity='0.4'/%3E%3Cline x1='600' y1='300' x2='750' y2='150' stroke='white' stroke-width='2' opacity='0.4'/%3E%3Crect x='100' y='100' width='15' height='15' fill='white' opacity='0.3' rx='2'/%3E%3Crect x='1050' y='500' width='20' height='20' fill='white' opacity='0.25' rx='3'/%3E%3Crect x='200' y='480' width='12' height='12' fill='white' opacity='0.35' rx='2'/%3E%3Crect x='980' y='80' width='18' height='18' fill='white' opacity='0.3' rx='2'/%3E%3Ccircle cx='300' cy='200' r='20' stroke='white' stroke-width='1' fill='none' opacity='0.2'/%3E%3Ccircle cx='300' cy='200' r='35' stroke='white' stroke-width='1' fill='none' opacity='0.15'/%3E%3Ccircle cx='900' cy='400' r='25' stroke='white' stroke-width='1' fill='none' opacity='0.18'/%3E%3Ctext x='600' y='250' text-anchor='middle' fill='white' font-size='48' font-family='Arial, sans-serif'%3E🌐 物联网%3C/text%3E%3Ctext x='600' y='320' text-anchor='middle' fill='white' font-size='24' font-family='Arial, sans-serif'%3E物联网智能平台%3C/text%3E%3C/svg%3E",
      cta: "探索应用",
      link: "#solutions"
    }
  ],

  // 公司优势特色已删除

  // 产品服务已删除

  // 行业解决方案
  solutions: [
    {
      title: "智慧城市解决方案",
      description: "整合AI、IoT、大数据技术，打造智能化城市管理平台，提升城市治理效率和民生服务质量",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='city' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232563eb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231d4ed8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23city)'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='white' font-size='36' font-family='Arial, sans-serif'%3E🏢%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='18' font-family='Arial, sans-serif'%3E智慧城市%3C/text%3E%3C/svg%3E",
      tags: ["政府", "城市管理", "智能化", "大数据"],
      features: ["智能交通", "环境监测", "公共安全", "政务服务"],
      caseStudy: "某省会城市智慧城市建设，提升管理效率40%"
    },
    {
      title: "智能制造解决方案",
      description: "工业4.0智能制造解决方案，提升生产效率和产品质量，实现制造业数字化转型升级",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='manu' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23manu)'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='white' font-size='36' font-family='Arial, sans-serif'%3E🏭%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='18' font-family='Arial, sans-serif'%3E智能制造%3C/text%3E%3C/svg%3E",
      tags: ["制造业", "工业4.0", "自动化", "智能化"],
      features: ["生产监控", "质量检测", "预测维护", "供应链优化"],
      caseStudy: "知名制造企业智能化改造，生产效率提升35%"
    },
    {
      title: "金融科技解决方案",
      description: "区块链、AI风控、移动支付等金融科技创新应用，为金融机构提供安全高效的技术支持",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='fin' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d97706;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23fin)'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='white' font-size='36' font-family='Arial, sans-serif'%3E💰%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='18' font-family='Arial, sans-serif'%3E金融科技%3C/text%3E%3C/svg%3E",
      tags: ["金融", "区块链", "风控", "支付"],
      features: ["智能风控", "数字支付", "资产管理", "合规监管"],
      caseStudy: "大型银行风控系统升级，风险识别准确率提升45%"
    },
    {
      title: "智慧医疗解决方案",
      description: "医疗信息化、远程诊疗、AI辅助诊断等医疗科技解决方案，提升医疗服务质量和效率",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='med' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dc2626;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23b91c1c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23med)'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='white' font-size='36' font-family='Arial, sans-serif'%3E⚕️%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='18' font-family='Arial, sans-serif'%3E智慧医疗%3C/text%3E%3C/svg%3E",
      tags: ["医疗", "远程诊疗", "AI诊断", "健康管理"],
      features: ["电子病历", "远程会诊", "智能诊断", "健康监测"],
      caseStudy: "三甲医院信息化建设，诊疗效率提升50%"
    },
    {
      title: "智慧教育解决方案",
      description: "在线教育平台、智能教学系统、学习分析等教育科技应用，推动教育现代化发展",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='edu' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239c27b0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237b1fa2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23edu)'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='white' font-size='36' font-family='Arial, sans-serif'%3E🎓%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='18' font-family='Arial, sans-serif'%3E智慧教育%3C/text%3E%3C/svg%3E",
      tags: ["教育", "在线学习", "智能教学", "数据分析"],
      features: ["在线课堂", "学习分析", "智能辅导", "教务管理"],
      caseStudy: "知名大学在线教育平台，学习效果提升60%"
    },
    {
      title: "智慧零售解决方案",
      description: "新零售、智能推荐、供应链优化等零售科技应用，提升零售效率和用户体验",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='ret' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230891b2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23ret)'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='white' font-size='36' font-family='Arial, sans-serif'%3E🛍️%3C/text%3E%3Ctext x='200' y='180' text-anchor='middle' fill='white' font-size='18' font-family='Arial, sans-serif'%3E智慧零售%3C/text%3E%3C/svg%3E",
      tags: ["零售", "电商", "推荐系统", "供应链"],
      features: ["智能推荐", "库存管理", "客户分析", "营销自动化"],
      caseStudy: "连锁零售企业数字化转型，销售额增长30%"
    }
  ],

  // 团队介绍已删除

  // 客户成功案例
  cases: [
    {
      company: "某大型银行",
      project: "智能风控系统",
      description: "基于AI技术的信贷风险评估系统，通过机器学习算法实现实时风险识别和预警",
      result: "风险识别准确率提升40%，审批效率提升60%，坏账率降低35%",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%234285f4'/%3E%3Ctext x='50' y='35' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E银行%3C/text%3E%3C/svg%3E",
      industry: "金融行业",
      scale: "千万级用户",
      duration: "6个月"
    },
    {
      company: "知名制造企业",
      project: "智能制造平台",
      description: "工业互联网平台建设，实现设备智能监控、预测性维护和生产优化管理",
      result: "设备故障率降低35%，生产效率提升25%，维护成本节省40%",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%2334a853'/%3E%3Ctext x='50' y='35' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E制造%3C/text%3E%3C/svg%3E",
      industry: "制造业",
      scale: "1000+设备",
      duration: "8个月"
    },
    {
      company: "省级政府机构",
      project: "智慧城市平台",
      description: "城市大数据分析平台，整合交通、环保、公安等多部门数据，提升城市治理水平",
      result: "政务服务效率提升50%，市民满意度提升30%，城市管理成本降低20%",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%23ea4335'/%3E%3Ctext x='50' y='35' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E政府%3C/text%3E%3C/svg%3E",
      industry: "政府机构",
      scale: "千万级人口",
      duration: "12个月"
    },
    {
      company: "连锁零售企业",
      project: "智能推荐系统",
      description: "基于大数据的个性化推荐系统，通过用户行为分析提供精准商品推荐",
      result: "销售转化率提升45%，用户复购率提升30%，客户满意度提升40%",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%23fbbc04'/%3E%3Ctext x='50' y='35' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E零售%3C/text%3E%3C/svg%3E",
      industry: "零售行业",
      scale: "500万+用户",
      duration: "4个月"
    },
    {
      company: "知名大学",
      project: "在线教育平台",
      description: "智慧教育解决方案，包括在线课堂、学习分析、智能辅导等功能模块",
      result: "教学效果提升60%，学生满意度提升45%，教师工作效率提升35%",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%239c27b0'/%3E%3Ctext x='50' y='35' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E教育%3C/text%3E%3C/svg%3E",
      industry: "教育行业",
      scale: "10万+师生",
      duration: "10个月"
    },
    {
      company: "三甲医院",
      project: "智慧医疗系统",
      description: "医院信息化建设，包括电子病历、远程诊疗、AI辅助诊断等医疗科技应用",
      result: "诊疗效率提升50%，误诊率降低30%，患者满意度提升40%",
      logo: "https://via.placeholder.com/100x60/ff5722/ffffff?text=医疗",
      industry: "医疗行业",
      scale: "日均万人次",
      duration: "14个月"
    }
  ],

  // 新闻动态资讯
  news: [
    {
      title: "公司获得国家高新技术企业认证",
      date: "2024-01-15",
      summary: "经过严格评审，公司正式获得国家高新技术企业认证，标志着公司技术实力获得权威认可，为公司未来发展奠定坚实基础。",
      category: "公司新闻",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='news1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232563eb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%231d4ed8;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23news1)'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3E🏆%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E高新技术企业%3C/text%3E%3C/svg%3E",
      readTime: "3分钟"
    },
    {
      title: "AI产品荣获行业创新奖",
      date: "2024-01-10",
      summary: "公司自主研发的AI智能识别系统在行业评选中脱颖而出，荣获年度创新产品奖，产品技术领先性获得业界广泛认可。",
      category: "产品动态",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='news2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23d97706;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23news2)'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3E🤖%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3EAI创新奖%3C/text%3E%3C/svg%3E",
      readTime: "4分钟"
    },
    {
      title: "与知名大学达成产学研合作",
      date: "2024-01-05",
      summary: "公司与清华大学签署战略合作协议，在AI技术研发和人才培养方面开展深度合作，共同推动科技创新发展。",
      category: "合作动态",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='news3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23059669;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23news3)'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3E🎓%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E产学研合作%3C/text%3E%3C/svg%3E",
      readTime: "5分钟"
    },
    {
      title: "完成C轮融资 估值达10亿美元",
      date: "2023-12-28",
      summary: "公司顺利完成C轮融资，获得知名投资机构青睐，估值突破10亿美元，将加速产品研发和市场拓展步伐。",
      category: "融资动态",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='news4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23dc2626;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23b91c1c;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23news4)'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3E💰%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3EC轮融资%3C/text%3E%3C/svg%3E",
      readTime: "6分钟"
    },
    {
      title: "海外市场拓展取得突破性进展",
      date: "2023-12-20",
      summary: "公司海外业务快速发展，成功进入欧美主要市场，与多家国际企业建立合作关系，国际化战略成效显著。",
      category: "业务拓展",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='news5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%239c27b0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237b1fa2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23news5)'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3E🌍%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3E海外拓展%3C/text%3E%3C/svg%3E",
      readTime: "4分钟"
    },
    {
      title: "发布企业级AI开发平台",
      date: "2023-12-15",
      summary: "公司正式发布企业级AI开发平台，为企业提供一站式AI应用开发和部署服务，助力企业快速实现AI转型。",
      category: "产品发布",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Cdefs%3E%3ClinearGradient id='news6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230891b2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='250' fill='url(%23news6)'/%3E%3Ctext x='200' y='110' text-anchor='middle' fill='white' font-size='32' font-family='Arial, sans-serif'%3E🚀%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif'%3EAI平台发布%3C/text%3E%3C/svg%3E",
      readTime: "7分钟"
    }
  ],

  // 联系方式信息
  contact: {
    address: "长沙高新开发区岳麓西大道1698号麓谷科技创新创业园A栋23楼",
    phone: "+86 010-1234-5678",
    email: "contact@company.com",
    workingHours: "周一至周五 9:00-18:00",

    // 联系方式卡片配置
    contactCard: {
      title: "联系方式",
      icon: "fas fa-phone-alt",
      items: [
        {
          icon: "fas fa-map-marker-alt",
          title: "公司地址",
          content: "长沙高新开发区岳麓西大道1698号麓谷科技创新创业园A栋23楼"
        },
        {
          icon: "fas fa-phone",
          title: "联系电话",
          content: "+86 010-1234-5678"
        },
        {
          icon: "fas fa-envelope",
          title: "邮箱地址",
          content: "contact@company.com"
        },
        {
          icon: "fas fa-clock",
          title: "工作时间",
          content: "周一至周五 8:30-18:00"
        }
      ]
    },

    // 交通指南卡片配置
    trafficCard: {
      title: "交通指南",
      icon: "fas fa-route",
      items: [
        {
          icon: "fas fa-subway",
          iconClass: "subway",
          title: "地铁路线",
          content: "6号线(长丰站)/城际(麓谷站)",
          note: "坐车5分钟可到达"
        },
        {
          icon: "fas fa-bus",
          iconClass: "bus",
          title: "公交路线",
          content: "132路;415路;416路",
          note: "麓谷科创园-公交车站"
        },
        {
          icon: "fas fa-car",
          iconClass: "car",
          title: "自驾路线",
          content: "麓谷科技创新创业园A栋23楼地下停车场",
          note: "充电桩设施完备"
        }
      ]
    },

    departments: [
      {
        name: "销售部",
        phone: "+86 010-1234-5601",
        email: "sales@company.com"
      },
      {
        name: "技术支持",
        phone: "+86 010-1234-5602",
        email: "support@company.com"
      },
      {
        name: "商务合作",
        phone: "+86 010-1234-5603",
        email: "business@company.com"
      }
    ]
  },

  // 页脚配置信息
  footer: {
    copyright: "© 2024 科技创新有限公司. 保留所有权利.",
    icp: "京ICP备12345678号-1",
    links: [
      { name: "隐私政策", href: "#privacy" },
      { name: "服务条款", href: "#terms" },
      { name: "法律声明", href: "#legal" },
      { name: "网站地图", href: "#sitemap" },
      { name: "招聘信息", href: "#careers" },
      { name: "投资者关系", href: "#investors" }
    ]
  }
};

// 动态生成 JSON-LD 结构化数据
function generateJsonLd() {
  // 确保所有需要的数据都存在
  if (!websiteData || !websiteData.company || !websiteData.site || !websiteData.contact) {
    console.warn('缺少生成JSON-LD所需的数据');
    return {};
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": websiteData.company.name,
    "url": websiteData.site.canonical,
    "logo": `${websiteData.site.canonical}/assets/logo.png`,
    "description": websiteData.site.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": websiteData.contact.address ? websiteData.contact.address.split('，')[0] : "",
      "addressLocality": "北京市",
      "addressRegion": "海淀区",
      "postalCode": "100000",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": websiteData.contact.phone || "",
      "contactType": "customer service",
      "areaServed": "CN",
      "availableLanguage": "Chinese"
    },
    "foundingDate": websiteData.company.founded || "",
    "numberOfEmployees": websiteData.company.employees || ""
  };
}
