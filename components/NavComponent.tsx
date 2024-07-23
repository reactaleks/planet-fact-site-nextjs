import planetData from "../public/planetData/planetData.json";

import Link from "next/link";

export default function NavComponent() {
        const navItems = Object.keys(planetData).map(key => {
            return <Link key={key} href={`/${key}`} className="uppercase">{key}</Link>
        })

        return (
            <>
                {navItems}
            </>
        )
}

