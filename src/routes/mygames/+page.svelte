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
		}
	}

	const { email, isLoggedIn } = $userProfile;

	let name = '';
	let averagePrice = 0;
	let dialog;
	const closeDialog = () => {
		dialog.close();
	};

	let savedDialog;
	const closeSavedDialog = () => {
		savedDialog.close();
	};
	const addItem = async () => {
		if (validation_check(name, platform)) {
			gamesList = [
				...gamesList,
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
		gamesList = gamesList.filter((i) => i !== game);
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

	export async function saveGames() {
		const res = await fetch('/api/game/saveGames', {
			method: 'POST',
			body: JSON.stringify({
				email,
				gamesList
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			mode: 'cors'
		});
		const data = await res.json();
		console.log(data);
		savedDialog.showModal();
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
						MY GAME COLLECTION
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
												{#each gamesList as game}
													<li class="flex py-6">
														<div
															class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
														>
															<img
																src="https://img.icons8.com/color/96/000000/controller.png"
																alt="Videogame"
																class="h-full w-full object-cover object-center"
															/>
														</div>

														<div class="ml-4 flex flex-1 flex-col">
															<div>
																<div class="flex justify-between text-base font-medium text-white">
																	<h3>
																		<a href="#">{game.name}</a>
																	</h3>
																	<p class="ml-4">Avg. {game.averagePrice}€</p>
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
								<div
									class="flex items-stretch items-center justify-center py-2 border-t border-amber-600 flex space-x-4"
								>
									<div class="py-4">
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
									<div class="py-6">
										<form action="#">
											<button
												type="submit"
												on:click={saveGames}
												class="px-6 py-3 items-center justify-center bg-amber-500 text-white font-bold rounded inline-flex items-center"
												>Save
											</button>
										</form>
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

<dialog bind:this={savedDialog} on:close class="rounded-md">
	<div class="rounded-md mx-auto ">
		<div class="w-full max-w-md">
			<div>
				<img
					class="mx-auto h-12 w-auto"
					src="https://img.icons8.com/color/96/000000/controller.png"
					alt="Your Company"
				/>
				<h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-600 font-mono">
					YOUR GAMES ARE SAVED!
				</h2>
			</div>
			<button
				on:click={closeSavedDialog}
				class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2 pt-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				OK
			</button>
		</div>
	</div>
</dialog>
<Footer />
