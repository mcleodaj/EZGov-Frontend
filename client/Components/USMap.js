import React from 'react';
import { Link } from 'react-router';
const image = require('./img/US-Map-1500.png')
import scaleImageMap from './imageMapResizer.js'



class USMap extends React.Component {
  componentDidMount(){
    scaleImageMap();
  }
  componentDidUpdate(){
    scaleImageMap();
  }

  render() {
    return (
      <div>
        <img src={image} name="USMap" className="responsive-img" useMap="#USMap"/>

        <map name="USMap" id="USMap">
          <area shape="rect" coords="1498,1162,1500,1164" alt="Image Map" style={{outline: "none"}} title="Image Map" href="" />
          <Link to={`/states/37`}>
            <area id="37" alt="" title="Oregon" shape="poly" coords="102,269,128,283,132,299,185,307,243,323,246,338,205,438,58,392,53,364" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/5`}>
            <area id="5" alt="" title="California" shape="poly" coords="144,431,119,516,221,677,202,731,132,721,70,698,60,640,46,564,34,508,31,447,48,420,55,398" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/12`}>
            <area id="12" alt="" title="Idaho" shape="poly" coords="289,229,313,236,326,309,329,340,340,374,370,376,379,380,364,459,236,428,234,431,247,359" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/28`}>
            <area id="28" alt="" title="Nevada"  shape="poly" coords="166,436,295,472,260,637,253,642,243,642,242,659,236,668,141,523" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/26`}>
            <area id="26" alt="" title="Montana" shape="poly" coords="348,212,576,257,562,373,415,363,374,361,350,319,339,244" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/51`}>
            <area id="51" alt="" title="Wyoming" shape="poly" coords="410,385,552,407,541,522,388,501" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/44`}>
            <area id="44" alt="" title="Utah" shape="poly" coords="306,482,371,496,369,523,410,530,393,647,275,625" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/3`}>
            <area id="3" alt="" title="Arizona" shape="poly" coords="382,663,360,825,311,819,222,769,239,696,244,664,267,642" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/6`}>
            <area id="6" alt="" title="Colorado" shape="poly" coords="431,534,587,553,577,669,415,651" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/31`}>
            <area id="31" alt="" title="New Mexico" shape="poly" coords="410,675,551,690,538,834,451,831,412,828,409,840,386,837" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/34`}>
            <area id="34" alt="" title="North Dakota" shape="poly" coords="595,258,727,267,739,356,585,347" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/41`}>
            <area id="41" alt="" title="South Dakota" shape="poly" coords="588,361,740,370,743,390,742,440,741,468,734,470,706,461,695,455,579,447" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/27`}>
            <area id="27" alt="" title="Nebraska" shape="poly" coords="575,469,694,477,720,481,732,486,739,494,747,514,751,537,758,557,762,564,611,560,613,532,570,527" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/16`}>
            <area id="16" alt="" title="Kansas" shape="poly" coords="601,580.0000152587891,750,584.0000152587891,760,588.0000152587891,768,610.0000152587891,770,672.0000152587891,596,668.0000152587891" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/36`}>
            <area id="36" alt="" title="Oklahoma" shape="poly" coords="573,696,772,704,776,753,775,802,728,800,708,799,691,796,662,784,648,779,640,771,642,719,573,714" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/43`}>
            <area id="43" alt="" title="Texas" shape="poly" coords="560,748.0000305175781,634,753.0000305175781,632,808.0000305175781,648,812.0000305175781,677,821.0000305175781,703,827.0000305175781,734,828.0000305175781,744,827.0000305175781,769,836.0000305175781,775,841.0000305175781,774,880.0000305175781,784,900.0000305175781,788,909.0000305175781,785,927.0000305175781,783,949.0000305175781,735,978.0000305175781,705,995.0000305175781,691,1015.0000305175781,690,1039.0000305175781,698,1052.0000305175781,688,1059.0000305175781,642,1044.0000305175781,613,988.0000305175781,606,966.0000305175781,544,964.0000305175781,515,952.0000305175781,503,931.0000305175781,462,868.0000305175781,550,874.0000305175781" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/2`}>
            <area id="2" alt="" title="Alaska" shape="poly" coords="312,903,360,921,367,928,372,1041,406,1049,452,1090,457,1107,444,1118,420,1107,375,1066,348,1059,308,1101,212,1130,168,1116,177,1103,209,1111,216,1077,215,1018,230,979,268,924" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/11`}>
            <area id="11" alt="" title="Hawaii" shape="poly" coords="175,1017,141,979,81,954,40,941,8,969,65,1013,141,1036,157,1036" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/23`}>
            <area id="23" alt="" title="Minnesota" shape="poly" coords="764,424,764,375,756,363,756,357,762,352,759,337,753,294,750,265,786,265,792,253,800,254,804,270,835,274,876,284,903,290,853,337,851,351,846,387,863,396,875,408,877,423" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/15`}>
            <area id="15" alt="" title="Iowa" shape="poly" coords="757,444,872,442,885,466,899,483,896,496,892,500,888,504,882,504,879,508,883,513,880,524,874,535,870,535,863,528,775,529,766,492,756,468" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/25`}>
            <area id="25" alt="" title="Missouri" shape="poly" coords="764,561,854,559,862,567,879,594,886,603,894,608,891,623,911,638,915,652,920,659,920,671,911,688,889,689,892,679,876,676,791,677,789,608" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/4`}>
            <area id="4" alt="" title="Arkansas" shape="poly" coords="783,716,889,713,901,727,902,732,873,795,872,814,866,815,797,818,796,803,786,800,786,748" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/18`}>
            <area id="18" alt="" title="Louisiana" shape="poly" coords="795,833,868,832,875,852,861,887,906,888,930,913,928,943,914,950,872,948,858,936,801,931,800,902,804,889,792,865" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/22`}>
            <area id="22" alt="" title="Michigan" shape="poly" coords="1027,424,1026,420,1035,402,1031,380,1025,366,1028,336,997,328,992,322,989,311,946,299,939,292,940,289,955,280,962,249,976,241,1030,244,1038,250,1040,276,1050,272,1113,286,1123,292,1120,304,1092,315,1107,346,1119,373,1120,389,1109,398,1104,415,1089,418" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/50`}>
            <area id="50" alt="" title="Wisconsin" shape="poly" coords="876,329,880,325,917,314,964,344,993,356,983,394,982,445,907,448,900,429,900,412,868,388,868,369,862,359,875,345" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/13`}>
            <area id="13" alt="" title="Illinois" shape="poly" coords="904,465,968,462,978,485,984,549,985,571,976,592,975,604,973,607,967,610,967,619,965,621,944,623,938,615,916,589,911,571,892,548,887,534,888,521,896,516,900,512,896,505,895,501,901,497,909,493,913,487,915,482" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/14`}>
            <area id="14" alt="" title="Indiana" shape="poly" coords="993,453,1055,444,1065,531,1041,557,1024,563,1014,564,993,568,989,563,992,549,1000,539,996,529,996,514,999,492" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/17`}>
            <area id="17" alt="" title="Kentucky" shape="poly" coords="970,628,975,614,983,606,1003,586,1031,581,1041,575,1057,559,1069,547,1074,544,1085,546,1094,551,1118,550,1127,563,1135,577,1144,583,1140,593,1125,608,1106,617,1008,629,971,633" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/42`}>
            <area id="42" alt="" title="Tennessee" shape="poly" coords="1123,644,1124,653,1114,662,1068,699,1064,700,920,712,936,664,974,656" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/24`}>
            <area id="24" alt="" title="Mississippi" shape="poly" coords="915,744,968,742,971,751,967,831,972,877,964,882,942,884,933,879,930,863,888,861,884,853,897,828,894,808,893,783" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/1`}>
            <area id="1" alt="" title="Alabama" shape="poly" coords="979,732,1044,727,1066,796,1069,842,1012,850,1008,868,984,872,975,823" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/9`}>
            <area id="9" alt="" title="Florida" shape="poly" coords="1024,880,1090,873,1164,872,1185,872,1213,933,1231,977,1235,1028,1214,1049,1180,1059,1173,1044,1191,1036,1177,1005,1159,977,1148,956,1153,938,1137,920,1121,908,1096,919,1083,920,1070,907,1048,900,1026,906" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/10`}>
            <area id="10" alt="" title="Georgia" shape="poly" coords="1056,733,1121,726,1155,764,1168,782,1178,796,1188,808,1176,847,1159,861,1142,854,1087,857,1079,843,1077,821,1079,805" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/40`}>
            <area id="40" alt="" title="South Carolina" shape="poly" coords="1167,768,1172,758,1194,749,1220,747,1256,752,1288,775,1283,784,1275,805,1244,838,1231,840,1220,821,1200,798" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/33`}>
            <area id="33" alt="" title="North Carolina" shape="poly" coords="1082,708,1140,659,1275,637,1286,660,1277,689,1271,699,1251,710,1243,728,1225,731,1201,713,1187,709,1168,711,1145,704,1124,711,1108,715,1083,717" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/46`}>
            <area id="46" alt="" title="Virginia" shape="poly" coords="1126,645,1127,639,1161,610,1177,612,1189,608,1199,596,1212,572,1221,562,1233,542,1245,545,1250,543,1260,546,1267,552,1269,560,1271,566,1293,575,1300,602,1308,609,1308,618,1224,632" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/49`}>
            <area id="49" alt="" title="West Virginia" shape="poly" coords="1159,586,1132,564,1129,551,1140,531,1152,520,1162,510,1164,482,1169,481,1173,506,1196,502,1224,497,1232,499,1239,508,1236,515,1228,514,1220,528,1211,532,1210,540,1200,545,1193,558,1191,571,1180,578" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/35`}>
            <area id="35" alt="" title="Ohio" shape="poly" coords="1071,505,1061,428,1095,423,1155,404,1160,417,1164,445,1163,475,1153,486,1144,500,1131,519,1098,516" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/38`}>
            <area id="38" alt="" title="Pennsylvania" shape="poly" coords="1180,486,1168,417,1187,405,1191,414,1280,393,1293,400,1302,413,1296,430,1304,444,1306,452,1294,464,1243,475" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/20`}>
            <area id="20" alt="" title="Maryland" shape="poly" coords="1235,524,1320,508,1332,523,1336,537,1344,542,1344,558,1332,585,1328,584,1321,568,1318,562,1293,556,1284,544,1279,535,1267,527,1254,531,1246,536,1240,542,1235,535" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/8`}>
            <area id="8" alt="" title="Delaware" shape="poly" coords="1348,538,1328,496,1351,490,1376,491,1390,514,1396,532" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/30`}>
            <area id="30" alt="" title="New Jersey" shape="poly" coords="1344,486,1322,469,1320,456,1320,433,1332,410,1356,417,1361,437,1363,460" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/48`}>
            <area id="48" alt="" title="Washington DC" shape="poly" coords="1368,608,1367,576,1392,566,1415,575,1419,593,1419,611" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/32`}>
            <area id="32" alt="" title="New York" shape="poly" coords="1188,392,1184,376,1196,346,1218,320,1236,309,1245,307,1265,282,1270,277,1302,269,1308,288,1316,314,1322,334,1326,375,1329,385,1351,372,1360,373,1360,383,1345,391,1332,400,1325,402,1321,407,1317,408,1313,405,1313,399,1315,392,1286,380,1278,374" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/39`}>
            <area id="39" alt="" title="Rhode Island" shape="poly" coords="1427,448,1427,404,1444,393,1456,410,1457,426,1458,449" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/22`}>
            <area id="22" alt="" title="Connecticut" shape="poly" coords="1416,387,1417,359,1408,349,1402,329,1364,337,1364,344,1367,363,1365,368,1378,384,1388,387" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/21`}>
            <area id="21" alt="" title="Massachusetts" shape="poly" coords="1361,317,1360,292,1401,281,1412,270,1424,280,1437,292,1444,301,1446,315,1444,320,1428,324,1413,316,1396,313" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/45`}>
            <area id="45" alt="" title="Vermont" shape="poly" coords="1341,280,1320,288,1304,260,1296,234,1296,218,1337,206,1344,222,1340,248" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/29`}>
            <area id="29" alt="" title="New Hampshire" shape="poly" coords="1362,265,1354,260,1352,244,1352,216,1359,181,1368,180,1384,220,1396,222,1398,246,1387,258,1382,261" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/19`}>
            <area id="19" alt="" title="Maine" shape="poly" coords="1384,165,1408,228,1417,230,1432,208,1440,192,1451,186,1461,175,1467,164,1480,159,1481,152,1457,132,1451,129,1433,92,1422,88,1416,92,1412,96,1404,92,1398,106" style={{outline: "none"}} target="_self"     />
          </Link>
          <Link to={`/states/47`}>
            <area id="47" alt="" title="Washington" shape="poly" coords="247,296,270,205,164,166,121,171,116,182,109,235,110,244,119,247,128,252,128,264,135,272,151,276,181,283" style={{outline: "none"}} target="_self"     />
          </Link>
        </map>
      </div>
    );
  }

}

export default USMap;
