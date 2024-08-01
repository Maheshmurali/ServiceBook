import { LottieAnimation,LottieAnimationCctv,LottieAnimationSecurity,LottieAnimationMaintance } from "../../Assets/Animation"
function Cards() {
  return (
    <div className="grid m-2 md:m-4 gap-2  my-4">
         <div className="grid md:grid-cols-2 min-h-[250px] md:min-h-[400px]  rounded-xl md:py-8 text-center align-middle"> 
          <div className="my-8 md:my-0">
              <p className="md:py-28 md:p-12 p-4 font-medium md:text-2xl">
               <span className="text-4xl text-blue-700">O</span>ur home automation solutions integrate advanced technology 
              into your daily life, enhancing comfort, security, and efficiency. Control lighting, climate, 
              entertainment, and security from your smartphone or voice assistants. Transform your home into a 
              smart home controls at your fingertips.</p>
              <button  className="md:ml-6  bg-blue-600 rounded-md p-2 text-white z-40">Get Details</button>
          </div>
          <div className="m-4 md:p-12 -z-10">
               <LottieAnimation />
          </div>
         
         </div>
         <div id="cctv" className="md:flex md:flex-row-reverse  min-h-[250px] md:min-h-[300px] rounded-xl md:gap-48"> 
            <div className="md:flex-1 md:w-64 basis-1/2 md:pl-24 ml-2">
            <p className="md:py-28 md:p-12 p-4 font-medium md:text-2xl">
               <span className="text-4xl text-blue-700 ml-2">E</span>nhance your security 
               with our cutting-edge CCTV systems. We offers advanced surveillance 
               solutions with high-definition cameras, real-time monitoring, and remote access. 
               Safeguard your home or business with our reliable and easy-to-use security technology.
               Experience peace of mind with our professional installation and support services.</p>
               <button className="md:ml-42 sm:ml-28 ml-32 bg-blue-600 rounded-md p-2 text-white">Get Details</button>
            </div>
            <div className="md:pl-24">
                <span className="flex justify-center md:flex-1 md:w-64">
                  <LottieAnimationCctv />
                </span>
            </div>
        </div>
        <div id="powersolution" className="min-h-[250px] md:min-h-[400px] rounded-xl md:flex md:flex-1 "> 
              <div className="basis-1/2 md:pl-12 ml-2"> 
                  <p className="md:py-28 md:p-12 p-4 font-medium md:text-2xl">
                  <span className="text-4xl text-blue-700 ml-2">E</span>mpower your home or
                   business with Us advanced power solutions. 
                  We offer reliable and efficient energy systems, including solar panels, battery storage, 
                  and backup generators. Reduce your energy costs and carbon footprint with our cutting-edge 
                  technology and expert installation. Experience uninterrupted power and sustainable energy 
                  solutions with Us. Power your future today.
                  </p>
                  <button className="md:ml-60 ml-28 bg-blue-600 rounded-md p-2 text-white">Get Details</button>
              </div>
              <div className="basis-1/2 md:pl-48 pl-8">
                  <span className=""><LottieAnimationSecurity /></span>
              </div>
        </div>
        <div className="min-h-[250px] md:min-h-[400px] rounded-xl md:flex md:flex-1 md:flex-row-reverse"> 
            <div className="basis-1/2 md:pl-12 ml-2">
              <p className="md:py-28 md:p-12 p-4 font-medium md:text-2xl basis-1/2">
              <span className="text-4xl text-blue-700 ml-2">E</span>nsure the reliability and efficiency of your inverter, generator, CCTV, and 
              solar systems with our comprehensive annual maintenance service.  
              we provide thorough inspections, timely repairs, and expert support to keep your systems 
              running smoothly. Our trained technicians will optimize performance, extend lifespan, 
              and enhance safety, giving you peace of mind year-round. Trust us to safeguard your investments
               and ensure uninterrupted service.</p>
               <button className="md:ml-42 sm:ml-28 ml-32 bg-blue-600 rounded-md p-2 text-white">Get Details</button>
            </div>
            <div className="basis-1/2 md:pl-48 pl-4 ml-8">
              <span className=""><LottieAnimationMaintance /></span>
            </div>
        </div>
    </div>
  )
}

export default Cards
