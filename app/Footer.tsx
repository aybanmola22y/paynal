'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 text-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} TheAivanneEffect. All rights reserved.
      </p>
    </footer>
  );
}
