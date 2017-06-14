'use strict';

module.exports = {};

module.exports.content = {
  morePending: false,
  rows: []
};

function addClub(team, club) {
  module.exports.content.rows.push({
    team, club
  });
}

addClub('C.B. LAS ROZAS', 'LAS ROZAS C.B.');
addClub('COSLADA C.B. PLURAL ASESORES', 'BALONCESTO COSLADA');
addClub('EUROCOLEGIO CASVI', 'EUROCOLEGIO CASVI');
addClub('LICEO FRANCES', 'LICEO FRANCES');
addClub('TAJAMAR', 'TAJAMAR C.D.');
addClub('XPERIA ZENTRO SAN JORGE', 'ZENTRO C.B.');

module.exports.html = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
  <HEAD>
		<Title>Federaci&#243;n Baloncesto Madrid. Equipos</Title><Link Rel="stylesheet" Type="text/css" HRef="Estilos/Rojo-Rosa1.css"></Link>
		<META http-equiv="Content-Type" content="text/html; charset=windows-1252">
		<meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR">
		<meta content="C#" name="CODE_LANGUAGE">
		<meta content="JavaScript" name="vs_defaultClientScript">
		<meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema">
  </HEAD>
	<body>
		<div id="cabeceraIFramePanel">


<IFrame Src="http://www.fbm.es/Plantillas/Cabecera_2Banners.htm" Width="760" Height="315" FrameBorder="0" Scrolling="No"></IFrame>

</div>
		<TABLE id="Table1" cellSpacing="0" cellPadding="0" width="760" border="0">
			<TR>
				<TD vAlign="top">
					<div id="izquierdaIFramePanel">




</div>
				</TD>
				<TD width="5">&nbsp;</TD>
				<TD vAlign="top" width="100%">
					<form method="post" action="./Equipos.aspx?a=14&amp;c=12083&amp;med=0" id="Form1">
<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKLTY0NzY1OTQ1OA9kFgICBw9kFgYCAQ8PFgQeAWECDh4BcAspfkZFQi5TR0NELlBhc2FyZWxhRkEuQ29udHJvbGVzLk5hdmVnYWNpb24rUGFnaW5hLCBTR0NELlBhc2FyZWxhRkEsIFZlcnNpb249MS4wLjYxOTguMjcwMDgsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49bnVsbAJkFggCAQ9kFgQCAw8QDxYGHg5EYXRhVmFsdWVGaWVsZAUCSWQeDURhdGFUZXh0RmllbGQFBVRleHRvHgtfIURhdGFCb3VuZGdkEBVSC0ZSRUUgQkFTS0VUGUZBU0UgRklOQUwgMcKqIE5BQy4gTUFTQy4cMcKqIERpdmlzacOzbiBOYWMuIE1hc2N1bGluYSBGYXNlIEZpbmFsIDHCqiBEaXZpc2nDs24gRmVtZW5pbhxGSU5BTCBBIENVQVRSTyAxwqogTkFDLiBGRU0uGzHCqiBEaXZpc2nDs24gTmFjLiBGZW1lbmluYR5GQVNFIEZJTkFMIDEgRElWIEFVVCBNQVMgU1IuIEEZMcKqIERpdi4gQXV0LiBNYXNjLiBTci4gQR5GQVNFIEZJTkFMIDEgRElWIEFVVCBNQVMgU1IuIEIZMcKqIERpdi4gQXV0LiBNYXNjLiBTci4gQh1GQVNFIEZJTkFMIDHCqiBESVYuIEFVVC4gRkVNLhIxwqogRGl2LiBBdXQuIEZlbS4TMsKqIERpdiBBdXQgTWFzYyBBMRMywqogRGl2IEF1dCBNYXNjIEEyEjLCqiBEaXYgQXV0IE1hc2MgQhIywqogRGl2IEF1dCBGZW0gQTESMsKqIERpdiBBdXQgRmVtIEEyETLCqiBEaXYgQXV0IEZlbSBCD1N1YiAyMSBNYXNjLiBBMhRDIEVTUCBDTFVCRVMgSlIgTUFTQxtGQVNFIEZJTkFMIEpVTklPUiBNQVNDVUxJTk8PSnVuaW9yIE1hc2MuIEExD0p1bmlvciBNYXNjLiBBMhNDIEVTUCBDTFVCRVMgSlIgRkVNGkZBU0UgRklOQUwgSlVOSU9SIEZFTUVOSU5PDkp1bmlvciBGZW0uIEExDkp1bmlvciBGZW0uIEEyFUMgRVNQIENMVUJFUyBDQUQgTUFTQxtGQVNFIEZJTkFMIENBREVURSBNQVNDVUxJTk8PQ2FkZXRlIE1hc2MuIEExD0NhZGV0ZSBNYXNjLiBBMhRDIEVTUCBDTFVCRVMgQ0FEIEZFTRpGQVNFIEZJTkFMIENBREVURSBGRU1FTklOTw5DYWRldGUgRmVtLiBBMQ5DYWRldGUgRmVtLiBBMhVDIEVTUCBDTFVCRVMgSU5GIE1BU0MdRkFTRSBGSU5BTCBJTkZBTlRJTCBNQVNDVUxJTk8RSW5mYW50aWwgTWFzYy4gQTERSW5mYW50aWwgTWFzYy4gQTIUQyBFU1AgQ0xVQkVTIElORiBGRU0cRkFTRSBGSU5BTCBJTkZBTlRJTCBGRU1FTklOTxBJbmZhbnRpbCBGZW0uIEExEEluZmFudGlsIEZlbS4gQTIRU3ViIDIxIE1hc2MuIEZlZC4VSnVuaW9yIE1hc2MuIEZlZGVyYWRvFEp1bmlvciBGZW0uIEZlZGVyYWRvFURJQSBERUwgRkVERVJBRE8gMjAxNhVDYWRldGUgTWFzYy4gRmVkZXJhZG8UQ2FkZXRlIEZlbS4gRmVkZXJhZG8XSW5mYW50aWwgTWFzYy4gRmVkZXJhZG8WSW5mYW50aWwgRmVtLiBGZWRlcmFkbxdGSU5BTCBQUkVJTkZBTlRJTCBNQVNDLhYzwrogeSA0wrogUFJFSU5GLiBNQVNDFVByZWluZmFudGlsIE1hc2N1bGlubxZGSU5BTCBQUkVJTkZBTlRJTCBGRU0uFjPCuiB5IDTCuiBQUkVJTkYuIEZFTS4UUHJlaW5mYW50aWwgRmVtZW5pbm8RRElBIERFTCBNSU5JIDIwMTYPQWx2IE1hcyAywrphw7FvD0FsdiBGZW0gMsK6YcOxbw9BbHYgTWFzIDHCumHDsW8PQWx2IEZlbSAxwrphw7FvEEJlbmogTWFzIDLCumHDsW8QQmVuaiBNYXMgMcK6YcOxbxBCZW5qIEZlbSAywrphw7FvEEJlbmogRmVtIDHCumHDsW8QTElHQSBKUi4gTkJBLUZFQhtMaWdhIEZlbWVuaW5hIGRlIEJhbG9uY2VzdG8GTC5GLi0yDExJR0EgTEVCIE9STw5MSUdBIExFQiBQTEFUQQhMSUdBIEVCQRxMaWdhIFVuaXZlcnNpdGFyaWEgTWFzY3VsaW5hG0xpZ2EgVW5pdmVyc2l0YXJpYSBGZW1lbmluYRxDRSBTU0FBIE1pbmliYXNrZXQgTWFzY3VsaW5vG0NFIFNTQUEgTWluaWJhc2tldCBGZW1lbmlubxpDRSBTRUxFQy4gQ2FkZXRlIE1hc2N1bGlubxlDRSBTRUxFQy4gQ2FkZXRlIEZlbWVuaW5vHENFIFNFTEVDLiBJbmZhbnRpbCBNYXNjdWxpbm8bQ0UgU0VMRUMuIEluZmFudGlsIEZlbWVuaW5vHFZJIFRvcm5lbyBMZXVjZW1pYSB5IExpbmZvbWETVklJIFRPUk5FTyBMSUdBIEVCQRVSBTEyODg5BTEzMTgwBTEyMDgzBTEzMTcyBTEzMTQ2BTEyMDkyBTEzMTg1BTEyMDk3BTEzMTg2BTEyMDk4BTEzMTgxBTEyMDgyBTEyMTAxBTEyMTAyBTEyMTAzBTEyMTA0BTEyMTA1BTEyMTA2BTEyMTE1BTEzMTM3BTEzMTI0BTEyMDkzBTEyMDk0BTEzMTM4BTEzMTI1BTEyMDk1BTEyMDk2BTEzMTM0BTEzMTQ4BTEyMTEwBTEyMTExBTEzMTMzBTEzMTQ3BTEyMTE2BTEyMTE3BTEzMTM2BTEzMTc5BTEyMTEyBTEyMTEzBTEzMTM1BTEzMTc4BTEyMTE4BTEyMTE5BTEyMTIwBTEyMTAwBTEyMDk5BTEzMTU5BTEyMTIxBTEyMTA4BTEyMTA5BTEyMTA3BTEzMjAyBTEzMjAwBTEyMTIzBTEzMjAxBTEzMTk5BTEyMTI0BTEzMTgyBTEyMTI1BTEyMTI2BTEyMTI3BTEyMTI4BTEyMTI5BTEyMTMwBTEyMTMxBTEyMTMyBTEzMDMyBTEyMDIwBTEyMDE2BTEyMDEwBTEyMDEyBTEyMDE0BTEyNjc5BTEyNjc4BTEyOTk1BTEyOTk0BTEyOTY4BTEyOTY3BTEyOTY2BTEyOTY1BTEyOTAyBTEyNTY4FCsDUmdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2cWAQICZAIHDxAPFgYfAgUCSWQfAwUFVGV4dG8fBGdkEBUMCTIwMTYvMjAxNwkyMDE1LzIwMTYJMjAxNC8yMDE1CTIwMTMvMjAxNAkyMDEyLzIwMTMJMjAxMS8yMDEyCTIwMTAvMjAxMQkyMDA5LzIwMTAJMjAwOC8yMDA5CTIwMDcvMjAwOAkyMDA2LzIwMDcJMjAwNS8yMDA2FQwEMjAxNgQyMDE1BDIwMTQEMjAxMwQyMDEyBDIwMTEEMjAxMAQyMDA5BDIwMDgEMjAwNwQyMDA2BDIwMDUUKwMMZ2dnZ2dnZ2dnZ2dnFgECAWQCAw88KwAJAQAPFgYeDVNlbGVjdGVkSW5kZXgCAh4IRGF0YUtleXMWAB4LXyFJdGVtQ291bnQCBGQWCGYPZBYCAgEPDxYEHgRUZXh0BRtSZXN1bHRhZG9zIHkgQ2xhc2lmaWNhY2nDs24eC05hdmlnYXRlVXJsBSUuLi9SZXN1bHRhZG9zLmFzcHg/YT0xNCZjPTEyMDgzJm1lZD0wZGQCAg9kFgICAQ8PFgQfCAULQ2FsZW5kYXJpb3MfCQUmLi4vQ2FsZW5kYXJpb3MuYXNweD9hPTE0JmM9MTIwODMmbWVkPTBkZAIED2QWAgIBDw8WAh8IBQdFcXVpcG9zZGQCBg9kFgICAQ8PFgQfCAUSUHLDs3hpbW9zIFBhcnRpZG9zHwkFIy4uL1BhcnRpZG9zLmFzcHg/YT0xNCZjPTEyMDgzJm1lZD0wZGQCBQ8PFgIfCAUHRXF1aXBvc2RkAgcPDxYCHwgFJjIwMTUvMjAxNiAxwqogRGl2aXNpw7NuIE5hYy4gTWFzY3VsaW5hZGQCAw8QDxYGHwIFAklkHwMFBVRleHRvHwRnZBAVBhMgUGxheS1PZmYgMS80IEZpbmFsEyBQbGF5LU9mZiAxLzggRmluYWwbIEZhc2U6IERlc2NlbnNvIC8gR3J1cG86IEQxGyBGYXNlOiBEZXNjZW5zbyAvIEdydXBvOiBEMhZGYXNlOiAxIC8gR3J1cG86IEltcGFyFEZhc2U6IDEgLyBHcnVwbzogUGFyFQYFNTQxMDEFNTQxMDAFNTQxMDIFNTQxMDMFNDk3NTkFNDk3NjAUKwMGZ2dnZ2dnFgECAWQCBQ88KwALAQAPFgoeEEN1cnJlbnRQYWdlSW5kZXgCAR8GFgAfBwIGHglQYWdlQ291bnQCAh4VXyFEYXRhU291cmNlSXRlbUNvdW50AhBkFgJmD2QWDAICD2QWAmYPZBYCAjQPFQEbZXF1aXBvdGVjbmljb0BjYmxhc3JvemFzLmVzZAIDD2QWAmYPZBYCAjQPFQESaW5mb0BjYmNvc2xhZGEubmV0ZAIED2QWAmYPZBYCAjQPFQERamFzcGU2OEBnbWFpbC5jb21kAgUPZBYCZg9kFgICNA8VAR9jb29yZGluYWRvckBiYWxvbmNlc3RvbGljZW8uY29tZAIGD2QWAmYPZBYCAjQPFQEUbGVsZWphbGRlQHRhamFtYXIuZXNkAgcPZBYCZg9kFgICNA8VARdmZXJuYW5kb3IwN0Bob3RtYWlsLmNvbWRkP2RZ/TmjsxBWINPGbn5TYOERIeUeIik3j2338jt/Zs4=" />
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

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="626C361A" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="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" />
</div>
						<TABLE id="Table2" cellSpacing="0" cellPadding="0" width="100%" border="0">
							<TR>
								<TD>
<TABLE class="TablaNavegacion" id="Table3" cellSpacing="0" cellPadding="0" border="0">
	<div id="controlNavegacion_navegacionPanel">

		<TBODY>
			<TR>
				<TD>
					<span id="controlNavegacion_Label1" class="Etiquetas">Categoría:</span></TD>
				<TD>
					<select name="controlNavegacion:categoriasDropDownList" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;controlNavegacion$categoriasDropDownList\&#39;,\&#39;\&#39;)&#39;, 0)" language="javascript" id="controlNavegacion_categoriasDropDownList" class="ControlSeleccion">
		<option value="12889">FREE BASKET</option>
		<option value="13180">FASE FINAL 1&#170; NAC. MASC.</option>
		<option selected="selected" value="12083">1&#170; Divisi&#243;n Nac. Masculina</option>
		<option value="13172">Fase Final 1&#170; Divisi&#243;n Femenin</option>
		<option value="13146">FINAL A CUATRO 1&#170; NAC. FEM.</option>
		<option value="12092">1&#170; Divisi&#243;n Nac. Femenina</option>
		<option value="13185">FASE FINAL 1 DIV AUT MAS SR. A</option>
		<option value="12097">1&#170; Div. Aut. Masc. Sr. A</option>
		<option value="13186">FASE FINAL 1 DIV AUT MAS SR. B</option>
		<option value="12098">1&#170; Div. Aut. Masc. Sr. B</option>
		<option value="13181">FASE FINAL 1&#170; DIV. AUT. FEM.</option>
		<option value="12082">1&#170; Div. Aut. Fem.</option>
		<option value="12101">2&#170; Div Aut Masc A1</option>
		<option value="12102">2&#170; Div Aut Masc A2</option>
		<option value="12103">2&#170; Div Aut Masc B</option>
		<option value="12104">2&#170; Div Aut Fem A1</option>
		<option value="12105">2&#170; Div Aut Fem A2</option>
		<option value="12106">2&#170; Div Aut Fem B</option>
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
		<option value="13200">3&#186; y 4&#186; PREINF. MASC</option>
		<option value="12123">Preinfantil Masculino</option>
		<option value="13201">FINAL PREINFANTIL FEM.</option>
		<option value="13199">3&#186; y 4&#186; PREINF. FEM.</option>
		<option value="12124">Preinfantil Femenino</option>
		<option value="13182">DIA DEL MINI 2016</option>
		<option value="12125">Alv Mas 2&#186;a&#241;o</option>
		<option value="12126">Alv Fem 2&#186;a&#241;o</option>
		<option value="12127">Alv Mas 1&#186;a&#241;o</option>
		<option value="12128">Alv Fem 1&#186;a&#241;o</option>
		<option value="12129">Benj Mas 2&#186;a&#241;o</option>
		<option value="12130">Benj Mas 1&#186;a&#241;o</option>
		<option value="12131">Benj Fem 2&#186;a&#241;o</option>
		<option value="12132">Benj Fem 1&#186;a&#241;o</option>
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

	</select></TD>
				<TD width="100%"></TD>
				<TD>
					<span id="controlNavegacion_Label2" class="Etiquetas">Temporada:</span></TD>
				<TD>
					<select name="controlNavegacion:temporadasDropDownList" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;controlNavegacion$temporadasDropDownList\&#39;,\&#39;\&#39;)&#39;, 0)" language="javascript" id="controlNavegacion_temporadasDropDownList" class="ControlSeleccion">
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

	</select></TD>
			</TR>

</div>
	<TR>
		<TD colSpan="5"><table id="controlNavegacion_navegacionDataList" cellspacing="0" style="border-collapse:collapse;">
	<tr>
		<td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_0" href="Resultados.aspx?a=14&amp;c=12083&amp;med=0">Resultados y Clasificación</a>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_0" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_1" href="Calendarios.aspx?a=14&amp;c=12083&amp;med=0">Calendarios</a>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_1" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label3_2" class="EnlaceNavegacionSeleccionado">Equipos</span>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_2" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_3" href="Partidos.aspx?a=14&amp;c=12083&amp;med=0">Próximos Partidos</a>
				</td><td></td>
	</tr>
</table></TD>
	</TR>
	</TBODY>
</TABLE>
<TABLE class="TablaTitulo" id="TablaTitulo">
	<TR>
		<TD><span id="controlNavegacion_tituloLabel" class="Titulo">Equipos</span></TD>
	</TR>
</TABLE>
<TABLE class="TablaSubTitulo" id="TablaSubTitulo">
	<tr>
		<td>
			<span id="controlNavegacion_subTituloLabel" class="SubTitulo">2015/2016 1ª División Nac. Masculina</span></td>
	</tr>
</TABLE>
</TD>
							</TR>
							<TR>
								<TD colspan="3"><BR>
									<select name="gruposDropDownList" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;gruposDropDownList\&#39;,\&#39;\&#39;)&#39;, 0)" language="javascript" id="gruposDropDownList" class="ControlSeleccion">
	<option value="54101"> Play-Off 1/4 Final</option>
	<option selected="selected" value="54100"> Play-Off 1/8 Final</option>
	<option value="54102"> Fase: Descenso / Grupo: D1</option>
	<option value="54103"> Fase: Descenso / Grupo: D2</option>
	<option value="49759">Fase: 1 / Grupo: Impar</option>
	<option value="49760">Fase: 1 / Grupo: Par</option>

</select><BR>
									<table cellspacing="0" id="equiposDataGrid" style="width:100%;border-collapse:collapse;">
	<tr class="TablaDatosEnlaceNavegacion" align="right">
		<td><a href="javascript:__doPostBack(&#39;equiposDataGrid$_ctl1$_ctl0&#39;,&#39;&#39;)">&lt; Anterior</a>&nbsp;<span>Siguiente &gt;</span></td>
	</tr><tr>
		<td>
													<TABLE class="TablaCabeceraSeccion" id="Table33">
														<TR>
															<TD>
																<span id="equiposDataGrid_equipoLabel_0" class="CabeceraSeccion">C.B. LAS ROZAS</span></TD>
														</TR>
													</TABLE>
													<TABLE class="TablaDatos" id="Table4" cellSpacing="0" cellPadding="3" width="100%" border="0">
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_0">Club:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" width="100%" colSpan="3">
																<span id="equiposDataGrid_Label2_0">LAS ROZAS C.B.</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_0">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_0">COMUNIDAD DE LA RIOJA, 1</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_0">Población:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_0">Rozas de Madrid, Las</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_0">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_0">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_0">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_0">609577214</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_0">Titular:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_0">ROJA</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_0">Reserva:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_0">BLANCA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_0">Campo:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" colSpan="3">
																<span id="equiposDataGrid_Label16_0">4537-ALFREDO ESPINIELLA, PABELLON</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_0">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_0">COMUNIDAD DE LA RIOJA, 4</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_0">Población:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_0">Rozas de Madrid, Las</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_0">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_0">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_0">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_0">916363463</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_0">Email:</span></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
								<a href='mailto:equipotecnico@cblasrozas.es'>
                                                                <span id="equiposDataGrid_Label30_0">equipotecnico@cblasrozas.es</span></a></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_0">Fax. Equipo:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_0">916363463</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label25_0">Hora juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_0">20:15</span></TD>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label27_0">Día de juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_0">Sábado    </span></TD>
														</TR>
													</TABLE>
													<BR>
												</td>
	</tr><tr>
		<td>
													<TABLE class="TablaCabeceraSeccion" id="Table33">
														<TR>
															<TD>
																<span id="equiposDataGrid_equipoLabel_1" class="CabeceraSeccion">COSLADA C.B. PLURAL ASESORES</span></TD>
														</TR>
													</TABLE>
													<TABLE class="TablaDatos" id="Table4" cellSpacing="0" cellPadding="3" width="100%" border="0">
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_1">Club:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" width="100%" colSpan="3">
																<span id="equiposDataGrid_Label2_1">BALONCESTO COSLADA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_1">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_1">MOSCU, S/N</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_1">Población:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_1">Coslada</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_1">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_1">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_1">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_1">640580004</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_1">Titular:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_1">ROJA</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_1">Reserva:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_1">BLANCA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_1">Campo:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" colSpan="3">
																<span id="equiposDataGrid_Label16_1">1515-EL PLANTIO, PABELLON</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_1">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_1">AVDA. EL PLANTIO, S/N</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_1">Población:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_1">Coslada</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_1">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_1">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_1">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_1"></span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_1">Email:</span></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
								<a href='mailto:info@cbcoslada.net'>
                                                                <span id="equiposDataGrid_Label30_1">info@cbcoslada.net</span></a></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_1">Fax. Equipo:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_1"></span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label25_1">Hora juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_1">19:00</span></TD>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label27_1">Día de juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_1">Sábado    </span></TD>
														</TR>
													</TABLE>
													<BR>
												</td>
	</tr><tr>
		<td>
													<TABLE class="TablaCabeceraSeccion" id="Table33">
														<TR>
															<TD>
																<span id="equiposDataGrid_equipoLabel_2" class="CabeceraSeccion">EUROCOLEGIO CASVI</span></TD>
														</TR>
													</TABLE>
													<TABLE class="TablaDatos" id="Table4" cellSpacing="0" cellPadding="3" width="100%" border="0">
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_2">Club:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" width="100%" colSpan="3">
																<span id="equiposDataGrid_Label2_2">EUROCOLEGIO CASVI</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_2">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_2">AVDA. CASTILLA, 27</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_2">Población:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_2">Villaviciosa de Odón</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_2">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_2">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_2">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_2">916162218</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_2">Titular:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_2">AZUL</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_2">Reserva:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_2">BLANCA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_2">Campo:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" colSpan="3">
																<span id="equiposDataGrid_Label16_2">3686-EUROCOLEGIO CASVI</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_2">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_2">AVDA. CASTILLA, 27</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_2">Población:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_2">Villaviciosa de Odón</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_2">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_2">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_2">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_2">916162216</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_2">Email:</span></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
								<a href='mailto:jaspe68@gmail.com'>
                                                                <span id="equiposDataGrid_Label30_2">jaspe68@gmail.com</span></a></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_2">Fax. Equipo:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_2"></span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label25_2">Hora juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_2">18:00</span></TD>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label27_2">Día de juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_2">Domingo   </span></TD>
														</TR>
													</TABLE>
													<BR>
												</td>
	</tr><tr>
		<td>
													<TABLE class="TablaCabeceraSeccion" id="Table33">
														<TR>
															<TD>
																<span id="equiposDataGrid_equipoLabel_3" class="CabeceraSeccion">LICEO FRANCES</span></TD>
														</TR>
													</TABLE>
													<TABLE class="TablaDatos" id="Table4" cellSpacing="0" cellPadding="3" width="100%" border="0">
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_3">Club:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" width="100%" colSpan="3">
																<span id="equiposDataGrid_Label2_3">LICEO FRANCES</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_3">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_3">PLAZA DEL LICEO, 1</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_3">Población:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_3">Madrid</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_3">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_3">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_3">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_3">610853531</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_3">Titular:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_3">AZUL</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_3">Reserva:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_3">BLANCA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_3">Campo:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" colSpan="3">
																<span id="equiposDataGrid_Label16_3">1106-LICEO FRANCES, COLEGIO</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_3">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_3">AVDA. DE LOS MADROÑOS FRENTE Nº 42</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_3">Población:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_3">Madrid</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_3">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_3">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_3">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_3">610853531</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_3">Email:</span></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
								<a href='mailto:coordinador@baloncestoliceo.com'>
                                                                <span id="equiposDataGrid_Label30_3">coordinador@baloncestoliceo.com</span></a></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_3">Fax. Equipo:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_3"></span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label25_3">Hora juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_3">20:00</span></TD>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label27_3">Día de juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_3">Sábado    </span></TD>
														</TR>
													</TABLE>
													<BR>
												</td>
	</tr><tr>
		<td>
													<TABLE class="TablaCabeceraSeccion" id="Table33">
														<TR>
															<TD>
																<span id="equiposDataGrid_equipoLabel_4" class="CabeceraSeccion">TAJAMAR</span></TD>
														</TR>
													</TABLE>
													<TABLE class="TablaDatos" id="Table4" cellSpacing="0" cellPadding="3" width="100%" border="0">
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_4">Club:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" width="100%" colSpan="3">
																<span id="equiposDataGrid_Label2_4">TAJAMAR C.D.</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_4">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_4">PIO FELIPE, 12</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_4">Población:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_4">Madrid</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_4">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_4">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_4">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_4">676447802</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_4">Titular:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_4">ROJA</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_4">Reserva:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_4">BLANCA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_4">Campo:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" colSpan="3">
																<span id="equiposDataGrid_Label16_4">2046-TAJAMAR, COLEGIO</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_4">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_4">PIO FELIPE, 12</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_4">Población:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_4">Madrid</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_4">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_4">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_4">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_4">914772500</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_4">Email:</span></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
								<a href='mailto:lelejalde@tajamar.es'>
                                                                <span id="equiposDataGrid_Label30_4">lelejalde@tajamar.es</span></a></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_4">Fax. Equipo:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_4">914772036</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label25_4">Hora juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_4">18:15</span></TD>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label27_4">Día de juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_4">Sábado    </span></TD>
														</TR>
													</TABLE>
													<BR>
												</td>
	</tr><tr>
		<td>
													<TABLE class="TablaCabeceraSeccion" id="Table33">
														<TR>
															<TD>
																<span id="equiposDataGrid_equipoLabel_5" class="CabeceraSeccion">XPERIA ZENTRO SAN JORGE</span></TD>
														</TR>
													</TABLE>
													<TABLE class="TablaDatos" id="Table4" cellSpacing="0" cellPadding="3" width="100%" border="0">
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label1_5">Club:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" width="100%" colSpan="3">
																<span id="equiposDataGrid_Label2_5">ZENTRO C.B.</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label3_5">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label4_5">.</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label5_5">Población:</span></TD>
															<TD class="TablaDatosFilasPares" width="50%">
																<span id="equiposDataGrid_Label6_5">Madrid</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label7_5">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label8_5">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label9_5">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label10_5">637266543</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label11_5">Titular:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label12_5">ROJA</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label13_5">Reserva:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label14_5">BLANCA</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label15_5">Campo:</span></TD>
															<TD class="TablaDatosFilasImparesResaltada" colSpan="3">
																<span id="equiposDataGrid_Label16_5">1097-ANTONIO DIAZ MIGUEL, PDVO. MPAL.</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label17_5">Dirección:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label18_5">JOAQUIN DICENTA, 1</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label19_5">Población:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label20_5">Madrid</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label21_5">Provincia:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label22_5">Madrid</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label23_5">Teléfono:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label24_5">913145437</span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasPares">
                                                                <span id="equiposDataGrid_Label29_5">Email:</span></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
								<a href='mailto:fernandor07@hotmail.com'>
                                                                <span id="equiposDataGrid_Label30_5">fernandor07@hotmail.com</span></a></TD>
                                                            </TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label31_5">Fax. Equipo:</span></TD>
															<TD class="TablaDatosFilasPares">
																<span id="equiposDataGrid_Label32_5"></span></TD>
														</TR>
														<TR>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label25_5">Hora juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label26_5">18:00</span></TD>
															<TD class="TablaDatosFilasImpares" noWrap>
																<span id="equiposDataGrid_Label27_5">Día de juego:</span></TD>
															<TD class="TablaDatosFilasImpares">
																<span id="equiposDataGrid_Label28_5">Domingo   </span></TD>
														</TR>
													</TABLE>
													<BR>
												</td>
	</tr><tr class="TablaDatosEnlaceNavegacion" align="right">
		<td><a href="javascript:__doPostBack(&#39;equiposDataGrid$_ctl10$_ctl0&#39;,&#39;&#39;)">&lt; Anterior</a>&nbsp;<span>Siguiente &gt;</span></td>
	</tr>
</table><BR>
								</TD>
							</TR>
						</TABLE>
						<div id="piePaginaPanel">


<table cellSpacing="0" cellPadding="3" width="100%" border="0" class="TablaCabeceraSeccion">
	<tr>
		<td vAlign="top" align="right" width="100%"><A href="javascript:window.print();"><IMG height="13" alt="Imprímelo" src="Imagenes/Iconos/img_print.gif" width="78" border="0"></A></td>
	</tr>
</table>


</div>
					</form>
				</TD>
				<TD width="5">&nbsp;</TD>
				<TD vAlign="top">
					<div id="derechaIFramePanel">




</div>
				</TD>
			</TR>
		</TABLE>
		<div id="pieIFramePanel">


<IFrame Src="http://www.fbm.es/Plantillas/Pie_2.html" Width="760" Height="250" FrameBorder="0" Scrolling="No"></IFrame>

</div>
	</body>
</HTML>
`;
