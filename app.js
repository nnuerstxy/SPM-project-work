// 创建 OpenLayers 地图实例
var map = new ol.Map({
  target: 'map',
  layers: [
      new ol.layer.Tile({
          source: new ol.source.TileWMS({
              url: 'http://localhost:8090/iserver/services/map---0--Campus/wms111', // WMS 服务地址
              params: {
                  'LAYERS': '0', // 使用图层名称 "0" 对应校园地图
                  'TILED': true   // 使用切片加载提高效率
              },
              serverType: 'geoserver', // SuperMap iServer 支持 geoserver 类型
              crossOrigin: 'anonymous'
          })
      })
  ],
  view: new ol.View({
      center: ol.proj.fromLonLat([118.903, 32.11]), // 设置地图中心点经纬度
      zoom: 15 // 设置初始缩放级别
  })
});
