<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';

	let dialog;
	const closeDialog = () => {
		dialog.close();
	};

	let email = '';
	let firstname = '';
	let lastname = '';
	let message = '';
	let checkedTrue = false;

	function validateEmail(email) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(email).toLowerCase());
	}

	function validation_check(email, firstname, lastname, message) {
		if (!validateEmail(email)) {
			return false;
		} else if (firstname === '') {
			return false;
		} else if (lastname === '') {
			return false;
		} else if (message === '') {
			return false;
		} else if (checkedTrue === false) {
			return false;
		} else {
			return true;
		}
	}

	export async function sendMessage() {
		if (validation_check(email, firstname, lastname, message)) {
			const res = await fetch('/api/game/saveMessage', {
				method: 'POST',
				body: JSON.stringify({
					email,
					lastname,
					firstname,
					message
				}),
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				mode: 'cors'
			});
			const data = await res.json();
			console.log(data);
			dialog.showModal();
		}
	}
</script>

<Navbar />
<div class="pt-12">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<img
				class="mx-auto h-12 w-auto"
				src="https://img.icons8.com/color/96/000000/controller.png"
				alt="Your Company"
			/>
			<p class=" text-center mt-2 text-3xl font-mono tracking-tight text-gray-300 sm:text-4xl">
				Contact <a class="text-amber-500">Zadu</a>
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600 pb-8">
				Write me a message and i will get back to you asap!
			</p>
		</div>
	</div>
</div>
<div class="isolate px-6 lg:px-8">
	<form class="mx-auto max-w-xl">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
				<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-300"
					>First name</label
				>
				<div class="mt-2.5">
					<input
						bind:value={firstname}
						type="text"
						name="first-name"
						id="first-name"
						required
						autocomplete="given-name"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div>
				<label for="last-name" class="block text-sm font-semibold leading-6 text-gray-300"
					>Last name</label
				>
				<div class="mt-2.5">
					<input
						bind:value={lastname}
						type="text"
						name="last-name"
						id="last-name"
						required
						autocomplete="family-name"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="email" class="block text-sm font-semibold leading-6 text-gray-300">Email</label>
				<div class="mt-2.5">
					<input
						bind:value={email}
						type="email"
						name="email"
						required
						id="email"
						autocomplete="email"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block text-sm font-semibold leading-6 text-gray-300"
					>Message</label
				>
				<div class="mt-2.5">
					<textarea
						bind:value={message}
						name="message"
						id="message"
						required
						rows="4"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="flex gap-x-4 sm:col-span-2">
				<div class="flex h-6 items-center">
					<input type="checkbox" class="sr-only peer" />
					<span class="sr-only">Agree to policies</span>
					<label class="relative inline-flex items-center cursor-pointer">
						<input required bind:checked={checkedTrue} type="checkbox" class="sr-only peer" />
						<div
							class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
						/>
					</label>
				</div>
				<label class="text-sm leading-6 text-gray-600" id="switch-1-label">
					By selecting this, you agree to our
					<a href="/privacy" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
				</label>
			</div>
		</div>
		<div class="mt-10">
			<button
				on:click={sendMessage}
				type="submit"
				class="block w-full rounded-md bg-amber-500  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Let's talk</button
			>
		</div>
	</form>
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
					YOUR MESSAGE HAS BEEN SENT!
				</h2>
			</div>
			<button
				on:click={closeDialog}
				class="group relative flex w-full justify-center rounded-md bg-amber-500 py-2 pt-2 text-sm font-semibold text-white hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				OK
			</button>
		</div>
	</div>
</dialog>
<Footer />
