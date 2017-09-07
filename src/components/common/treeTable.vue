<template>
  <el-tree
  :data="data2"
  :props="defaultProps"
  show-checkbox
  node-key="id"
  default-expand-all
  :expand-on-click-node="false"
  :render-content="renderContent">
  </el-tree>
</template>

<script>
  let id = 1000;

  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '采集适配器',
          children: [{
            id: 4,
            label: 'FTP文件解析',
            children: [{
              id: 9,
              label: 'Excel文件解析',
              parent:'采集适配器'
            }, {
              id: 10,
              label: 'PDF文件解析',
              parent:'采集适配器'
            }, {
              id: 11,
              label: '文本解析',
              parent:'采集适配器'
            }],

          }]
        }, {
          id: 2,
          label: '数据库连接',
          children: [{
            id: 5,
            label: 'Oracle连接方式'
          }, {
            id: 6,
            label: 'Mysql连接方式'
          }]
        }, {
          id: 3,
          label: '网络爬虫',
          children: [{
            id: 7,
            label: '结构化数据爬取'
          }, {
            id: 8,
            label: '非结构化数据爬取'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span>
          <span>
          <span style="width:200px;display:inline-block;font-size:14px;">{node.label}</span>
        </span>
        <span style="float: right; margin-right: 20px">

        <el-button size="mini"  type="info" on-click={ () => this.append(store, data) }>添加下级分类</el-button>
        <el-button size="mini"  type="danger" on-click={ () => this.remove(store, data) }>删除</el-button>
        </span>
        </span>);
      }
    }
  };
</script>

