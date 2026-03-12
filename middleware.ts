import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Mengecek status dari file .env
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

    // Mendapatkan path URL saat ini
    const pathname = request.nextUrl.pathname;

    // Jika sedang maintenance dan user BUKAN berada di halaman /maintenance
    if (isMaintenanceMode && pathname !== '/maintenance') {
        // Arahkan paksa ke /maintenance
        const url = request.nextUrl.clone();
        url.pathname = '/maintenance';
        return NextResponse.redirect(url);
    }

    // Sebaliknya, jika SUDAH TIDAK maintenance, tapi user iseng mengetik /maintenance di URL
    if (!isMaintenanceMode && pathname === '/maintenance') {
        // Kembalikan ke halaman utama (Home)
        const url = request.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    // Jika tidak ada kondisi di atas yang terpenuhi, lanjutkan seperti biasa
    return NextResponse.next();
}

// Konfigurasi ini memastikan middleware tidak memblokir aset statis (gambar, css, dll)
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets|images).*)',
    ],
}