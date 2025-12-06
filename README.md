<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# Lyra — Laravel + Breeze (Inertia + React)

This repository was created by an automated setup to scaffold a Laravel project named `lyra` and install Laravel Breeze with the Inertia + React stack.

## What I installed ✅

- Laravel (v12)
- Laravel Breeze
- Inertia.js (server + client integration)
- React (client-side)
- Vite + TailwindCSS for asset building

The project is scaffolded at the repository root and includes a basic authentication UI provided by Breeze (register, login, password reset, profile, etc.).

---

## Quick start — run locally (Windows / XAMPP friendly)

1) Install PHP + Composer + Node (if not installed). On Windows you can use XAMPP for PHP and configure your environment PATH to include Composer and Node.

2) From the project root (c:\xampp\htdocs\lyra), install PHP dependencies (if you didn't allow automation):

```powershell
composer install
```

3) Copy the environment file and generate an app key:

```powershell
copy .env.example .env
php artisan key:generate
```

4) Database (SQLite is pre-configured in this scaffold). The project created an `database/database.sqlite` file and ran migrations automatically. If you'd like to use MySQL with XAMPP, update the `.env` DB_* settings and run:

```powershell
php artisan migrate
```

5) Install JS dependencies & build assets (the Breeze installer may have already done this):

```powershell
npm install
npm run dev       # development server
npm run build     # production build
```

6) Run the app locally:

Option A — Laravel's dev server (quick test):

```powershell
php artisan serve --host=127.0.0.1 --port=8000
# then open http://127.0.0.1:8000
```

Option B — Use XAMPP / Apache (recommended if you want virtual hosts):

- Point your Apache DocumentRoot or a VirtualHost to `C:\xampp\htdocs\lyra\public`.
- Ensure folder/file permissions are correct for `storage` and `bootstrap/cache`.

---

## Development notes

- Breeze was installed with the React + Inertia stack. You will find the client code under `resources/js` and server controllers and routes integrated in `routes` and `app/Http/Controllers`.
- Front-end assets are built into `public/build` via Vite.
- Authentication scaffolding (login/register/etc.) is available by visiting the app in your browser.

## Branding / UI changes

- The application UI has been updated to match the TotalEnergies brand (primary colors: red & blue) and now uses the provided logo on the auth pages.
- Logo path: `public/images/assets/logo_totalenergies.png` (the `ApplicationLogo` component now loads this image).
- Files edited for branding:
	- `resources/js/Layouts/GuestLayout.jsx` — updated background, layout and headings
	- `resources/js/Components/ApplicationLogo.jsx` — loads TotalEnergies logo image
	- `resources/js/Components/PrimaryButton.jsx` — updated primary button color to red
	- `resources/js/Pages/Auth/Login.jsx` and `resources/js/Pages/Auth/Register.jsx` — added headers/subtitles and link colour tweaks

	Pages and UI added:
	- `resources/js/Pages/DashboardHomeScreen.jsx` — admin-style dashboard UI (KPI cards, chart area, low-stock widget)
	- `resources/js/Pages/Inventory.jsx` — Inventory UI (top stats, chart, low-stock widget, action buttons)
	- `resources/js/Pages/Products/ProductDetails.jsx` — Product details UI (stock summary, sales analytics, in-transit, inventory aging, actions)

	Charting:
	- Installed Chart.js + react-chartjs-2 and added chart components:
	  - `resources/js/Components/InventoryChart.jsx` (Inventory / Dashboard)
	  - `resources/js/Components/SalesChart.jsx` (Sales analytics — Product Details)
	  - `resources/js/Components/AgingChart.jsx` (Inventory aging — Product Details)

	Routes added for UI-only preview:
	- `/inventory` → Inventory page
	- `/inventory/product/{sku}` → Product Details page (UI-only preview)
	- `/inventory/overview` → Inventory Overview UI (table + filters + pagination)

	UI helpers added:
	- `resources/js/Components/StatusBadge.jsx` — status badges (green/yellow/red)
	- `resources/js/Components/Pagination.jsx` — pagination control used on tables

If you'd like further polish (fonts, spacing, or a slightly different color palette), I can make additional tweaks.

---

If you want, I can also set up a local Apache VirtualHost sample config for XAMPP, or add Git templates and a minimal development README tailored to your workflow.

---

Happy coding! 🚀


- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
