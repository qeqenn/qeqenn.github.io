var apps=2;
var nowapp=0;
var appname=new Array(256);
var appverson=new Array(256);
var appicon=new Array(256);
var applocation=new Array(256);



appname[0]="ShunBoiu Word";
appverson[0]="V 1.0";
appicon[0]="apps\\sbword\\sbword.bmp";
applocation[0]="apps\\sbword\\sbword.html";

appname[1]="Scenzid Maghned OS";
appverson[1]="V 1.0";
appicon[1]="https:\\\\qeqenn.github.io\\SM-OS\\Start.png";
applocation[1]="https://qeqenn.github.io/SM-OS/";

appname[2]="railway surfers";
appverson[2]="V 1.0.2.25";
appicon[2]="https://img.itch.zone/aW1nLzE0OTkzNjAyLnBuZw==/315x250%23c/yJknam.png";
applocation[2]="https://qeqen.itch.io/railway-surfers/";




function getintoapp(){
window.open(applocation[nowapp]);
}

function refreshapp(){
	document.getElementById("appname").innerHTML = appname[nowapp];
	document.getElementById("appver").innerHTML = appverson[nowapp];
	document.getElementById("appimg").src = appicon[nowapp];
}



function nextapp(){
	if(nowapp >= apps){
		nowapp = 0;
	}
	else
	{
		nowapp += 1;
	}
refreshapp();
}
refreshapp();
