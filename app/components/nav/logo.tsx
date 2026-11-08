import React from "react"
import Link from "next/link"
import Image from "next/image"

import Logo from "../../assets/logo.png"

// export default class LogoLink extends React.Component<React.HTMLAttributes<HTMLDivElement>, {}> {
//     render() {
//         return (<Link href="/" className="flex items-center">
//             <Image src={Logo} alt="Logo" width={32} height={32} unoptimized className="pixel size-8 shrink max-w-sm" loading="eager" />
//             <h1 className="text-xl font-sans font-medium text-cyan-500">Gallop</h1>
//         </Link>)
//     }
// }
const LogoLink = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" width={32} height={32} unoptimized className="pixel size-8 shrink max-w-sm" loading="eager" />
            <h1 className="text-xl font-sans font-medium text-cyan-500">Gallop</h1>
        </Link>
    )
}

export default LogoLink