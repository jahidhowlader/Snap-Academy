import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        < >
            <div className='mx-0'>
                <nav className=' bg-primary-color '>
                    <Navbar />
                </nav>

                <main className='mx-auto'>
                    <Outlet />
                </main>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;