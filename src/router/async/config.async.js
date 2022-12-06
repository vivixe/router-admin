/*
 * @Author: vivi.
 * @Date: 2022-12-06 16:54:47
 * @LastEditTime: 2022-12-06 16:55:00
 * @FilePath: \router-admin\src\router\async\config.async.js
 * @Description: 
 */
import routerMap from './router.map'
import {
	parseRoutes
} from '@/utils/routerUtil'

// 异步路由配置
const routesConfig = [
	'login',
	'root',
	'demo',
	'webIndex',
	'webPreview',
	'design',
	'sellNew',
	{
		router: 'exp404',
		path: '*',
		name: '404'
	},
	{
		router: 'exp403',
		path: '/403',
		name: '403'
	}
]

const options = {
	// mode: 'history',
	routes: parseRoutes(routesConfig, routerMap)
}

export default options
