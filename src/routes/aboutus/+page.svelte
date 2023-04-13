<script>
	import '../../app.css';
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
</script>

<Navbar />

<div class="pt-12">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<img
				class="mx-auto h-12 w-auto"
				src="https://img.icons8.com/color/96/000000/controller.png"
				alt="Your Company"
			/>
			<p class=" text-center mt-2 text-3xl font-mono tracking-tight text-gray-300 sm:text-4xl">
				About <a class="text-amber-500">Us</a>
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600 pb-8">
				My website is a useful tool for every one who loves videogames. The web-application
				provides real time information about videogame-pricing. The user can get an average price for their
				game. Also interesting for people who wants to sell their games. With zadus-gameprice-engine
				you will have the actual market-value of your game.
			</p>
		</div>
	</div>
</div>
<div class="flex min-h-full items-center justify-center py-2 px-4 sm:px-6 lg:px-8 bg-gray-900">
	<div class="mx-auto max-w-6xl ">
        <h2 class="flex text-lg font-bold items-center justify-center text-white sm:text-4xl font-mono">
            Thats how it works!
        </h2>
		<dl class="grid max-w-xl gap-y-10 lg:max-w-none lg:gap-y-16 mt-16 ">
			<div class="mx-auto max-w-2xl lg:text-center">
				<dt class="text-base font-semibold leading-7 text-gray-900 ">
					<div
						style="  display: flex;
					align-items: center;
					justify-content: center;"
					>
						<div class="items-center justify-center flex h-10 w-10 rounded-lg bg-amber-600">
							<svg
								class="h-6 w-6 text-white"
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</dt>
				<dd class="mt-2 text-base leading-7 text-gray-600">
					<h2 class="text-lg leading-8 text-gray-300 font-mono">
						Enter the title of your game and then enter name of the platform and Press GO!
					</h2>
				</dd>
			</div>
			<div class="mx-auto max-w-2xl lg:text-center">
				<dt class="text-base font-semibold leading-7 text-gray-900">
					<div
						style="  display: flex;
					align-items: center;
					justify-content: center;"
					>
						<div class="items-center justify-center flex h-10 w-10 rounded-lg bg-amber-600">
							<svg
								class="h-6 w-6 text-white"
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</dt>
				<dd class="mt-2 text-base leading-7 text-gray-600">
					<h2 class="text-lg leading-8 text-gray-300 font-mono">
						The Engine will process your request and search in online marketplaces for similar sold
						games
					</h2>
				</dd>
			</div>
			<div class="mx-auto max-w-2xl lg:text-center">
				<dt class="text-base font-semibold leading-7 text-gray-900 ">
					<div
						style="  display: flex;
					align-items: center;
					justify-content: center;"
					>
						<div class="items-center justify-center flex h-10 w-10 rounded-lg bg-amber-600">
							<svg
								class="h-6 w-6 text-white"
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</div>
				</dt>
				<dd class="mt-2 text-base leading-7 text-gray-600">
					<h2 class="text-lg leading-8 text-gray-300 font-mono">
						Ater the engine is done processing, you will see a list of sold games and an average
						price
					</h2>
				</dd>
			</div>
		</dl>
	</div>
</div>
<Footer />
