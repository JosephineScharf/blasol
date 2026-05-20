import personalityText from '../assets/personality/personalityname.png'; 
import personalityback from '../assets/personality/backdrop.png';
import personalitychameleon from '../assets/personality/chameleon.png'; 
import share from '../assets/personality/share.png';
import profilebtn from '../assets/personality/profilebtn.png';
import attributes from '../assets/personality/attributes.png';

export default function Personality() {
    return (
        <main className=" flex flex-col justify-center items-center">
            <section className="mx-auto w-full max-w-[470px] py-10 text-center shadow-[0_14px_34px_rgba(47,65,149,0.12)]">
                   <h1
                    style={{ fontFamily: '"Bowlby One", sans-serif' }}
                    className=" text-3xl font-black uppercase tracking-[0.08em] text-[#2F4195]">
                    Your music taste
                   </h1>
                <section className="w-11/12 max-w-[470px] relative mt-6 grid justify-center">
                  <img
                    src={personalityText}
                    alt="Personality Hero"
                    className="flex flex-col justify-center max-w-[280px] object-contain "
                  />
                </section>

                <section className="flex flex-col w-11/12 max-w-[470px] relative mt-8 grid justify-center">
                      <img
                        src={personalityback}
                        alt="Personality Background"
                        className="w-full h-auto object-cover z-0"
                      />
                      <img
                        src={personalitychameleon}
                        alt="Chameleon"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] object-contain z-10"
                      />  
                </section>

                    <p className="text-sm text-[#4c62b8]">
                       You drift between euphoric festival highs and reflective late-night feelings. Fans of Saveus, Benjamin Hav, and Lars Lilholt Band often score high here.
                    </p>

                    <h1
                      style={{ fontFamily: '"Bowlby One", sans-serif' }}
                      className="mt-8 text-3xl font-black uppercase tracking-[0.08em] text-[#2F4195]">
                      Atributes
                    </h1>

                <section className=" relative mt-6 grid justify-center">
                   <img
                     src={attributes}
                     alt="Attributes"
                     className="w-full h-auto object-cover object-cover z-0"
                   />
                   
                  <div className="flex justify-center gap-6 px-2 sm:px-4">
                    <div className="relative flex items-center justify-center">
                      <span
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15px] font-semibold uppercase text-white"
                          style={{ fontFamily: '"Poppins", sans-serif' }}>
                          share
                      </span>
                    <img
                        src={share}
                        alt="Share Button"
                        className="w-[150px] h-[48px] object-contain cursor-pointer"
                    />
                    </div>
                        <div className="relative flex items-center justify-center">
                          <span
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15px] font-semibold uppercase text-white"
                            style={{ fontFamily: '"Poppins", sans-serif' }}>
                             profile overview
                          </span>
                          <img
                            src={profilebtn}
                            alt="Profile Button"
                             className="w-[150px] h-[48px] object-contain cursor-pointer"
                          />
                        </div>
                    </div>
                </section>



            </section>
        </main>
    )
}

