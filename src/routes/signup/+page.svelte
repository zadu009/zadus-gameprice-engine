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
	let activateSpinner = false;
	export async function checkIfUserExists() {
		activateSpinner = true;
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
				activateSpinner = false;
				goto('/dashboard');
				return true;
			} else {
				console.log('Username oder Email existiert bereits');
				activateSpinner = false;
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
			activateSpinner = false;
			return false;
		} else if (password.length < 8) {
			passwordValid = false;
			activateSpinner = false;
			return false;
		} else if (nickname === '') {
			activateSpinner = false;
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
					<div class="text-sm">
						<p class="mt-2 text-center text-sm text-gray-600">
							You have already an account?
							<a href="signin" class="font-medium text-indigo-600 hover:text-indigo-500">Sign in.</a
							>
						</p>
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

{#if activateSpinner === true}
	<div
		style="  display: flex;
align-items: center;
justify-content: center;"
		role="status"
	>
		<svg
			aria-hidden="true"
			class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-amber-600"
			viewBox="0 0 100 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
				fill="currentColor"
			/>
			<path
				d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
				fill="currentFill"
			/>
		</svg>
		<span class="sr-only">Loading...</span>
	</div>
{/if}

<Footer />
