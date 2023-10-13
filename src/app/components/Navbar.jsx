import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div className={`flex justify-between px-[30px] py-[10px] bg-[#3b4890]`}>
                <div className={`flex text-white items-center gap-[15px] font-bold px-[238px]`}>
                    <Link href={"/"} className={`hover:underline`}>
                        갤러리
                    </Link>
                    <Link href={"/"} className={`hover:underline`}>
                        마이너갤
                    </Link>
                    <Link href={"/"} className={`hover:underline`}>
                        미니갤
                    </Link>
                    <div className={`text-[#626da6]`}>|</div>
                    <div className={`items-center flex gap-[15px]`}>
                        <Link href={"/"} className={`hover:underline`}>
                            갤로그
                        </Link>
                        <Link href={"/"} className={`hover:underline`}>
                            디시뉴스
                        </Link>
                        <Link href={"/"} className={`hover:underline`}>
                            NFT
                        </Link>
                        <Link href={"/"} className={`hover:underline`}>
                            디시픽
                        </Link>
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