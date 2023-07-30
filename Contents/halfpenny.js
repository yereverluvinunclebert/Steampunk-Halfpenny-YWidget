//===========================================================================
// halfpenny widget
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patience from Harry Whitfield
//
//===========================================================================var mainWindowwidthDefault = mainWindow.width;

//resizing variables
var mainWindowwidthDefault = mainWindow.width;
var mainWindowheightDefault = mainWindow.height;

var imagehoffsetDefault = image.hoffset;
var imagevoffsetDefault = image.voffset;
var imagewidthDefault = image.width;
var imageheightDefault = image.height;

var tingingSound = "Resources/ting.mp3";
var currStamp = "Resources/halfpenny.png";;
var lock = "Resources/lock.mp3";
var Scale = Number(preferences.clockSize.value) / 100;
var widgetName = "halfpenny.widget";

var debugFlg = "";
//===========================================
// this function runs on startup
//===========================================
function startup() {
    debugFlg = preferences.debugflgPref.value;
    if (debugFlg === "1") {
        preferences.imageEditPref.hidden=false;
        preferences.imageCmdPref.hidden=false;
    } else {
        preferences.imageEditPref.hidden=true;
        preferences.imageCmdPref.hidden=true;
    }
    mainScreen();
    buildVitality(currStamp);
    resize();
    setmenu();
    settooltip();
     // create the licence window
    createLicence(mainWindow);

    // set the widget lock status if pinned
    if (preferences.widgetLockPref.value === "1") {
		mainWindow.locked = true;
    }

}
//=====================
//End function
//=====================




//======================================================================================
