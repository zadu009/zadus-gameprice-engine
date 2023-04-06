<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	import { userProfile } from '../stores.js';
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
		if (validation_check(name, platform)) {
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
	}

	function validation_check(name, platform) {
		if (name === '') {
			return false;
		} else if (platform === '') {
			return false;
		} else {
			return true;
		}
	}
</script>

<Navbar />

<div
	class="flex min-h-full items-center justify-center relative isolate overflow-hidden  bg-gray-900 py-16"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none">
			<div class="w-full max-w-md space-y-8">
				<div>
					<img
						class="mx-auto h-12 w-auto"
						src="https://img.icons8.com/color/96/000000/controller.png"
						alt="Your Company"
					/>
					<h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-300 font-mono">
						HOW MUCH IS YOUR <a class="text-amber-500">GAME</a> WORTH?
					</h2>
					<h2 class="text-center text-2xl font-bold tracking-tight text-gray-300 font-mono ">
						GET YOUR <a class="text-amber-500">GAMEVALUE</a> NOW!
					</h2>
					<p class="mt-2 text-center text-sm text-gray-600">
						{#if $userProfile.isLoggedIn == true}
							Want a gamevalue for your whole collection?
							<a href="mygames" class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
							{:else}
							Want a gamevalue for your whole collection?
							<a href="signin" class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
						{/if}

					</p>
				</div>
				<form class="mt-8 space-y-6" action="#">
					<input type="hidden" name="remember" value="true" />
					<div class="-space-y-px rounded-md shadow-sm">
						<div>
							<label for="videogame-title" class="sr-only">Videogame title</label>
							<input
								id="videogame-title"
								name="videogame"
								type="videogame"
								autocomplete="videogame"
								required
								class="relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Enter name of game"
								bind:value={name}
							/>
						</div>
						<div>
							<label for="plattform" class="sr-only">Plattform</label>
							<input
								id="plattform"
								name="plattform"
								type="plattform"
								autocomplete="plattform"
								required
								class="relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Enter name of plattform"
								bind:value={platform}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							on:click={load}
							class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2 px-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Go
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>


{#if averagePrice > 0}
	<div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
		<div class="animate-pulse flex space-x-4">
			<div class="flex-1 space-y-6 py-1">
				<h2 class="text-center text-2xl font-bold font-mono tracking-tight text-gray-400">
					Avg. Price {averagePrice}€
				</h2>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<h2 class="sr-only">Products</h2>
		<div
			class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			{#each gamedata as data}
				<a href={data.url} class="group">
					<div
						class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-800 xl:aspect-w-7 xl:aspect-h-8"
					>
						<img
							src={data.imageUrl}
							alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
							class="object-contain h-48 w-96 object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-400">{name}</h3>
					<p class="mt-1 text-lg font-medium text-gray-400">Sold for {data.price}€</p>
				</a>
			{/each}
		</div>
	</div>
{/if}

<Footer />
