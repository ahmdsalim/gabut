function countDif(remains) {
	const days = Math.floor(remains / (1000 * 60 * 60 * 24))
	const hours = Math.floor((remains % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((remains % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((remains % (1000 * 60) ) / 1000)

	document.querySelector('#d').innerHTML = days < 10 ? "0"+days : days
	document.querySelector('#h').innerHTML = hours < 10 ? "0"+hours : hours
	document.querySelector('#m').innerHTML = minutes < 10 ? "0"+minutes : minutes
	document.querySelector('#s').innerHTML = seconds < 10 ? "0"+seconds : seconds
	
}
const dl = new Date("2020-05-23 23:59:59").getTime()
const main = () => {
	var iv = setInterval(() => {
		const now = new Date().getTime()
		const remains = dl - now
				
		if(remains < 0){
			clearInterval(iv)
			document.querySelector('h1').innerHTML = "Selamat Hari Raya Idul Fitri"
		}else{
			countDif(remains)
		}
	}, 1000)
}

document.addEventListener("DOMContentLoaded",main)