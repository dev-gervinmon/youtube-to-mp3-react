import Search from '../components/Search';
import Card from '../components/Card';
import { useState } from 'react';

export default function Main() {
    const [downloadLink, setDownloadLink] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    function onSubmit(link) {
        var video = link;
        if (video.includes('youtu.be')) {
            video = video.replace('https://youtu.be/', "");
        }
        else video = video.replace('https://www.youtube.com/watch?v=', "");
        fetch('https://youtube-mp3-download1.p.rapidapi.com/dl?id=' + video, { 
            "method": 'GET',
            "headers": {
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
            }
            setShow(true);
            setDownloadLink(data.link);
            setSongTitle(data.title);
        })
        .catch((e) => {
            console.log(e)
        });
    }

    return (
        <>
            <div className="bg-bg_music bg-cover brightness-100 min-h-screen min-w-screen static">
                <h1 className= 'text-[80px] lg:text-[250px] font-bebasNeue font-bold tracking-wider text-gray-100 uppercase text-center'> Youtube to MP3 Downloader</h1>
                <h1 className= 'absolute -z-10 lg:inset-y3 md: inset-y-1 text-[80px] lg:text-[260px] font-bebasNeue font-bold tracking-wider text-black uppercase text-center'> Youtube to MP3 Downloader</h1>
                <Search onSubmit={onSubmit}/>

                {show ? 
                
                <div className='lg:mx-2 mx-3 flex justify-center'><Card title={songTitle} link={downloadLink}/></div>
                
                : null}
                {error ? <Card title='Something went wrong...' link='http://localhost:3000'/> : null}
            </div>
        </>
    )
}