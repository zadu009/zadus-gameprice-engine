<script>
	import '../../app.css';
    import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	import { userProfile } from '../stores.js';

	function login() {
		if (validation_check(email, password)) {
			$userProfile = { isLoggedIn: true };
		}
	}

	let email = '';
	let password = '';
	let username = '';
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
				email,
				password,
				username
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

	function validation_check(email, password) {
		if (email === '') {
			return false;
		} else if (password === '') {
			return false;
		} else {
			return true;
		}
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
						CREATE YOUR GAMEPRICE-ENGINE-ACCOUNT NOW!
					</h2>
				</div>
				<form class="mt-8 space-y-6" action="/mygames">
					<input type="hidden" name="remember" value="true" />
					<div class="-space-y-px rounded-md shadow-sm">
						<div>
							<input
								id="email"
								name="email"
								type="email"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Email address"
								bind:value={email}
							/>
						</div>
						<div class="pt-2">
							<input
								id="username"
								name="username"
								type="username"
								autocomplete="username"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Username"
								bind:value={username}
							/>
						</div>
						<div class="pt-2">
							<input
								id="password"
								name="password"
								type="password"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Password"
								bind:value={password}
							/>
						</div>
					</div>
					<div>
						<button on:click={login}
							type="submit"
							class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<Footer />
