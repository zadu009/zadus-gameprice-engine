<script>
	import '../../app.css';
    import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
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

<Navbar/>

<div
	class="flex min-h-full items-center justify-center relative isolate overflow-hidden bg-gray-900 py-16"
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
						Create your Game-Price-Engine account
					</h2>
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
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Email address"
								bind:value={name}
							/>
						</div>
						<div class="pt-2">
							<label for="plattform" class="sr-only">Plattform</label>
							<input
								id="plattform"
								name="plattform"
								type="plattform"
								autocomplete="plattform"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Username"
								bind:value={platform}
							/>
						</div>
						<div class="pt-2">
							<label for="plattform" class="sr-only">Plattform</label>
							<input
								id="plattform"
								name="plattform"
								type="password"
								autocomplete="plattform"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Password"
								bind:value={platform}
							/>
						</div>
					</div>
					<div>
						<button
							on:click={load}
							class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
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
			</linearGradient>
		</defs>
	</svg>
</div>


<Footer/>
