import Link from "next/link";

export const navData = [
    {
        name: "갤러리",
        path: "/gallery"
    },
    {
        name: "마이너갤",
        path: "/minergall"
    },
    {
        name: "미니갤",
        path: "/"
    }
]

export const navData1 = [
    {
        name: "갤로그",
        path: "/"
    },
    {
        name: "디시뉴스",
        path: "/"
    },
    {
        name: "NFT",
        path: "/"
    },
    {
        name: "디시픽",
        path: "/"
    }
]


function Navbar() {
    return (
        <nav>
            <div className={`flex justify-between px-[30px] py-[10px] bg-[#3b4890]`}>
                <div className={`flex text-white items-center gap-[15px] font-bold px-[238px]`}>
                    {navData.map((Data, Index) => {
                        return (
                            <Link href={Data.path} key={Index} className={`hover:underline`}>{Data.name}</Link>
                        )
                    })}
                    <div className={`text-[#626da6]`}>|</div>
                    <div className={`items-center flex gap-[15px]`}>
                        {navData1.map((Data, Index) => {
                            return (
                                <Link href={Data.path} className={`hover:underline`}>{Data.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <Link href={"/"} className={`text-white text-lg`}>로그인</Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;