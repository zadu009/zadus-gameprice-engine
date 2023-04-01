<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	let games = [];
	let name = '';
	let averagePrice = 0;
	let dialog;
	const closeDialog = () => {
		dialog.close();
	};
	const addItem = async () => {
		if (validation_check(name, platform)) {
			games = [
				...games,
				{
					id: Math.random(),
					name,
					platform,
					averagePrice: await load()
				}
			];
			addToTotalValue();
			closeDialog();
		}
	};
	const remove = (game) => {
		subtractFromTotalValue(game.averagePrice);
		games = games.filter((i) => i !== game);
	};

	let totalvalue = 0;

	function addToTotalValue() {
		totalvalue += Math.round(averagePrice * 100) / 100;
	}

	let x = 0;
	function subtractFromTotalValue(x) {
		totalvalue -= Math.round(x * 100) / 100;
	}

	let platform = '';
	let countryCode = 'de';
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
		return averagePrice;
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
	class="flex min-h-full items-center justify-center relative isolate overflow-hidden bg-gray-900 py-16"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl  gap-y-16 gap-x-8 lg:max-w-none">
			<div class="w-full max-w-md space-y-8">
				<div>
					<img
						class="mx-auto h-12 w-auto"
						src="https://img.icons8.com/color/96/000000/controller.png"
						alt="Your Company"
					/>
					<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-300 font-mono">
						MY VIDEOGAME COLLECTION
					</h2>
				</div>

				<div
					class="relative z-10"
					aria-labelledby="slide-over-title"
					role="dialog"
					aria-modal="true"
				>
					<div class="inset-y-0 justify-center flex max-w-full ">
						<div class="pointer-events-auto w-screen max-w-md">
							<div class="flex h-full flex-col">
								<div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
									<div class="mt-8">
										<div class="flow-root">
											<ul role="list" class="-my-6 divide-y divide-gray-200">
												{#each games as game}
													<li class="flex py-6">
														<div
															class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
														>
															<img
																src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
																alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
																class="h-full w-full object-cover object-center"
															/>
														</div>

														<div class="ml-4 flex flex-1 flex-col">
															<div>
																<div class="flex justify-between text-base font-medium text-white">
																	<h3>
																		<a href="#">{game.name}</a>
																	</h3>
																	<p class="ml-4">{game.averagePrice}</p>
																</div>
																<p class="mt-1 text-sm text-gray-500">{game.platform}</p>
															</div>
															<div class="flex flex-1 items-end justify-between text-sm">
																<div class="flex">
																	<button
																		on:click={() => remove(game)}
																		type="button"
																		class="font-medium text-amber-500">Remove</button
																	>
																</div>
															</div>
														</div>
													</li>
												{/each}
											</ul>
										</div>
									</div>
								</div>
								<div class="p-6">
									<button
										on:click={() => dialog.showModal()}
										class="px-6 py-3 items-center justify-center bg-amber-500 text-white font-bold rounded inline-flex items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4.5v15m7.5-7.5h-15"
											/>
										</svg>
										<span>Add Game</span>
									</button>
								</div>

								<div class="border-t border-amber-600 px-4 py-6 sm:px-6">
									<div class="flex justify-between text-base font-medium text-white">
										<p>Collection value</p>
										<p>{totalvalue}</p>
									</div>
									<div class="mt-6 pb-8">
										<a
											href="#"
											class="flex items-center justify-center rounded-md  bg-amber-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
											>Save</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<dialog bind:this={dialog} on:close class="rounded-md">
	<div class="rounded-md mx-auto ">
		<div class="w-full max-w-md">
			<div>
				<img
					class="mx-auto h-12 w-auto"
					src="https://img.icons8.com/color/96/000000/controller.png"
					alt="Your Company"
				/>
				<h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-600 font-mono">
					ADD YOUR VIDEOGAME!
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

				<div class="mt-8 space-y-3">
					<button
						on:click={addItem}
						class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2 px-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Add
					</button>

					<button
						on:click={closeDialog}
						class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2 pt-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	</div>
</dialog>
<Footer />
