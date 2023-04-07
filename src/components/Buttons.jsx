import React from 'react'
import {createClient} from "@supabase/supabase-js";
// import Btn from './Btn'

const data = [
  {
    title: 'front'
  },
  {
    title: 'back'
  },
  {
    title: 'right'
  },
  {
    title: 'left'
  },
  {
    title: 'go down'
  },
  {
    title: 'go up'
  },
  {
    title: 'get moisture'
  },
  {
    title: 'give water'
  },
  {
    title: 'give fertilizer'
  },
  {
    title: 'give weed killer'
  }
]

const Buttons = () => {
  const url = "https://kdudsmiowdskjrevrqxb.supabase.co";
  const key = process.env.NEXT_PUBLIC_DB_KEY;
  const client = createClient(url, key);

  // function name will be changed based on action
  const handleAlert = (title) => {
    alert(title)
  }
  const  uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  const forwardCommandToRobot = async (command) => {
    let timestamp = Date.now();

    const {data, err} = await client.from("commands")
        .insert([{id: uuidv4() , command: command}]);
    console.log(err);
    console.log(data);
  }

  return (
    <div className='shadow-lg rounded px-5 py-7 mt-12'>
      <h2 className='text-lg'>
        Control Panel
      </h2>
      <div className='flex items-center gap-2 w-full mt-5'>
        {
          data.map((btn, idx) => (
            <button type='button' key={idx} onClick={() => forwardCommandToRobot(btn.title)}
                    className="bg-indigo-600 py-1 px-4 rounded-md text-white hover:bg-indigo-500 duration-300 capitalize">
              {btn.title}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Buttons
