"use client";

import { useEffect, useState } from "react";

export default function PasswordGate({ url, title }: { url: string; title: string }) {
  const [input, setInput] = useState("");
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // recuerda autorización por sesión
    const ok = sessionStorage.getItem("transparency_ok");
    if (ok === "1") setAllowed(true);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "901861952-9") {
      setAllowed(true);
      setError("");
      sessionStorage.setItem("transparency_ok", "1");
    } else {
      setError("Contraseña incorrecta");
    }
  };

  if (!allowed) {
    return (
      <form onSubmit={submit} className="mt-4 max-w-md rounded-xl border border-black/10 bg-white p-4 grid gap-3">
        <label className="text-sm font-medium text-gray-900">Ingrese la contraseña para ver el documento</label>
        <input
          className="border border-black/20 rounded px-3 py-2 text-gray-900"
          placeholder="Contraseña"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="password"
          required
        />
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button type="submit" className="inline-flex items-center justify-center rounded bg-primary text-white px-4 py-2 text-sm font-medium">
          Ver documento
        </button>
      </form>
    );
  }

  return url ? (
    <div className="mt-4 rounded-xl border border-black/5 overflow-hidden">
      <iframe src={url} className="w-full" style={{ height: 800 }} title={title} />
    </div>
  ) : (
    <div className="mt-4 rounded-xl border border-dashed border-black/10 bg-muted p-6 text-sm text-gray-700">
      Aún no se ha cargado la URL del documento.
    </div>
  );
}


