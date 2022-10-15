// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":false,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"api","status":true,"description":"teste de plugin","parameters":{"baseurl":"https://tcc-back-spring.herokuapp.com","token":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgVENDIElhZ28vTHVjYXMiLCJzdWIiOiIxIiwiaWF0IjoxNjIxMjk1NTQzLCJleHAiOjE2MjEzODE5NDN9.MBEj9twf-zgabBdZZ9RLdWSmLlZJu9lK-BysFFjRnVg"}},
{"name":"YEP_CoreEngine","status":false,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"true","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"50","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.20 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1.0","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.020","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","Floating Death":"true","---Motions---":"","Attack Motion":"thrust","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon Image Index":"0","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"AlterarTamanhoDaFonte","status":true,"description":"","parameters":{}},
{"name":"ScreenManager","status":true,"description":"(v1.1.2) <RS_ScreenManager>","parameters":{"Test Options":"","options.resize":"false","options.autoScaling":"false","options.minWidth":"true","options.minHeight":"true","Scene Options":"","Recreate Scene":"true","Enable Custom Aspect Ratio":"false","Custom Aspect Ratio":"16:9","Auto Sync Manifest file":"false","Screen Size":"","Default Screen Size":"1280 x 700","Default Graphics Size":"1280 x 700","Temp":"","PC":"[\"{\\\"width\\\":\\\"640\\\",\\\"height\\\":\\\"480\\\"}\",\"{\\\"width\\\":\\\"800\\\",\\\"height\\\":\\\"600\\\"}\",\"{\\\"width\\\":\\\"1024\\\",\\\"height\\\":\\\"768\\\"}\",\"{\\\"width\\\":\\\"1152\\\",\\\"height\\\":\\\"864\\\"}\",\"{\\\"width\\\":\\\"1280\\\",\\\"height\\\":\\\"720\\\"}\",\"{\\\"width\\\":\\\"1280\\\",\\\"height\\\":\\\"800\\\"}\",\"{\\\"width\\\":\\\"1280\\\",\\\"height\\\":\\\"960\\\"}\",\"{\\\"width\\\":\\\"1360\\\",\\\"height\\\":\\\"768\\\"}\",\"{\\\"width\\\":\\\"1360\\\",\\\"height\\\":\\\"768\\\"}\",\"{\\\"width\\\":\\\"1366\\\",\\\"height\\\":\\\"768\\\"}\",\"{\\\"width\\\":\\\"1400\\\",\\\"height\\\":\\\"1050\\\"}\",\"{\\\"width\\\":\\\"1440\\\",\\\"height\\\":\\\"900\\\"}\",\"{\\\"width\\\":\\\"1600\\\",\\\"height\\\":\\\"900\\\"}\",\"{\\\"width\\\":\\\"1600\\\",\\\"height\\\":\\\"1200\\\"}\",\"{\\\"width\\\":\\\"1680\\\",\\\"height\\\":\\\"1050\\\"}\",\"{\\\"width\\\":\\\"1920\\\",\\\"height\\\":\\\"1080\\\"}\",\"{\\\"width\\\":\\\"1920\\\",\\\"height\\\":\\\"1200\\\"}\",\"{\\\"width\\\":\\\"2048\\\",\\\"height\\\":\\\"1152\\\"}\",\"{\\\"width\\\":\\\"2560\\\",\\\"height\\\":\\\"1440\\\"}\",\"{\\\"width\\\":\\\"2560\\\",\\\"height\\\":\\\"1600\\\"}\"]","Mobile":"[\"{\\\"width\\\":\\\"120\\\",\\\"height\\\":\\\"160\\\"}\",\"{\\\"width\\\":\\\"160\\\",\\\"height\\\":\\\"240\\\"}\",\"{\\\"width\\\":\\\"240\\\",\\\"height\\\":\\\"320\\\"}\",\"{\\\"width\\\":\\\"240\\\",\\\"height\\\":\\\"400\\\"}\",\"{\\\"width\\\":\\\"320\\\",\\\"height\\\":\\\"480\\\"}\",\"{\\\"width\\\":\\\"480\\\",\\\"height\\\":\\\"800\\\"}\",\"{\\\"width\\\":\\\"640\\\",\\\"height\\\":\\\"960\\\"}\",\"{\\\"width\\\":\\\"640\\\",\\\"height\\\":\\\"1136\\\"}\",\"{\\\"width\\\":\\\"720\\\",\\\"height\\\":\\\"1280\\\"}\",\"{\\\"width\\\":\\\"750\\\",\\\"height\\\":\\\"1334\\\"}\",\"{\\\"width\\\":\\\"768\\\",\\\"height\\\":\\\"1024\\\"}\",\"{\\\"width\\\":\\\"768\\\",\\\"height\\\":\\\"1280\\\"}\",\"{\\\"width\\\":\\\"800\\\",\\\"height\\\":\\\"1280\\\"}\",\"{\\\"width\\\":\\\"1080\\\",\\\"height\\\":\\\"1920\\\"}\",\"{\\\"width\\\":\\\"1200\\\",\\\"height\\\":\\\"1920\\\"}\",\"{\\\"width\\\":\\\"1242\\\",\\\"height\\\":\\\"2208\\\"}\",\"{\\\"width\\\":\\\"1440\\\",\\\"height\\\":\\\"2560\\\"}\",\"{\\\"width\\\":\\\"1536\\\",\\\"height\\\":\\\"2048\\\"}\",\"{\\\"width\\\":\\\"1600\\\",\\\"height\\\":\\\"2560\\\"}\",\"{\\\"width\\\":\\\"2048\\\",\\\"height\\\":\\\"2732\\\"}\"]","Mobile Simple":"[\"{\\\"width\\\":\\\"320\\\",\\\"height\\\":\\\"480\\\"}\",\"{\\\"width\\\":\\\"480\\\",\\\"height\\\":\\\"800\\\"}\",\"{\\\"width\\\":\\\"720\\\",\\\"height\\\":\\\"1280\\\"}\",\"{\\\"width\\\":\\\"1080\\\",\\\"height\\\":\\\"1920\\\"}\"]","Pictures":"","Scaled Picture":"false","Picture Position Type":"Virtual Coordinates","Ignore Auto Scale":"[]","Original View Size":"{\"width\":\"816\",\"height\":\"624\"}","BattleField":"","Scaled Battleback":"false"}},
{"name":"HIME_EnemyClasses","status":true,"description":"v1.1 - Allows you to assign a class to an enemy. Parameters\r\nand actions available are determined by enemy class and levels.","parameters":{}},
{"name":"HIME_EnemyLevels","status":true,"description":"v1.4 - Gives enemies levels. Provides functions for managing\r\nenemy levels.","parameters":{"Name Format":"%1 Lv %2"}}
];
