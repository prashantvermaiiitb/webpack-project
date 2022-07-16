import '../styles/index.scss';
import Recipes from './Recipes';
// todo we will not be needing react because we are not using it.

const App = () => {
    return (
        <>
            <section className='hero'></section>
            <main>
                <section>
                    <h1>Oh Hai react</h1>
                </section>
            </main>
            <Recipes/>
        </>
    );
};

export default App;