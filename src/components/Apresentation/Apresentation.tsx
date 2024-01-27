import './Apresentation.css';
import Image from 'next/image';

export default function Apresentation() {
  return (
    <>
      <div className="content">
        <div className='container'>
          <div className="textAp">
            <h1>Resonate with the <br /> visitorss problem</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ipsam voluptas vitae soluta</h3>
            <button className='getStart'>Get start</button>
          </div>
          <div className="imgAp">
            <div className="background"></div>
            <div className="overlay">
              <Image
                src="/assets/psicoPNG.png"
                alt="Logo"
                height={350}
                width={350}
              />
            </div>
          </div>
        </div>
        <div className="line">
          <div>
            <h3>Lorem ipsum </h3>
          </div>
          <div>
            <h3>|</h3>
          </div>
          <div>
            <h3>Lorem ipsum </h3>
          </div>
          <div>
            <h3>|</h3>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
          </div>
        </div>
      </div>
    </>
  )
}