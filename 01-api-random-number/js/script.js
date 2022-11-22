/* Tramite una chiamata ad una API, stampiamo a schermo un numero casuale. */

new Vue({
	el: '#app',
	data: {
		number: 0,
		arrNumbers: [],
	},
	methods: {
		getNumber() {
			axios.get('https://flynn.boolean.careers/exercises/api/random/int')
				.then(axiosResponse => {
					// console.log(axiosResponse);
					this.number = axiosResponse.data.response;
				})
		},
		getNumbers() {
			this.arrNumbers = [];
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/int')
				.then(axiosResponse => {
					// console.log(axiosResponse);
					this.arrNumbers.push(axiosResponse.data.response);
				})
			}
		},
	},
});