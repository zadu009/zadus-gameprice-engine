<script>
	import '../app.css';
	import { userProfile } from './stores.js';
	let expanded = false;
	let userexpanded = false;
	let userProfileValue;

	function logout() {
		$userProfile = { isLoggedIn: false };
	}

	userProfile.subscribe((value) => {
		userProfileValue = value;
	});
</script>

<nav class="bg-gray-900">
	<div class="mx-auto lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-expanded={expanded}
					on:click={() => (expanded = !expanded)}
				>
					<span class="sr-only">Open main menu</span>
					<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
					<svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
					<svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img
						class="hidden h-8 w-auto lg:block"
						src="https://img.icons8.com/color/96/000000/controller.png"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a
							href="/"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium font-mono"
							>Home</a
						>

						<a
							href="engine"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium font-mono"
							>Game-Price-Engine</a
						>
						<a
							href="aboutus"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium font-mono"
							>About us</a
						>

						<a
							href="contact"
							class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium font-mono"
							>Contact</a
						>
						{#if userProfileValue.isLoggedIn === true}
							<a
								href="/dashboard"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium font-mono"
								>Dashboard</a
							>

							<a
								href="/mygames"
								class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium font-mono"
								>My Games</a
							>
						{/if}
					</div>
				</div>
			</div>
			<div class="relative ml-3">
				<div>
					<button
						type="button"
						class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
						on:click={() => (userexpanded = !userexpanded)}
					>
						<span class="sr-only">Open user menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="white"
							class="w-8 h-8"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		{#if userexpanded}
			{#if userProfileValue.isLoggedIn === true}
				<div
					class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 border-2 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
				>
					<a
						href="/dashboard"
						class="block px-4 py-2 text-sm text-gray-400"
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-2">Dashboard</a
					>
					<a
						href="/mygames"
						class="block px-4 py-2 text-sm text-gray-400"
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-0">My Games</a
					>
					<a
						href="/signin"
						on:click={logout}
						class="block px-4 py-2 text-sm text-gray-400"
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-2">Sign out</a
					>
				</div>
			{/if}
			{#if userProfileValue.isLoggedIn === false}
				<div
					class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 border-2 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
				>
					<a
						href="/signin"
						class="block px-4 py-2 text-sm text-gray-400"
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-2">Sign in</a
					>
				</div>
			{/if}
		{/if}
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if expanded}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pt-2 pb-3">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				<a
					href="/"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-mono"
					>Home</a
				>

				<a
					href="engine"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-mono"
					>Game-Price-Engine</a
				>

				<a
					href="aboutus"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-mono"
					>About us</a
				>

				<a
					href="contact"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-mono"
					>Contact</a
				>
				{#if userProfileValue.isLoggedIn === true}
					<a
						href="/dashboard"
						class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-mono"
						>Dashboard</a
					>

					<a
						href="/mygames"
						class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-mono"
						>My Games</a
					>
				{/if}
			</div>
		</div>
	{/if}
</nav>
