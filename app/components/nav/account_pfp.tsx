import Link from "next/link";
import Image from "next/image";

import Profile from "../../../assets/pfp.png"

const AccountPFP = () => {
    return (
        <Link href="/account" className="flex items-center h-full">
            <Image src={Profile} alt="Profile" width={32} height={32} className="border-solid border-2 border-amber-700 corner rounded-full h-3/4 w-auto"/>
        </Link>
    )
}

export default AccountPFP;