/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

document.getElementById('return').addEventListener('click',menu);
document.getElementById('load').addEventListener('click',decryptMsg);
document.getElementById('secret').addEventListener('keyup',verify);
document.getElementById('code').addEventListener('keyup',verify);
verify();

function decryptMsg() {	
	var message = document.getElementById("secret");
	var passphrase = document.getElementById("code");
	var decrypted = CryptoJS.AES.decrypt(message.value, passphrase.value);
	var tempCopy = document.createElement('input');
	tempCopy.type = 'text';
	message.value = decrypted.toString(CryptoJS.enc.Utf8);
	passphrase.value = '';
	verify();
}

function verify() {
	if (document.getElementById('secret').value.length > 0 && document.getElementById('code').value.length > 0) {
		document.getElementById('load').disabled = false;
	} else {
		document.getElementById('load').disabled = true;
	}
}

function menu() {
	window.location.href = 'main.html';
}