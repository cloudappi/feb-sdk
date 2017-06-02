'use strict';

module.exports = {};
module.exports.seasons = [];

function addSeason(id) {
  const endingYear = id + 1;
  const title = id + '/' + endingYear;
  module.exports.seasons.push({
    id, title
  });
}

addSeason(2016);
addSeason(2015);
addSeason(2014);
addSeason(2013);
addSeason(2012);
addSeason(2011);
addSeason(2010);
addSeason(2009);
addSeason(2008);
addSeason(2007);
addSeason(2006);
addSeason(2005);

module.exports.categories = [];

function addCategory(id, title) {
  module.exports.categories.push({
    id, title
  });
}

addCategory(14308, 'C ESP CLUBES CAD MASC');
addCategory(14307, 'C ESP CLUBES CAD FEM');
addCategory(14365, 'FASE FINAL SUB 21 MASC');
addCategory(14358, 'FASE FINAL INFANTIL MASCULINO');
addCategory(14362, 'FASE FINAL INFANTIL FEMENINO');
addCategory(13212, 'LIGA EBA');
addCategory(14299, 'Fase Final 1ª División Femenin');
addCategory(14359, 'FASE FINAL 1ª DIV. AUT. FEM.');
addCategory(13204, 'LIGA LEB ORO');
addCategory(13206, 'LIGA LEB PLATA');
addCategory(13242, '1ª División Nac. Masculina');
addCategory(14317, 'FINAL A CUATRO NAC. FEM.');
addCategory(13244, '1ª División Nac. Femenina');
addCategory(13245, '1ª Div. Aut. Masc. Sr. A');
addCategory(13246, '1ª Div. Aut. Masc. Sr. B');
addCategory(13293, '1ª Div. Aut. Fem.');
addCategory(13247, '2ª Div Aut Masc A1');
addCategory(13294, '2ª Div Aut Fem A1');
addCategory(13248, '2ª Div Aut Masc A2');
addCategory(13295, '2ª Div Aut Fem A2');
addCategory(13249, '2ª Div Aut Masc B');
addCategory(13296, '2ª Div Aut Fem B');
addCategory(13250, 'Sub 21 Masc. A1');
addCategory(13251, 'Sub 21 Masc. A2');
addCategory(13284, 'Sub 21 Masc. Fed.');
addCategory(14310, 'C ESP CLUBES JR MASC');
addCategory(14294, 'FASE FINAL JUNIOR MASCULINO');
addCategory(13252, 'Junior Masc. A1');
addCategory(13260, 'Junior Masc. A2');
addCategory(13261, 'Junior Masc. A3');
addCategory(13285, 'Junior Masc. Federado');
addCategory(14309, 'C ESP CLUBES JR FEM');
addCategory(14295, 'FASE FINAL JUNIOR FEMENINO');
addCategory(13297, 'Junior Fem. A1');
addCategory(13298, 'Junior Fem. A2');
addCategory(13299, 'Junior Fem. A3');
addCategory(13306, 'Junior Fem. Federado');
addCategory(14318, 'FASE FINAL CADETE MASCULINO');
addCategory(13265, 'Cadete Masc. A1');
addCategory(13270, 'Cadete Masc. A2');
addCategory(13276, 'Cadete Masc. A3');
addCategory(13286, 'Cadete Masc. Federado');
addCategory(14344, 'FASE FINAL CADETE FEMENINO');
addCategory(13300, 'Cadete Fem. A1');
addCategory(13301, 'Cadete Fem. A2');
addCategory(13302, 'Cadete Fem. A3');
addCategory(13307, 'Cadete Fem. Federado');
addCategory(13280, 'Infantil Masc. A1');
addCategory(13282, 'Infantil Masc. A2');
addCategory(13283, 'Infantil Masc. A3');
addCategory(13287, 'Infantil Masc. Federado');
addCategory(13303, 'Infantil Fem. A1');
addCategory(13304, 'Infantil Fem. A2');
addCategory(13305, 'Infantil Fem. A3');
addCategory(13308, 'Infantil Fem. Federado');
addCategory(13288, 'Preinfantil Masculino');
addCategory(13309, 'Preinfantil Femenino');
addCategory(13289, 'Alv Mas 2ºaño');
addCategory(13310, 'Alv Fem 2ºaño');
addCategory(13290, 'Alv Mas 1ºaño');
addCategory(13311, 'Alv Fem 1ºaño');
addCategory(13291, 'Benj Mas 2ºaño');
addCategory(13312, 'Benj Fem 2ºaño');
addCategory(13292, 'Benj Mas 1ºaño');
addCategory(13313, 'Benj Fem 1ºaño');
addCategory(14125, 'C.ESCOLARES JUV. MASC. ABIERTA');
addCategory(14124, 'C.ESCOLARES JUVENIL FEMENINO');
addCategory(14121, 'C.ESCOLARES CAD. MASC. ABIERTA');
addCategory(14120, 'C.ESCOLARES CADETE FEMENINO');
addCategory(14123, 'C.ESCOLARES INF. MASC. ABIERTA');
addCategory(14122, 'C.ESCOLARES INFANTIL FEMENINO');
addCategory(13208, 'Liga Femenina 1');
addCategory(13210, 'L.F.-2');
addCategory(13330, 'Liga Universitaria Masculina');
addCategory(14199, 'CE SSAA Mini Mas.');
addCategory(14198, 'CE SSAA Mini Fem.');
addCategory(14149, 'CE SSAA Cadete Mas.');
addCategory(14148, 'CE SSAA Cadete Fem.');
addCategory(14151, 'CE SSAA Infantil Mas.');
addCategory(14150, 'CE SSAA Infantil Fem.');
addCategory(13331, 'Liga Universitaria Femenina');
addCategory(14213, 'SUPERLIGA DIA');
addCategory(14075, 'VII Torneo Leucemia y Linfoma');
addCategory(14024, 'PREVIA MINICOPA');
addCategory(13785, 'III TORNEO L.F.-2');
addCategory(13596, 'VIII TORNEO LIGA EBA');

module.exports.securityHeaders = {
  __VIEWSTATE: '/wEPDwULLTIwMjk5MzYyNTEPZBYCAgcPZBYMAgEPDxYEHgFhAg4eAXALKX5GRUIuU0dDRC5QYXNhcmVsYUZBLkNvbnRyb2xlcy5OYXZlZ2FjaW9uK1BhZ2luYSwgU0dDRC5QYXNhcmVsYUZBLCBWZXJzaW9uPTEuMC42MTk4LjI3MDA4LCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGwAZBYIAgEPZBYEAgMPEA8WBh4ORGF0YVZhbHVlRmllbGQFAklkHg1EYXRhVGV4dEZpZWxkBQVUZXh0bx4LXyFEYXRhQm91bmRnZBAVVhVDIEVTUCBDTFVCRVMgQ0FEIE1BU0MUQyBFU1AgQ0xVQkVTIENBRCBGRU0WRkFTRSBGSU5BTCBTVUIgMjEgTUFTQx1GQVNFIEZJTkFMIElORkFOVElMIE1BU0NVTElOTxxGQVNFIEZJTkFMIElORkFOVElMIEZFTUVOSU5PCExJR0EgRUJBIEZhc2UgRmluYWwgMcKqIERpdmlzacOzbiBGZW1lbmluHUZBU0UgRklOQUwgMcKqIERJVi4gQVVULiBGRU0uDExJR0EgTEVCIE9STw5MSUdBIExFQiBQTEFUQRwxwqogRGl2aXNpw7NuIE5hYy4gTWFzY3VsaW5hGEZJTkFMIEEgQ1VBVFJPIE5BQy4gRkVNLhsxwqogRGl2aXNpw7NuIE5hYy4gRmVtZW5pbmEZMcKqIERpdi4gQXV0LiBNYXNjLiBTci4gQRkxwqogRGl2LiBBdXQuIE1hc2MuIFNyLiBCEjHCqiBEaXYuIEF1dC4gRmVtLhMywqogRGl2IEF1dCBNYXNjIEExEjLCqiBEaXYgQXV0IEZlbSBBMRMywqogRGl2IEF1dCBNYXNjIEEyEjLCqiBEaXYgQXV0IEZlbSBBMhIywqogRGl2IEF1dCBNYXNjIEIRMsKqIERpdiBBdXQgRmVtIEIPU3ViIDIxIE1hc2MuIEExD1N1YiAyMSBNYXNjLiBBMhFTdWIgMjEgTWFzYy4gRmVkLhRDIEVTUCBDTFVCRVMgSlIgTUFTQxtGQVNFIEZJTkFMIEpVTklPUiBNQVNDVUxJTk8PSnVuaW9yIE1hc2MuIEExD0p1bmlvciBNYXNjLiBBMg9KdW5pb3IgTWFzYy4gQTMVSnVuaW9yIE1hc2MuIEZlZGVyYWRvE0MgRVNQIENMVUJFUyBKUiBGRU0aRkFTRSBGSU5BTCBKVU5JT1IgRkVNRU5JTk8OSnVuaW9yIEZlbS4gQTEOSnVuaW9yIEZlbS4gQTIOSnVuaW9yIEZlbS4gQTMUSnVuaW9yIEZlbS4gRmVkZXJhZG8bRkFTRSBGSU5BTCBDQURFVEUgTUFTQ1VMSU5PD0NhZGV0ZSBNYXNjLiBBMQ9DYWRldGUgTWFzYy4gQTIPQ2FkZXRlIE1hc2MuIEEzFUNhZGV0ZSBNYXNjLiBGZWRlcmFkbxpGQVNFIEZJTkFMIENBREVURSBGRU1FTklOTw5DYWRldGUgRmVtLiBBMQ5DYWRldGUgRmVtLiBBMg5DYWRldGUgRmVtLiBBMxRDYWRldGUgRmVtLiBGZWRlcmFkbxFJbmZhbnRpbCBNYXNjLiBBMRFJbmZhbnRpbCBNYXNjLiBBMhFJbmZhbnRpbCBNYXNjLiBBMxdJbmZhbnRpbCBNYXNjLiBGZWRlcmFkbxBJbmZhbnRpbCBGZW0uIEExEEluZmFudGlsIEZlbS4gQTIQSW5mYW50aWwgRmVtLiBBMxZJbmZhbnRpbCBGZW0uIEZlZGVyYWRvFVByZWluZmFudGlsIE1hc2N1bGlubxRQcmVpbmZhbnRpbCBGZW1lbmlubw9BbHYgTWFzIDLCumHDsW8PQWx2IEZlbSAywrphw7FvD0FsdiBNYXMgMcK6YcOxbw9BbHYgRmVtIDHCumHDsW8QQmVuaiBNYXMgMsK6YcOxbxBCZW5qIEZlbSAywrphw7FvEEJlbmogTWFzIDHCumHDsW8QQmVuaiBGZW0gMcK6YcOxbx5DLkVTQ09MQVJFUyBKVVYuIE1BU0MuIEFCSUVSVEEcQy5FU0NPTEFSRVMgSlVWRU5JTCBGRU1FTklOTx5DLkVTQ09MQVJFUyBDQUQuIE1BU0MuIEFCSUVSVEEbQy5FU0NPTEFSRVMgQ0FERVRFIEZFTUVOSU5PHkMuRVNDT0xBUkVTIElORi4gTUFTQy4gQUJJRVJUQR1DLkVTQ09MQVJFUyBJTkZBTlRJTCBGRU1FTklOTw9MaWdhIEZlbWVuaW5hIDEGTC5GLi0yHExpZ2EgVW5pdmVyc2l0YXJpYSBNYXNjdWxpbmERQ0UgU1NBQSBNaW5pIE1hcy4RQ0UgU1NBQSBN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',
  __VIEWSTATEGENERATOR: '28F5A6FB',
  __EVENTVALIDATION: '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',
  __EVENTARGUMENT: '',
  __EVENTTARGET: '',
  __LASTFOCUS: ''
};

module.exports.groups = [];

function addGroup(id, title) {
  module.exports.groups.push({
    id, title
  });
}

addGroup(62277, 'PLAY OFF 1/8 Final');
addGroup(62281, 'PRIMERA FASE A');
addGroup(62282, 'PRIMERA FASE B');
addGroup(62283, 'PRIMERA FASE C');
addGroup(62502, 'PRIMERA FASE D');
addGroup(62285, 'PRIMERA FASE E');
addGroup(62286, 'PRIMERA FASE F');
addGroup(62287, 'PRIMERA FASE G');
addGroup(62288, 'PRIMERA FASE H');

module.exports.rounds = [{
  id: 492381,
  title: 'Jornada 1 24/05/2017'
}];

module.exports.games = {
};

module.exports.html = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<Title>Federaci&#243;n Baloncesto Madrid. Resultados y Clasificaci&#243;n</Title><Link Rel="stylesheet" Type="text/css" HRef="Estilos/Rojo-Rosa1.css"></Link>
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
				<TD vAlign="top"><div id="izquierdaIFramePanel">




</div></TD>
				<TD width="5">&nbsp;</TD>
				<TD vAlign="top" width="100%">
					<form method="post" action="./Resultados.aspx?a=14" id="Form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwULLTIwMjk5MzYyNTEPZBYCAgcPZBYMAgEPDxYEHgFhAg4eAXALKX5GRUIuU0dDRC5QYXNhcmVsYUZBLkNvbnRyb2xlcy5OYXZlZ2FjaW9uK1BhZ2luYSwgU0dDRC5QYXNhcmVsYUZBLCBWZXJzaW9uPTEuMC42MTk4LjI3MDA4LCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGwAZBYIAgEPZBYEAgMPEA8WBh4ORGF0YVZhbHVlRmllbGQFAklkHg1EYXRhVGV4dEZpZWxkBQVUZXh0bx4LXyFEYXRhQm91bmRnZBAVVhVDIEVTUCBDTFVCRVMgQ0FEIE1BU0MUQyBFU1AgQ0xVQkVTIENBRCBGRU0WRkFTRSBGSU5BTCBTVUIgMjEgTUFTQx1GQVNFIEZJTkFMIElORkFOVElMIE1BU0NVTElOTxxGQVNFIEZJTkFMIElORkFOVElMIEZFTUVOSU5PCExJR0EgRUJBIEZhc2UgRmluYWwgMcKqIERpdmlzacOzbiBGZW1lbmluHUZBU0UgRklOQUwgMcKqIERJVi4gQVVULiBGRU0uDExJR0EgTEVCIE9STw5MSUdBIExFQiBQTEFUQRwxwqogRGl2aXNpw7NuIE5hYy4gTWFzY3VsaW5hGEZJTkFMIEEgQ1VBVFJPIE5BQy4gRkVNLhsxwqogRGl2aXNpw7NuIE5hYy4gRmVtZW5pbmEZMcKqIERpdi4gQXV0LiBNYXNjLiBTci4gQRkxwqogRGl2LiBBdXQuIE1hc2MuIFNyLiBCEjHCqiBEaXYuIEF1dC4gRmVtLhMywqogRGl2IEF1dCBNYXNjIEExEjLCqiBEaXYgQXV0IEZlbSBBMRMywqogRGl2IEF1dCBNYXNjIEEyEjLCqiBEaXYgQXV0IEZlbSBBMhIywqogRGl2IEF1dCBNYXNjIEIRMsKqIERpdiBBdXQgRmVtIEIPU3ViIDIxIE1hc2MuIEExD1N1YiAyMSBNYXNjLiBBMhFTdWIgMjEgTWFzYy4gRmVkLhRDIEVTUCBDTFVCRVMgSlIgTUFTQxtGQVNFIEZJTkFMIEpVTklPUiBNQVNDVUxJTk8PSnVuaW9yIE1hc2MuIEExD0p1bmlvciBNYXNjLiBBMg9KdW5pb3IgTWFzYy4gQTMVSnVuaW9yIE1hc2MuIEZlZGVyYWRvE0MgRVNQIENMVUJFUyBKUiBGRU0aRkFTRSBGSU5BTCBKVU5JT1IgRkVNRU5JTk8OSnVuaW9yIEZlbS4gQTEOSnVuaW9yIEZlbS4gQTIOSnVuaW9yIEZlbS4gQTMUSnVuaW9yIEZlbS4gRmVkZXJhZG8bRkFTRSBGSU5BTCBDQURFVEUgTUFTQ1VMSU5PD0NhZGV0ZSBNYXNjLiBBMQ9DYWRldGUgTWFzYy4gQTIPQ2FkZXRlIE1hc2MuIEEzFUNhZGV0ZSBNYXNjLiBGZWRlcmFkbxpGQVNFIEZJTkFMIENBREVURSBGRU1FTklOTw5DYWRldGUgRmVtLiBBMQ5DYWRldGUgRmVtLiBBMg5DYWRldGUgRmVtLiBBMxRDYWRldGUgRmVtLiBGZWRlcmFkbxFJbmZhbnRpbCBNYXNjLiBBMRFJbmZhbnRpbCBNYXNjLiBBMhFJbmZhbnRpbCBNYXNjLiBBMxdJbmZhbnRpbCBNYXNjLiBGZWRlcmFkbxBJbmZhbnRpbCBGZW0uIEExEEluZmFudGlsIEZlbS4gQTIQSW5mYW50aWwgRmVtLiBBMxZJbmZhbnRpbCBGZW0uIEZlZGVyYWRvFVByZWluZmFudGlsIE1hc2N1bGlubxRQcmVpbmZhbnRpbCBGZW1lbmlubw9BbHYgTWFzIDLCumHDsW8PQWx2IEZlbSAywrphw7FvD0FsdiBNYXMgMcK6YcOxbw9BbHYgRmVtIDHCumHDsW8QQmVuaiBNYXMgMsK6YcOxbxBCZW5qIEZlbSAywrphw7FvEEJlbmogTWFzIDHCumHDsW8QQmVuaiBGZW0gMcK6YcOxbx5DLkVTQ09MQVJFUyBKVVYuIE1BU0MuIEFCSUVSVEEcQy5FU0NPTEFSRVMgSlVWRU5JTCBGRU1FTklOTx5DLkVTQ09MQVJFUyBDQUQuIE1BU0MuIEFCSUVSVEEbQy5FU0NPTEFSRVMgQ0FERVRFIEZFTUVOSU5PHkMuRVNDT0xBUkVTIElORi4gTUFTQy4gQUJJRVJUQR1DLkVTQ09MQVJFUyBJTkZBTlRJTCBGRU1FTklOTw9MaWdhIEZlbWVuaW5hIDEGTC5GLi0yHExpZ2EgVW5pdmVyc2l0YXJpYSBNYXNjdWxpbmERQ0UgU1NBQSBNaW5pIE1hcy4RQ0UgU1NBQSBN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" />

<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="28F5A6FB" />
<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="/wEdAG3Q+VRdFHp6ojPeAFgUSAJxkoBeKgyvK/JSPkNemWsYBDpvnZvB2XYEC+fpHN7HiJl7Wf7OJJAL4XlDuKcYzqljfS/BqthOxmYL35lYjbS0zmrG1gPl9OCGzB8AsnlA6WS1sCkDR2GT/Gzu1wL79ZPVeLOLyEwyboneQE+B1qJp80clnMjUDvfG79D+/oINtkRq4bYVucNHqRvdQN6//yVcbWA8affAxwa4j9eMwiWsrbGxkl9GcTBtxH7gMTJRUu4qBpIWeAROJux6MrTjiwJ1fRWGZYV6BzmoNrQCxmtbdwawgHzOb9as4YpEJlDKMI1kLm1HaDm/ciK5f+PoseGLGDd//nYrLsBwA2uRTHLI7/VnfYhxIVD6vnOpZywq3THJhQ0c2lMBCVLSS8u6O/O3M9X0BsMadgCplafpIi3k3Rg7VsQYQrs7XvXwQ7IN+XkiEqKc5e8ux+JX97Dp7iGqdC7HmQPIYQcUm+TX9+fKfx7OHBseuoSx2mvohQm2PXDyrxy4n0SnW+GI25vFGtGFTb7XSz8wvxrc4JSpOgUV7185G+qKMQ7EH9lOhh3LtXwDQU/rZswC3dWtheIvfmcK5T9GjKrgpVg0Dcmo1pyl2A7KgwA/uSIsruOpdj7M1CoYdqG4CzdX5ERFq2x1POqeTtJPu7rAtaZF1W7W4goRAB8nWZ7zDgAtb82fORDVIy1mTzLL6l/bpDnqaI06g5C4SRWkdLRt8o2Nxdybe9PCCqFhO6fQxI4CrSqw4pyh76tiRY06ftQndJMdYrOes8ItXDl+pQqfCU+ICOdWvx4/6KZGF6gSGC+XEHn0rSpi9somr/VKIo/5YDgyl81ekUiaKZ//fq7fCmEuKvidN5LQ4zu61BzntivwlNcNRiLbUebfUUpLBtogw3hGK7aflgBy9nvmw4tBrfn9KsdkDOyfzLBiXCkDDVfA7KpaeUvxG2ak1zAVdkCE/IZdC0opJqi9BnBBR4FlqtqOGXpigdF5umdOBUqfnmMuJdm23p74hhgCbiB0lE9D4huafCFcvThj9h4qa0oXPw3Jk6Dz4paBfo0YaOmYmvMAKGW9y2e4Q6LfK2yaZ2T6RPLkZN9Jqcu8PoRQvEufa7d8dpVF1siN6n1eF7IqEZN9DSKRLG/MqZvbkreksdGs97VHpaqysIYgEg/PXfypAwLpbP7GKhocy83w9HivicxIPypScVwatm5YaO11WPuvHh3uL3V9PvUhhd+elcJWNtxaOMQx8xZ0hNwy8ySqhtjn7qtFiXvEs+lTZ3nfBNp4pDHaDLYIpQV+GlFX/lTJk2JFZ+hASEprLrg2XAeppmU18TPCzWanYWe5tLtFGJzBnD1cSpvxAfmEicptUbma3W1KMa1Jgri5BXloWg/cyBltOUPYQhhbBZTrokuFhIpZt4BehqCXw8ak4rQarObXWKiByTLb3cOELgOUopTCcAlluk9YyP2ab2cW98LpP+wwKQSWizK2/5UXM8idGcObdDlAI59MFsMLW9iJpEOOr+9LjJJIRKPthL2jo8R4QVpwMv+a/usxsh1lFaDltxw514MKZBAhoV4Ew+8V0xGBb/0SOk7FOUBZ6M7kd3udhUUxVo5lYu5ciq9yfks/dkh2XjdsdKtl2BxcbitpKL36NB27tr617BbGlDg66hTXKMfZRVg5MOaBlIQW9U4lCfzoIAEbkcphk0YFORXFxAz8kDUejovW76CBj+gAABQ+4+3S4F3WMvAxmA6RUOG3Vt1cwM5rOiHYgkOaUCJ4Fs6tykMJLqBrRmptBwlTDQfT8M/k6W7Y/CHBtiCVm1OdEvz8PCXPPd+XVcxMfLyxnU0fYzSeTWw8dDTpoDPcvzAv1uKz4kbLcZtYkuDLR3GDJXYg/gwKzRV8fDxnWMPfD+gFPMx9yJ2Mp0PFyv9mooJT/ciwX7V57W7Awor6UPt/mKLD267raeY8nMKYrHKiAVoi1dWcz4jGjspQe1pagCwvtMESxCzYA+bgkWuVAdGLHkOuBcvJIVb4WnF5nPb2udMI78KINaW1H8eypXrtW3nu3AeS97BNY9e7cgXgdaQ7umXVWgX5LdDyp0U1m65iY9wsPgLL5qW+B/o/RCUkbb1JzSWEgZf/uqc6+XCcBz1fp7mEgOonZEXFbv377NrfGzyFgmJAQOx1FqhEZI2ZB1rZSKbLbXTJwBbiU8WY6gOyN3g0bPk4j4CE+sUtD1lHhBn7rauE4nckkebUwppnxXxLrQz7IYxcrwPD21MVC0qgiwYa90SMG8TCMNqvGsY6WC6jI5as736At+l6+UvDU390rM4mfa0sVuTACDdcAKFjUCr5ZSdGtx4YdQHvfNft/I3el6LrDpeHx4QI/hg=" />
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
					<select name="controlNavegacion:categoriasDropDownList" id="controlNavegacion_categoriasDropDownList" class="ControlSeleccion">
		<option selected="selected" value="14308">C ESP CLUBES CAD MASC</option>
		<option value="14307">C ESP CLUBES CAD FEM</option>
		<option value="14365">FASE FINAL SUB 21 MASC</option>
		<option value="14358">FASE FINAL INFANTIL MASCULINO</option>
		<option value="14362">FASE FINAL INFANTIL FEMENINO</option>
		<option value="13212">LIGA EBA</option>
		<option value="14299">Fase Final 1&#170; Divisi&#243;n Femenin</option>
		<option value="14359">FASE FINAL 1&#170; DIV. AUT. FEM.</option>
		<option value="13204">LIGA LEB ORO</option>
		<option value="13206">LIGA LEB PLATA</option>
		<option value="13242">1&#170; Divisi&#243;n Nac. Masculina</option>
		<option value="14317">FINAL A CUATRO NAC. FEM.</option>
		<option value="13244">1&#170; Divisi&#243;n Nac. Femenina</option>
		<option value="13245">1&#170; Div. Aut. Masc. Sr. A</option>
		<option value="13246">1&#170; Div. Aut. Masc. Sr. B</option>
		<option value="13293">1&#170; Div. Aut. Fem.</option>
		<option value="13247">2&#170; Div Aut Masc A1</option>
		<option value="13294">2&#170; Div Aut Fem A1</option>
		<option value="13248">2&#170; Div Aut Masc A2</option>
		<option value="13295">2&#170; Div Aut Fem A2</option>
		<option value="13249">2&#170; Div Aut Masc B</option>
		<option value="13296">2&#170; Div Aut Fem B</option>
		<option value="13250">Sub 21 Masc. A1</option>
		<option value="13251">Sub 21 Masc. A2</option>
		<option value="13284">Sub 21 Masc. Fed.</option>
		<option value="14310">C ESP CLUBES JR MASC</option>
		<option value="14294">FASE FINAL JUNIOR MASCULINO</option>
		<option value="13252">Junior Masc. A1</option>
		<option value="13260">Junior Masc. A2</option>
		<option value="13261">Junior Masc. A3</option>
		<option value="13285">Junior Masc. Federado</option>
		<option value="14309">C ESP CLUBES JR FEM</option>
		<option value="14295">FASE FINAL JUNIOR FEMENINO</option>
		<option value="13297">Junior Fem. A1</option>
		<option value="13298">Junior Fem. A2</option>
		<option value="13299">Junior Fem. A3</option>
		<option value="13306">Junior Fem. Federado</option>
		<option value="14318">FASE FINAL CADETE MASCULINO</option>
		<option value="13265">Cadete Masc. A1</option>
		<option value="13270">Cadete Masc. A2</option>
		<option value="13276">Cadete Masc. A3</option>
		<option value="13286">Cadete Masc. Federado</option>
		<option value="14344">FASE FINAL CADETE FEMENINO</option>
		<option value="13300">Cadete Fem. A1</option>
		<option value="13301">Cadete Fem. A2</option>
		<option value="13302">Cadete Fem. A3</option>
		<option value="13307">Cadete Fem. Federado</option>
		<option value="13280">Infantil Masc. A1</option>
		<option value="13282">Infantil Masc. A2</option>
		<option value="13283">Infantil Masc. A3</option>
		<option value="13287">Infantil Masc. Federado</option>
		<option value="13303">Infantil Fem. A1</option>
		<option value="13304">Infantil Fem. A2</option>
		<option value="13305">Infantil Fem. A3</option>
		<option value="13308">Infantil Fem. Federado</option>
		<option value="13288">Preinfantil Masculino</option>
		<option value="13309">Preinfantil Femenino</option>
		<option value="13289">Alv Mas 2&#186;a&#241;o</option>
		<option value="13310">Alv Fem 2&#186;a&#241;o</option>
		<option value="13290">Alv Mas 1&#186;a&#241;o</option>
		<option value="13311">Alv Fem 1&#186;a&#241;o</option>
		<option value="13291">Benj Mas 2&#186;a&#241;o</option>
		<option value="13312">Benj Fem 2&#186;a&#241;o</option>
		<option value="13292">Benj Mas 1&#186;a&#241;o</option>
		<option value="13313">Benj Fem 1&#186;a&#241;o</option>
		<option value="14125">C.ESCOLARES JUV. MASC. ABIERTA</option>
		<option value="14124">C.ESCOLARES JUVENIL FEMENINO</option>
		<option value="14121">C.ESCOLARES CAD. MASC. ABIERTA</option>
		<option value="14120">C.ESCOLARES CADETE FEMENINO</option>
		<option value="14123">C.ESCOLARES INF. MASC. ABIERTA</option>
		<option value="14122">C.ESCOLARES INFANTIL FEMENINO</option>
		<option value="13208">Liga Femenina 1</option>
		<option value="13210">L.F.-2</option>
		<option value="13330">Liga Universitaria Masculina</option>
		<option value="14199">CE SSAA Mini Mas.</option>
		<option value="14198">CE SSAA Mini Fem.</option>
		<option value="14149">CE SSAA Cadete Mas.</option>
		<option value="14148">CE SSAA Cadete Fem.</option>
		<option value="14151">CE SSAA Infantil Mas.</option>
		<option value="14150">CE SSAA Infantil Fem.</option>
		<option value="13331">Liga Universitaria Femenina</option>
		<option value="14213">SUPERLIGA DIA</option>
		<option value="14075">VII Torneo Leucemia y Linfoma</option>
		<option value="14024">PREVIA MINICOPA</option>
		<option value="13785">III TORNEO L.F.-2</option>
		<option value="13596">VIII TORNEO LIGA EBA</option>

	</select></TD>
				<TD width="100%"></TD>
				<TD>
					<span id="controlNavegacion_Label2" class="Etiquetas">Temporada:</span></TD>
				<TD>
					<select name="controlNavegacion:temporadasDropDownList" id="controlNavegacion_temporadasDropDownList" class="ControlSeleccion">
		<option selected="selected" value="2016">2016/2017</option>
		<option value="2015">2015/2016</option>
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
		<TD colSpan="5"><table id="controlNavegacion_navegacionDataList" cellspacing="0">
	<tr>
		<td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label3_0" class="EnlaceNavegacionSeleccionado">Resultados y Clasificación</span>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_0" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_1" href="Calendarios.aspx?a=14&amp;c=14308&amp;med=0">Calendarios</a>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_1" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_2" href="Equipos.aspx?a=14&amp;c=14308&amp;med=0">Equipos</a>
				</td><td class="EnlaceNavegacion">
					<span id="controlNavegacion_navegacionDataList_Label4_2" class="EnlaceNavegacion">|</span>
				</td><td class="EnlaceNavegacion">
					<a id="controlNavegacion_navegacionDataList_HyperLink1_3" href="Partidos.aspx?a=14&amp;c=14308&amp;med=0">Próximos Partidos</a>
				</td><td></td>
	</tr>
</table></TD>
	</TR>
	</TBODY>
</TABLE>
<TABLE class="TablaTitulo" id="TablaTitulo">
	<TR>
		<TD><span id="controlNavegacion_tituloLabel" class="Titulo">Resultados y Clasificación</span></TD>
	</TR>
</TABLE>
<TABLE class="TablaSubTitulo" id="TablaSubTitulo">
	<tr>
		<td>
			<span id="controlNavegacion_subTituloLabel" class="SubTitulo">2016/2017 C ESP CLUBES CAD MASC</span></td>
	</tr>
</TABLE>
</TD>
							</TR>
							<TR>
								<TD colspan="3"><BR>
									<table width="100%">
										<tr>
											<td><select name="gruposDropDownList" id="gruposDropDownList" class="ControlSeleccion">
	<option selected="selected" value="62277">PLAY OFF 1/8 Final</option>
	<option value="62281">PRIMERA FASE A</option>
	<option value="62282">PRIMERA FASE B</option>
	<option value="62283">PRIMERA FASE C</option>
	<option value="62502">PRIMERA FASE D</option>
	<option value="62285">PRIMERA FASE E</option>
	<option value="62286">PRIMERA FASE F</option>
	<option value="62287">PRIMERA FASE G</option>
	<option value="62288">PRIMERA FASE H</option>

</select>&nbsp;<select name="jornadasDropDownList" id="jornadasDropDownList" class="ControlSeleccion">
	<option selected="selected" value="492381">Jornada 1 24/05/2017</option>

</select></td>
											<td align="right"></td>
										</tr>
									</table>
									<BR>
									<BR>

<TABLE id="Table1" class="TablaCabeceraSeccion">
	<TR>
		<TD>
			<span id="jornadaCabeceraSeccion_tituloLabel" class="CabeceraSeccion">Jornada 1 24/05/2017</span></TD>
	</TR>
</TABLE>
<table class="TablaDatos" cellspacing="0" cellpadding="3" id="jornadaDataGrid" width="100%">
	<tr class="TablaDatosFilasImpares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_0">REAL MADRID ´A´ - UNICAJA RINCON FERTILIDAD</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_0">-</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_0">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_0">18:30</span>
												</td>
	</tr><tr class="TablaDatosFilasPares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_1">REAL BETIS ENERGIA PLUS - BILBAO UNAMUNO</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_1">-</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_1">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_1">12:30</span>
												</td>
	</tr><tr class="TablaDatosFilasImpares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_2">CAI ZARAGOZA A - EBA</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_2">94-63</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_2">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_2">10:30</span>
												</td>
	</tr><tr class="TablaDatosFilasPares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_3">CANTERBURY ACADEMY - VALENCIA BC A</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_3">-</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_3">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_3">19:00</span>
												</td>
	</tr><tr class="TablaDatosFilasImpares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_4">F.C. BARCELONA LASSA A - MOVISTAR ESTUDIANTES ´A´</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_4">-</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_4">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_4">17:00</span>
												</td>
	</tr><tr class="TablaDatosFilasPares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_5">LOIOLA INDAUTXU 01 - EASO 01 BEGITEK</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_5">71-55</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_5">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_5">12:00</span>
												</td>
	</tr><tr class="TablaDatosFilasImpares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_6">CLUB JOVENTUT BADALONA A - SANTO DOMINGO TENERIFE</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_6">85-73</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_6">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_6">10:00</span>
												</td>
	</tr><tr class="TablaDatosFilasPares">
		<td width="100%">
													<span id="jornadaDataGrid_Label1_7">GRAN CANARIA - REAL CANOE N.C.</span>
												</td><td nowrap="nowrap" align="center">
													<span id="jornadaDataGrid_Label2_7">-</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label3_7">24/05/2017</span>
												</td><td nowrap="nowrap">
													<span id="jornadaDataGrid_Label4_7">16:30</span>
												</td>
	</tr>
</table><BR>

<TABLE id="Table1" class="TablaCabeceraSeccion">
	<TR>
		<TD>
			<span id="clasificacionCabeceraSeccion_tituloLabel" class="CabeceraSeccion">Cuadro Clasificación</span></TD>
	</TR>
</TABLE>
<div id="cuadroClasificacionPanel" align="center">

										<img id="cuadroClasificacionImage" UseMap="#MapaCuadroClasificacion" src="CuadroClasificacion.aspx?f=30937&amp;a=14" />
										<map name="MapaCuadroClasificacion"><area shape="rect" coords="0,65,137,80" href="Series.aspx?f=30937&c=14308&a=14#33569"><area shape="rect" coords="0,117,137,132" href="Series.aspx?f=30937&c=14308&a=14#33570"><area shape="rect" coords="0,169,137,184" href="Series.aspx?f=30937&c=14308&a=14#33571"><area shape="rect" coords="0,221,137,236" href="Series.aspx?f=30937&c=14308&a=14#33572"><area shape="rect" coords="0,273,137,288" href="Series.aspx?f=30937&c=14308&a=14#33573"><area shape="rect" coords="0,325,137,340" href="Series.aspx?f=30937&c=14308&a=14#33574"><area shape="rect" coords="0,377,137,392" href="Series.aspx?f=30937&c=14308&a=14#33575"><area shape="rect" coords="0,429,137,444" href="Series.aspx?f=30937&c=14308&a=14#33576"></map>

</div><BR>
									<br>

								</TD>
							</TR>
						</TABLE>
						<div id="piePaginaPanel">


<table cellSpacing="0" cellPadding="3" width="100%" border="0" class="TablaCabeceraSeccion">
	<tr>
		<td vAlign="top" align="right" width="100%"><A href="javascript:window.print();"><IMG height="13" alt="Imprímelo" src="Imagenes/Iconos/img_print.gif" width="78" border="0"></A></td>
	</tr>
</table>


</div></form>
				</TD>
				<TD width="5">&nbsp;</TD>
				<TD vAlign="top"><div id="derechaIFramePanel">




</div></TD>
			</TR>
		</TABLE>
		<div id="pieIFramePanel">


<IFrame Src="http://www.fbm.es/Plantillas/Pie_2.html" Width="760" Height="250" FrameBorder="0" Scrolling="No"></IFrame>

</div>
	</body>
</HTML>`;
