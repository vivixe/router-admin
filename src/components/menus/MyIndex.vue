<!--
 * @Author: vivi.
 * @Date: 2022-07-26 18:58:17
 * @LastEditTime: 2022-09-20 13:54:50
 * @FilePath: \back-stage\src\components\menus\MyIndex.vue
 * @Description: 
-->
<template>
  <div class="index-container">
    <div class="index-main">
      <!-- 标题区 -->
      <div class="index-main-title">
        <div class="index-main-title-left">
          <span class="title-main">早上好，肥肥狗</span>
          <span class="title-sub"
            >欢迎来到万华软件后台管理系统，今日打卡32/65</span
          >
        </div>
        <div class="index-main-title-right">
          <a-date-picker
            placeholder="日"
            @change="onChange"
            :format="dateFormat"
          />
          <br />
          <a-week-picker
            placeholder="周"
            @change="onChange"
            :format="weekFormat"
          />
          <br />
          <a-month-picker
            placeholder="月"
            @change="onChange"
            :format="monthFormat"
          />
        </div>
      </div>
      <div class="index-main-table">
        <div class="index-main-table-tags">
          <div
            class="table-tags-body"
            v-for="item in data.slice(0, 4)"
            :key="item.id"
          >
            <div class="tags-avatar">
              <a-avatar :src="require('@/assets/headpic.jpg')" id="avatar" />
            </div>
            <div class="tags-info">
              <div class="tags-info-title">
                <span class="info-title-main">{{ item.name }}</span>
              </div>
              <div class="tags-info-body">
                <div class="tags-info-body-earn">{{ item.earn }}</div>
                <div class="tags-info-body-status">{{ item.status }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="index-main-table-body1">
          <div class="body1-line-chart">
            <e-charts class="line-chart-body" :option="lineChartOptions" />
          </div>
          <div class="body1-smooth-chart">
            <e-charts
              class="smooth-chart-body"
              :option="smoothChartOptions"
              style="margin-left: 25px"
            />
          </div>
        </div>
        <div class="index-main-table-body2">
          <div class="body2-table">
            <template>
              <a-table
                :columns="columns"
                :data-source="data"
                :pagination="{ pageSize: 2 }"
                :rowKey="(row) => row.id"
                style="padding: 0 20px"
              >
                <a slot="name" slot-scope="text">{{ text }}</a>
                <span slot="customTitle"
                  ><a-icon type="smile-o" /> 项目名称</span
                >

                <span slot="action" slot-scope="">
                  <a>Details</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link">
                    More actions <a-icon type="down" />
                  </a>
                </span>
              </a-table>
            </template>
          </div>
          <div class="body2-worker-changeinfo">
            <a-row type="flex">
              <a-statistic title="ChangeInfo" value="Users" />
              <a-statistic
                title="Admins"
                prefix="+"
                :value="8"
                :style="{
                  margin: '0 32px',
                }"
              />
              <a-statistic title="Workers" prefix="" :value="45" />
              <a-statistic
                title="Trainees"
                prefix="+"
                :value="2"
                :style="{
                  margin: '0 32px',
                }"
              />
            </a-row>
            <a-row type="flex">
              <a-statistic title="ChangeInfo" value="Programs" />
              <a-statistic
                title="Finished"
                prefix="+"
                :value="2"
                :style="{
                  margin: '0 32px',
                }"
              />
              <a-statistic title="Developing" prefix="" :value="12" />
              <a-statistic
                title="Failed"
                prefix="+"
                :value="1"
                :style="{
                  margin: '0 32px',
                }"
              />
            </a-row>
          </div>
        </div>
      </div>
    </div>
    <div class="index-info">
      <div class="avatar-container" @click="toAboutMe">
        <a-tooltip placement="bottom">
          <template slot="title">
            <p>去修改个人信息</p>
          </template>
          <a-avatar
            shape="square"
            :size="56"
            :src="require('@/assets/headpic.jpg')"
            class="avatar-body"
        /></a-tooltip>
        <div class="avatar-info">
          <span class="avatar-name">肥肥狗</span>
          <span class="avatar-position">✓前端开发</span>
        </div>
      </div>

      <div class="search-container">
        <a-input-search placeholder="请输入" @search="onSearch" />
      </div>
      <div class="table-main">
        <div class="table-word">
          <div class="table-word-container">
            <span class="word-title">收入概述</span>
            <a-icon type="appstore" class="table-icon" />
          </div>
          <span class="word-earn">￥ 34,230.56</span>
        </div>
        <div class="table-table">
          <e-charts :option="PineOptions" />
        </div>
      </div>
      <div class="update-info">
        <div class="update-title">
          <span class="update-word">公告</span>
          <a-icon type="sliders" class="update-icon" />
        </div>
        <div class="info-article">
          <div class="article-time">
            <span class="article-title-word">7月4日 21:10</span>
          </div>
          <div class="article-content">
            <span class="article-content-word"
              >服务器将进行例行维护， 预计维护时间大约：1小时。
            </span>
          </div>
          <div class="article-time">
            <span class="article-title-word">6月21日 18:30</span>
          </div>
          <div class="article-content">
            <span class="article-content-word"
              >服务器将进行例行维护， 预计维护时间大约：1小时。
            </span>
          </div>
          <div class="article-more">查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProgramListAPI } from '@/api/program/ProgramInfoAPI'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '阶段',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '负责人',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: '开始时间',
    key: 'time',
    dataIndex: 'time',
    scopedSlots: { customRender: 'time' },
  },
  {
    title: '收益',
    key: 'earn',
    dataIndex: 'earn',
    scopedSlots: { customRender: 'earn' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]
const data = []
export default {
  data() {
    return {
      data,
      columns,
      dateFormat: 'DD',
      weekFormat: 'WW',
      monthFormat: 'MM',
      lineChartOptions: {
        title: {
          text: '   近期收入',
          left: 'left',
          top: 10,
          margin: 10,
          textStyle: {
            color: '#333',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['收入'],
          top: 30,
          textStyle: {
            color: '#ccc',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#ccc',
            },
          },
        },
        series: [
          {
            name: '收入',
            type: 'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data: [220, 152, 131, 174, 90, 230, 210],
          },
        ],
      },
      PineOptions: {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
          show: false,
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['60%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ],
      },
      smoothChartOptions: {
        yAxis: {
          type: 'category',
          data: ['卷卷狗', '肥肥狗', '电子狗', '困困狗'],
        },
        xAxis: {
          type: 'value',
        },
        series: [
          {
            data: [
              {
                value: 84,
                itemStyle: {
                  color: '#8db7d0',
                },
              },
              {
                value: 45,
                itemStyle: {
                  color: '#585697',
                },
              },
              {
                value: 90,
                itemStyle: {
                  color: '#4d62a3',
                },
              },
              {
                value: 30,
                itemStyle: {
                  color: '#ad5a56',
                },
              },
            ],

            type: 'bar',
            barWidth: 20,
          },
        ],
      },
    }
  },
  created() {
    this.getProInfo()
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
    onSearch(value) {
      console.log(value)
    },
    async getProInfo() {
      const { data: res } = await getProgramListAPI()
      this.data = res.data
    },
    toAboutMe() {
      this.$router.push('/home/aboutMe')
    },
  },
}
</script>

<style lang="less" scoped>
.index-container {
  width: 89vw;
  height: 90vh;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  display: flex;
  flex-direction: row;
  .index-main {
    width: 75vw;
    height: 90vh;
    .index-main-title {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 50px;
      .index-main-title-left {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 30px;
        margin-top: 20px;
        // align-items: center;
        .title-main {
          font-size: 26px;
          font-weight: bold;
          color: #000;
        }
        .title-sub {
          font-size: 12px;
          color: #666;
          line-height: 32px;
        }
      }
      .index-main-title-right {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        margin-right: 30px;
        .ant-calendar-picker {
          width: 60px;
          height: 30px;
          margin-right: 10px;
        }
      }
    }
    .index-main-table {
      width: 75vw;
      height: calc(90vh - 50px);
      display: flex;
      flex-direction: column;
      .index-main-table-tags {
        width: 100%;
        height: 110px;
        margin-top: 60px;
        display: flex;
        flex-direction: row;
        // background-color: #fff;
        .table-tags-body {
          width: 16vw;
          height: 100px;
          margin-left: 30px;
          border-radius: 15px;
          background: #ffffff;
          transition: all 0.3s;
          display: flex;
          flex-direction: row;
          // align-items: center;
          &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
          .tags-avatar {
            width: 100px;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            #avatar {
              width: 60px;
              height: 60px;
              border-radius: 10px;
              background-color: #f5f5f5;
            }
          }
          .tags-info {
            width: calc(16vw - 150px);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .tags-info-title {
              font-size: 16px;
              font-weight: 500;
              color: #000;
              margin-top: 10px;
            }
            .tags-info-body {
              display: flex;
              flex-direction: row;
              // justify-content: space-around;
              align-items: center;
              .tags-info-body-earn {
                font-size: 20px;
                color: #be635e;
                font-weight: 500;
                margin: 10px;
              }
              .tags-info-body-status {
                font-size: 12px;
                color: #666;
                font-weight: 300;
              }
            }
          }
        }
        .table-tags-body:nth-child(1) {
          background-color: #333;
          // hover
          // &:hover {
          //   box-shadow:  2px 2px 10px #3c3c3c,
          //    -2px -2px 10px #3f3f3f;
          // }
          .tags-info-title {
            color: #fff;
          }
          .tags-info-body {
            .tags-info-body-status {
              color: #fff;
            }
          }
        }
      }
      .index-main-table-body1 {
        width: 100%;
        height: 40vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        .body1-line-chart {
          width: 45vw;
          height: 36vh;
          background-color: #fff;
          margin: 20px;
          border-radius: 21px;
          box-shadow: 8px 8px 46px #d6d6d6, -8px -8px 46px #ffffff;
        }
        .body1-smooth-chart {
          width: 28vw;
          height: 36vh;
          background-color: #fff;
          margin-right: 30px;
          border-radius: 21px;
          box-shadow: 8px 8px 46px #d6d6d6, -8px -8px 46px #ffffff;
        }
      }
      .index-main-table-body2 {
        width: 100%;
        height: 25vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        // background-color: #fff;
        .body2-table {
          width: 43.6vw;
          height: 25vh;
          background-color: #fff;
          margin-left: 20px;
          border-radius: 21px;
          box-shadow: 8px 8px 46px #d6d6d6, -8px -8px 46px #ffffff;
        }
        .body2-worker-changeinfo {
          width: 28vw;
          height: 25vh;
          margin-left: 30px;
          background-color: #fff;
          margin-right: 20px;
          border-radius: 21px;
          box-shadow: 8px 8px 46px #d6d6d6, -8px -8px 46px #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }
  .index-info {
    flex: 1;
    // width: 22vw;
    height: 90vh;
    background: #f7f7f7;
    .avatar-container {
      display: flex;
      flex-direction: row;
      width: 180px;
      margin: 30px auto;
      cursor: pointer;

      // background-color: #fff;
      .avatar-body {
        border-radius: 10px;
        transition: all 0.3s;
        &:hover {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
      }
      .avatar-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-left: 10px;
        .avatar-name {
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }
        .avatar-position {
          margin-left: 5px;
          font-size: 10px;
          color: #1890ff;
        }
      }
    }
    .search-container {
      display: flex;
      width: 100%;
      margin-bottom: 30px;
      .ant-input-search {
        width: 200px;
        margin: 0 auto;
        height: 100%;
      }
    }
    .table-main {
      display: flex;
      flex-direction: column;
      margin-left: 25px;
      .table-word {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        .table-word-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .word-title {
            font-size: 16px;
            font-weight: 600;
            color: #000;
            margin-bottom: 10px;
          }
          .table-icon {
            font-size: 19px;
            color: grey;
            transition: 0.3s;
          }
          .table-icon:hover {
            font-size: 20px;
            color: #1890ff;
          }
        }
        .word-earn {
          font-size: 22px;
          font-weight: bold;
          color: #000;
        }
      }
      .table-table {
        width: 190px;
        height: 220px;
        margin: 0 auto;
        border-radius: 10px;
        background-color: #f7f7f7;
        box-shadow: 12px 12px 22px #cccccc, -12px -12px 22px #f4f4f4;
      }
    }
    .update-info {
      display: flex;
      flex-direction: column;
      margin-left: 25px;
      margin-top: 60px;
      .update-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .update-word {
          font-size: 16px;
          font-weight: 600;
          color: #000;
        }
        .update-icon {
          font-size: 19px;
          color: grey;
          transition: 0.3s;
        }
        .update-icon:hover {
          font-size: 20px;
          color: #1890ff;
        }
      }
      .info-article {
        display: flex;
        flex-direction: column;
        .article-time {
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .article-title-word {
            font-size: 14px;
            font-weight: 500;
            color: #000;
            margin-bottom: 10px;
          }
          .article-content-word {
            font-size: 10px;
            color: #666;
            line-height: 24px;
          }
        }
        .article-more {
          margin-top: 20px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          font-size: 14px;
          color: #1890ff;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
