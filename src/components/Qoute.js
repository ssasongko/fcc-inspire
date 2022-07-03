import React, { useEffect, useState } from "react"
import { BsTwitter } from "react-icons/bs";
const axios = require("axios");

const Qoute = () => {
    const [qoute, setQoute] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetchQoute();
    }, []);

    const fetchQoute = () => {
        (async () => {
            try{
                const options = {
                    method: 'GET',
                    url: 'https://famous-quotes4.p.rapidapi.com/random',
                    params: {category: 'all', count: '1'},
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_QOUTES_KEY,
                        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_QOUTES_HOST
                    }
                };

                const res = await axios.request(options);

                setQoute(res.data[0].text)
                setAuthor(res.data[0].author)
                return
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoaded(true)
            }

        })();
    }

    return(
        <div className='flex justify-center items-center h-screen'>
            <div id="quote-box" className='w-6/12 bg-white border p-5'>
                <div className='flex flex-col mb-3 p-2'>
                    <h2 id="text" className="text-2xl font-medium text-center
                    ">"{qoute}"</h2>
                    <p id="author" className="text-right mt-2">- {author}</p>
                </div>
                <div className='flex justify-between mt-3 p-2'>
                    <a href="https://twitter.com/intent/tweet" id="tweet-quote" className="ml-1 twitter-button p-2 my-background text-white text-sm"><BsTwitter style={{height:'18px'}}/></a>
                    <button id="new-quote" className='my-background p-2 text-white text-sm' onClick={fetchQoute}>New Qoute</button>
                </div>
            </div>
        </div>
    )
}

export default Qoute;