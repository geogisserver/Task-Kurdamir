var wms_layers = [];

var format_IEV_0 = new ol.format.GeoJSON();
var features_IEV_0 = format_IEV_0.readFeatures(json_IEV_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IEV_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IEV_0.addFeatures(features_IEV_0);
var lyr_IEV_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IEV_0, 
                style: style_IEV_0,
                interactive: true,
                title: '<img src="styles/legend/IEV_0.png" /> IEV'
            });
var format_IED_1 = new ol.format.GeoJSON();
var features_IED_1 = format_IED_1.readFeatures(json_IED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IED_1.addFeatures(features_IED_1);
var lyr_IED_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IED_1, 
                style: style_IED_1,
                interactive: true,
                title: '<img src="styles/legend/IED_1.png" /> IED'
            });
var format_Agro_geo_2 = new ol.format.GeoJSON();
var features_Agro_geo_2 = format_Agro_geo_2.readFeatures(json_Agro_geo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agro_geo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agro_geo_2.addFeatures(features_Agro_geo_2);
var lyr_Agro_geo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Agro_geo_2, 
                style: style_Agro_geo_2,
                interactive: true,
                title: '<img src="styles/legend/Agro_geo_2.png" /> Agro_geo'
            });
var format_Other_agro_geo_3 = new ol.format.GeoJSON();
var features_Other_agro_geo_3 = format_Other_agro_geo_3.readFeatures(json_Other_agro_geo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_agro_geo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_agro_geo_3.addFeatures(features_Other_agro_geo_3);
var lyr_Other_agro_geo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Other_agro_geo_3, 
                style: style_Other_agro_geo_3,
                interactive: true,
                title: '<img src="styles/legend/Other_agro_geo_3.png" /> Other_agro_geo'
            });
var format_Other_land_geo_4 = new ol.format.GeoJSON();
var features_Other_land_geo_4 = format_Other_land_geo_4.readFeatures(json_Other_land_geo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Other_land_geo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Other_land_geo_4.addFeatures(features_Other_land_geo_4);
var lyr_Other_land_geo_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Other_land_geo_4, 
                style: style_Other_land_geo_4,
                interactive: true,
                title: '<img src="styles/legend/Other_land_geo_4.png" /> Other_land_geo'
            });

lyr_IEV_0.setVisible(true);lyr_IED_1.setVisible(true);lyr_Agro_geo_2.setVisible(true);lyr_Other_agro_geo_3.setVisible(true);lyr_Other_land_geo_4.setVisible(true);
var layersList = [lyr_IEV_0,lyr_IED_1,lyr_Agro_geo_2,lyr_Other_agro_geo_3,lyr_Other_land_geo_4];
lyr_IEV_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'TypeAU': 'TypeAU', 'Subordinat': 'Subordinat', 'StatCode': 'StatCode', 'EconomRe': 'EconomRe', 'Area': 'Area', 'Perimetr': 'Perimetr', 'Note': 'Note', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_IED_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'UrbanName': 'UrbanName', 'UrbanNum': 'UrbanNum', 'StatCode': 'StatCode', 'Subordinat': 'Subordinat', 'Area': 'Area', 'Perimetr': 'Perimetr', 'Note': 'Note', 'IEDType': 'IEDType', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'OBJECTID_2': 'OBJECTID_2', 'Name_2': 'Name_2', 'TypeAU': 'TypeAU', 'Subordinat_2': 'Subordinat_2', 'StatCode_2': 'StatCode_2', 'EconomRe': 'EconomRe', 'Area_2': 'Area_2', 'Perimetr_2': 'Perimetr_2', 'Note_2': 'Note_2', 'Shape_Leng_2': 'Shape_Leng_2', 'Shape_Area_2': 'Shape_Area_2', });
lyr_Agro_geo_2.set('fieldAliases', {'OtherCateg': 'OtherCateg', 'Ameliorati': 'Ameliorati', 'FactArea': 'FactArea', 'Perimetr': 'Perimetr', 'Designatio': 'Designatio', 'Administra': 'Administra', 'Administ_1': 'Administ_1', 'LegalTypeo': 'LegalTypeo', 'FactUse': 'FactUse', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Other_agro_geo_3.set('fieldAliases', {'SubCategor': 'SubCategor', 'LegalTypeo': 'LegalTypeo', 'FactUse': 'FactUse', 'FactArea': 'FactArea', 'Perimetr': 'Perimetr', 'Administra': 'Administra', 'Administ_1': 'Administ_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'field': 'field', });
lyr_Other_land_geo_4.set('fieldAliases', {'SubCategor': 'SubCategor', 'FactUse': 'FactUse', 'FactArea': 'FactArea', 'Perimetr': 'Perimetr', 'Administra': 'Administra', 'Administ_1': 'Administ_1', 'Category_o': 'Category_o', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_IEV_0.set('fieldImages', {'OBJECTID': '', 'Name': '', 'TypeAU': '', 'Subordinat': '', 'StatCode': '', 'EconomRe': '', 'Area': '', 'Perimetr': '', 'Note': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_IED_1.set('fieldImages', {'OBJECTID': 'Range', 'Name': 'TextEdit', 'UrbanName': 'TextEdit', 'UrbanNum': 'Range', 'StatCode': 'TextEdit', 'Subordinat': 'TextEdit', 'Area': 'TextEdit', 'Perimetr': 'TextEdit', 'Note': 'TextEdit', 'IEDType': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'OBJECTID_2': 'Range', 'Name_2': 'TextEdit', 'TypeAU': 'Range', 'Subordinat_2': 'TextEdit', 'StatCode_2': 'TextEdit', 'EconomRe': 'TextEdit', 'Area_2': 'TextEdit', 'Perimetr_2': 'TextEdit', 'Note_2': 'TextEdit', 'Shape_Leng_2': 'TextEdit', 'Shape_Area_2': 'TextEdit', });
lyr_Agro_geo_2.set('fieldImages', {'OtherCateg': '', 'Ameliorati': '', 'FactArea': '', 'Perimetr': '', 'Designatio': '', 'Administra': '', 'Administ_1': '', 'LegalTypeo': '', 'FactUse': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Other_agro_geo_3.set('fieldImages', {'SubCategor': '', 'LegalTypeo': '', 'FactUse': '', 'FactArea': '', 'Perimetr': '', 'Administra': '', 'Administ_1': '', 'Shape_Leng': '', 'Shape_Area': '', 'field': '', });
lyr_Other_land_geo_4.set('fieldImages', {'SubCategor': '', 'FactUse': '', 'FactArea': '', 'Perimetr': '', 'Administra': '', 'Administ_1': '', 'Category_o': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_IEV_0.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'TypeAU': 'no label', 'Subordinat': 'no label', 'StatCode': 'no label', 'EconomRe': 'no label', 'Area': 'no label', 'Perimetr': 'no label', 'Note': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_IED_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'UrbanName': 'no label', 'UrbanNum': 'no label', 'StatCode': 'no label', 'Subordinat': 'no label', 'Area': 'no label', 'Perimetr': 'no label', 'Note': 'no label', 'IEDType': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'OBJECTID_2': 'no label', 'Name_2': 'no label', 'TypeAU': 'no label', 'Subordinat_2': 'no label', 'StatCode_2': 'no label', 'EconomRe': 'no label', 'Area_2': 'no label', 'Perimetr_2': 'no label', 'Note_2': 'no label', 'Shape_Leng_2': 'no label', 'Shape_Area_2': 'no label', });
lyr_Agro_geo_2.set('fieldLabels', {'OtherCateg': 'no label', 'Ameliorati': 'no label', 'FactArea': 'no label', 'Perimetr': 'no label', 'Designatio': 'no label', 'Administra': 'no label', 'Administ_1': 'no label', 'LegalTypeo': 'no label', 'FactUse': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Other_agro_geo_3.set('fieldLabels', {'SubCategor': 'no label', 'LegalTypeo': 'no label', 'FactUse': 'no label', 'FactArea': 'no label', 'Perimetr': 'no label', 'Administra': 'no label', 'Administ_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'field': 'no label', });
lyr_Other_land_geo_4.set('fieldLabels', {'SubCategor': 'no label', 'FactUse': 'no label', 'FactArea': 'no label', 'Perimetr': 'no label', 'Administra': 'no label', 'Administ_1': 'no label', 'Category_o': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Other_land_geo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});