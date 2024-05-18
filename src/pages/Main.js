import Search from '../components/Search';
import { useState } from 'react';

export default function Main() {
    const [error, setError] = useState(false);

    function onSubmit(link) {
        var video = link;
        if (video.includes('youtu.be')) {
            video = video.replace('https://youtu.be/', "");
        } else {
            video = video.replace('https://www.youtube.com/watch?v=', "");
        }
        fetch('https://youtube-mp3-download1.p.rapidapi.com/dl?id=' + video, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_HOST
            }
        })
        .then((response) => {
            if (!response.ok) throw new Error('Something went wrong...')
            else return response.json();
        })
        .then((data) => {
            if (data.status === 'fail' || data.msg === 'Invalid Video Id') {
                setError(true);
            } else {
                // Automatically open the download link
                window.open(data.link, '_blank');
            }
        })
        .catch((e) => {
            console.log(e);
            setError(true);
        });
    }

    return (
        <>
            <div className="bg-bg_music bg-cover brightness-100 min-h-screen min-w-screen static">
                <h1 className='text-[80px] lg:text-[250px] font-bebasNeue font-bold tracking-wider text-gray-100 uppercase text-center'>Youtube to MP3 Downloader</h1>
                <h1 className='absolute -z-10 lg:inset-y3 md:inset-y-1 text-[80px] lg:text-[260px] font-bebasNeue font-bold tracking-wider text-black uppercase text-center'>Youtube to MP3 Downloader</h1>
                <Search onSubmit={onSubmit} />

                {error && <div className='flex justify-center'><Card title='Something went wrong...' link='http://localhost:3000' /></div>}
            </div>
        </>
    );
}
