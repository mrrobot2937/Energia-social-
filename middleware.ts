import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const authHeader = req.headers.get("authorization") || "";
    const [scheme, encoded] = authHeader.split(" ");
    const validUser = "dian";
    const validPass = "901861952-9"; // NIT

    if (scheme === "Basic" && encoded) {
        try {
            const decoded = atob(encoded);
            const [user, pass] = decoded.split(":");
            if (user === validUser && pass === validPass) {
                return NextResponse.next();
            }
        } catch {
            // fallthrough to 401
        }
    }

    return new NextResponse("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Transparencia", charset="UTF-8"' },
    });
}

export const config = {
    matcher: ["/transparencia/:path*"],
};


