function createPassword() {
	document.getElementById('icon').style.color  = '#fff';
	const chars = "0123456789qwertyuopasdfghjklizxcvbnm!@+$^#%?-_:./=[]QWERTYUOPASDFGHJKLİZXCVBNM"
	const passwordLength = 10;
	let password = "";
	for (let i = 0; i < passwordLength; i++) {
		const randomNum = Math.floor(Math.random() * chars.length)
		password += chars.substring(randomNum, randomNum + 1);
	}
	document.getElementById('pwd').value = password
}

function copy() {
	textValue = document.getElementById('pwd').value;
	if (textValue) {
		navigator.clipboard.writeText(textValue);
		document.getElementById('icon').style.color  = '#10FF04';

	}
	else{
		document.getElementById('icon').style.color  = 'red';

	}
}
