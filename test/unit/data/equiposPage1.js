'use strict';

module.exports = {};

module.exports.content = {
  morePending: true,
  rows: []
};

function addClub(team, club) {
  module.exports.content.rows.push({
    team, club
  });
}

addClub('ADC BOADILLA', 'BOADILLA DEL MONTE A.D.C.');
addClub('ESTUDIO', 'ESTUDIO C.D.');
addClub('MAJADAHONDA', 'BALONCESTO MAJADAHONDA');
addClub('PLENILUNIO D.O.', 'DISTRITO OLIMPICO');
addClub('POZUELO C.B.', 'BALONCESTO POZUELO');
addClub('TBS ACADEMY', 'BASKET TORREJON');
addClub('UROS DE RIVAS ATICON', 'RIVASKET C.D.E.');
addClub('ZUMOSOL ALCORCON BASKET', 'ALCORCON BASKET');
addClub('A.D.C. JOYFE', 'COLEGIO JOYFE A.D.');
addClub('BALONCESTO ALCALA', 'BALONCESTO ALCALA');


module.exports.html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html><head>
		<title>Federación Baloncesto Madrid. Equipos</title><link rel="stylesheet" type="text/css" href="equiposPage1_files/Rojo-Rosa1.css">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR">
		<meta content="C#" name="CODE_LANGUAGE">
		<meta content="JavaScript" name="vs_defaultClientScript">
		<meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema">
  </head>
	<body>
		<div id="cabeceraIFramePanel">


<iframe src="equiposPage1_files/Cabecera_2Banners.html" scrolling="No" height="315" frameborder="0" width="760"></iframe>

</div>
		<table id="Table1" cellspacing="0" cellpadding="0" border="0" width="760">
			<tbody><tr>
				<td valign="top">
					<div id="izquierdaIFramePanel">




</div>
				</td>
				<td width="5">&nbsp;</td>
				<td width="100%" valign="top">
					<form method="post" action="./Equipos.aspx?a=14&amp;c=12083&amp;med=0" id="Form1">
<div class="aspNetHidden">
<input name="__EVENTTARGET" id="__EVENTTARGET" value="" type="hidden">
<input name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" type="hidden">
<input name="__LASTFOCUS" id="__LASTFOCUS" value="" type="hidden">
<input name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTY0NzY1OTQ1OA9kFgICBw9kFgYCAQ8PFgQeAWECDh4BcAspfkZFQi5TR0NELlBhc2FyZWxhRkEuQ29udHJvbGVzLk5hdmVnYWNpb24rUGFnaW5hLCBTR0NELlBhc2FyZWxhRkEsIFZlcnNpb249MS4wLjYxOTguMjcwMDgsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49bnVsbAJkFggCAQ9kFgQCAw8QDxYGHg5EYXRhVmFsdWVGaWVsZAUCSWQeDURhdGFUZXh0RmllbGQFBVRleHRvHgtfIURhdGFCb3VuZGdkEBVSC0ZSRUUgQkFTS0VUGUZBU0UgRklOQUwgMcKqIE5BQy4gTUFTQy4cMcKqIERpdmlzacOzbiBOYWMuIE1hc2N1bGluYSBGYXNlIEZpbmFsIDHCqiBEaXZpc2nDs24gRmVtZW5pbhxGSU5BTCBBIENVQVRSTyAxwqogTkFDLiBGRU0uGzHCqiBEaXZpc2nDs24gTmFjLiBGZW1lbmluYR5GQVNFIEZJTkFMIDEgRElWIEFVVCBNQVMgU1IuIEEZMcKqIERpdi4gQXV0LiBNYXNjLiBTci4gQR5GQVNFIEZJTkFMIDEgRElWIEFVVCBNQVMgU1IuIEIZMcKqIERpdi4gQXV0LiBNYXNjLiBTci4gQh1GQVNFIEZJTkFMIDHCqiBESVYuIEFVVC4gRkVNLhIxwqogRGl2LiBBdXQuIEZlbS4TMsKqIERpdiBBdXQgTWFzYyBBMRMywqogRGl2IEF1dCBNYXNjIEEyEjLCqiBEaXYgQXV0IE1hc2MgQhIywqogRGl2IEF1dCBGZW0gQTESMsKqIERpdiBBdXQgRmVtIEEyETLCqiBEaXYgQXV0IEZlbSBCD1N1YiAyMSBNYXNjLiBBMhRDIEVTUCBDTFVCRVMgSlIgTUFTQxtGQVNFIEZJTkFMIEpVTklPUiBNQVNDVUxJTk8PSnVuaW9yIE1hc2MuIEExD0p1bmlvciBNYXNjLiBBMhNDIEVTUCBDTFVCRVMgSlIgRkVNGkZBU0UgRklOQUwgSlVOSU9SIEZFTUVOSU5PDkp1bmlvciBGZW0uIEExDkp1bmlvciBGZW0uIEEyFUMgRVNQIENMVUJFUyBDQUQgTUFTQxtGQVNFIEZJTkFMIENBREVURSBNQVNDVUxJTk8PQ2FkZXRlIE1hc2MuIEExD0NhZGV0ZSBNYXNjLiBBMhRDIEVTUCBDTFVCRVMgQ0FEIEZFTRpGQVNFIEZJTkFMIENBREVURSBGRU1FTklOTw5DYWRldGUgRmVtLiBBMQ5DYWRldGUgRmVtLiBBMhVDIEVTUCBDTFVCRVMgSU5GIE1BU0MdRkFTRSBGSU5BTCBJTkZBTlRJTCBNQVNDVUxJTk8RSW5mYW50aWwgTWFzYy4gQTERSW5mYW50aWwgTWFzYy4gQTIUQyBFU1AgQ0xVQkVTIElORiBGRU0cRkFTRSBGSU5BTCBJTkZBTlRJTCBGRU1FTklOTxBJbmZhbnRpbCBGZW0uIEExEEluZmFudGlsIEZlbS4gQTIRU3ViIDIxIE1hc2MuIEZlZC4VSnVuaW9yIE1hc2MuIEZlZGVyYWRvFEp1bmlvciBGZW0uIEZlZGVyYWRvFURJQSBERUwgRkVERVJBRE8gMjAxNhVDYWRldGUgTWFzYy4gRmVkZXJhZG8UQ2FkZXRlIEZlbS4gRmVkZXJhZG8XSW5mYW50aWwgTWFzYy4gRmVkZXJhZG8WSW5mYW50aWwgRmVtLiBGZWRlcmFkbxdGSU5BTCBQUkVJTkZBTlRJTCBNQVNDLhYzwrogeSA0wrogUFJFSU5GLiBNQVNDFVByZWluZmFudGlsIE1hc2N1bGlubxZGSU5BTCBQUkVJTkZBTlRJTCBGRU0uFjPCuiB5IDTCuiBQUkVJTkYuIEZFTS4UUHJlaW5mYW50aWwgRmVtZW5pbm8RRElBIERFTCBNSU5JIDIwMTYPQWx2IE1hcyAywrphw7FvD0FsdiBGZW0gMsK6YcOxbw9BbHYgTWFzIDHCumHDsW8PQWx2IEZlbSAxwrphw7FvEEJlbmogTWFzIDLCumHDsW8QQmVuaiBNYXMgMcK6YcOxbxBCZW5qIEZlbSAywrphw7FvEEJlbmogRmVtIDHCumHDsW8QTElHQSBKUi4gTkJBLUZFQhtMaWdhIEZlbWVuaW5hIGRlIEJhbG9uY2VzdG8GTC5GLi0yDExJR0EgTEVCIE9STw5MSUdBIExFQiBQTEFUQQhMSUdBIEVCQRxMaWdhIFVuaXZlcnNpdGFyaWEgTWFzY3VsaW5hG0xpZ2EgVW5pdmVyc2l0YXJpYSBGZW1lbmluYRxDRSBTU0FBIE1pbmliYXNrZXQgTWFzY3VsaW5vG0NFIFNTQUEgTWluaWJhc2tldCBGZW1lbmlubxpDRSBTRUxFQy4gQ2FkZXRlIE1hc2N1bGlubxlDRSBTRUxFQy4gQ2FkZXRlIEZlbWVuaW5vHENFIFNFTEVDLiBJbmZhbnRpbCBNYXNjdWxpbm8bQ0UgU0VMRUMuIEluZmFudGlsIEZlbWVuaW5vHFZJIFRvcm5lbyBMZXVjZW1pYSB5IExpbmZvbWETVklJIFRPUk5FTyBMSUdBIEVCQRVSBTEyODg5BTEzMTgwBTEyMDgzBTEzMTcyBTEzMTQ2BTEyMDkyBTEzMTg1BTEyMDk3BTEzMTg2BTEyMDk4BTEzMTgxBTEyMDgyBTEyMTAxBTEyMTAyBTEyMTAzBTEyMTA0BTEyMTA1BTEyMTA2BTEyMTE1BTEzMTM3BTEzMTI0BTEyMDkzBTEyMDk0BTEzMTM4BTEzMTI1BTEyMDk1BTEyMDk2BTEzMTM0BTEzMTQ4BTEyMTEwBTEyMTExBTEzMTMzBTEzMTQ3BTEyMTE2BTEyMTE3BTEzMTM2BTEzMTc5BTEyMTEyBTEyMTEzBTEzMTM1BTEzMTc4BTEyMTE4BTEyMTE5BTEyMTIwBTEyMTAwBTEyMDk5BTEzMTU5BTEyMTIxBTEyMTA4BTEyMTA5BTEyMTA3BTEzMjAyBTEzMjAwBTEyMTIzBTEzMjAxBTEzMTk5BTEyMTI0BTEzMTgyBTEyMTI1BTEyMTI2BTEyMTI3BTEyMTI4BTEyMTI5BTEyMTMwBTEyMTMxBTEyMTMyBTEzMDMyBTEyMDIwBTEyMDE2BTEyMDEwBTEyMDEyBTEyMDE0BTEyNjc5BTEyNjc4BTEyOTk1BTEyOTk0BTEyOTY4BTEyOTY3BTEyOTY2BTEyOTY1BTEyOTAyBTEyNTY4FCsDUmdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAQICZAIHDxAPFgYfAgUCSWQfAwUFVGV4dG8fBGdkEBUMCTIwMTYvMjAxNwkyMDE1LzIwMTYJMjAxNC8yMDE1CTIwMTMvMjAxNAkyMDEyLzIwMTMJMjAxMS8yMDEyCTIwMTAvMjAxMQkyMDA5LzIwMTAJMjAwOC8yMDA5CTIwMDcvMjAwOAkyMDA2LzIwMDcJMjAwNS8yMDA2FQwEMjAxNgQyMDE1BDIwMTQEMjAxMwQyMDEyBDIwMTEEMjAxMAQyMDA5BDIwMDgEMjAwNwQyMDA2BDIwMDUUKwMMZ2dnZ2dnZ2dnZ2dnFgECAWQCAw88KwAJAQAPFgYeDVNlbGVjdGVkSW5kZXgCAh4IRGF0YUtleXMWAB4LXyFJdGVtQ291bnQCBGQWCGYPZBYCAgEPDxYEHgRUZXh0BRtSZXN1bHRhZG9zIHkgQ2xhc2lmaWNhY2nDs24eC05hdmlnYXRlVXJsBSUuLi9SZXN1bHRhZG9zLmFzcHg/YT0xNCZjPTEyMDgzJm1lZD0wZGQCAg9kFgICAQ8PFgQfCAULQ2FsZW5kYXJpb3MfCQUmLi4vQ2FsZW5kYXJpb3MuYXNweD9hPTE0JmM9MTIwODMmbWVkPTBkZAIED2QWAgIBDw8WAh8IBQdFcXVpcG9zZGQCBg9kFgICAQ8PFgQfCAUSUHLDs3hpbW9zIFBhcnRpZG9zHwkFIy4uL1BhcnRpZG9zLmFzcHg/YT0xNCZjPTEyMDgzJm1lZD0wZGQCBQ8PFgIfCAUHRXF1aXBvc2RkAgcPDxYCHwgFJjIwMTUvMjAxNiAxwqogRGl2aXNpw7NuIE5hYy4gTWFzY3VsaW5hZGQCAw8QDxYGHwIFAklkHwMFBVRleHRvHwRnZBAVBhMgUGxheS1PZmYgMS80IEZpbmFsEyBQbGF5LU9mZiAxLzggRmluYWwbIEZhc2U6IERlc2NlbnNvIC8gR3J1cG86IEQxGyBGYXNlOiBEZXNjZW5zbyAvIEdydXBvOiBEMhZGYXNlOiAxIC8gR3J1cG86IEltcGFyFEZhc2U6IDEgLyBHcnVwbzogUGFyFQYFNTQxMDEFNTQxMDAFNTQxMDIFNTQxMDMFNDk3NTkFNDk3NjAUKwMGZ2dnZ2dnFgECAWQCBQ88KwALAQAPFgoeEEN1cnJlbnRQYWdlSW5kZXhmHwYWAB8HAgoeCVBhZ2VDb3VudAICHhVfIURhdGFTb3VyY2VJdGVtQ291bnQCEGQWAmYPZBYUAgIPZBYCZg9kFgICNA8VARVjb3JyZW9AYWRjYm9hZGlsbGEuZXNkAgMPZBYCZg9kFgICNA8VAR1jZGVzdHVkaW9AY29sZWdpby1lc3R1ZGlvLmNvbWQCBA9kFgJmD2QWAgI0DxUBE29zY2FyLmNibUBnbWFpbC5jb21kAgUPZBYCZg9kFgICNA8VASFhcmVhZGVwb3J0aXZhQGRpc3RyaXRvbGltcGljby5jb21kAgYPZBYCZg9kFgICNA8VARlqb3NlY2Jwb3p1ZWxvQGhvdG1haWwuY29tZAIHD2QWAmYPZBYCAjQPFQEZaW5mb3JtYWNpb24udGJzQGdtYWlsLmNvbWQCCA9kFgJmD2QWAgI0DxUBEWFyZG04QGhvdG1haWwuY29tZAIJD2QWAmYPZBYCAjQPFQElZGlyZWNjaW9uLmRlcG9ydGl2YUBhbGNvcmNvbmJhc2tldC5lc2QCCg9kFgJmD2QWAgI0DxUBF2pveWZlYmFza2V0QGhvdG1haWwuY29tZAILD2QWAmYPZBYCAjQPFQEcY29udGFjdG9AYmFsb25jZXN0b2FsY2FsYS5lc2RkeQ6IvVQkW7loAOCD1y45rU3Egj2vgoug4IgQSQirUKI=" type="hidden">
</div>

<script type="text/javascript">
<!--
var theForm = document.forms['Form1'];
if (!theForm) {
    theForm = document.Form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
// -->
</script>


<div class="aspNetHidden">

	<input name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="626C361A" type="hidden">
	<input name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAGruOGzWXHwgr3BqP3jqEtIC45WH1F/WTbjklbWdWv0Qost/0dUzIVFpGOhvisxIbqf28XoFl18MKEDa6j0BAhuiJKPBgz721JJxa2UC0R6NoJKCzme79hxV8IhF+/sY3Cx1iy6fR7d7b7d9foIwIgN6esJIY23+1PBov0iSzo1mF6iF1CLJjESQvxE02MNxqj6Sl7E/0JMK2i253EmBaCPi2K8AxfHImpXFq0pjNOf98UgBzOnkSqkIQdrSSGsB1s7hhIX+aSpe+LY92hVZfBVj6MJgXb2BINRARV+XCXkdZwXibiMGIJBbFW/G/l87qj9+/RTbGiXNzEgahv5h9WIB50s4edY5O8RQqaFjwMCF+TXbCi8K4v1k4plW9DkEOcsyn4Rp0XQbsC87C4mbrEmfs4OfEkVuEPfD2jD1F6xvzdf6nibvtoc71zW9Hpm9Ottfr+QS0BhiM9MoQ/2YYZh23Z6CTw3bHb4Rrn0LmlB0gs8wGrpJp8PNXCdtueF4vLq3YSlJGHaJxnSEShMhbUGqiPYs0LtmNewdjiu28cz6NrDENb+4ooi14l8m2fNWD8k5KhcICk6xJioRqTjkcSderX2nsbTC0Y4d4hPRuPN2jEOb+ZVV8yLwTgwcDeYAVz5EAVNwqeIMw8izyP3dMAp4j5Q/Ngr1lO3akcyiLiX29Ul2e/N+GQXjSteCP+PFbDL3Ch7DkZ7J7oPdm8aq2gpU/V33095RQmUZhQMrNOMoXCmi9zjhqBUNfbATc2G5tkw2ajFAhKqK44cgWs5OIyVBqT2SLqYwyHDGePNUBkI5fhFwn54lPzx07qJWanxXPudSdMgYC/vzMvathAcvF6J/6X+NX5b3l56pu1G3lcauG2TIa5eBH4IdFttNO4rFiS7Vf7rnuja+GWNfA71D1yxPU+kDbjoZ5HIwN2eCLBbKSx7nkC/Af2HFThEmgyOPY6ymuYLDSwJGL6KWIovRFSgkfgF0V3Kh33KuqknMAGdLNZFQtxjElqIWnfKFklxkKPfL/l5MZfDp8NqWKF5OrK2OjnvpTwtPbKysBTHTt0ao8ayTQm+K5LIXpjRm2hgMiWM58hYcTYbiS+4udH38LFZ26yT+ChZ5XQQuN31NYC1aiMN+ok1pn15hzcG9tGJRnEtEjQnZZELkSLyBlPwv6NYvAlpH9eTagspQxnkcsorTTKVGoCXlypwgA/hSZpo1f1Bbe8KSRjrXQfqZboVtpqRtMYEfaXkdBdOQH1RA1XM+fjsc/7bNp3RXUMhPWgxPdP8ExOZcSwXivoIreQx3dbWISUxHOyuq4CrEwpNSa/ZKVb11Kc4KFhSPELuST3FM53GCGivF760Ky9y+ZtaPf+jySHYQsAzBSlmK0UzERIiMQu5/CjLBhg2f4q9Ci0/TPF8AS4M0SRoub3ETF923rm0/njFNkVxm/Lt4mlrrbe8XFcdG2/XFxt2GsNr99zxKFgwx+4W1jbPrqJRNJD3LXnFlR6B8k8Ps13ThXcg/edbrRUeRmVWAAHjJqXncqK07ccCE+cAaISHqOylI3N4srKtGdcoJ2hOpgqqu1twy4HOJqrraxXeoByLGehBpo+b6+cCuCe7jgFeZraeI9/nrCaDbnldWimOCD39Y5F7e9jlxLF9LkmWlybTxCnqIim+hUPctr/mKbDQOrNc4Y0EaHygTnArR/uDsp9to4zWX05nMztiVGX2EvPduL405JsjW+EWWC0E1Ia2Be8quzdT9dX96vGaOUT/FkTfFM6hH7UbgC0t0xtHfrs+zR0zIGuVAY3cvcRZh30Yd36dobOEXKsqy3L8wL9bis+JGy3GbWJLgy0dxgyV2IP4MCs0VfHw8Z1jD3w/oBTzMfcidjKdDxcr/ZqKCU/3IsF+1ee1uwMKK+lD7f5iiw9uu62nmPJzCmKxyogFaItXVnM+Ixo7KUHtaWoAsL7TBEsQs2APm4JFrlQHRix5DrgXLySFW+FpxeZz29rnTCO/CiDWltR/HsqV67Vt57twHkvewTWPXu3IF4HWkO7pl1VoF+S3Q8qdFNZuuYmPcLD4Cy+alvgf6P0Ql5KJavvSa269y58ZE0C0fVmGa/6NiBEvg6GVg3711d61B4pN3PtS8fkWAFqfoSU5stfopsipZ/0SBFpXQdG9ywYRZFtuq2qIjizn7iMCrAfN5/1DUewTDsSWwGWWSxRebknmvdvqurr9vYws/tMp6gJmIO3YG/7rDXbFFwdLaM/CroioQyNgjSWPodRl2ouFUUK3n0ocP4FUBRJL7kLrQ/EmZj2zqrQcV2bSt5apA8rU=" type="hidden">
</div>
						<table id="Table2" cellspacing="0" cellpadding="0" border="0" width="100%">
							<tbody><tr>
								<td>
<div id="controlNavegacion_navegacionPanel">

		</div><table class="TablaNavegacion" id="Table3" cellspacing="0" cellpadding="0" border="0">
	<tbody>
			<tr>
				<td>
					<span id="controlNavegacion_Label1" class="Etiquetas">Categoría:</span></td>
				<td>
					<select name="controlNavegacion:categoriasDropDownList" onchange="javascript:setTimeout('__doPostBack(\'controlNavegacion$categoriasDropDownList\',\'\')', 0)" language="javascript" id="controlNavegacion_categoriasDropDownList" class="ControlSeleccion">
		<option value="12889">FREE BASKET</option>
		<option value="13180">FASE FINAL 1ª NAC. MASC.</option>
		<option selected="selected" value="12083">1ª División Nac. Masculina</option>
		<option value="13172">Fase Final 1ª División Femenin</option>
		<option value="13146">FINAL A CUATRO 1ª NAC. FEM.</option>
		<option value="12092">1ª División Nac. Femenina</option>
		<option value="13185">FASE FINAL 1 DIV AUT MAS SR. A</option>
		<option value="12097">1ª Div. Aut. Masc. Sr. A</option>
		<option value="13186">FASE FINAL 1 DIV AUT MAS SR. B</option>
		<option value="12098">1ª Div. Aut. Masc. Sr. B</option>
		<option value="13181">FASE FINAL 1ª DIV. AUT. FEM.</option>
		<option value="12082">1ª Div. Aut. Fem.</option>
		<option value="12101">2ª Div Aut Masc A1</option>
		<option value="12102">2ª Div Aut Masc A2</option>
		<option value="12103">2ª Div Aut Masc B</option>
		<option value="12104">2ª Div Aut Fem A1</option>
		<option value="12105">2ª Div Aut Fem A2</option>
		<option value="12106">2ª Div Aut Fem B</option>
		<option value="12115">Sub 21 Masc. A2</option>
		<option value="13137">C ESP CLUBES JR MASC</option>
		<option value="13124">FASE FINAL JUNIOR MASCULINO</option>
		<option value="12093">Junior Masc. A1</option>
		<option value="12094">Junior Masc. A2</option>
		<option value="13138">C ESP CLUBES JR FEM</option>
		<option value="13125">FASE FINAL JUNIOR FEMENINO</option>
		<option value="12095">Junior Fem. A1</option>
		<option value="12096">Junior Fem. A2</option>
		<option value="13134">C ESP CLUBES CAD MASC</option>
		<option value="13148">FASE FINAL CADETE MASCULINO</option>
		<option value="12110">Cadete Masc. A1</option>
		<option value="12111">Cadete Masc. A2</option>
		<option value="13133">C ESP CLUBES CAD FEM</option>
		<option value="13147">FASE FINAL CADETE FEMENINO</option>
		<option value="12116">Cadete Fem. A1</option>
		<option value="12117">Cadete Fem. A2</option>
		<option value="13136">C ESP CLUBES INF MASC</option>
		<option value="13179">FASE FINAL INFANTIL MASCULINO</option>
		<option value="12112">Infantil Masc. A1</option>
		<option value="12113">Infantil Masc. A2</option>
		<option value="13135">C ESP CLUBES INF FEM</option>
		<option value="13178">FASE FINAL INFANTIL FEMENINO</option>
		<option value="12118">Infantil Fem. A1</option>
		<option value="12119">Infantil Fem. A2</option>
		<option value="12120">Sub 21 Masc. Fed.</option>
		<option value="12100">Junior Masc. Federado</option>
		<option value="12099">Junior Fem. Federado</option>
		<option value="13159">DIA DEL FEDERADO 2016</option>
		<option value="12121">Cadete Masc. Federado</option>
		<option value="12108">Cadete Fem. Federado</option>
		<option value="12109">Infantil Masc. Federado</option>
		<option value="12107">Infantil Fem. Federado</option>
		<option value="13202">FINAL PREINFANTIL MASC.</option>
		<option value="13200">3º y 4º PREINF. MASC</option>
		<option value="12123">Preinfantil Masculino</option>
		<option value="13201">FINAL PREINFANTIL FEM.</option>
		<option value="13199">3º y 4º PREINF. FEM.</option>
		<option value="12124">Preinfantil Femenino</option>
		<option value="13182">DIA DEL MINI 2016</option>
		<option value="12125">Alv Mas 2ºaño</option>
		<option value="12126">Alv Fem 2ºaño</option>
		<option value="12127">Alv Mas 1ºaño</option>
		<option value="12128">Alv Fem 1ºaño</option>
		<option value="12129">Benj Mas 2ºaño</option>
		<option value="12130">Benj Mas 1ºaño</option>
		<option value="12131">Benj Fem 2ºaño</option>
		<option value="12132">Benj Fem 1ºaño</option>
		<option value="13032">LIGA JR. NBA-FEB</option>
		<option value="12020">Liga Femenina de Baloncesto</option>
		<option value="12016">L.F.-2</option>
		<option value="12010">LIGA LEB ORO</option>
		<option value="12012">LIGA LEB PLATA</option>
		<option value="12014">LIGA EBA</option>
		<option value="12679">Liga Universitaria Masculina</option>
		<option value="12678">Liga Universitaria Femenina</option>
		<option value="12995">CE SSAA Minibasket Masculino</option>
		<option value="12994">CE SSAA Minibasket Femenino</option>
		<option value="12968">CE SELEC. Cadete Masculino</option>
		<option value="12967">CE SELEC. Cadete Femenino</option>
		<option value="12966">CE SELEC. Infantil Masculino</option>
		<option value="12965">CE SELEC. Infantil Femenino</option>
		<option value="12902">VI Torneo Leucemia y Linfoma</option>
		<option value="12568">VII TORNEO LIGA EBA</option>

	</select></td>
				<td width="100%"></td>
				<td>
					<span id="controlNavegacion_Label2" class="Etiquetas">Temporada:</span></td>
				<td>
					<select name="controlNavegacion:temporadasDropDownList" onchange="javascript:setTimeout('__doPostBack(\'controlNavegacion$temporadasDropDownList\',\'\')', 0)" language="javascript" id="controlNavegacion_temporadasDropDownList" class="ControlSeleccion">
		<option value="2016">2016/2017</option>
		<option selected="selected" value="2015">2015/2016</option>
		<option value="2014">2014/2015</option>
		<option value="2013">2013/2014</option>
		<option value="2012">2012/2013</option>
		<option value="2011">2011/2012</option>
		<option value="2010">2010/2011</option>
		<option value="2009">2009/2010</option>
		<option value="2008">2008/2009</option>
		<option value="2007">2007/2008</option>
		<option value="2006">2006/2007</option>
		<option value="2005">2005/2006</option>

	</select></td>
			</tr>


	<tr>
		<td colspan="5"><table id="controlNavegacion_navegacionDataList" style="border-collapse:collapse;" cellspacing="0">
	<tbody><tr>
		<td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_0" href="http://competiciones.feb.es/autonomicas/Resultados.aspx?a=14&amp;c=12083&amp;med=0">Resultados y Clasificación</a>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_0" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_1" href="http://competiciones.feb.es/autonomicas/Calendarios.aspx?a=14&amp;c=12083&amp;med=0">Calendarios</a>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_1" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label3_2" class="EnlaceNavegacionSeleccionado">Equipos</span>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_2" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_3" href="http://competiciones.feb.es/autonomicas/Partidos.aspx?a=14&amp;c=12083&amp;med=0">Próximos Partidos</a>
				</td><td></td>
	</tr>
</tbody></table></td>
	</tr>
	</tbody>
</table>
<table class="TablaTitulo" id="TablaTitulo">
	<tbody><tr>
		<td><span id="controlNavegacion_tituloLabel" class="Titulo">Equipos</span></td>
	</tr>
</tbody></table>
<table class="TablaSubTitulo" id="TablaSubTitulo">
	<tbody><tr>
		<td>
			<span id="controlNavegacion_subTituloLabel" class="SubTitulo">2015/2016 1ª División Nac. Masculina</span></td>
	</tr>
</tbody></table>
</td>
							</tr>
							<tr>
								<td colspan="3"><br>
									<select name="gruposDropDownList" onchange="javascript:setTimeout('__doPostBack(\'gruposDropDownList\',\'\')', 0)" language="javascript" id="gruposDropDownList" class="ControlSeleccion">
	<option value="54101"> Play-Off 1/4 Final</option>
	<option selected="selected" value="54100"> Play-Off 1/8 Final</option>
	<option value="54102"> Fase: Descenso / Grupo: D1</option>
	<option value="54103"> Fase: Descenso / Grupo: D2</option>
	<option value="49759">Fase: 1 / Grupo: Impar</option>
	<option value="49760">Fase: 1 / Grupo: Par</option>

</select><br>
									<table id="equiposDataGrid" style="width:100%;border-collapse:collapse;" cellspacing="0">
	<tbody><tr class="TablaDatosEnlaceNavegacion" align="right">
		<td><span>&lt; Anterior</span>&nbsp;<a href="javascript:__doPostBack('equiposDataGrid$_ctl1$_ctl1','')">Siguiente &gt;</a></td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_0" class="CabeceraSeccion">ADC BOADILLA</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_0">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_0">BOADILLA DEL MONTE A.D.C.</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_0">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_0">CTRA. POZUELO-BOADILLA Km. 4</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_0">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_0">Boadilla del Monte</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_0">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_0">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_0">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_0">686540305</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_0">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_0">VERDE</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_0">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_0">BLANCA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_0">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_0">4517-REY FELIPE VI, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_0">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_0">MIGUEL ANGEL CANTERO OLIVA, S/N</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_0">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_0">Boadilla del Monte</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_0">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_0">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_0">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_0">916326240</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_0">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:correo@adcboadilla.es">
                                                                <span id="equiposDataGrid_Label30_0">correo@adcboadilla.es</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_0">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_0"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_0">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_0">19:30</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_0">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_0">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_1" class="CabeceraSeccion">ESTUDIO</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_1">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_1">ESTUDIO C.D.</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_1">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_1">JIMENA MENENDEZ PIDAL, 11</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_1">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_1">Madrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_1">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_1">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_1">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_1">914615190</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_1">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_1">AMARILLA</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_1">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_1">AZUL</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_1">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_1">4047-PACO HERNANDEZ, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_1">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_1">JIMENA MENENDEZ PIDAL, 11</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_1">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_1">Aravaca</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_1">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_1">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_1">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_1">913070268</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_1">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:cdestudio@colegio-estudio.com">
                                                                <span id="equiposDataGrid_Label30_1">cdestudio@colegio-estudio.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_1">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_1">913070268</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_1">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_1">19:30</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_1">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_1">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_2" class="CabeceraSeccion">MAJADAHONDA</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_2">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_2">BALONCESTO MAJADAHONDA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_2">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_2">ROMERO, S/N</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_2">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_2">Majadahonda</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_2">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_2">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_2">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_2">686652405</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_2">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_2">AZUL</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_2">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_2">NARANJA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_2">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_2">4542-EL TEJAR, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_2">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_2">ROMERO, 1</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_2">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_2">Majadahonda</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_2">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_2">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_2">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_2">916343655</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_2">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:oscar.cbm@gmail.com">
                                                                <span id="equiposDataGrid_Label30_2">oscar.cbm@gmail.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_2">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_2"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_2">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_2">20:00</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_2">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_2">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_3" class="CabeceraSeccion">PLENILUNIO D.O.</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_3">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_3">DISTRITO OLIMPICO</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_3">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_3">AVENIDA CANILLEJAS A VICALVARO, 131 LOCAL 7 BIS</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_3">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_3">Madrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_3">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_3">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_3">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_3">686645599</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_3">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_3">CELESTE</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_3">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_3">BLANCA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_3">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_3">1124-SAN BLAS, PDVO. MPAL.</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_3">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_3">AVDA. DE HELLIN, 79</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_3">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_3">Madrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_3">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_3">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_3">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_3">913209818</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_3">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:areadeportiva@distritolimpico.com">
                                                                <span id="equiposDataGrid_Label30_3">areadeportiva@distritolimpico.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_3">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_3"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_3">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_3">18:45</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_3">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_3">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_4" class="CabeceraSeccion">POZUELO C.B. </span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_4">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_4">BALONCESTO POZUELO</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_4">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_4">CAMINO DE LAS HUERTAS, 38</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_4">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_4">Pozuelo de Alarcón</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_4">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_4">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_4">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_4">695940152</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_4">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_4">VERDE</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_4">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_4">AMARILLA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_4">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_4">4504-EL TORREON, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_4">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_4">CAMINO DE LAS HUERTAS, 38</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_4">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_4">Pozuelo de Alarcón</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_4">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_4">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_4">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_4">917154468</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_4">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:josecbpozuelo@hotmail.com">
                                                                <span id="equiposDataGrid_Label30_4">josecbpozuelo@hotmail.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_4">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_4">917154468</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_4">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_4">20:00</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_4">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_4">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_5" class="CabeceraSeccion">TBS ACADEMY</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_5">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_5">BASKET TORREJON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_5">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_5">LONDRES, 25</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_5">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_5">Torrejón de Ardoz</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_5">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_5">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_5">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_5">670788772</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_5">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_5">AZUL</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_5">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_5">BLANCA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_5">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_5">1548-JAVI LIMONES, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_5">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_5">JOAQUIN BLUME, S/N</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_5">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_5">Torrejón de Ardoz</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_5">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_5">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_5">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_5">916563111</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_5">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:informacion.tbs@gmail.com">
                                                                <span id="equiposDataGrid_Label30_5">informacion.tbs@gmail.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_5">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_5"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_5">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_5">19:00</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_5">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_5">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_6" class="CabeceraSeccion">UROS DE RIVAS ATICON</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_6">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_6">RIVASKET C.D.E.</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_6">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_6">JOVELLANOS, 1A</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_6">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_6">Rivas-Vaciamadrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_6">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_6">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_6">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_6">659524430</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_6">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_6">NEGRA</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_6">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_6">BLANCA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_6">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_6">2504-CERRO DEL TELEGRAFO, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_6">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_6">AVDA. DE LOS ALMENDROS, S/N</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_6">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_6">Rivas-Vaciamadrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_6">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_6">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_6">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_6">916665033</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_6">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:ardm8@hotmail.com">
                                                                <span id="equiposDataGrid_Label30_6">ardm8@hotmail.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_6">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_6"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_6">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_6">19:30</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_6">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_6">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_7" class="CabeceraSeccion">ZUMOSOL ALCORCON BASKET</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_7">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_7">ALCORCON BASKET</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_7">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_7">AVDA. LOS CANTOS SN</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_7">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_7">Alcorcón</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_7">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_7">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_7">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_7">609563180</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_7">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_7">AZUL</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_7">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_7">BLANCA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_7">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_7">3504-LA CANALEJA, PABELLON</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_7">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_7">AVDA. LOS CASTILLOS, S/N</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_7">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_7">Alcorcón</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_7">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_7">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_7">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_7">916105052</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_7">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:direccion.deportiva@alcorconbasket.es">
                                                                <span id="equiposDataGrid_Label30_7">direccion.deportiva@alcorconbasket.es</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_7">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_7"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_7">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_7">19:30</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_7">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_7">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_8" class="CabeceraSeccion">A.D.C. JOYFE</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_8">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_8">COLEGIO JOYFE A.D.</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_8">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_8">VITAL AZA, 65</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_8">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_8">Madrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_8">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_8">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_8">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_8">620218952</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_8">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_8">ROJA</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_8">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_8">AZUL</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_8">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_8">1112-JOYFE, COLEGIO</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_8">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_8">VITAL AZA, 65</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_8">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_8">Madrid</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_8">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_8">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_8">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_8">914082263</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_8">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:joyfebasket@hotmail.com">
                                                                <span id="equiposDataGrid_Label30_8">joyfebasket@hotmail.com</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_8">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_8">913772259</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_8">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_8">20:30</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_8">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_8">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr>
		<td>
													<table class="TablaCabeceraSeccion" id="Table33">
														<tbody><tr>
															<td>
																<span id="equiposDataGrid_equipoLabel_9" class="CabeceraSeccion">BALONCESTO ALCALA</span></td>
														</tr>
													</tbody></table>
													<table class="TablaDatos" id="Table4" cellspacing="0" cellpadding="3" border="0" width="100%">
														<tbody><tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_9">Club:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3" width="100%">
																<span id="equiposDataGrid_Label2_9">BALONCESTO ALCALA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_9">Dirección:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_9">.</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_9">Población:</span></td>
															<td class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_9">Alcalá de Henares</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_9">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_9">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_9">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_9">635057209</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_9">Titular:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_9">AZUL</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_9">Reserva:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_9">BLANCA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_9">Campo:</span></td>
															<td class="TablaDatosFilasImparesResaltada" colspan="3">
																<span id="equiposDataGrid_Label16_9">1587-ESPARTALES, CIUDAD DEPORTIVA</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_9">Dirección:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_9">VILLAMALEA, S/N esquina Avda. de los Jesuitas</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_9">Población:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_9">Alcalá de Henares</span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_9">Provincia:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_9">Madrid</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_9">Teléfono:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_9"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_9">Email:</span></td>

															<td class="TablaDatosFilasPares">
								<a href="mailto:contacto@baloncestoalcala.es">
                                                                <span id="equiposDataGrid_Label30_9">contacto@baloncestoalcala.es</span></a></td>

															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_9">Fax. Equipo:</span></td>
															<td class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_9"></span></td>
														</tr>
														<tr>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label25_9">Hora juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_9">19:30</span></td>
															<td class="TablaDatosFilasImpares" nowrap="nowrap">
																<span id="equiposDataGrid_Label27_9">Día de juego:</span></td>
															<td class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_9">Sábado    </span></td>
														</tr>
													</tbody></table>
													<br>
												</td>
	</tr><tr class="TablaDatosEnlaceNavegacion" align="right">
		<td><span>&lt; Anterior</span>&nbsp;<a href="javascript:__doPostBack('equiposDataGrid$_ctl14$_ctl1','')">Siguiente &gt;</a></td>
	</tr>
</tbody></table><br>
								</td>
							</tr>
						</tbody></table>
						<div id="piePaginaPanel">


<table class="TablaCabeceraSeccion" cellspacing="0" cellpadding="3" border="0" width="100%">
	<tbody><tr>
		<td align="right" width="100%" valign="top"><a href="javascript:window.print();"><img alt="Imprímelo" src="equiposPage1_files/img_print.gif" height="13" border="0" width="78"></a></td>
	</tr>
</tbody></table>


</div>
					</form>
				</td>
				<td width="5">&nbsp;</td>
				<td valign="top">
					<div id="derechaIFramePanel">




</div>
				</td>
			</tr>
		</tbody></table>
		<div id="pieIFramePanel">


<iframe src="equiposPage1_files/Pie_2.html" scrolling="No" height="250" frameborder="0" width="760"></iframe>

</div>


</body></html>
`;
