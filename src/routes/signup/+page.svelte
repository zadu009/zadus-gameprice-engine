<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	import { userProfile } from '../stores.js';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let nickname = '';
	let loggingresult;
	let passwordValid;
	export async function checkIfUserExists() {
		if (validation_check(email, nickname, password)) {
			const res = await fetch('/api/game/checkIfUserExists', {
				method: 'POST',
				body: JSON.stringify({
					email,
					nickname
				}),
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				mode: 'cors'
			});
			const data = await res.json();
			console.log(data);
			const userExists = JSON.stringify(data.userExistStatus);
			const datamail = JSON.stringify(data.email);
			const valueTrue = '"true"';
			const valueFalse = '"false"';
			if (userExists === valueFalse) {
				$userProfile = { email: email, isLoggedIn: true };
				console.log('Hallo bin im Login');
				signUpEngineUser();
				loggingresult = true;
				goto('/mygames');
				return true;
			} else {
				console.log('Username oder Email existiert bereits');
				loggingresult = false;
				return false;
			}
		}
	}

	export async function signUpEngineUser() {
		const res = await fetch('/api/game/saveEngineuser', {
			method: 'POST',
			body: JSON.stringify({
				email,
				nickname,
				password
			}),
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			mode: 'cors'
		});
		const data = await res.json();
		console.log(data);
		loggingresult = true;
	}

	function validation_check(email, nickname, password) {
		if (!validateEmail(email)) {
			return false;
		} else if (password.length < 8) {
			passwordValid = false;
			return false;
		} else if (nickname === '') {
			return false;
		} else {
			return true;
		}
	}

	function validateEmail(email) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(email).toLowerCase());
	}
</script>

<Navbar />

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
						CREATE YOUR ACCOUNT NOW!
					</h2>
				</div>
				<form class="space-y-2" action="#">
					<input type="hidden" name="remember" value="true" />
					<div class="-space-y-px rounded-md shadow-sm">
						<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-300"
							>Email</label
						>
						<div>
							<input
								id="email"
								name="email"
								type="email"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								bind:value={email}
							/>
						</div>

						<div class="pt-2">
							<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-300"
								>Username</label
							>
							<input
								id="username"
								name="username"
								type="username"
								autocomplete="username"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								bind:value={nickname}
							/>
						</div>
						<div class="pt-2">
							<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-300"
								>Password</label
							>
							<input
								id="password"
								name="password"
								type="password"
								required
								class="relative block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								bind:value={password}
							/>
						</div>
					</div>
					<div class="pt-2">
						<button
							on:click={checkIfUserExists}
							type="submit"
							class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							Sign up
						</button>
					</div>
				</form>
				{#if loggingresult == false}
					<h2 class="mt-6 text-center text-1xl font-bold tracking-tight text-red-600 font-mono">
						EMAIL OR USERNAME ALREADY REGISTERED!
					</h2>
				{/if}
				{#if passwordValid == false}
					<h2 class="mt-6 text-center text-1xl font-bold tracking-tight text-red-600 font-mono">
						Password must be at least 8 characters
					</h2>
				{/if}
			</div>
		</div>
	</div>
</div>

<Footer />
