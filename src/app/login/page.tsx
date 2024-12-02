import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/Button"

export default function LoginPage() {
    return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
        <h1>Youjine</h1>
        <Button asChild>
            <LoginLink>Se Connecter</LoginLink>
        </Button>
    </main>
    )
}