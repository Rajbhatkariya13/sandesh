export const Article = (props) => {
    
    return (
        <>
        <div className="border my-5 rounded-2xl p-8 shadow-md bg-white">
            <div className="border-b py-2 text-2xl font-semibold">
                {props.title}
            </div>
            <div className="py-4 text-lg">
                {props.articleDescription}
            </div>
            <div className="flex items-center mt-4">
                <div className="flex align-bottom">
                <button className="border-2 rounded-xl hover:bg-blue-300 active:bg-blue-400 shadow-sm p-2">
                <img src='/icons/like.png' className="w-8 h-8 inline-block" alt='like-icon' /> <span className="mt-4 px-2 font-semibold">{props.likes}</span>
                </button>
                </div>
                
                <div className="ml-4">
                    posted by {props.userId}, &nbsp;
                </div>
                <div>
                    on {props.creationDate}
                </div>
            </div>
            
        </div>
        </>
    )
}