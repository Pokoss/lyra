<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    // Redirect to business units if authenticated, otherwise show welcome/login
    if (Auth::check()) {
        return redirect('/business-units');
    }
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Business Unit Selection (after login)
Route::get('/business-units', function () {
    return Inertia::render('BusinessUnitSelection');
})->middleware(['auth', 'verified'])->name('business-units');

// ========================================
// LUBRICANTS BUSINESS UNIT ROUTES
// ========================================

Route::get('/dashboard', function () {
    // UI-only dashboard screen (Admin layout with sidebar)
    return Inertia::render('DashboardHomeScreen');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/inventory', function () {
    // UI-only Inventory screen
    return Inertia::render('Inventory');
})->middleware(['auth', 'verified'])->name('inventory');

// UI-only Inventory Overview
Route::get('/inventory/overview', function () {
    return Inertia::render('InventoryOverview');
})->middleware(['auth', 'verified'])->name('inventory.overview');

// UI-only product details page (example route; shows Product Details UI)
Route::get('/inventory/product/{sku?}', function ($sku = 'GXS10') {
    return Inertia::render('Products/ProductDetails', ['sku' => $sku]);
})->middleware(['auth', 'verified'])->name('inventory.product');

// UI-only Warehouses list
Route::get('/warehouses', function () {
    return Inertia::render('Warehouses');
})->middleware(['auth', 'verified'])->name('warehouses');

// UI-only Warehouse details page
Route::get('/warehouses/{warehouseId}', function ($warehouseId) {
    return Inertia::render('WarehouseDetails', ['warehouseId' => $warehouseId]);
})->middleware(['auth', 'verified'])->name('warehouses.details');

// UI-only Orders list (Monthly Summary)
Route::get('/orders', function () {
    return Inertia::render('Orders');
})->middleware(['auth', 'verified'])->name('orders');

// UI-only Monthly Orders (with month parameter)
Route::get('/orders/month/{month}', function ($month) {
    return Inertia::render('MonthlyOrders', ['month' => $month]);
})->middleware(['auth', 'verified'])->name('orders.monthly');

// UI-only Order details page
Route::get('/orders/{orderId}', function ($orderId) {
    return Inertia::render('OrderDetails', ['orderId' => $orderId]);
})->middleware(['auth', 'verified'])->name('orders.details');

// UI-only Replenishment Recommendations
Route::get('/replenishment', function () {
    return Inertia::render('ReplenishmentRecommendations');
})->middleware(['auth', 'verified'])->name('replenishment');

// UI-only Reports & Analytics
Route::get('/reports', function () {
    return Inertia::render('Reports');
})->middleware(['auth', 'verified'])->name('reports');

// UI-only Settings
Route::get('/settings', function () {
    return Inertia::render('Settings');
})->middleware(['auth', 'verified'])->name('settings');

// ========================================
// LPG BUSINESS UNIT ROUTES
// ========================================

// LPG Dashboard
Route::get('/lpg/dashboard', function () {
    return Inertia::render('lpg/LpgDashboard');
})->middleware(['auth', 'verified'])->name('lpg.dashboard');

// LPG Monthly Orders List
Route::get('/lpg/orders', function () {
    return Inertia::render('lpg/LpgOrders');
})->middleware(['auth', 'verified'])->name('lpg.orders');

// LPG Monthly Order Details (with deliveries)
Route::get('/lpg/orders/month/{month}', function ($month) {
    return Inertia::render('lpg/LpgMonthlyOrder', ['month' => $month]);
})->middleware(['auth', 'verified'])->name('lpg.orders.monthly');

// LPG Deliveries
Route::get('/lpg/deliveries', function () {
    return Inertia::render('lpg/LpgDashboard'); // Placeholder for now
})->middleware(['auth', 'verified'])->name('lpg.deliveries');

// LPG Record New Delivery
Route::get('/lpg/deliveries/record', function () {
    return Inertia::render('lpg/LpgDashboard'); // Placeholder for now
})->middleware(['auth', 'verified'])->name('lpg.deliveries.record');

// LPG Depots
Route::get('/lpg/depots', function () {
    return Inertia::render('lpg/LpgDashboard'); // Placeholder for now
})->middleware(['auth', 'verified'])->name('lpg.depots');

// LPG Reports
Route::get('/lpg/reports', function () {
    return Inertia::render('lpg/LpgDashboard'); // Placeholder for now
})->middleware(['auth', 'verified'])->name('lpg.reports');

// LPG Settings
Route::get('/lpg/settings', function () {
    return Inertia::render('lpg/LpgDashboard'); // Placeholder for now
})->middleware(['auth', 'verified'])->name('lpg.settings');

// ========================================
// FUELS BUSINESS UNIT ROUTES (Coming Soon)
// ========================================

// Fuels Dashboard (Placeholder)
Route::get('/fuels/dashboard', function () {
    return Inertia::render('BusinessUnitSelection'); // Redirect back for now
})->middleware(['auth', 'verified'])->name('fuels.dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
