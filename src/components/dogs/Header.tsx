import Logo from "../ui/Logo";
import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Logo className="w-12 h-12 mr-4" />
          {/* TODO application names */}
          <h1 className="text-2xl font-semibold">PawsomeMatch</h1>
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}