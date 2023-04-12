<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
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

<div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
			<div class="max-w-xl lg:max-w-lg">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-mono">
					WELCOME TO <a class="text-amber-500">ZADU'S</a> GAMEPRICE ENGINE!
					<img src="https://img.icons8.com/color/96/000000/controller.png" alt="Your Company" />
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-300 font-mono">
					Want to know how much your game is worth? You've come to the right place! Zadu's
					Game-Engine will give you the average price of your games.
				</p>
				<div class="mt-6 flex max-w-md gap-x-4">
					<a href="/engine">
						<button
							type="submit"
							class="flex-none rounded-md bg-amber-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>Try out now!</button
						>
					</a>
				</div>
			</div>
			<dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
				<div class="flex flex-col items-start">
					<div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
							/>
						</svg>
					</div>
					<dt class="mt-4 font-semibold text-white">Single Game</dt>
					<dd class="mt-2 leading-7 text-gray-400">
						You can get the average price for your single game.
					</dd>
				</div>
				<div class="flex flex-col items-start">
					<div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
						<svg
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
							/>
						</svg>
					</div>
					<dt class="mt-4 font-semibold text-white">Game Collection</dt>
					<dd class="mt-2 leading-7 text-gray-400">
						You have a games collection? No Problem our game price engine will give you the avarage
						value or each game.
					</dd>
				</div>
			</dl>
		</div>
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

{#if averagePrice > 0}
	<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
		<div class="animate-pulse flex space-x-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="green"
				class="w-10 h-1o"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>

			<div class="flex-1 space-y-6 py-1">
				<h2 class="text-center text-2xl font-bold tracking-tight text-gray-900">
					{averagePrice}
				</h2>
			</div>
		</div>
	</div>

	<div class="bg-white">
		<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 class="sr-only">Products</h2>
			<div
				class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
			>
				{#each gamedata as data}
					<a href={data.url} class="group">
						<div
							class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
						>
							<img
								src={data.imageUrl}
								alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
								class="object-contain h-48 w-96 object-center group-hover:opacity-75"
							/>
						</div>
						<h3 class="mt-4 text-sm text-gray-700">{name}</h3>
						<p class="mt-1 text-lg font-medium text-gray-900">{data.price}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<Footer />
