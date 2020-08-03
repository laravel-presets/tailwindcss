<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
		<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Laravel</title>

				<!-- Fonts -->
				<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
				<link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" />

				<!-- Styles -->
				<link rel="stylesheet" href="{{ mix('build/app.css') }}" />
				<style>
						body {
								font-family: Nunito, Inter var, Inter, Segoe UI, -system-ui, Arial;
						}
				</style>
		</head>
		<body class="flex flex-col h-screen antialiased">
				@if (Route::has('login'))
					<header class="container flex justify-center mx-auto font-bold text-gray-500">
							<ul class="flex">
									@auth
										<li>
												<a class="flex px-4 py-4 hover:text-gray-900" href="#">{{ url("/home") }}</a>
										</li>
									@else
										<li>
												<a class="flex px-4 py-4 hover:text-gray-900" href="{{ route('login') }}">Login</a>
										</li>

										@if (Route::has('register'))
											<li>
													<a class="flex px-4 py-4 hover:text-gray-900" href="{{ route('register') }}">Register</a>
											</li>
										@endif
									@endauth
							</ul>
					</header>
				@endif

				<main role="main" class="flex flex-col items-center justify-center flex-grow">
						<h1 class="mb-10 text-6xl font-thin text-indigo-500">Laravel</h1>

						<ul class="flex flex-col flex-wrap items-center justify-center mb-1 font-bold tracking-widest text-gray-600 uppercase sm:flex-row">
								<li>
										<a class="mx-4" href="https://laravel.com/docs">Docs</a>
								</li>
								<li>
										<a class="mx-4" href="https://laracasts.com">Laracasts</a>
								</li>
								<li>
										<a class="mx-4" href="https://laravel-news.com">News</a>
								</li>
								<li>
										<a class="mx-4" href="https://blog.laravel.com">Blog</a>
								</li>
								<li>
										<a class="mx-4" href="https://nova.laravel.com">Nova</a>
								</li>
								<li>
										<a class="mx-4" href="https://forge.laravel.com">Forge</a>
								</li>
								<li>
										<a class="mx-4" href="https://vapor.laravel.com">Vapor</a>
								</li>
								<li>
										<a class="mx-4" href="https://github.com/laravel/laravel">GitHub</a>
								</li>
						</ul>
				</main>
		</body>
</html>
