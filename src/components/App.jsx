import '../styles/index.scss';
import Recipes from './Recipes';
// todo we will not be needing react because we are not using it.

import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg';
import gifFile from '../images/neumodoro.gif';

const App = () => {
    return (
        <>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>Oh Hai react, this is cool</h1>
                </section>
                <img src={sword} alt="sword" width={50} />
                <img src={swordSvg} alt="sword" width={60} />
                <img src={gifFile} alt="sword" width={70} />
            </main>
            <Recipes />
        </>
    );
};

export default App;