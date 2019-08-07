# QRcode
QR code for Html page

<pre>
    <script src="webcomponents-lite.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/webcomponents-lite@0.6.0/webcomponents-lite.min.js"></script>
    <script src="qr-code.js"></script>
</pre>
 -------------------------------------------------------------
<pre>
 <qr-code data="bla bla blaaaaaaaaaahhh" format="svg"></qr-code>
 <qr-code data="bla bla blaaaaaaaaaahhh" format="html"></qr-code>
 <qr-code data="bla bla blaaaaaaaaaahhh" format="png"></qr-code>
</pre>

USE
<pre>



<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>&lt;qr-code&gt;</title>
</head>
<body>
	<div>
	  <br />
	  <br /><qr-code data="bla bla blaaaaaaaaaahhh" format="svg"></qr-code>
      <br /><qr-code data="bla bla blaaaaaaaaaahhh" format="html"></qr-code>
      <br /> <qr-code data="bla bla blaaaaaaaaaahhh" format="png"></qr-code>
    </div>
	<!-- Polyfill and Web Component -->
	<script src="webcomponents-lite.js"></script>
	<script src="qr-code.js"></script>
</body>
</html>

</pre>



