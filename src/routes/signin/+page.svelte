<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	import { userProfile } from '../stores.js';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let loggingresult;
	export async function checkSignIn() {
		if (validation_check(email, password)) {
			const res = await fetch('/api/game/checkSignIn', {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				mode: 'cors'
			});
			const data = await res.json();
			console.log(data);
			const loggedIn = JSON.stringify(data.signInStatus);
			const datamail = JSON.stringify(data.email);
			const valueTrue = '"true"';
			if (loggedIn === valueTrue) {
				$userProfile = { isLoggedIn: true };
				console.log('Hallo bin im Login');
				loggingresult = true;
				goto('/mygames');
				return true;
			} else {
				console.log('Login Fehlgeschlagen');
				loggingresult = false;
				return false;
			}
		}
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

<Navbar />

<div class="flex items-center justify-center relative isolate overflow-hidden bg-gray-900 py-16">
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
						SIGN IN TO YOUR ACCOUNT
					</h2>
				</div>
				<form class="mt-8 space-y-6">
					<input type="hidden" value="true" />
					<div class="-space-y-px rounded-md shadow-sm">
						<div>
							<input
								id="email"
								name="email"
								type="email"
								required
								class="relative block w-full rounded-t-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Enter Email address"
								bind:value={email}
							/>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								required
								class="relative block w-full rounded-b-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								placeholder="Enter password"
								bind:value={password}
							/>
						</div>
					</div>
					<div class="text-sm">
						<p class="mt-2 text-center text-sm text-gray-600">
							Don't have an account?
							<a href="signup" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up.</a
							>
						</p>
					</div>
					<div>
						<button
							on:click={checkSignIn}
							type="submit"
							class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2 px-3 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign in
						</button>
					</div>
				</form>
				{#if loggingresult == false}
				<h2 class="mt-6 text-center text-1xl font-bold tracking-tight text-red-600 font-mono">
					LOGIN FAILED!
				</h2>

				{/if}
			</div>
		</div>
	</div>
</div>

<Footer />
