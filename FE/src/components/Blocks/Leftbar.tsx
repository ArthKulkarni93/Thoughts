type props = {
    classname?: string,

}

export default function Leftbar({classname}: props) {
    const base = `h-[5vh] w-[90vw] mx-auto my-[88vh] flex items-center justify-center bg-black border rounded-3xl `;

    return <div className={`${base} ${classname}`}>
        <div className="flex justify-around w-full text-white">
            <div>home</div>
            <div>notifications</div>
            <div>profile</div>
        </div>
        
    </div>
}