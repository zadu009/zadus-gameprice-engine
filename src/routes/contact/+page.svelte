<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';

	let dialog;
	const closeDialog = () => {
		dialog.close();
	};
</script>

<Navbar />
<div class="isolate px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
        <p class="mt-2 text-3xl font-mono tracking-tight text-gray-300 sm:text-4xl">CONTACT ZADU</p>
		<p class="mt-2 text-lg leading-8 text-white">
			Your message will be replied as soon as possible
		</p>
	</div>
	<form class="mx-auto mt-16 max-w-xl sm:mt-20">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
				<label for="first-name" class="block text-sm font-semibold leading-6 text-gray-300"
					>First name</label
				>
				<div class="mt-2.5">
					<input
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
				<label for="company" class="block text-sm font-semibold leading-6 text-gray-300"
					>Company</label
				>
				<div class="mt-2.5">
					<input
						type="text"
						name="company"
						id="company"
						autocomplete="organization"
						class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="email" class="block text-sm font-semibold leading-6 text-gray-300">Email</label>
				<div class="mt-2.5">
					<input
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
				<label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900"
					>Phone number</label
				>
				<div class="relative mt-2.5">
					<div class="absolute inset-y-0 left-0 flex items-center">
						<label for="country" class="sr-only">Country</label>
						<select
							id="country"
							name="country"
							class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
						>
							<option>US</option>
							<option>CA</option>
							<option>EU</option>
						</select>
						<svg
							class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<input
						type="tel"
						name="phone-number"
						id="phone-number"
						autocomplete="tel"
						class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block text-sm font-semibold leading-6 text-gray-300"
					>Message</label
				>
				<div class="mt-2.5">
					<textarea
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
					<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
					<input type="checkbox" value="" class="sr-only peer" />
					<span class="sr-only">Agree to policies</span>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div
                            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        />
                    </label>
				</div>
				<label class="text-sm leading-6 text-gray-600" id="switch-1-label">
					By selecting this, you agree to our
					<a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
				</label>
			</div>
		</div>
		<div class="mt-10">
			<button
            on:click={() => dialog.showModal()}
				type="submit"
				class="block w-full rounded-md bg-amber-500  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
