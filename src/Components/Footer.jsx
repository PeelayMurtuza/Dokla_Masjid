

function Footer() {
    return (
      <div className="flex gap-5 w-full h-screen  p-20 font-Founders_Grotesk_X-Condensed">
        <div className="w-1/2 h-full flex flex-col justify-between ">
          <div className="heading ">
            <h1 className="text-[6vw] uppercase leading-none -mb-5 font-semibold">
              
            </h1>
            <h1 className="text-[6vw] uppercase leading-none -mb-5 font-semibold">
            
            </h1>
          </div>
          
        </div>
        <div className="w-1/2">
          <h1 className="text-[6vw] uppercase leading-none -mb-5 font-semibold">
            Presentations
          </h1>
          <div className="socialMedia font-['Neue_Montreal'] mt-20">
            {["Linkdin", "Instagram", "X", "Facebook"].map((item, index) => (
              <a key={index} className={"block text-xl font-light bg-red-400"}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;