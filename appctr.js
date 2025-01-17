var apps=1;
var nowapp=0;
var appname=new Array(256);
var appverson=new Array(256);
var appicon=new Array(256);
var applocation=new Array(256);



appname[0]="ShunBoiu Word";
appverson[0]="V 1.0";
appicon[0]="apps\\sbword\\sbword.bmp";
applocation[0]="apps\\sbword\\sbword.html";

appname[0]="Scenzid Maghned OS";
appverson[0]="V 1.0";
appicon[0]="https:\\\\qeqenn.github.io\\SM-OS\\Start.png";
applocation[0]="https:\\\\qeqenn.github.io\\SM-OS\\";




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
		apps = 0;
	}
	else
	{
		apps += 1;
	}
refreshapp();
}
refreshapp();
