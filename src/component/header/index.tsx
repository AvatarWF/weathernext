import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full bg-white dark:bg-gray-700 p-5 gap-y-3 sm:items-center sm:flex-row sm:justify-between sm:gap-x-20">
            <Link href="/" className="text-xl w-fit place-self-center">Teste React</Link>
            <input type="text" placeholder="Pesquisar cidade" className="bg-gray-100 dark:bg-gray-500 p-2 flex-1 rounded-md" onKeyUp={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim().length > 0) {
                    router.push(`/${e.currentTarget.value}`)
                    e.currentTarget.value = ""
                }
            }} />
            <div className="flex flex-row gap-5 justify-center">
                
            </div>
        </div>
    )
}