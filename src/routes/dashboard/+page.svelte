<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	import { userProfile } from '../stores.js';
	import { onMount } from 'svelte';

	onMount(() => {
		getGames();
		return () => console.log('On destroy...');
	});
	let gamesList = [];
	let sum = 0;
	export async function getGames() {
		const res = await fetch('/api/game/getGames', {
			method: 'POST',
			body: JSON.stringify({
				email
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			mode: 'cors'
		});
		const data = await res.json();
		console.log(data);
		if (data.gamesList != null) {
			gamesList = data.gamesList;
			sum = gamesList.map(game => game.averagePrice).reduce((acc, amount) => acc + amount);
		}
	}

	const { email, isLoggedIn } = $userProfile;

	let name = '';
	let platform = '';
	let countryCode = 'de';
	let averagePrice = '';
	let gameslist = [
		{ id: 'J---aiyznGQ', price: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', price: 'Maru' },
		{ id: 'OUtn3pvWmpg', price: 'Henri The Existential Cat' }
	];
	let gamedata = [];
	export async function load() {
		const res = await fetch('/api/game/getValue', {
			method: 'POST',
			body: JSON.stringify({
				name,
				platform,
				countryCode
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			mode: 'cors'
		});
		const data = await res.json();
		console.log(data);
		gamedata = data.gamesList;
		gameslist = JSON.stringify(data.gamesList);
		averagePrice = JSON.stringify(data.averagePrice);
	}
</script>

<Navbar />

<div
	class="text-center relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 justify-center items-center  "
>
	<h2 class="text-3xl tracking-tight text-white sm:text-4xl font-mono">
		Welcome <a class="text-amber-500">{email}</a>
	</h2>
	<section class="relative pt-28 pb-8 overflow-hidden">
		<div class="container px-2 mx-auto">
			<div class="md:max-w-2xl mx-auto bg-gray-900 rounded-4xl shadow-8xl">
				<div class="flex flex-wrap justify-center items-center">
					<div class="w-full md:flex-1">
						<div class="text-center p-8 md:px-16 md:pt-9 md:pb-11">
							<p class="mb-4 text-white font-semibold leading-normal">Total Games</p>
							<h2
								class="mb-4 text-3xl text-amber-600 font-bold font-heading tracking-px-n leading-none"
							>
								{gamesList.length}
							</h2>
						</div>
					</div>
					<div class="w-auto">
						<div class="h-px w-14 md:w-px md:h-14 bg-amber-600" />
					</div>
					<div class="h-px w-14 md:w-px md:h-14 bg-amber-600" />
					<div class="w-full md:flex-1">
						<div class="text-center p-8 md:px-16 md:pt-9 md:pb-11">
							<p class="mb-4 text-white font-semibold leading-normal">Total Game Value</p>
							<h2
								class="mb-4 text-3xl text-amber-600 font-bold font-heading tracking-px-n leading-none"
							>
								{sum}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<h2 class="text-lg tracking-tight text-white font-mono pb-4">
		Want to add more Games to your collection?
	</h2>
	<div class="mx-auto w-auto">
		<a href="/mygames">
			<button
				type="submit"
				class="flex-none rounded-md bg-amber-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
				>Add Games</button
			>
		</a>
	</div>
	<svg
		class="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
		viewBox="0 0 1155 678"
		fill="none"
	>
		<path
			fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
			fill-opacity=".3"
			d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
		/>
		<defs>
			<linearGradient
				id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
				x1="1155.49"
				x2="-78.208"
				y1=".177"
				y2="474.645"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#9089FC" />
				<stop offset="1" stop-color="#FF80B5" />
				<stop offset="1" stop-color="#9089FF" />
			</linearGradient>
		</defs>
	</svg>
</div>

<Footer />
