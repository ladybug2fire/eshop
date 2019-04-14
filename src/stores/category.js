import _ from 'lodash'
export default {
  state: {
    food: [
      {
        label: '家常菜',
        children: ['凉菜', '家常菜', '素食', '冷菜', '海鲜', '甜点', '面食']
      },
      {
        label: '中华菜系',
        children: ['川菜', '湘菜', '粤菜', '浙江菜', '淮扬菜', '本帮菜', '陕西菜']
      },
      {
        label: '烘焙',
        children: ['蛋糕', '点心', '饼干']
      },
      {
        label: '饮品',
        children: ['奶茶', '自制酒', '养生茶']
      }
    ],
    diet: [
      {
        label: '饮食健康',
        children: ['中医保健', '美容瘦身', '养生妙方']
      },
      {
        label: '人群膳食',
        children: ['孕妇', '老人', '哺乳期', '强少年', '产妇']
      },
      {
        label: '疾病调理',
        children: [
          '糖尿病', '高血压', '术后', '肠炎', '月经不调'
        ]
      },
      {
        label: '功能性调理',
        children: ['美容', '减肥', '延缓衰老', '消化不良', '滋阴补肾', '营养不良', '益智补脑'
        ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    foodoptions (state) {
      return state.food
    },
    dietoptions (state) {
      return state.diet
    }
  }
}
