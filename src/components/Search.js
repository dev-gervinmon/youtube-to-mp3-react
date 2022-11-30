import { useState } from 'react';

export default function Search(props) {

    const [link, setLink] = useState('');

    return (
        <>
            <form id='official' onSubmit={(e) => {
                e.preventDefault();
                props.onSubmit(link);
            }}>
                <div className="lg:flex flex-1 justify-center p-3 items-center">
                    <div className="md:px-3">
                        <label className="text-[45px] md:text-yellow-900 text-yellow-100 font-bebasNeue" htmlFor="link">
                            Link
                        </label>
                    </div>
                    <div>
                        <input autoComplete='off' className="w-96 bg-yellow-900 border-2 border-yellow-400 rounded py-1.5 mb-1.5 px-1
                         text-yellow-100 focus:outline-none focus:bg-yellow-800 focus:border-yellow-300"
                        id="link" type="text" placeholder="https://youtube.com/link" value={link}
                        onChange={(e) => {
                            setLink(e.target.value)
                        }}/>
                        <button form='official' className="md:mx-2 w-96 lg:w-20 shadow bg-yellow-900 hover:bg-yellow-800 focus:shadow-outline focus:outline-none text-yellow-100 font-bold py-2 px-1 rounded mb-1">Convert</button>
                    </div>
                </div>
            </form>
        </>
    )
}