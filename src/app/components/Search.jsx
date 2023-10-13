function Search() {
    return (
        <div className={`container justify-center flex mt-[40px] mb-[20px]`}>
            <div className={`justify-center items-center py-[10px] bg-[#3b4890] w-[364px]`}>
                <div className={`px-[5px] w-[315px] h-[40px]`}>
                    <input type="text" placeholder={`갤러리 & 통합검색`} className={`px-[15px]`}/>
                </div>
            </div>
        </div>
    );
}

export default Search;