import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1.5"
      className="w-full p-20 bg-[#CDE168] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[2vw] leading-[3.5vw] tracking-tight ">
        <span className="font-bold">Masjid Al-Dokla (Ahle-e-Hadees )</span>  is a prominent mosque located in <span className="font-bold "> Saudagar Mohalla Bhiwandi</span>, known for its stunning architectural features, such as its grand dome , Marbles  and tall minaret. Established in <span className="font-bold ">  1950s </span>, it serves as a central hub for the local Muslim community, offering Daily Prayers , Friday  and a variety of educational programs on Sunday After [Asr Namez 45min] . The masjid plays a vital role in the community, hosting social and cultural events, and providing support through numerous charity initiatives.
      </h1>

      <div className="grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-40 md:mb-90 mt-32 border-t-[1px] pt-[3vw]  border-[#a1b562]">
        <div className="md:col-span-4 reset-last font-medium text-2xl ">
          <p>Time Schedule For Salah :</p>
        </div>
        <div className="md:col-span-4 lg:col-span-4 reset-last">
          <div className="wysiwyg reset-last max-w-275">
            <table className="w-full text-left border-collapse border-black">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="py-2 px-4 border-b">Prayer</th>
                  <th className="py-2 px-4 border-b">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 hover:text-black font-bold hover:font-bold bg-zinc-800 text-white">
                  <td className="py-2 px-4 border-b">Fajr</td>
                  <td className="py-2 px-4 border-b">5:40 AM</td>
                </tr>
                <tr className="hover:bg-gray-100 hover:text-black font-bold hover:font-bold  bg-zinc-800 text-white">
                  <td className="py-2 px-4 border-b">Dhuhr</td>
                  <td className="py-2 px-4 border-b">1:15 PM</td>
                </tr>
                <tr className="hover:bg-gray-100 hover:text-black font-bold hover:font-bold bg-zinc-800 text-white">
                  <td className="py-2 px-4 border-b">Asr</td>
                  <td className="py-2 px-4 border-b">4:15 PM</td>
                </tr>
                <tr className="hover:bg-gray-100 hover:text-black font-bold hover:font-bold bg-zinc-800 text-white">
                  <td className="py-2 px-4 border-b">Maghrib</td>
                  <td className="py-2 px-4 border-b">range [ 7 - 7:20 pm ] </td>
                </tr>
                <tr className="hover:bg-gray-100 hover:text-black font-bold hover:font-bold bg-zinc-800 text-white">
                  <td className="py-2 px-4 border-b">Isha</td>
                  <td className="py-2 px-4 border-b">8:45 PM</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
       
      </div>

      
    </div>
  );
}

export default About;