import Hero from '../Hero/index';
import Products from '../Products/index';
import { pizzas, dessert} from '../Products/data';
import Footer from '../Footer/index';
import { GlobalStyle } from '../../globalStyles';

const Home = (props) => {

    return (
<div>
    <GlobalStyle/>
    <Hero {...props}/>
    <Products heading='Choose your favorite' data={pizzas} />
    <Products heading='Sweet Treats for You' data={dessert} />
    <Footer/>
</div>
    )
}

export default Home;