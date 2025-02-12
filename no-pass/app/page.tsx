import { AddCard } from "@/components/add-card";
import { AddPassword } from "@/components/add-password";
import { YourCards } from "@/components/your-cards";
import { YourPasswords } from "@/components/your-passwords";

export default function Home() {
  return (
    <main className="container mx-auto py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Add a Card</h1>
          <AddCard />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Add a Password</h1>
          <AddPassword />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Your Cards</h1>
        <YourCards />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Your Passwords</h1>
        <YourPasswords />
      </div>
    </main>
  );
}
