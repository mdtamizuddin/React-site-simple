import HeroImg from '../images/header-img.png'
import Button from '../sub-comp/Button';
function Home() {

  function btnhandler(e) {
    console.log('hello i am from home ');
   
  }

  return (
    <>
      <header >
        <div className='header-div'>
          <h2 >WE CREATE IDEAS</h2>
          <h1>HOW WE CAN HELP YOUR<br />
            <span id='another-one'>BUSINESS</span>
          </h1>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque
            vitae ante at elit fringilla ac at purus.
          </p>
          <Button onclick={btnhandler} width='200px' color='white' btnBg='#f30ca6' id='hero-btn' to='#' btnText='Register Now'/>
        </div>
        <div className='header-div header-div-2 '>
          <img id='image-hel' src={HeroImg} alt='img' />
        </div>
      </header>
      <div></div>
    </>
  )
}

export default Home